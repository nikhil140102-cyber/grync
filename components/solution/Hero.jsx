"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SolutionHero.module.css";

const SolutionHero = () => {
	const rootRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
			});

			tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.55 })
				.from(
					`.${styles.headingLine}`,
					{ y: 40, opacity: 0, duration: 0.7, stagger: 0.1 },
					"-=0.25"
				)
				.from(
					`.${styles.description}`,
					{ y: 18, opacity: 0, duration: 0.55 },
					"-=0.3"
				)
				.from(
					`.${styles.ctaButton}`,
					{ y: 14, opacity: 0, duration: 0.5 },
					"-=0.3"
				)
				.from(
					imageRef.current,
					{ x: 70, opacity: 0, scale: 0.94, duration: 0.9 },
					"-=0.5"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.hero}>
			<div className={styles.container}>
				{/* ================= LEFT ================= */}
				<div className={styles.left}>
					<div className={styles.eyebrow}>SOLUTIONS</div>

					<h1 className={styles.heading}>
						<span className={styles.headingLine}>One platform.</span>
						<span className={`${styles.headingLine} ${styles.gradientText}`}>
							Every signal turned into the right action.
						</span>
					</h1>

					<p className={styles.description}>
						See how grync.io leverages the business signals already
						moving through your systems to improve revenue and
						operational outcomes.
					</p>

					<Link href="/contact-us-page" className={styles.ctaButton}>
						Book a demo <span>→</span>
					</Link>
				</div>

				{/* ================= RIGHT ================= */}
				<div className={styles.right}>
					{/* TODO: replace with your actual exported hero visual */}
					<img
						ref={imageRef}
						src="/images/solution/hero.png"
						alt="grync.io business outcomes dashboard"
						className={styles.heroImage}
					/>
				</div>
			</div>
		</section>
	);
};

export default SolutionHero;
