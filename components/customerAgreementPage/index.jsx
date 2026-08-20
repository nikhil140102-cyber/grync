"use client";
import React, { useState } from "react";
import "./plansSection.css";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
import FadeInUp from "../animation/FadeInUp";
import Image from "next/image";
import PlayBtn from "@/public/images/v3/videoplay.png";
import Grync_Process from "@/public/images/grync_process.jpeg";

const agreementSections = [
    {
        title: "1. Acceptance of Agreement",
        desc: "By accessing, subscribing to, purchasing, or using any products, platforms, software, services, websites, APIs, analytics, automations, integrations, or related offerings provided by grync.io, the customer agrees to be legally bound by this Customer Agreement. If you are entering into this Agreement on behalf of an organisation, you represent and warrant that you have full authority to bind that organisation to these terms.",
    },
    {
        title: "2. Scope of Services",
        desc: "grync.io provides AI-powered data intelligence, insights, notifications, workflow automation, and related digital solutions as may be agreed in an applicable proposal, order form, statement of work, subscription plan, or service document. The exact scope, commercial terms, implementation approach, delivery timelines, and support coverage shall be governed by the applicable commercial document executed between grync.io and the customer.",
    },
    {
        title: "3. Customer Responsibilities",
        desc: "The customer shall provide accurate information, timely access, required approvals, and all reasonable cooperation necessary for implementation and delivery. The customer remains responsible for the legality, integrity, reliability, and ownership or right to use all data, systems, credentials, content, and third-party platforms made available to grync.io for the provision of services.",
    },
    {
        title: "4. Fees and Payment",
        desc: "The customer agrees to pay all fees, subscription charges, implementation fees, support fees, usage-based charges, taxes, and other agreed amounts in accordance with the applicable invoice, order form, or commercial arrangement. Unless otherwise agreed in writing, all payments shall be due within the stated invoice period, and delayed payments may attract suspension of services, withholding of deliverables, or applicable late charges permitted by law.",
    },
    {
        title: "5. Intellectual Property",
        desc: "grync.io and its licensors retain all rights, title, and interest in and to its software, methodologies, models, algorithms, frameworks, documentation, processes, inventions, improvements, templates, know-how, branding, and related intellectual property. Except for the limited rights expressly granted under this Agreement, no ownership rights are transferred to the customer. Customer data and customer-owned materials remain the property of the customer or its respective licensors.",
    },
    {
        title: "6. Confidentiality",
        desc: "Each party agrees to keep confidential all non-public, proprietary, technical, commercial, financial, operational, and business information disclosed by the other party that is designated as confidential or that should reasonably be understood to be confidential. Neither party shall disclose or use such information except as necessary to perform its obligations or exercise its rights under this Agreement, unless required by law.",
    },
    {
        title: "7. Data Protection and Security",
        desc: "grync.io shall implement commercially reasonable administrative, technical, and organisational measures to protect customer data handled in connection with the services. The customer acknowledges that no online system is entirely risk-free and agrees that it is responsible for maintaining appropriate internal controls, user permissions, and security governance over its own systems and connected environments.",
    },
    {
        title: "8. Warranties and Disclaimers",
        desc: "grync.io warrants that it shall provide the services in a professional and workmanlike manner consistent with generally accepted industry practices. Except as expressly stated, the services, software, outputs, and platform are provided on an 'as is' and 'as available' basis, and grync.io disclaims all other warranties, whether express, implied, statutory, or otherwise, including merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability.",
    },
    {
        title: "9. Limitation of Liability",
        desc: "To the maximum extent permitted by applicable law, grync.io shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, or for any loss of profits, revenue, business, goodwill, or data arising out of or related to this Agreement. grync.io’s aggregate liability arising out of or in connection with this Agreement shall not exceed the total fees actually paid by the customer to grync.io for the relevant services during the twelve (12) months preceding the event giving rise to the claim.",
    },
    {
        title: "10. Term and Termination",
        desc: "This Agreement shall commence on the effective date of the applicable subscription, order, proposal, or use of services, and shall continue until terminated in accordance with its terms. Either party may terminate for material breach if such breach remains uncured within the applicable cure period after written notice. Upon termination, the customer shall pay all accrued dues for services rendered up to the effective termination date.",
    },
    {
        title: "11. Suspension of Services",
        desc: "grync.io may suspend access to all or part of the services if the customer materially breaches this Agreement, fails to pay undisputed amounts when due, uses the platform in an unlawful or harmful manner, or creates security, legal, or operational risk for grync.io, its systems, or other customers.",
    },
    {
        title: "12. Governing Law",
        desc: "This Agreement shall be governed by and construed in accordance with the laws of India. Subject to applicable dispute resolution provisions, the courts having jurisdiction over Kolkata, West Bengal shall have exclusive jurisdiction in relation to matters arising out of or connected with this Agreement.",
    },
];

