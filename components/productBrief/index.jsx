"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import "./productBrief.css";
// swap with your real cover image or use a /public path
import cover from "@/public/images/v7/dashboardv7.png";

export default function ProductBrief() {
    const industries = useMemo(
        () => [
            "Software / SaaS",
            "E-commerce",
            "Financial Services",
            "Healthcare",
            "Manufacturing",
            "Media & Entertainment",
            "Education",
            "Other",
        ],
        []
    );

    const countries = useMemo(
        () => [
            "India",
            "United States",
            "United Kingdom",
            "Germany",
            "France",
            "Canada",
            "Australia",
            "Other",
        ],
        []
    );

    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        industry: "",
        country: "",
        agree: false,
    });
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // --- Google Form config ---
    // Replace FORM_ID with your own (the long id in the "viewform" link)
    const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE/formResponse";

    // Map each local field to its Google Form "entry.<id>"
    // How to find entry IDs:
    // 1) Open your Google Form, click the 3-dot menu → "Get pre-filled link"
    // 2) Fill each field with a placeholder, click "Get link"
    // 3) Open that link, then View Source (or Inspect → Network) and locate the input "name" attributes like entry.123456789
    const FIELD_MAP = {
        email: "entry.XXXXXXXXX",
        firstName: "entry.XXXXXXXXX",
        lastName: "entry.XXXXXXXXX",
        company: "entry.XXXXXXXXX",
        phone: "entry.XXXXXXXXX",
        industry: "entry.XXXXXXXXX",
        country: "entry.XXXXXXXXX",
        // Optional: create a hidden "Consent" short answer field in your form and map it:
        agree: "entry.XXXXXXXXX",
        // Optional: create a hidden "User Agent" field in your form and map it:
        userAgent: "entry.XXXXXXXXX",
    };

    // Submit to Google Form (no-cors; we can't read the response but it will submit)
    const sendLeadEmail = async (data) => {
        const fd = new FormData();
        fd.append(FIELD_MAP.email, data.email);
        fd.append(FIELD_MAP.firstName, data.firstName);
        fd.append(FIELD_MAP.lastName, data.lastName);
        fd.append(FIELD_MAP.company, data.company);
        fd.append(FIELD_MAP.phone, data.phone || "");
        fd.append(FIELD_MAP.industry, data.industry);
        fd.append(FIELD_MAP.country, data.country);
        if (FIELD_MAP.agree) fd.append(FIELD_MAP.agree, data.agree ? "Yes" : "No");
        if (FIELD_MAP.userAgent) fd.append(FIELD_MAP.userAgent, navigator.userAgent || "");

        // Some forms also accept a "fvv" or "partialResponse" param; not required for basics.
        try {
            await fetch(GOOGLE_FORM_ACTION, {
                method: "POST",
                mode: "no-cors",
                body: fd,
            });
        } catch (e) {
            // Even if this throws locally, the submission may still have gone through—continue UX flow
            console.warn("Google Form submission error (ignored):", e);
        }
    };

    // Force a download (instead of inline open)
    const downloadPdf = (path, filename = "") => {
        const a = document.createElement("a");
        a.href = path;
        if (filename) a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    // (Optional) Keep mailto step if you still want a notification
    const openMailto = (data) => {
        const subject = "Grync Product Brief Download";
        const body = [
            "A visitor downloaded the Grync product brief.",
            "",
            "Details:",
            `Business Email: ${data.email}`,
            `First Name: ${data.firstName}`,
            `Last Name: ${data.lastName}`,
            `Company: ${data.company}`,
            `Phone: ${data.phone || "-"}`,
            `Industry: ${data.industry}`,
            `Country: ${data.country}`,
            "",
            "— Sent from grync.io product brief page",
        ].join("\n");

        window.location.href =
            `mailto:info@grync.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (
            !form.email ||
            !form.firstName ||
            !form.lastName ||
            !form.company ||
            !form.industry ||
            !form.country
        ) {
            setError("Please complete all required fields.");
            return;
        }
        if (!form.agree) {
            setError("Please accept the Terms of Service and Privacy Policy.");
            return;
        }

        try {
            setSubmitting(true);

            // 1) Save details into Google Form
            await sendLeadEmail(form);

            // 2) Download the PDF
            downloadPdf("/grync-product-brief.pdf", "grync-product-brief.pdf");

            // 3) Tiny delay so the download click isn't interrupted by navigation
            await new Promise((r) => setTimeout(r, 500));

            // 4) (Optional) also open the mail client for your inbox notification
            // openMailto(form);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="pb-hero">
            <div className="pb-container">
                <br /><br /><br /><br /><br />
                <div className="pb-grid">
                    <section className="pb-hero-copy">
                        <h1>Discover grync.io</h1>
                        <br />
                        <p>
                            Use AI to improve productivity and SyncTrigger
                            <span
                                style={{
                                    fontSize: "20px",
                                    marginLeft: "4px",
                                    verticalAlign: "top",
                                    position: "relative",
                                    top: "-6px",
                                    color: "black",
                                }}
                            >
                ™
              </span>{" "}
                            for decision-making.
                        </p>

                        <div className="pb-hero-image-mobile">
                            <Image src={cover} alt="Product Brief Cover" priority />
                        </div>

                        <article className="pb-body">
                            <p>
                                Today, embracing AI is essential to stay competitive. With{" "}
                                <strong>grync.io</strong>, you can turn your product and
                                engagement data into actionable insights, streamline workflows,
                                and make faster, data-driven decisions.
                            </p>

                            <p><strong>This product brief will help you discover:</strong></p>
                            <ul className="pb-bullets">
                                <li>➜ How Grync Intelligence uses AI to automate workflows and enhance decision-making</li>
                                <li>➜ The benefits of integrating secure AI into your product & engagement strategy</li>
                                <li>➜ How to improve discoverability, protection, and governance of your customer data</li>
                            </ul>

                            <p>
                                Equip your team with the tools needed to thrive in a data-driven
                                world. Read the brief to learn more.
                            </p>
                        </article>
                    </section>

                    <aside className="pb-hero-art">
                        <Image className="pb-cover" src={cover} alt="Grync Intelligence" />
                        <form className="pb-form-card" onSubmit={handleSubmit} noValidate>
                            <div className="pb-form-header">Access the Product Brief</div>

                            <label className="pb-field">
                                <span>Business Email Address *</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className="pb-field">
                                <span>First Name *</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className="pb-field">
                                <span>Last Name *</span>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className="pb-field">
                                <span>Company *</span>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={form.company}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className="pb-field">
                                <span>Phone</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98xxxxxxx"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="pb-field">
                                <span>Industry *</span>
                                <select
                                    name="industry"
                                    value={form.industry}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select industry
                                    </option>
                                    {industries.map((i) => (
                                        <option key={i} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="pb-field">
                                <span>Country *</span>
                                <select
                                    name="country"
                                    value={form.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select country
                                    </option>
                                    {countries.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="pb-checkbox">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={form.agree}
                                    onChange={handleChange}
                                />
                                <span>
                  I agree to Grync&apos;s <a href="/terms">Terms of Service</a>{" "}
                                    and acknowledge the <a href="/privacy">Privacy Policy</a>. I
                  understand that Grync will process my information accordingly.
                </span>
                            </label>

                            {error && <p className="pb-error">{error}</p>}

                            <button className="pb-submit" type="submit" disabled={submitting}>
                                {submitting ? "Processing…" : "Download Now"}
                            </button>
                        </form>
                    </aside>
                </div>
            </div>
            <br /><br /><br /><br />
        </main>
    );
}
