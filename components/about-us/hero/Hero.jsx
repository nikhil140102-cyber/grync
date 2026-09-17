"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
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
					{ x: 60, opacity: 0, scale: 0.95, duration: 0.9 },
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
					<div className={styles.eyebrow}>ABOUT US</div>

					<h1 className={styles.heading}>
						<span className={styles.headingLine}>
							We close the gap between
						</span>
						<span className={styles.headingLine}>
							<span className={styles.orangeText}>knowing</span> and{" "}
							<span className={styles.redText}>doing</span>
						</span>
					</h1>

					<p className={styles.description}>
						grync.io is the AI-powered execution layer for enterprise
						operations. Most companies already have the data to act. They
						just act on it too late.
					</p>

					<Link href="https://outlook.office.com/bookwithme/user/a6861de85f98441aaa5e5134a58b87a3@grync.io/meetingtype/wDeA_LiHpEK46Qmt7Mn2FA2?anonymous&ismsaljsauthenabled&ep=mcard" className={styles.ctaButton}>
						Book a demo
					</Link>
				</div>

				{/* ================= RIGHT ================= */}
				{/* single combined image — diagram panel + decorative
				    torus/cube are already composited into one exported
				    asset, same pattern used for the Contact Us hero */}
				<div className={styles.right}>
					<img
						ref={imageRef}
						src="/images/about/s1.png"
						alt="grync.io turns scattered signals into one decisive action"
						className={styles.heroImage}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutHero;