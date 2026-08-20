"use client";

import React, { useState } from "react";
import "./plansSection.css";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
import FadeInUp from "../animation/FadeInUp";
import Image from "next/image";
import PlayBtn from "@/public/images/v3/videoplay.png";
import { useRouter } from "next/navigation";

const slaHighlights = [
    {
        title: "Business Hours Support",
        desc: "Standard support coverage during defined business hours for operational queries, platform guidance, and issue assistance.",
        icon: "🕘",
        iconBg: "#ede9fe",
    },
    {
        title: "Priority-based Response Times",
        desc: "Clear response targets based on incident severity, ensuring urgent business-impacting issues are addressed first.",
        icon: "⚡",
        iconBg: "#d1fae5",
    },
    {
        title: "Incident Escalation",
        desc: "Structured escalation path across technical and managerial levels for critical and unresolved support cases.",
        icon: "🚨",
        iconBg: "#fef3c7",
    },
    {
        title: "Ongoing Communication",
        desc: "Regular status updates during active incidents so your teams stay informed until resolution or workaround is provided.",
        icon: "💬",
        iconBg: "#fee2e2",
    },
];

const severityLevels = [
    {
        severity: "Priority 1 – Critical",
        impact: "Complete service outage, severe production issue, or major business disruption.",
        response: "Within 1 business hour",
        update: "Every 2 business hours",
    },
    {
        severity: "Priority 2 – High",
        impact: "Major functionality affected with significant business impact but partial workaround available.",
        response: "Within 4 business hours",
        update: "Every 1 business day",
    },
    {
        severity: "Priority 3 – Medium",
        impact: "Limited functionality issue, non-critical degradation, or localized user impact.",
        response: "Within 1 business day",
        update: "As reasonably required",
    },
    {
        severity: "Priority 4 – Low",
        impact: "General queries, cosmetic issues, enhancement requests, or minor inconveniences.",
        response: "Within 2 business days",
        update: "As reasonably required",
    },
];

const supportScope = [
    "Issue acknowledgement and triage",
    "Functional troubleshooting and analysis",
    "Guidance on platform usage and configuration",
    "Bug logging and engineering coordination",
    "Reasonable progress updates during active incidents",
    "Escalation for critical business-impacting issues",
];

const exclusions = [
    "Custom development unless separately contracted",
    "Third-party platform outages outside grync.io control",
    "Customer-side infrastructure, network, or access misconfigurations",
    "Data issues originating from external source systems",
    "Feature requests or product enhancements under standard support",
    "Support delays due to missing access, credentials, or incomplete issue details",
];

