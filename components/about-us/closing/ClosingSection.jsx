"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ClosingSection.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const ClosingSection = () => {
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
					`.${styles.heading}`,
					{ y: 24, opacity: 0, duration: 0.6 },
					"-=0.25"
				)
				.from(
					`.${styles.panel}`,
					{ y: 20, opacity: 0, duration: 0.55 },
					"-=0.25"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section}>
			<div className={styles.container}>
				<div className={styles.eyebrow}>WHERE THIS IS GOING</div>

				<h2 className={styles.heading}>
					Every industry has the same gap between a signal and the
					action it should trigger. We&apos;re building the layer that
					closes it.
				</h2>

				<div className={styles.panel}>
					<p className={styles.panelText}>
						Want to see it on your own data?
					</p>

					<Link href="https://outlook.office.com/bookwithme/user/a6861de85f98441aaa5e5134a58b87a3@grync.io/meetingtype/wDeA_LiHpEK46Qmt7Mn2FA2?anonymous&ismsaljsauthenabled&ep=mcard" className={styles.ctaButton}>
						Book a demo
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ClosingSection;