"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SolutionSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const SolutionSection = () => {
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
					<div className={styles.eyebrow}>SO WE BUILT GRYNC.IO</div>

					<p className={styles.paragraph}>
						grync.io connects to the systems you already run, no
						migration. It watches the signals, spots when they add up to
						something worth acting on, and then does the part everyone
						else leaves to you: it acts. The right person gets the alert,
						with context, and the response kicks off in the tools they
						already use.
					</p>

					<p className={styles.paragraph}>
						And you stay in control. You decide what runs automatically
						and what waits for a human. Every action is logged.
					</p>
				</div>

				{/* ================= RIGHT ================= */}
				<div className={styles.right}>
					{/* TODO: replace with your actual exported dashboard visual */}
					<img
						src="/images/about/s2.png"
						alt="grync.io recent signal matches dashboard"
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	);
};

export default SolutionSection;