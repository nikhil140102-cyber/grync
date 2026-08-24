"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BusinessOutcomes.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const outcomes = [
	{
		id: "revenue",
		value: "2\u20135x",
		description: "more revenue from the customers you already have",
	},
	{
		id: "cost",
		value: "4x",
		description: "lower cost when you act before the problem lands",
	},
	{
		id: "lag",
		value: "0",
		description: "Lag between what's happening and what you know",
	},
];

const BusinessOutcomes = () => {
	const rootRef = useRef(null);

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
					{ y: 30, opacity: 0, duration: 0.7 },
					"-=0.25"
				)
				.from(
					`.${styles.card}`,
					{
						y: 34,
						opacity: 0,
						scale: 0.94,
						duration: 0.6,
						stagger: 0.14,
						ease: "back.out(1.7)",
					},
					"-=0.2"
				)
				.from(
					`.${styles.value}`,
					{ opacity: 0, y: 12, duration: 0.4, stagger: 0.14 },
					"-=0.4"
				);

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
				<div className={styles.eyebrow}>BUSINESS OUTCOMES</div>

				<h2 className={styles.heading}>
					What changes when your systems
					
					<span className={styles.highlight}> finally work together</span>.
				</h2>

				<div className={styles.grid}>
					{outcomes.map((o) => (
						<div key={o.id} className={styles.card}>
							<strong className={styles.value}>{o.value}</strong>
							<p className={styles.description}>{o.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BusinessOutcomes;