"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProblemSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const ProblemSection = () => {
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
					`.${styles.image}`,
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
					<div className={styles.eyebrow}>THE PROBLEM WE KEPT SEEING</div>

					<p className={styles.paragraph}>
						The overdue job. The expiring contract. The customer who&apos;s
						ready. Your systems already know, but each one sees only its
						slice, and no one sees all three until the window&apos;s
						closed.
					</p>

					<p className={styles.paragraph}>
						We didn&apos;t think that was a data problem. It was an
						action problem. The slow, human chain between a signal and
						someone doing something about it.
					</p>
				</div>

				{/* ================= RIGHT ================= */}
				<div className={styles.right}>
					{/* TODO: replace with your actual exported diagram visual */}
					<img
						src="/images/about/p1.png"
						alt="Each system sees one slice, grync.io aggregates and triggers"
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	);
};

export default ProblemSection;