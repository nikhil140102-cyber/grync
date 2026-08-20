"use client";
import React from 'react';
import './plansSection.css';

const pricingPlans = [
    {
        name: "Starter Plan",
        price: "$1500/month",
        tag: "Talk to us",
        features: [
            "Active users: Upto 25k",
            "Seats: Upto 5",
            "Events - (web + product): Unlimited",
            "SyncTrigger - Action & Trigger blocks: Upto 3",
            "In-app Guides: Upto 5 active guides",
            "Emails: Upto 50k",
            "NPS: Upto 2 surveys",
            "Session Replay: Upto 10k per month with 90 days retention",
            "Insights Agent: Upto 75 questions",
            "Notification Agent: Upto 25 notifications",
            "Feature Flags: Unlimited ",
            "Dynamic Segments: Unlimited",
            "Dashboards: Unlimited",
            "Templates (Email & SyncTrigger)",
            "Integrations - (Salesforce one way sync)",
            "** A/B Tests (web + product)"
        ]
    },
    {
        name: "Growth plan",
        price: "$3000/month",
        tag: "Talk to us",
        mostPopular: true,
        features: [
            "Active users: Upto 100k",
            "Seats: Upto 15",
            "Events - (web + product): Unlimited",
            "SyncTrigger - Action, Trigger : Upto 15",
            "In-app Guides: Upto 25 active guides",
            "Emails: Upto 150k",
            "NPS: Upto 4 surveys ",
            "Session Replay: Upto 25k per month with 90 days retention",
            "Insights Agent: Upto 375 questions",
            "Notification Agent: Upto 150 notifications",
            "Dynamic Segments: Unlimited",
            "Feature Flags: Unlimited",
            "Dashboards: Unlimited",
            "Templates (Email & SyncTrigger)",
            "Integrations - (Salesforce two way sync)",
            "Support (Email support & Guided onboarding call)",
            "** SyncTrigger - Update blocks",
            "** A/B Tests (web + product)"
        ]
    },
    {
        name: "Scale Plan",
        price: "$6000/month",
        tag: "Talk to us",
        features: [
            "Active users: Upto 250k",
            "Seats - Upto 30",
            "Events - (web + product): Unlimited",
            "SyncTrigger - Action, Trigger : Upto 30",
            "In-app Guides: Upto 40 active guides",
            "Emails: Upto 250k",
            "NPS: Upto 8 surveys",
            "Session Replay: Upto 25k per month with 90 days retention",
            "Insights Agent: Upto 1200 questions",
            "Notification Agent: Upto 450 notifications",
            "Segment creation: Unlimited",
            "Feature Flags: Unlimited",
            "Dashboards: Unlimited",
            "Templates (Email & SyncTrigger)",
            "Integrations: (Salesforce two way sync)",
            "Support (Email support & Guided onboarding call)",
            "** SyncTrigger - Update blocks",
            "** A/B Tests (web + product)"
        ]
    },
    {
        name: "Enterprise Plan",
        price: "Contact Sales",
        tag: "Talk to us",
        features: [
            "Active users (> 250k)",
            "Seats: Custom",
            "Events - (web + product): : Custom",
            "SyncTrigger - Action, Trigger : Custom",
            "In-app Guides: Custom",
            "Emails: Custom",
            "NPS: Custom",
            "Session Replay: Custom",
            "Insights Agent: Custom",
            "Notification Agent: Custom",
            "Templates (Email & SyncTrigger)",
            "Segment creation: Custom",
            "Feature Flags (upto 25)",
            "Dashboards (unlimited)",
            "Integrations (Salesforce two way sync)",
            "Support (Email support & Guided onboarding call)",
            "** SyncTrigger - Update blocks",
            "** A/B Tests (web + product)"
        ]
    }
];

