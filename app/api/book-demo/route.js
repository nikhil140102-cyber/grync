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

	// ---- 1. Append the lead via the Google Apps Script Web App ----
	try {
		const gasRes = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				secret: process.env.APPS_SCRIPT_SECRET,
				name,
				email,
				company,
				designation,
				systems,
			}),
			// Apps Script's /exec endpoint issues a redirect before returning
			// the actual response — fetch follows redirects by default, so no
			// special handling is needed here, but "manual" would break it.
		});

		const gasData = await gasRes.json().catch(() => ({}));

		if (!gasRes.ok || gasData.error) {
			throw new Error(gasData.error || `Apps Script returned ${gasRes.status}`);
		}
	} catch (err) {
		console.error("book-demo: Apps Script append failed:", err);
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
			console.error("book-demo: notification email failed:", err);
		}
	} else {
		console.warn(
			"book-demo: RESEND_API_KEY / NOTIFY_TO_EMAIL / NOTIFY_FROM_EMAIL not set — skipping email notification."
		);
	}

	return Response.json({ success: true });
}

/* ---- GET: password-gated read for the admin table page ----
   Reads back through the same Apps Script deployment rather than the
   Sheets API directly, so there's still only one credential (the shared
   secret) instead of mixing this approach with service-account auth. */
export async function GET(request) {
	const password = request.headers.get("x-admin-password");

	if (!process.env.ADMIN_PASSWORD) {
		console.error("book-demo GET: ADMIN_PASSWORD is not set on the server.");
		return Response.json(
			{ error: "Admin access is not configured." },
			{ status: 500 }
		);
	}
	if (!password || password !== process.env.ADMIN_PASSWORD) {
		return Response.json({ error: "Incorrect password." }, { status: 401 });
	}

	try {
		const url = `${process.env.GOOGLE_APPS_SCRIPT_URL}?secret=${encodeURIComponent(
			process.env.APPS_SCRIPT_SECRET
		)}`;
		const gasRes = await fetch(url, { method: "GET" });
		const gasData = await gasRes.json().catch(() => ({}));

		if (!gasRes.ok || gasData.error) {
			throw new Error(gasData.error || `Apps Script returned ${gasRes.status}`);
		}

		return Response.json({ submissions: gasData.submissions || [] });
	} catch (err) {
		console.error("book-demo GET: Apps Script read failed:", err);
		return Response.json(
			{ error: "Something went wrong loading submissions." },
			{ status: 500 }
		);
	}
}