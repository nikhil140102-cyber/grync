"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import styles from "./TabContent.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

/* Only "operational" has real copy, taken directly from the reference
   design. The other four tabs are stubbed with placeholder content so
   the panel doesn't break when clicked — replace each with real copy
   and a real diagram image before shipping.
   The right-side diagram is now a single image per tab instead of a
   hand-built signals/hub/arrows layout. */
export const tabContent = {
	operational: {
		eyebrow: "Operational Risk & Performance",
		heading: "See the operational risk forming and act before it costs you",
		description:
			"Every bottleneck and process failure announces itself first. grync.io connects those signals across your systems, routes the risk to the right owner, and escalates only when it needs to, before it becomes a fire drill.",
		image: "/images/solution/t1.png",
		tableIntro: "Signals it reads \u2192 action it fires:",
		tableRows: [
			{
				moment: "Process slowing or stalling",
				action: "Bottleneck flagged and assigned to the owner before it spreads.",
			},
			{
				moment: "SLA or deadline at risk",
				action: "Escalated to the right person while there is still time to act.",
			},
			{
				moment: "Approval stuck in the queue",
				action: "Routed for approval automatically, so work does not sit idle.",
			},
			{
				moment: "The same failure recurring",
				action: "Pattern surfaced for process improvement, not just another one-off fix.",
			},
		],
		footerBold: "Operational risk caught and routed the moment it forms",
		footerRed: "- assigned, approved or escalated, inside your rules.",
	},
	churn: {
		eyebrow: "Reduce Churn",
		heading: "Catch the churn signal weeks before the cancel button",
		description:
			"Most churn is predictable, the signals show up long before the decision. grync.io catches them early and briefs the owner while there is still time to act.",
		image: "/images/solution/t2.png",
		tableIntro: "Signals it reads \u2192 action it fires:",
		tableRows: [
			{
				moment: "Usage decline across the account",
				action: "Owner alerted before the renewal, with the reason and the accounts.",
			},
			{
				moment: "Support sentiment turning negative",
				action: "Risk flagged and routed to the right team to intervene.",
			},
			{
				moment: "Champion goes quiet or leaves",
				action: "Relationship risk surfaced while a new contact can still be built.",
			},
			{
				moment: "Renewal approaching with low health",
				action: "Prioritized and escalated for a save play while the window is open.",
			},
		],
		footerBold: "Churn caught while it is still preventable, not confirmed after it happens.",
		footerRed: "",
	},
	activation: {
		eyebrow: "Improve User Activation",
		heading: "Get every new user to their first win, before they drift",
		description:
			"Activation is a race against the first week. grync.io watches each new user's path to value and steps in the moment they stall, so more of them reach the point of no return.",
		image: "/images/solution/t3.png",
		tableIntro: "Signals it reads \u2192 action it fires:",
		tableRows: [
			{
				moment: "Signup with no first action",
				action: "Guided prompt or nudge fired to move them to the first step.",
			},
			{
				moment: "Stuck at a setup step",
				action: "Contextual help or a human touch triggered at the point of friction.",
			},
			{
				moment: "Reached first value",
				action: "Moment marked. Momentum built on with the next best step.",
			},
			{
				moment: "Team invited but inactive",
				action: "Owner assigned to activate the wider account, not just one user.",
			},
		],
		footerBold:
			"More users reaching their first win, caught at the moment they would have dropped.",
		footerRed: "",
	},
	expansion: {
		eyebrow: "Grow Expansion Revenue",
		heading: "Expand the account the day it\u2019s ready, not at renewal",
		description:
			"The best expansion moment is when usage says yes, not when the contract comes up. grync.io catches that moment across your systems and fires the play while intent is live.",
		image: "/images/solution/t4.png",
		tableIntro: "Signals it reads \u2192 action it fires:",
		tableRows: [
			{
				moment: "Approaching plan or usage limits",
				action: "Upgrade play triggered, or owner briefed, while the need is felt.",
			},
			{
				moment: "Adding users or teams",
				action: "Expansion flagged and routed to the right owner to act on.",
			},
			{
				moment: "Leaning on premium-tier features",
				action: "Contextual upgrade offer fired with the reason attached.",
			},
			{
				moment: "Multiple buying signals aligned",
				action: "Same-day play to the customer and a brief to the account owner.",
			},
		],
		footerBold: "Expansion fired on readiness, not on the renewal calendar.",
		footerRed: "",
	},
	lifecycle: {
		eyebrow: "Customer Lifecycle",
		heading: "Act at every stage of the lifecycle, not just at the quarterly review",
		description:
			"From onboarding to renewal, each stage sends signals that decide what happens next. grync.io reads them across your systems and acts the moment an account is ready to move forward, or at risk of slipping back.",
		image: "/images/solution/t5.png",
		tableIntro: "Signals it reads \u2192 action it fires:",
		tableRows: [
			{
				moment: "Early stage stalling (onboarding/adoption)",
				action: "Owner assigned to step in before the account cools.",
			},
			{
				moment: "Mid-lifecycle risk building",
				action: "Health shift surfaced and escalated with the reason and the play.",
			},
			{
				moment: "Account turns expansion-ready",
				action: "Flagged and routed to the right owner while the opportunity is open.",
			},
			{
				moment: "Renewal approaching",
				action: "Prioritized, with the full lifecycle context written back for the owner.",
			},
		],
		footerBold:
			"Every stage of the lifecycle acted on in the moment, not reviewed after it has already moved.",
		footerRed: "",
	},
};

