"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./plansSection.css";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
import FadeInUp from "../animation/FadeInUp";

export default function PrivacyPage() {
    const router = useRouter();

    const openContact = () => {
        const subject = encodeURIComponent("Privacy Policy Inquiry");
        const body = encodeURIComponent(
            "Hello Grync Team,\n\nI have a question regarding the Privacy Policy on grync.io.\n\nRegards,"
        );
        window.location.href = `mailto:info@grync.io?subject=${subject}&body=${body}`;
    };

    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    background: "#f7f6f2",
                    borderBottom: "none",
                    padding: "4rem 2rem 3.5rem",
                }}
            >
                <div
                    className="hero-badge"
                    style={{
                        background: "#ede9fe",
                        color: "#5b21b6",
                        border: "none",
                    }}
                >
                    Legal & Privacy
                </div>

                <h1
                    className="hero-title"
                    style={{
                        color: "#111827",
                        fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    }}
                >
                    Privacy Policy
                </h1>

                <p className="hero-subtitle" style={{ color: "#4b5563", maxWidth: "900px", margin: "0 auto" }}>
                    At grync.io, we value your trust and are committed to protecting your
                    personal information. This Privacy Policy explains how we collect,
                    use, store, and safeguard your information when you interact with our
                    website, products, services, and communications.
                </p>

                <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                    <FadeInStaggerTwoChildren>
                        <button
                            type="button"
                            className="sofax-popup-video video-init"
                            onClick={openContact}
                            style={{ backgroundColor: "#FF5841", color: "white" }}
                        >
                            Contact Us
                        </button>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren>
                        <button
                            type="button"
                            className="sofax-popup-video video-init"
                            onClick={() => router.push("/")}
                            style={{ backgroundColor: "#d63384", color: "white" }}
                        >
                            Back to Home
                        </button>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>
            </section>

            {/* Intro / Effective Date */}
            <section style={{ background: "#f7f6f2", padding: "1rem 2rem 3rem" }}>
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        background: "#ffffff",
                        borderRadius: "1.1rem",
                        padding: "1.8rem",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                    }}
                >
                    <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "1rem" }}>
                        <strong style={{ color: "#111827" }}>Effective Date:</strong> [Insert Date]
                    </p>
                    <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                        This Privacy Policy applies to information collected through the
                        grync.io website and any related products, services, demos,
                        inquiries, or engagements offered by Grync. By using our website or
                        services, you agree to the practices described in this policy.
                    </p>
                </div>
            </section>

            {/* Privacy Sections */}
            <section style={{ background: "#f7f6f2", padding: "0 2rem 4rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "1rem",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {[
                        {
                            title: "1. Information We Collect",
                            desc: `We may collect information that you voluntarily provide to us, including your name, email address, company name, phone number, and any other details submitted through forms, demo requests, or direct communication. We may also collect technical information such as IP address, browser type, device information, pages visited, and usage data through cookies or analytics tools.`,
                        },
                        {
                            title: "2. How We Use Your Information",
                            desc: `We use the information we collect to respond to inquiries, provide demonstrations, deliver and improve our services, communicate important updates, personalize user experience, monitor website performance, ensure security, and comply with legal or regulatory obligations.`,
                        },
                        {
                            title: "3. Cookies and Analytics",
                            desc: `Our website may use cookies, analytics tools, and similar technologies to understand how visitors interact with our site, improve performance, and optimize user experience. You may choose to disable cookies through your browser settings, although some features of the website may not function properly as a result.`,
                        },
                        {
                            title: "4. How We Share Information",
                            desc: `We do not sell your personal information. We may share information with trusted service providers, hosting providers, analytics providers, communication tools, or business partners strictly as necessary to operate our website and services. We may also disclose information where required by law, legal process, or to protect our rights, users, or systems.`,
                        },
                        {
                            title: "5. Data Retention",
                            desc: `We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including operational, contractual, legal, compliance, and business recordkeeping purposes. When information is no longer needed, we take reasonable steps to securely delete or anonymize it.`,
                        },
                        {
                            title: "6. Data Security",
                            desc: `We implement reasonable technical, organizational, and administrative safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no system, website, or transmission method can be guaranteed to be completely secure.`,
                        },
                        {
                            title: "7. Third-Party Links and Services",
                            desc: `Our website may contain links to third-party websites, tools, or services. We are not responsible for the privacy practices, content, or policies of third-party platforms. We encourage users to review the privacy policies of those third parties before sharing information with them.`,
                        },
                        {
                            title: "8. Your Rights and Choices",
                            desc: `Depending on your jurisdiction, you may have rights related to access, correction, deletion, restriction, objection, or portability of your personal information. You may also opt out of certain communications from us at any time by following unsubscribe instructions or by contacting us directly.`,
                        },
                        {
                            title: "9. Children’s Privacy",
                            desc: `Our website and services are not intended for children, and we do not knowingly collect personal information from individuals who are legally considered minors under applicable law without appropriate authorization.`,
                        },
                        {
                            title: "10. International Data Handling",
                            desc: `If you access grync.io from outside the country where our systems or service providers operate, your information may be transferred to and processed in other jurisdictions. By using our website or services, you acknowledge such transfer and processing, subject to appropriate safeguards where applicable.`,
                        },
                        {
                            title: "11. Updates to This Privacy Policy",
                            desc: `We may update this Privacy Policy from time to time to reflect changes in our business, technology, legal obligations, or privacy practices. Any revised version will be posted on this page with an updated effective date.`,
                        },
                        {
                            title: "12. Contact Us",
                            desc: `If you have any questions, requests, or concerns regarding this Privacy Policy or our handling of personal information, please contact us at info@grync.io.`,
                        },
                    ].map((section) => (
                        <FadeInUp key={section.title}>
                            <div
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "1.1rem",
                                    padding: "1.6rem",
                                    border: "1px solid #e5e7eb",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "1.15rem",
                                        fontWeight: 700,
                                        color: "#111827",
                                        marginBottom: "0.75rem",
                                        letterSpacing: 0,
                                    }}
                                >
                                    {section.title}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        color: "#6b7280",
                                        lineHeight: 1.8,
                                        margin: 0,
                                    }}
                                >
                                    {section.desc}
                                </p>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="cta-section"
                style={{ background: "#eceae3", padding: "5rem 2rem", borderTop: "1px solid #e0ddd6" }}
            >
                <h2 className="cta-title" style={{ color: "#111827" }}>
                    Questions About Your Privacy?
                </h2>
                <p
                    style={{
                        color: "#4b5563",
                        textAlign: "center",
                        maxWidth: "760px",
                        margin: "1rem auto 2rem",
                        lineHeight: 1.8,
                    }}
                >
                    We are committed to transparency, responsible data handling, and clear
                    communication. Reach out to our team for any privacy-related query.
                </p>

                <div className="cta-actions">
                    <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                        <FadeInStaggerTwoChildren>
                            <button
                                className="sofax-popup-video video-init"
                                onClick={openContact}
                                style={{ backgroundColor: "#FF5841", color: "white" }}
                            >
                                Email Privacy Team
                            </button>
                        </FadeInStaggerTwoChildren>
                    </FadeInStaggerTwo>
                </div>
            </section>
        </div>
    );
}