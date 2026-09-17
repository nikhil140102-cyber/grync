"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TeamSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const TeamSection = () => {
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

			tl.from(`.${styles.eyebrow}`, { y: 16, opacity: 0, duration: 0.5 })
				.from(
					`.${styles.paragraph}`,
					{ y: 14, opacity: 0, duration: 0.45, stagger: 0.1 },
					"-=0.25"
				)
				.from(
					`.${styles.photo}`,
					{ x: 40, opacity: 0, scale: 0.96, duration: 0.7 },
					"-=0.4"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				{/* ================= LEFT ================= */}
				<div className={styles.left}>
					<div className={styles.eyebrow}>WHO WE ARE</div>

					<p className={styles.paragraph}>
						A Kolkata-based startup, founded in 2025 and the team behind
						India&apos;s first Insights-to-Monetization platform.
					</p>

					<p className={styles.paragraph}>
						In plain terms: we help businesses turn customer data and
						product insights into real, measurable revenue, using AI and a
						product-led growth approach.
					</p>
				</div>

				{/* ================= RIGHT ================= */}
				<div className={styles.right}>
					{/* TODO: replace with your actual team photo */}
					<img
						src="/images/about/t1.png"
						alt="The grync.io team"
						className={styles.photo}
					/>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;