export default function SupportSLAPage() {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    const openForm = () => {
        window.open(
            "https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE",
            "_blank"
        );
        const subject = encodeURIComponent("New Support SLA Inquiry");
        const body = encodeURIComponent(
            "A user clicked the Contact Support / SLA button. Form link: https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE"
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
                    Support & Service Commitment
                </div>

                <h1
                    className="hero-title"
                    style={{
                        color: "#111827",
                        fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    }}
                >
                    Support SLA for grync.io
                </h1>

                <p className="hero-subtitle" style={{ color: "#4b5563", maxWidth: "900px", margin: "0 auto" }}>
                    At grync.io, we are committed to providing dependable, responsive, and
                    professional support to help customers operate with confidence. This
                    Support SLA outlines our standard service commitments for issue
                    response, communication, and escalation.
                </p>

                <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                    <FadeInStaggerTwoChildren>
                        <button
                            className="sofax-popup-video video-init"
                            onClick={() => setOpen(true)}
                            style={{ backgroundColor: "#d63384", color: "white" }}
                        >
                            <Image src={PlayBtn} alt="Play Btn" />
                            Learn How it Works
                        </button>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren>
                        <button
                            className="sofax-popup-video video-init"
                            onClick={openForm}
                            style={{ backgroundColor: "#FF5841", color: "white" }}
                        >
                            Contact Support
                        </button>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren>
                        <button
                            type="button"
                            className="sofax-popup-video video-init"
                            onClick={() => router.push("/productBrief")}
                            style={{ backgroundColor: "#d63384", color: "white" }}
                        >
                            Check Product Brief
                        </button>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>
            </section>

            {/* SLA Highlight Cards */}
            <section style={{ background: "#f7f6f2", padding: "2rem 2rem 4rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1rem",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {slaHighlights.map((item) => (
                        <div
                            key={item.title}
                            style={{
                                background: "#ffffff",
                                borderRadius: "1.1rem",
                                padding: "1.6rem",
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                            }}
                        >
                            <div
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    background: item.iconBg,
                                    borderRadius: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.1rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                {item.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "0.875rem",
                                    color: "#6b7280",
                                    lineHeight: 1.65,
                                    margin: 0,
                                }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Overview Section */}
            <FadeInUp>
                <section
                    style={{
                        background: "#ffffff",
                        padding: "4rem 2rem",
                        borderTop: "1px solid #e5e7eb",
                        borderBottom: "1px solid #e5e7eb",
                    }}
                >
                    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                        <h2
                            style={{
                                color: "#111827",
                                fontSize: "2rem",
                                fontWeight: 700,
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Support Coverage Overview
                        </h2>
                        <p
                            style={{
                                color: "#4b5563",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                                textAlign: "center",
                                maxWidth: "860px",
                                margin: "0 auto 2rem",
                            }}
                        >
                            This SLA applies to standard support services provided for grync.io
                            customers under an active subscription, commercial agreement, or
                            support contract. Support is intended to address platform-related
                            incidents, service degradation, technical queries, and operational
                            assistance within the agreed service boundaries.
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "2rem",
                                marginTop: "2.5rem",
                            }}
                        >
                            <div
                                style={{
                                    background: "#f9fafb",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "1rem",
                                    padding: "1.5rem",
                                }}
                            >
                                <h3 style={{ color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>
                                    Included in Standard Support
                                </h3>
                                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#4b5563", lineHeight: 1.9 }}>
                                    {supportScope.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div
                                style={{
                                    background: "#f9fafb",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "1rem",
                                    padding: "1.5rem",
                                }}
                            >
                                <h3 style={{ color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>
                                    Exclusions
                                </h3>
                                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#4b5563", lineHeight: 1.9 }}>
                                    {exclusions.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInUp>

            {/* Response Time Section */}
            <section
                className="flow-section"
                style={{
                    background: "#eceae3",
                    borderTop: "1px solid #e0ddd6",
                    borderBottom: "1px solid #e0ddd6",
                    padding: "4rem 2rem",
                }}
            >
                <h2
                    className="section-title"
                    style={{ color: "#111827", marginBottom: "2.5rem", textAlign: "center" }}
                >
                    Incident Priorities & Response Targets
                </h2>

                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gap: "1rem",
                    }}
                >
                    {severityLevels.map((level) => (
                        <div
                            key={level.severity}
                            style={{
                                background: "#ffffff",
                                borderRadius: "1rem",
                                border: "1px solid #d1d5db",
                                padding: "1.4rem 1.5rem",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                            }}
                        >
                            <h3 style={{ margin: "0 0 0.6rem", color: "#111827", fontSize: "1.05rem" }}>
                                {level.severity}
                            </h3>
                            <p style={{ margin: "0 0 0.6rem", color: "#4b5563", lineHeight: 1.7 }}>
                                <strong>Impact:</strong> {level.impact}
                            </p>
                            <p style={{ margin: "0 0 0.4rem", color: "#4b5563", lineHeight: 1.7 }}>
                                <strong>Initial Response:</strong> {level.response}
                            </p>
                            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.7 }}>
                                <strong>Status Updates:</strong> {level.update}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support Process Section */}
            <section style={{ background: "#f7f6f2", padding: "4.5rem 2rem" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2
                        style={{
                            color: "#111827",
                            fontSize: "2rem",
                            fontWeight: 700,
                            marginBottom: "1.2rem",
                            textAlign: "center",
                        }}
                    >
                        How Support Works
                    </h2>

                    <p
                        style={{
                            color: "#4b5563",
                            lineHeight: 1.8,
                            textAlign: "center",
                            maxWidth: "850px",
                            margin: "0 auto 2.5rem",
                        }}
                    >
                        Our support process is designed to ensure timely acknowledgement,
                        thoughtful diagnosis, and professional communication throughout the
                        lifecycle of each support request.
                    </p>

                    <div className="flow-track">
                        {[
                            { label: "Ticket Raised" },
                            { label: "Triage & Severity Review" },
                            { label: "Investigation" },
                            { label: "Resolution / Workaround" },
                            { label: "Closure" },
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
                  <span className="flow-step-label" style={{ fontSize: "0.9rem" }}>
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
                </div>
            </section>

            {/* Business Hours / Customer Responsibilities */}
            <section
                style={{
                    background: "#ffffff",
                    padding: "4rem 2rem",
                    borderTop: "1px solid #e5e7eb",
                }}
            >
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "2rem",
                    }}
                >
                    <div
                        style={{
                            background: "#f9fafb",
                            border: "1px solid #e5e7eb",
                            borderRadius: "1rem",
                            padding: "1.5rem",
                        }}
                    >
                        <h3 style={{ color: "#111827", marginBottom: "1rem" }}>Business Hours</h3>
                        <p style={{ color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                            Unless otherwise agreed in writing, standard support is typically
                            provided during normal business hours on business days. Extended
                            coverage, dedicated support models, or 24/7 response commitments
                            may be provided under separate enterprise or premium support
                            arrangements.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "#f9fafb",
                            border: "1px solid #e5e7eb",
                            borderRadius: "1rem",
                            padding: "1.5rem",
                        }}
                    >
                        <h3 style={{ color: "#111827", marginBottom: "1rem" }}>Customer Responsibilities</h3>
                        <p style={{ color: "#4b5563", lineHeight: 1.8, margin: 0 }}>
                            To help ensure timely support, customers should provide accurate
                            issue details, relevant screenshots or logs, impacted environment
                            information, replication steps where possible, and appropriate
                            system access when reasonably required for diagnosis.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="cta-section"
                style={{ background: "#f7f6f2", padding: "5rem 2rem" }}
            >
                <h2 className="cta-title" style={{ color: "#111827" }}>
                    Need Faster Assurance and Dependable Support?
                </h2>
                <p
                    style={{
                        color: "#6b7280",
                        maxWidth: "760px",
                        margin: "1rem auto 2rem",
                        textAlign: "center",
                        lineHeight: 1.8,
                    }}
                >
                    Contact grync.io to discuss your support requirements, escalation
                    needs, response expectations, or enterprise-grade SLA options tailored
                    to your business.
                </p>

                <div className="cta-actions">
                    <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                        <FadeInStaggerTwoChildren>
                            <button
                                className="sofax-popup-video video-init"
                                onClick={openForm}
                                style={{ backgroundColor: "#FF5841", color: "white" }}
                            >
                                Contact Support
                            </button>
                        </FadeInStaggerTwoChildren>
                    </FadeInStaggerTwo>
                </div>
            </section>
        </div>
    );
}