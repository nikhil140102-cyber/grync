import { google } from "googleapis";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = process.env.RESEND_API_KEY
	? new Resend(process.env.RESEND_API_KEY)
	: null;

export async function POST(request) {
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid request body." }, { status: 400 });
	}

	const name = (body.name || "").trim();
	const email = (body.email || "").trim();
	const company = (body.company || "").trim();
	const designation = (body.designation || "").trim();
	const systems = (body.systems || "").trim();

	// server-side validation — never trust the client alone
	if (!name || !email || !company || !designation) {
		return Response.json(
			{ error: "Please fill in all required fields." },
			{ status: 400 }
		);
	}
	if (!EMAIL_RE.test(email)) {
		return Response.json(
			{ error: "Please provide a valid email address." },
			{ status: 400 }
		);
	}

	// ---- 1. Append the lead to Google Sheets (the source of truth) ----
	try {
		const auth = new google.auth.JWT({
			email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});
		const sheets = google.sheets({ version: "v4", auth });

		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "Sheet1!A:F",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [
					[new Date().toISOString(), name, email, company, designation, systems],
				],
			},
		});
	} catch (err) {
		console.error("book-demo: Google Sheets append failed:", err);
		return Response.json(
			{ error: "Something went wrong saving your request. Please try again." },
			{ status: 500 }
		);
	}

	// ---- 2. Notify the team by email (best-effort — the lead is already
	//         safely recorded above even if this part fails) ----
	if (resend && process.env.NOTIFY_TO_EMAIL && process.env.NOTIFY_FROM_EMAIL) {
		try {
			await resend.emails.send({
				from: process.env.NOTIFY_FROM_EMAIL,
				to: process.env.NOTIFY_TO_EMAIL,
				subject: `New demo request — ${company}`,
				html: `
					<h2>New "Book a demo" request</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Company:</strong> ${company}</p>
					<p><strong>Designation:</strong> ${designation}</p>
					<p><strong>Systems mentioned:</strong> ${systems || "\u2014"}</p>
				`,
			});
		} catch (err) {
			// Don't fail the whole request over this — the lead is already
			// saved in the sheet, so the person's submission still succeeds.
			console.error("book-demo: notification email failed:", err);
		}
	} else {
		console.warn(
			"book-demo: RESEND_API_KEY / NOTIFY_TO_EMAIL / NOTIFY_FROM_EMAIL not set — skipping email notification."
		);
	}

	return Response.json({ success: true });
}