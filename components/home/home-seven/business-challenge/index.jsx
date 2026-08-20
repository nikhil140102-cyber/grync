"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Layers, Clock, Server, Star } from "lucide-react";
import styles from "./BusinessChallenge.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const stats = [
	{
		id: "upsell",
		theme: "green",
		iconSrc: "/images/newhome/b1.png",
		value: "50%+",
		description:
			"of upsell and cross-sell opportunities are missed revenue sitting unactioned in a company's own data.",
		source: "Gartner, Cross-Sell and Upsell Blueprint, 2025",
	},
	{
		id: "opex",
		theme: "blue",
		iconSrc: "/images/newhome/b2.png",
		value: "20\u201330%",
		description:
			"of operating expenses are lost to process failures that were visible in advance.",
		source: "McKinsey, Operational Efficiency Report, 2025",
	},
	{
		id: "delay",
		theme: "orange",
		iconSrc: "/images/newhome/b3.png",
		value: "3 day",
		description:
			"An average delay from a problem forming to a team acting on it.",
		source: "Forrester",
	},
	{
		id: "cost",
		theme: "red",
		iconSrc: "/images/newhome/b4.png",
		value: "$12.9M",
		description:
			"lost per organization per year to disconnected data.",
		source: "Data Management Association, analysis of 200 companies, 2025",
	},
];

const BusinessChallenge = () => {
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

			tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.55 })
				.from(
					`.${styles.heading}`,
					{ y: 34, opacity: 0, duration: 0.7 },
					"-=0.3"
				)
				.from(
					`.${styles.description}`,
					{ y: 20, opacity: 0, duration: 0.6 },
					"-=0.35"
				)
				.from(
					`.${styles.highlight}`,
					{ y: 12, opacity: 0, duration: 0.5 },
					"-=0.35"
				)
				.from(
					`.${styles.card}`,
					{
						y: 40,
						opacity: 0,
						scale: 0.94,
						duration: 0.7,
						stagger: 0.14,
						ease: "back.out(1.6)",
					},
					"-=0.2"
				)
				.from(
					`.${styles.cardIcon}`,
					{
						scale: 0,
						rotate: -30,
						duration: 0.5,
						stagger: 0.14,
						ease: "back.out(3)",
					},
					"-=0.6"
				)
				.from(
					`.${styles.footerPill}`,
					{ y: 20, opacity: 0, scale: 0.92, duration: 0.6 },
					"-=0.15"
				)
				.from(
					`.${styles.footerStar}`,
					{ scale: 0, rotate: -60, duration: 0.5, ease: "back.out(3)" },
					"-=0.3"
				);

			/* ambient loop — only once entrance finishes to avoid GSAP
			   overwrite conflicts with the entrance tween on the same props */
			tl.eventCallback("onComplete", () => {
				gsap.to(`.${styles.cardIcon}`, {
					y: -4,
					duration: 2,
					repeat: -1,
					yoyo: true,
					stagger: 0.2,
					ease: "sine.inOut",
				});

				gsap.to(`.${styles.footerStar}`, {
					rotate: 18,
					scale: 1.08,
					duration: 1.6,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				});
			});

			/* subtle lift on hover for each card */
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
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				<div className={styles.eyebrow}>THE BUSINESS CHALLENGE</div>

				<h2 className={styles.heading}>
					Everything you need to{" "}
					<span className={styles.highlightText}>know &amp; act on is</span>
					<br />
					already in your systems
				</h2>

				<p className={styles.description}>
					Right now, a customer is ready to buy. An account is about to
					leave. A process is about to breach an SLA. All of it is
					already recorded. None of it gets acted on until someone runs
					a report, reads it, decides it matters and finds the right
					owner. That chain takes days.
				</p>

				<p className={styles.highlight}>The moment does not wait for it.</p>

				<div className={styles.grid}>
				{stats.map((stat) => (
	<div
		key={stat.id}
		className={`${styles.card} ${styles[`theme-${stat.theme}`]}`}
	>
		<img src={stat.iconSrc} alt="" className={styles.cardIcon} />

		<strong className={styles.cardValue}>{stat.value}</strong>

		<p className={styles.cardDescription}>{stat.description}</p>

		<div className={styles.cardSource}>{stat.source}</div>
	</div>
))}
				</div>

				<div className={styles.footerPill}>
					<p>
						You are not missing the data.{" "}
						<span className={styles.footerRed}>
							You are missing the moment.
						</span>
					</p>
					<span className={styles.footerStar}>
						<Star size={18} fill="#f4602a" strokeWidth={0} />
					</span>
				</div>
			</div>
		</section>
	);
};

export default BusinessChallenge;