const PricingCard = ({ plan }) => (
    <div className="plan-card">
        <div className={`card-header ${plan.mostPopular ? "popular" : ""}`}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <button className="plan-button" onClick={openForm}>{plan.tag}</button>
        </div>
        <div className="card-body">
            <ul className="features-list">
                {plan.features.map((feature, index) => {
                    const isComingSoon = feature.includes('** A/B Tests (web + product)') || feature.includes('** SyncTrigger - Update blocks');
                    const isAgentFeature = feature.toLowerCase().includes('agent');

                    return (
                        <li
                            key={index}
                            className={`feature-item ${isComingSoon ? "coming-soon" : ""}`}
                        >
                            ✔ {feature}
                            {isAgentFeature && <span className="ai-tag"> 🧠 Powered by AI</span>}
                            {isComingSoon && <span className="tooltip">Coming soon</span>}
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
);


const openForm = () => {
    window.open("https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE", "_blank");
    handleSendEmail();
};

const handleSendEmail = () => {
    const subject = encodeURIComponent("New Talk To Us Inquiry");
    const body = encodeURIComponent("A user clicked the Talk To Us button. Here's the form link: https://docs.google.com/forms/d/1h4pOn-GL541Z0yJpixfgrM2tFdwyrVr9Rg32Fxl-xOE");
    window.location.href = `mailto:info@grync.io?subject=${subject}&body=${body}`;
};

const AddOnCard = ({ title, price, description, features, note }) => (
    <div className="addon-card">
        <div className="addon-badge"><strong>ADD-ON</strong></div>
        <h3>{title}
            {title === "SyncTrigger" ? (
                <span style={{
                    fontSize: "20px",
                    marginLeft: "4px",
                    verticalAlign: "top",
                    position: "relative",
                    top: "-6px",
                    color: "black"
                }}>™</span>
            ) : null}
        </h3>
        <p className="price">{price}</p>
        <p>{description}</p>
        <ul className="features-list">
            {features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
            ))}
        </ul>
        {note && <p className="addon-note">{note}</p>}
        <button className="addon-button" onClick={openForm}>Talk to Sales</button>
    </div>
);

const PlansSection = () => (
    <section className="sofax-section-padding bg-light">
        <h2 className="text-4xl font-bold text-center mb-6">Turn Data Into Growth</h2>
        <div className="sofax-section-title center">
            <p style={{ maxWidth: "1400px" }}>
                <span style={{ color: "#f97316" }}>grync.io</span> bridges the gap between data and action – unlocking growth with context-aware, real-time customer engagement.
            </p>
        </div>

        <div className="plans-grid">
            {pricingPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
            ))}
        </div>

        <div className="addons-grid">
            <AddOnCard
                title="SyncTrigger"
                price="$200 per 5 trigger"
                description="grync.io’s real-time orchestration engine. Turn user behavior into instant action — without writing code or switching tools."
                features={[
                    "Send an email",
                    "Trigger a product guide",
                    "Unlock a feature",
                    "Notify your GTM team",
                    "Update your CRM",
                    "Trigger a survey",
                    "Engage with dynamic segments"
                ]}
                note="Why it matters: Don’t just observe user behavior — act on it the moment it happens."
            />
            <AddOnCard
                title="Insights Agent"
                price="$100 per 100 questions"
                description="Ask smarter questions. Get instant product answers. Insights Agent is your AI-powered analyst built into grync.io. Just ask —."
                features={[
                    "Where are users dropping off?",
                    "Which campaign drove the most trial conversions?",
                    "What’s causing churn in onboarding?"
                ]}
                note="No need to dig through dashboards or wait on analysts. Insights Agent interprets your product and engagement data in real time to deliver clear, contextual answers — fast. From drop-offs to aha moments, your product knows. Now you will too."
            />
            <AddOnCard
                title="Notification Agent"
                price="$25 per alert"
                description="Proactive alerts when product behavior needs your attention. Stop flying blind. Notification Agent watches your product in real time and instantly alerts you when something critical happens — like:"
                features={[
                    "A power user goes silent",
                    "A key feature drops in usage",
                    "A campaign underperforms",
                    "A customer hits a milestone worth celebrating",
                    "Delivered via email  — so your team can act before it’s too late."
                ]}
                note="Think of it as your product’s early warning system — always on, always watching."
            />
            <AddOnCard
                title="MAU: Monthly Active Users"
                price="$150 per 10K additional MAU"
                description="Scale as you grow — only pay for what you need. Your pricing includes a generous base of monthly active users (MAUs), but as your product adoption increases, you can seamlessly expand capacity with our MAU Add-On."
                features={[
                    "Flexible tiers for scaling teams",
                    "Predictable pricing as usage grows",
                    "No surprise overages or throttlings",
                    "Works across all features, workflows, and experiments"
                ]}
                note="Growth shouldn't be capped — add MAUs only when you need to."
            />
        </div>
    </section>
);

export default PlansSection;