export default function CustomerAgreementPage() {
    const [isOpen, setOpen] = useState(false);

    const openForm = () => {
        window.open(
            "https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE",
            "_blank"
        );
        const subject = encodeURIComponent("New Customer Agreement Inquiry");
        const body = encodeURIComponent(
            "A user wants to discuss the grync.io Customer Agreement."
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
                    Customer Agreement
                </div>

                <h1
                    className="hero-title"
                    style={{
                        color: "#111827",
                        fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    }}
                >
                    Professional Terms for Working with grync.io
                </h1>

                <p className="hero-subtitle" style={{ color: "#4b5563", maxWidth: "900px" }}>
                    This Customer Agreement sets out the general legal, commercial, and
                    operational terms governing the use of grync.io products, services,
                    subscriptions, implementations, and related deliverables.
                </p>

                <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                    <FadeInStaggerTwoChildren>
                        <button
                            className="sofax-popup-video video-init"
                            onClick={() => setOpen(true)}
                            style={{ backgroundColor: "#d63384", color: "white" }}
                        >
                            <Image src={PlayBtn} alt="Play Btn" />
                            Review Terms
                        </button>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren>
                        <button
                            className="sofax-popup-video video-init"
                            onClick={openForm}
                            style={{ backgroundColor: "#FF5841", color: "white" }}
                        >
                            Contact Us
                        </button>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>
            </section>

            {/* Intro Section */}
            <section style={{ background: "#f7f6f2", padding: "1rem 2rem 2rem" }}>
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        background: "#ffffff",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: "1rem",
                            letterSpacing: 0,
                        }}
                    >
                        Effective Understanding
                    </h2>
                    <p
                        style={{
                            fontSize: "0.98rem",
                            color: "#4b5563",
                            lineHeight: 1.8,
                            margin: 0,
                        }}
                    >
                        This page is intended to present the standard framework under which
                        grync.io engages with customers. Specific commercial arrangements,
                        project commitments, service levels, implementation scope, and
                        pricing may additionally be defined in separate order forms,
                        statements of work, proposals, or master agreements executed between
                        the parties.
                    </p>
                </div>
            </section>

            {/* Agreement Sections */}
            <section style={{ background: "#f7f6f2", padding: "2rem 2rem 4rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1rem",
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    {agreementSections.map((section) => (
                        <div
                            key={section.title}
                            style={{
                                background: "#ffffff",
                                borderRadius: "1.1rem",
                                padding: "1.6rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                {section.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.92rem",
                                    color: "#6b7280",
                                    lineHeight: 1.75,
                                    margin: 0,
                                }}
                            >
                                {section.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary Flow Section */}
            <section
                className="flow-section"
                style={{
                    background: "#eceae3",
                    borderTop: "1px solid #e0ddd6",
                    borderBottom: "1px solid #e0ddd6",
                }}
            >
                <h2
                    className="section-title"
                    style={{ color: "#111827", marginBottom: "2.5rem" }}
                >
                    How Engagement Typically Works
                </h2>

                <div className="flow-track">
                    {[
                        { label: "Commercial Discussion" },
                        { label: "Scope Finalisation" },
                        { label: "Agreement" },
                        { label: "Delivery & Support" },
                    ].map((step, i, arr) => (
                        <div className="flow-step" key={step.label}>
                            <div
                                className="flow-node"
                                style={{
                                    minWidth: "unset",
                                    padding: "0.75rem 1.25rem",
                                    background: "#ffffff",
                                    textAlign: "center",
                                }}
                            >
                <span
                    className="flow-step-label"
                    style={{ fontSize: "0.9rem" }}
                >
                  {step.label}
                </span>
                            </div>
                            {i < arr.length - 1 && (
                                <span className="flow-arrow" style={{ color: "#9ca3af" }}>
                  →
                </span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact / Final Notes */}
            <section style={{ background: "#f7f6f2", padding: "4rem 2rem 2rem" }}>
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        background: "#ffffff",
                        borderRadius: "1.2rem",
                        padding: "2rem",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: "1rem",
                            letterSpacing: 0,
                        }}
                    >
                        Contact and Clarifications
                    </h2>
                    <p
                        style={{
                            fontSize: "0.96rem",
                            color: "#4b5563",
                            lineHeight: 1.8,
                            marginBottom: "1rem",
                        }}
                    >
                        For clarifications on commercial terms, implementation scope,
                        enterprise agreements, data protection requirements, or tailored
                        contractual arrangements, please contact grync.io before using or
                        subscribing to the services.
                    </p>
                    <p
                        style={{
                            fontSize: "0.96rem",
                            color: "#4b5563",
                            lineHeight: 1.8,
                            margin: 0,
                        }}
                    >
                        Email: <strong>info@grync.io</strong>
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="cta-section"
                style={{ background: "#f7f6f2", padding: "5rem 2rem" }}
            >
                <h2 className="cta-title" style={{ color: "#111827" }}>
                    Need a Custom Enterprise Agreement?
                </h2>
                <div className="cta-actions">
                    <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                        <FadeInStaggerTwoChildren>
                            <button
                                className="sofax-popup-video video-init"
                                onClick={openForm}
                                style={{ backgroundColor: "#FF5841", color: "white" }}
                            >
                                Talk to Us
                            </button>
                        </FadeInStaggerTwoChildren>
                    </FadeInStaggerTwo>
                </div>
            </section>
        </div>
    );
}