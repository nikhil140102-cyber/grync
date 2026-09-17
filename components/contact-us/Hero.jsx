"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
	const rootRef = useRef(null);
	const photoRef = useRef(null);

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
					photoRef.current,
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
					<div className={styles.eyebrow}>LETS CLOSE THE GAP</div>

					<h1 className={styles.heading}>
						<span className={styles.headingLine}>
							Your system already know.
						</span>
						<span className={`${styles.headingLine} ${styles.gradientText}`}>
							Let&apos;s act on it.
						</span>
					</h1>

					<p className={styles.description}>
						Tell us where execution slows down. We&apos;ll show you the
						signals already sitting across your stack&mdash;and the
						moments grync.io can turn into coordinated action.
					</p>
				</div>

				{/* ================= RIGHT ================= */}
				{/* single combined image — photo + decorative shapes are
				    already baked into one exported asset, rather than
				    layered as separate elements */}
				<div className={styles.right}>
					<img
						ref={photoRef}
						src="/images/contact/photo.png"
						alt="grync.io team member"
						className={styles.photo}
					/>
				</div>
			</div>
		</section>
	);
};

export default ContactHero;