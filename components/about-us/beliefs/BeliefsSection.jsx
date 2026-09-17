"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BeliefsSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const beliefs = [
	{
		id: "01",
		text: "The data already exists. The hard part is acting in time.",
	},
	{
		id: "02",
		text: "Software should close the loop, not add another dashboard to check.",
	},
	{
		id: "03",
		text: "Your tools stay. We replace the slow chain between them.",
	},
	{
		id: "04",
		text: "Automation and control aren\u2019t a trade-off. You set the rules; we act inside them.",
	},
];

const BeliefsSection = () => {
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

			tl.from(`.${styles.eyebrow}`, { y: 16, opacity: 0, duration: 0.5 }).from(
				`.${styles.row}`,
				{ y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
				"-=0.25"
			);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				<div className={styles.eyebrow}>WHAT WE BELIEVE</div>

				<div className={styles.list}>
					{beliefs.map((b) => (
						<div key={b.id} className={styles.row}>
							<span className={styles.number}>{b.id}</span>
							<p className={styles.text}>{b.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BeliefsSection;