"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import styles from "./FaqSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
	{
		id: "q1",
		question: "Q1: What does grync.io actually do, in one sentence?",
		answer:
			"It’s the AI-powered execution layer for your operations. It watches all your business systems at once, recognizes the moments that matter, and triggers the right action automatically: the message to the customer and the brief to your team, at the same time.",
	},
	{
		id: "q2",
		question: "Q2: Does grync.io replace our CRM, BI or operations tools?",
		answer:
			"No. grync.io sits above them. Your teams keep working in the tools they use today. What grync.io replaces is the slow manual chain between those tools, not the tools themselves.",
	},
	{
		id: "q3",
		question: "Q3: How is this different from a BI or analytics platform?",
		answer:
			"iNo. grync.io sits above them. Your teams keep working in the tools they use today. What grync.io replaces is the slow manual chain between those tools, not the tools themselves. ",
	},
	{
		id: "q4",
		question: "Q4: How is this different from an automation or integration tool?",
		answer:
			"Automation tools run rules you write in advance: if this, then that. grync.io works out which combinations of signals matter, including combinations nobody thought to write a rule for and then acts on them. ",
	},
	{
		id: "q5",
		question: "Q5: What kind of actions can grync.io take?",
		answer:
			"It notifies the right owner, assigns a task or routes it for approval, launches a workflow, triggers a campaign, and writes the result back to your systems automatically, and inside the limits you set. ",
	},
	{
		id: "q6",
		question: "Q6: How long before we see value?",
		answer:
			"Because there is nothing to migrate or rebuild, connection is measured in days rather than months.  ",
	},
	{
		id: "q7",
		question: "Q7: Do we need a technical team to run it?",
		answer:
			"No. Connecting your systems takes your IT team a short setup at the start. After that there is nothing to build or maintain, and the people acting on what grync surfaces are your business teams, not engineers. ",
	},
	{
		id: "q8",
		question: "Q8: What if grync.io acts on something it should not?",
		answer:
			"You define the boundaries. You choose which actions run automatically, which require human approval, what limits apply and who is notified. Every action is logged and auditable.",
	},
	{
		id: "q9",
		question: "Q9: What does \"insights to actionability\" mean?",
		answer:
			"Most platforms stop at the insight and leave the acting to you. grync.io closes the last step, the insight becomes the action, automatically. ",
	},
	{
		id: "q10",
		question: "Q10: Do we need to move our data?",
		answer:
			"No. grync.io reads from your systems where they already are. There is no migration, no warehouse to build and no pipeline for your team to maintain. ",
	}
];

const FaqSection = () => {
	const rootRef = useRef(null);
	const [openId, setOpenId] = useState("q1");

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
					{ y: 26, opacity: 0, duration: 0.6 },
					"-=0.25"
				)
				.from(
					`.${styles.item}`,
					{ y: 20, opacity: 0, duration: 0.5, stagger: 0.06 },
					"-=0.2"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	const toggle = (id) => {
		setOpenId((current) => (current === id ? null : id));
	};

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				<div className={styles.eyebrow}>FAQ</div>
				<h2 className={styles.heading}>Frequently Asked Questions</h2>

				<div className={styles.list}>
					{faqs.map((faq) => {
						const isOpen = openId === faq.id;
						return (
							<div
								key={faq.id}
								className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
							>
								<button
									type="button"
									className={styles.question}
									onClick={() => toggle(faq.id)}
									aria-expanded={isOpen}
								>
									<span>{faq.question}</span>
									<ChevronDown
										size={18}
										className={`${styles.chevron} ${
											isOpen ? styles.chevronOpen : ""
										}`}
									/>
								</button>

								<div
									className={styles.panelWrapper}
									style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
								>
									<div className={styles.panelInner}>
										<p className={styles.answer}>{faq.answer}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;