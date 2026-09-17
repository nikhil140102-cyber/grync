"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FinalCta.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const FinalCta = () => {
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

			tl.from(`.${styles.heading}`, { y: 24, opacity: 0, duration: 0.6 })
				.from(
					`.${styles.description}`,
					{ y: 16, opacity: 0, duration: 0.5 },
					"-=0.3"
				)
				.from(
					`.${styles.ctaButton}`,
					{ y: 14, opacity: 0, scale: 0.94, duration: 0.5, ease: "back.out(1.8)" },
					"-=0.25"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.heading}>See how grync.io works</h2>

				<p className={styles.description}>
					Schedule a personalized walkthrough using dummy workflows or
					connect to your staging systems to see the core engine in
					action.
				</p>

				<Link href="/contact-us-page" className={styles.ctaButton}>
					Book a demo <span>→</span>
				</Link>
			</div>
		</section>
	);
};

export default FinalCta;