const TabContent = ({ activeId }) => {
	const panelRef = useRef(null);
	/* tracks whether the scroll-triggered first entrance has already
	   played, so the tab-switch crossfade (below) doesn't also fire —
	   and potentially conflict with — that same initial reveal */
	const hasEnteredRef = useRef(false);
	const data = tabContent[activeId] || tabContent.operational;

	/* one-time scroll-triggered entrance, matching the pattern used by
	   every other section on the site (fires once, ~80% into view) */
	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: panelRef.current,
					start: "top 80%",
					once: true,
				},
				onComplete: () => {
					hasEnteredRef.current = true;
				},
			});

			tl.from(`.${styles.eyebrow}`, { y: 16, opacity: 0, duration: 0.5 })
				.from(
					`.${styles.heading}`,
					{ y: 24, opacity: 0, duration: 0.6 },
					"-=0.25"
				)
				.from(
					`.${styles.description}`,
					{ y: 16, opacity: 0, duration: 0.5 },
					"-=0.3"
				)
				.from(
					`.${styles.diagramImage}`,
					{ x: 40, opacity: 0, scale: 0.96, duration: 0.7 },
					"-=0.5"
				)
				.from(
					`.${styles.tableIntro}`,
					{ y: 14, opacity: 0, duration: 0.4 },
					"-=0.15"
				)
				.from(
					`.${styles.tableCard}`,
					{ y: 20, opacity: 0, duration: 0.5 },
					"-=0.2"
				)
				.from(
					`.${styles.tableRow}`,
					{ opacity: 0, y: 8, duration: 0.35, stagger: 0.06 },
					"-=0.3"
				)
				.from(
					`.${styles.footerPill}`,
					{ y: 14, opacity: 0, scale: 0.96, duration: 0.5 },
					"-=0.15"
				);
		}, panelRef);

		return () => ctx.revert();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/* crossfade the whole panel on every subsequent tab switch — the
	   very first mount is skipped here since the scroll-triggered
	   entrance above already handles that reveal */
	useEffect(() => {
		if (!hasEnteredRef.current || !panelRef.current) return;
		gsap.fromTo(
			panelRef.current,
			{ opacity: 0, y: 12 },
			{ opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
		);
	}, [activeId]);

	return (
		<div ref={panelRef} className={styles.panel}>
			<div className={styles.topGrid}>
				{/* ================= LEFT ================= */}
				<div className={styles.left}>
					<span className={styles.eyebrow}>{data.eyebrow}</span>
					<h2 className={styles.heading}>{data.heading}</h2>
					<p className={styles.description}>{data.description}</p>
				</div>

				{/* ================= RIGHT: DIAGRAM IMAGE ================= */}
				<div className={styles.right}>
					{/* TODO: replace with your actual exported diagram image
					    for this tab */}
					<img
						src={data.image}
						alt={`${data.eyebrow} diagram`}
						className={styles.diagramImage}
					/>
				</div>
			</div>

			{/* ================= TABLE ================= */}
			<p className={styles.tableIntro}>{data.tableIntro}</p>

			<div className={styles.tableCard}>
				<div className={styles.tableHeaderRow}>
					<span>The moment</span>
					<span>What grync.io does</span>
				</div>
				{data.tableRows.map((row, i) => (
					<div key={i} className={styles.tableRow}>
						<span className={styles.tableMoment}>{row.moment}</span>
						<span className={styles.tableAction}>{row.action}</span>
					</div>
				))}
			</div>

			{/* ================= FOOTER PILL ================= */}
			<div className={styles.footerPill}>
				<p>
					{data.footerBold}
					{data.footerRed && (
						<span className={styles.footerRed}> {data.footerRed}</span>
					)}
				</p>
				<span className={styles.footerStar}>
					<Star size={18} fill="#f4602a" strokeWidth={0} />
				</span>
			</div>
		</div>
	);
};

export default TabContent;
