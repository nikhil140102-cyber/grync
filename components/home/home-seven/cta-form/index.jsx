"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertCircle } from "lucide-react";
import styles from "./CtaForm.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
	name: "",
	email: "",
	company: "",
	designation: "",
	systems: "",
};

const EMAILJS_SERVICE_ID = "service_rhqho01";
const EMAILJS_TEMPLATE_ID = "template_y5emzax";
const EMAILJS_PUBLIC_KEY = "i_8_egfJd7WVCtOTJ";

const CtaForm = () => {
	const rootRef = useRef(null);

	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle"); // idle | submitting | success | error
	const [serverError, setServerError] = useState("");

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top 80%",
					once: true,
				},
			});

			tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.5 })
				.from(
					`.${styles.heading}`,
					{ y: 28, opacity: 0, duration: 0.6 },
					"-=0.25"
				)
				.from(
					`.${styles.description}`,
					{ y: 16, opacity: 0, duration: 0.5 },
					"-=0.35"
				)
				.from(
					`.${styles.ctaButton}`,
					{ y: 14, opacity: 0, duration: 0.5 },
					"-=0.3"
				)
				.from(
					`.${styles.card}`,
					{ x: 30, opacity: 0, duration: 0.6 },
					"-=0.5"
				)
				.from(
					`.${styles.field}`,
					{ y: 14, opacity: 0, duration: 0.4, stagger: 0.06 },
					"-=0.3"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	const validate = () => {
		const next = {};

		if (!form.name.trim()) next.name = "Please enter your name.";

		if (!form.email.trim()) {
			next.email = "Please enter your work email.";
		} else if (!EMAIL_RE.test(form.email.trim())) {
			next.email = "Please enter a valid email address.";
		}

		if (!form.company.trim()) next.company = "Please enter your company name.";

		if (!form.designation.trim())
			next.designation = "Please enter your designation.";

		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		// clear that field's error as soon as the person starts fixing it
		setErrors((prev) => {
			if (!prev[name]) return prev;
			const next = { ...prev };
			delete next[name];
			return next;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validate()) return;

		setStatus("submitting");
		setServerError("");

		try {
			// Sends directly from the browser via EmailJS — no backend
			// route, no API endpoint, no server-side secret at all. The
			// public key below is safe to expose client-side by design;
			// EmailJS holds your actual email provider credentials on
			// their end, not in this code.
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					name: form.name,
					email: form.email,
					company: form.company,
					designation: form.designation,
					systems: form.systems || "\u2014",
				},
				{ publicKey: EMAILJS_PUBLIC_KEY }
			);

			setStatus("success");
			setForm(initialForm);
		} catch (err) {
			console.error("CTA form: EmailJS send failed:", err);
			setServerError("Something went wrong. Please try again.");
			setStatus("error");
		}
	};

	const isSubmitting = status === "submitting";

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				{/* ================= LEFT ================= */}
				<div className={styles.left}>
					<div className={styles.eyebrow}>SEE IT ON YOUR OWN DATA</div>

					<h2 className={styles.heading}>
						Our systems saw it first.
						<br />
						Let us show you when.
					</h2>

					<p className={styles.description}>
						We&apos;ll connect the dots across your systems and walk through
						what grync.io would have surfaced and when. Nothing to migrate,
						nothing to prepare.
					</p>

					<Link href="/contact-us-page" className={styles.ctaButton}>
						Book a demo <span>→</span>
					</Link>
				</div>

				{/* ================= RIGHT: FORM CARD ================= */}
				<div className={styles.card}>
					{status === "success" ? (
						<div className={styles.successState}>
							<CheckCircle2 size={36} className={styles.successIcon} />
							<h3>Request received</h3>
							<p>
								Thanks — someone from our team will reach out shortly to set
								up your walkthrough.
							</p>
							<button
								type="button"
								className={styles.resetButton}
								onClick={() => setStatus("idle")}
							>
								Submit another request
							</button>
						</div>
					) : (
						<>
							<h3 className={styles.cardHeading}>
								Find the hidden execution gaps in your business
							</h3>

							<form
								className={styles.form}
								onSubmit={handleSubmit}
								noValidate
							>
								<div className={styles.field}>
									<label htmlFor="cta-name">Name</label>
									<input
										id="cta-name"
										name="name"
										type="text"
										placeholder="Enter your full name"
										value={form.name}
										onChange={handleChange}
										disabled={isSubmitting}
										className={errors.name ? styles.inputError : ""}
									/>
									{errors.name && (
										<span className={styles.errorText}>{errors.name}</span>
									)}
								</div>

								<div className={styles.field}>
									<label htmlFor="cta-email">Work email</label>
									<input
										id="cta-email"
										name="email"
										type="email"
										placeholder="you@company.com"
										value={form.email}
										onChange={handleChange}
										disabled={isSubmitting}
										className={errors.email ? styles.inputError : ""}
									/>
									{errors.email && (
										<span className={styles.errorText}>{errors.email}</span>
									)}
								</div>

								<div className={styles.field}>
									<label htmlFor="cta-company">Company</label>
									<input
										id="cta-company"
										name="company"
										type="text"
										placeholder="Company name"
										value={form.company}
										onChange={handleChange}
										disabled={isSubmitting}
										className={errors.company ? styles.inputError : ""}
									/>
									{errors.company && (
										<span className={styles.errorText}>
											{errors.company}
										</span>
									)}
								</div>

								<div className={styles.field}>
									<label htmlFor="cta-designation">Designation</label>
									<input
										id="cta-designation"
										name="designation"
										type="text"
										placeholder="e.g. VP of Revenue Operations"
										value={form.designation}
										onChange={handleChange}
										disabled={isSubmitting}
										className={errors.designation ? styles.inputError : ""}
									/>
									{errors.designation && (
										<span className={styles.errorText}>
											{errors.designation}
										</span>
									)}
								</div>

								<div className={styles.field}>
									<label htmlFor="cta-systems">
										Which systems are you trying to connect? (optional)
									</label>
									<textarea
										id="cta-systems"
										name="systems"
										rows={3}
										placeholder="e.g. Salesforce, Zendesk, Segment..."
										value={form.systems}
										onChange={handleChange}
										disabled={isSubmitting}
									/>
								</div>

								{status === "error" && (
									<div className={styles.formErrorBanner}>
										<AlertCircle size={16} />
										<span>{serverError}</span>
									</div>
								)}

								<button
									type="submit"
									className={styles.submitButton}
									disabled={isSubmitting}
								>
									{isSubmitting ? "Submitting…" : "Submit Request"}
								</button>
							</form>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default CtaForm;