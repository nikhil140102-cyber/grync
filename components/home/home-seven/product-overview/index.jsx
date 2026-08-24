"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProductOverview.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

/* visualHeight is a per-card, data-driven size (in px) applied as an
   inline style on the <img> — set individually here instead of relying
   only on the shared CSS class, so each card's image height can be
   controlled directly regardless of anything else in the cascade. */
const cards = [
	{
		id: "signal-detection",
		theme: "maroon",
		icon: "/images/newhome/ic1.png",
		title: "Cross-system signal detection",
		description:
			"grync.io continuously reads what is happening across every connected system and recognises when signals that look unrelated add up to something that matters.",
		visual: "/images/newhome/c1.png",
		visualHeight: 210,
	},
	{
		id: "agentic-decisioning",
		theme: "teal",
		icon: "/images/newhome/ic2.png",
		title: "Agentic decisioning",
		description:
			"grync.io goes past flagging. It determines whether the pattern warrants action, what is causing it, who owns it and how long the window stays open.",
		visual: "/images/newhome/c2.png",
		visualHeight: 210,
	},
	{
		id: "automated-processes",
		theme: "orange",
		icon: "/images/newhome/ic3.png",
		title: "Automated processes",
		description:
			"grync.io runs the whole response itself. Notify the owner, launch the workflow, write the result back to your systems. No person has to start it.",
		visual: "/images/newhome/c3.png",
		visualHeight: 210,
	},
	{
		id: "executive-intelligence",
		theme: "blue",
		icon: "/images/newhome/ic4.png",
		title: "Executive decision intelligence",
		description:
			"A current picture of revenue, risk and operational health across the business, assembled continuously so leaders decide on what is true now.",
		visual: "/images/newhome/c4.png",
		visualHeight: 170,
	},
	{
		id: "operational-coordination",
		theme: "green",
		icon: "/images/newhome/ic5.png",
		title: "Operational coordination",
		description:
			"The right person gets a short brief where they already work, not another dashboard to log into. grync.io assigns the task and routes it for approval where you want a human decision first.",
		visual: "/images/newhome/c5.png",
		visualHeight: 170,
	},
	{
		id: "customer-campaigns",
		theme: "magenta",
		icon: "/images/newhome/ic6.png",
		title: "Customer campaigns",
		description:
			"Campaigns that fire on customer readiness, not on a calendar. When the signals confirm the moment, grync.io triggers the right offer while managing consent and SLAs, with the reason attached.",
		visual: "/images/newhome/c6.png",
		visualHeight: 170,
	},
];

const ProductOverview = () => {
	const rootRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top 78%",
					once: true,
				},
			});

			tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.5 })
				.from(
					`.${styles.heading}`,
					{ y: 28, opacity: 0, duration: 0.65 },
					"-=0.25"
				)
				.from(
					`.${styles.description}`,
					{ y: 16, opacity: 0, duration: 0.5 },
					"-=0.35"
				)
				.from(
					`.${styles.card}`,
					{
						y: 34,
						opacity: 0,
						scale: 0.96,
						duration: 0.6,
						stagger: 0.1,
						ease: "back.out(1.6)",
					},
					"-=0.15"
				)
				.from(
					`.${styles.cardIcon}`,
					{
						scale: 0,
						rotate: -20,
						opacity: 0,
						duration: 0.5,
						stagger: 0.1,
						ease: "back.out(2.6)",
					},
					"-=0.5"
				)
				.from(
					`.${styles.cardVisual}`,
					{
						y: 18,
						opacity: 0,
						scale: 0.96,
						duration: 0.55,
						stagger: 0.1,
						ease: "power2.out",
					},
					"-=0.35"
				);

			/* deferred to onComplete to avoid GSAP overwrite:"auto" fighting
			   the entrance tween on the same elements/properties */
			tl.eventCallback("onComplete", () => {
				gsap.to(`.${styles.cardIcon}`, {
					y: -3,
					duration: 2,
					repeat: -1,
					yoyo: true,
					stagger: 0.2,
					ease: "sine.inOut",
				});
			});

			gsap.utils.toArray(`.${styles.card}`).forEach((card) => {
				const visual = card.querySelector(`.${styles.cardVisual}`);
				const enter = () => {
					gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" });
					if (visual)
						gsap.to(visual, {
							scale: 1.04,
							duration: 0.45,
							ease: "power2.out",
						});
				};
				const leave = () => {
					gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
					if (visual)
						gsap.to(visual, { scale: 1, duration: 0.4, ease: "power2.out" });
				};
				card.addEventListener("mouseenter", enter);
				card.addEventListener("mouseleave", leave);
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	// split into two independent groups so each row's cards live in their
	// own grid container — no shared row-sizing context between them at all
	const rowOne = cards.slice(0, 3);
	const rowTwo = cards.slice(3);

	const renderCard = (c) => (
		<div
			key={c.id}
			className={`${styles.card} ${styles[`theme-${c.theme}`]}`}
		>
			<img src={c.icon} alt="" className={styles.cardIcon} />

			<h3 className={styles.cardTitle}>{c.title}</h3>
			<p className={styles.cardDescription}>{c.description}</p>

			<img
				src={c.visual}
				alt=""
				className={styles.cardVisual}
				style={{
					height: `${c.visualHeight}px`,
					minHeight: `${c.visualHeight}px`,
					maxHeight: `${c.visualHeight}px`,
				}}
			/>
		</div>
	);

	return (
		<section ref={rootRef} className={styles.section} id="Productoverview">
			<div className={styles.container}>
				<div className={styles.eyebrow}>PRODUCT OVERVIEW</div>

				<h2 className={styles.heading}>
					One layer. <span className={styles.highlight}>Everything it takes</span> to get
					<br />
					from signal to action.
				</h2>

				<p className={styles.description}>
					grync.io doesn&apos;t stop at the insight. Once it spots the moment, it
					acts, notifies the owner, assigns or routes for approval, launches
					the workflow, triggers the campaign, and writes back to your
					systems.
				</p>

				<div className={styles.gridStack}>
					<div className={styles.grid}>{rowOne.map(renderCard)}</div>
					<div className={styles.grid}>{rowTwo.map(renderCard)}</div>
				</div>
			</div>
		</section>
	);
};

export default ProductOverview;