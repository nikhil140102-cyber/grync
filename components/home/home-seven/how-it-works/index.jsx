"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoreHorizontal } from "lucide-react";
import styles from "./HowItWorks.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const steps = [
	{
		id: "connect",
		theme: "indigo",
		iconSrc: "/images/newhome/social_16389869 1.png",
		step: "STEP 01",
		title: "Connect",
		highlight: "grync.io reads from the systems you already run.",
		description:
			"Nothing moves, nothing changes. It simply connects the signals already sitting across your CRM, marketing, sales, and other tools.",
	},
	{
		id: "pattern",
		theme: "magenta",
		iconSrc: "/images/newhome/search_16261209 1.png",
		step: "STEP 02",
		title: "See the pattern",
		highlight: "It joins signals across systems that mean nothing on their own.",
		description:
			"A website visit, sales activity, engagement, or account change becomes a meaningful picture when connected.",
	},
	{
		id: "decide",
		theme: "purple",
		iconSrc: "/images/newhome/Group.png",
		step: "STEP 03",
		title: "Decide what matters",
		highlight:
			"It works out what matters, who owns it, and how long the window stays open.",
		description:
			"So your teams know which signal deserves attention now, rather than reacting to every notification.",
	},
	{
		id: "act",
		theme: "orange",
		iconSrc: "/images/newhome/Group (1).png",
		step: "STEP 04",
		title: "Act",
		highlight: "grync.io turns signals into action.",
		description:
			"Notifying the right owner, triggering workflows, and writing outcomes back to your systems.",
	},
];

const HowItWorks = () => {
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
					`.${styles.card}`,
					{
						y: 36,
						opacity: 0,
						scale: 0.95,
						duration: 0.6,
						stagger: 0.13,
						ease: "back.out(1.6)",
					},
					"-=0.15"
				)
				.from(
					`.${styles.cardIcon}`,
					{
						scale: 0,
						rotate: -20,
						duration: 0.5,
						stagger: 0.13,
						ease: "back.out(2.6)",
					},
					"-=0.55"
				)
				.from(
					`.${styles.rulesBar}`,
					{ y: 24, opacity: 0, duration: 0.6 },
					"-=0.1"
				)
				.from(
					`.${styles.rulesIcon}`,
					{ scale: 0, rotate: -15, duration: 0.5, ease: "back.out(2.6)" },
					"-=0.3"
				);

			/* deferred to onComplete to avoid GSAP overwrite:"auto" fighting
			   the entrance tween on the same elements/properties */
			tl.eventCallback("onComplete", () => {
				gsap.to(`.${styles.cardIcon}`, {
					y: -4,
					duration: 2,
					repeat: -1,
					yoyo: true,
					stagger: 0.2,
					ease: "sine.inOut",
				});
			});

			gsap.utils.toArray(`.${styles.card}`).forEach((card) => {
				const enter = () =>
					gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" });
				const leave = () =>
					gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
				card.addEventListener("mouseenter", enter);
				card.addEventListener("mouseleave", leave);
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section} id="HowGryncworks">
			<div className={styles.container}>
				<div className={styles.eyebrow}>HOW GRYNC WORKS</div>

				<h2 className={styles.heading}>
					Four steps, from <span className={styles.highlight}>signal to action</span>.
				</h2>

				<div className={styles.grid}>
					{steps.map((s) => (
						<div key={s.id} className={styles.card}>
							<div className={styles.cardTop}>
								<span
									className={`${styles.stepBadge} ${styles[`theme-${s.theme}`]}`}
								>
									{s.step}
								</span>
								<MoreHorizontal size={16} className={styles.dots} />
							</div>

							<img
								src={s.iconSrc}
								alt={s.title}
								className={styles.cardIcon}
							/>

							<h3 className={styles.cardTitle}>{s.title}</h3>

							<p className={styles.cardHighlight}>{s.highlight}</p>

							<p className={styles.cardDescription}>{s.description}</p>
						</div>
					))}
				</div>

				<div className={styles.rulesBar}>
					<span className={styles.rulesIcon}>
						<img
							src="/images/newhome/shape_16384764 1.png"
							alt=""
							className={styles.rulesIconImg}
						/>
					</span>
					<div className={styles.rulesText}>
						<p className={styles.rulesTitle}>
							You set the rules. grync.io acts inside limits you define.
						</p>
						<p className={styles.rulesDescription}>
							Which actions run automatically, which need human approval,
							who gets notified and what is off-limits entirely. Every
							decision and every action is logged and auditable.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;