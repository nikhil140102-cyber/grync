"use client";
import React from 'react';
import './plansSection.css';
import {FadeInStaggerTwo, FadeInStaggerTwoChildren} from "../animation/FadeInStaggerTwo";
import PlayBtn from "@/public/images/v3/videoplay.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Grync_Process from "@/public/images/grync_process.jpeg";
import FadeInUp from "../animation/FadeInUp";

const featureCards = [
    {
        icon: '🔍',
        iconBg: '#ede9fe',
        title: 'Insight Agent',
        desc: 'Detects patterns, drop-offs, and anomalies across your systems. Ask questions or uncover hidden opportunities instantly.',
    },
    {
        icon: '🔔',
        iconBg: '#d1fae5',
        title: 'Notification Agent',
        desc: 'Proactively alerts teams when something important happens — from risks to opportunities — in real time.',
    },
    {
        icon: '⚡',
        iconBg: '#fef3c7',
        title: 'SyncTrigger',
        desc: 'Automatically triggers workflows, campaigns, or actions based on user behavior and system events.',
    },
];

export default function LandingPage() {

    const [isOpen, setOpen] = useState(false);
    const router = useRouter();                   // ⬅️ get router

    const openForm = () => {
        window.open("https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE", "_blank");
        const subject = encodeURIComponent("New Talk To Us Inquiry");
        const body = encodeURIComponent(
            "A user clicked the Talk To Us button. Here's the form link: https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE"
        );
        window.location.href = `mailto:info@grync.io?subject=${subject}&body=${body}`;
    };

    return (
        <div className="page-wrapper">

            {/* ── Navbar ──────────────────────────────────────────────── */}


            {/* ── Hero ────────────────────────────────────────────────── */}
            <section className="hero-section" style={{ background: '#f7f6f2', borderBottom: 'none', padding: '4rem 2rem 3.5rem' }}>
                <div className="hero-badge" style={{ background: '#ede9fe', color: '#5b21b6', border: 'none' }}>
                    AI-powered data intelligence
                </div>

                <h1 className="hero-title" style={{ color: '#111827', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
                    Turn Signals into Insights. Insights into Action.
                </h1>

                <p className="hero-subtitle" style={{ color: '#4b5563' }}>
                    grync.io ingests data from across your systems and transforms it into
                    real-time insights and automated actions — so nothing gets missed.
                </p>

                <FadeInStaggerTwo className="sofax-hero-btn-wrap">
                    <FadeInStaggerTwoChildren>
                        <button className="sofax-popup-video video-init" onClick={() => setOpen(true)} style={{ backgroundColor: "#d63384", color: "white" }}>
                            <Image src={PlayBtn} alt="Play Btn" />
                            Learn How it Works
                        </button>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren>
                        <button className="sofax-popup-video video-init" onClick={openForm} style={{ backgroundColor: "#FF5841", color: "white" }}>
                            Request a Demo
                        </button>
                    </FadeInStaggerTwoChildren>

                    {/* Navigate with a BUTTON */}
                    <FadeInStaggerTwoChildren>
                        <button
                            type="button"
                            className="sofax-popup-video video-init"
                            onClick={() => router.push("/productBrief")}   // ⬅️ navigate
                            style={{ backgroundColor: "#d63384", color: "white" }}
                        >
                            Check Product Brief
                        </button>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>
            </section>

            {/* ── Feature Cards ───────────────────────────────────────── */}
            <section style={{ background: '#f7f6f2', padding: '2rem 2rem 4rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    maxWidth: '780px',
                    margin: '0 auto',
                }}>
                    {featureCards.map((card) => (
                        <div
                            key={card.title}
                            style={{
                                background: '#ffffff',
                                borderRadius: '1.1rem',
                                padding: '1.6rem',
                                border: '1px solid #e5e7eb',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                            }}
                        >
                            <div style={{
                                width: '42px',
                                height: '42px',
                                background: card.iconBg,
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.1rem',
                                marginBottom: '1rem',
                            }}>
                                {card.icon}
                            </div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                                {card.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <FadeInUp className="hero7-thumb extra-mt">
                <Image src={Grync_Process} alt="Dashboard" style={{ display: "block", margin: "auto" }} />
            </FadeInUp>
            <br/><br/>
            {/* ── Flow Section ────────────────────────────────────────── */}
            <section
                className="flow-section"
                style={{ background: '#eceae3', borderTop: '1px solid #e0ddd6', borderBottom: '1px solid #e0ddd6' }}
            >
                <h2 className="section-title" style={{ color: '#111827', marginBottom: '2.5rem' }}>
                    From Data to Outcomes — Instantly
                </h2>

                <div className="flow-track">
                    {[
                        { label: 'Data Ingestion' },
                        { label: 'Signal Unification' },
                        { label: 'Insights' },
                        { label: 'Actions' },
                    ].map((step, i, arr) => (
                        <div className="flow-step" key={step.label}>
                            <div
                                className="flow-node"
                                style={{ minWidth: 'unset', padding: '0.75rem 1.25rem', background: '#ffffff', textAlign: 'center' }}
                            >
                                <span className="flow-step-label" style={{ fontSize: '0.9rem' }}>
                                    {step.label}
                                </span>
                            </div>
                            {i < arr.length - 1 && (
                                <span className="flow-arrow" style={{ color: '#9ca3af' }}>→</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ─────────────────────────────────────────── */}
            <section className="cta-section" style={{ background: '#f7f6f2', padding: '5rem 2rem' }}>
                <h2 className="cta-title" style={{ color: '#111827' }}>
                    Stop Looking at Data. Start Acting on It.
                </h2>
                <div className="cta-actions">
                    <FadeInStaggerTwo className="sofax-hero-btn-wrap">

                        <FadeInStaggerTwoChildren>
                            <button className="sofax-popup-video video-init" onClick={openForm} style={{ backgroundColor: "#FF5841", color: "white" }}>
                                Request a Demo
                            </button>
                        </FadeInStaggerTwoChildren>

                    </FadeInStaggerTwo>
                </div>
            </section>

        </div>
    );
}