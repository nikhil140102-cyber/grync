"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ModalVideo from "react-modal-video";
import styles from "./HeroTwo.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(MotionPathPlugin);
}

const HeroTwo = () => {
	const rootRef = useRef(null);
	const cardRef = useRef(null);
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			/* ================= ENTRANCE TIMELINE ================= */

			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
			});

			tl.from(`.${styles.eyebrow}`, {
				y: 20,
				opacity: 0,
				duration: 0.6,
			})
				.from(
					`.${styles.titleLine}`,
					{
						y: 60,
						opacity: 0,
						duration: 0.8,
						stagger: 0.12,
					},
					"-=0.25"
				)
				.from(
					`.${styles.description}`,
					{ y: 20, opacity: 0, duration: 0.6 },
					"-=0.35"
				)
				.from(
					`.${styles.actions} > *`,
					{ y: 18, opacity: 0, duration: 0.55, stagger: 0.1 },
					"-=0.3"
				)
				.from(
					cardRef.current,
					{
						x: 90,
						opacity: 0,
						scale: 0.92,
						rotate: 3,
						duration: 1.1,
						ease: "power4.out",
					},
					"-=0.5"
				)
				.from(
					`.${styles.donut}`,
					{ opacity: 0, scale: 0.7, duration: 0.9, ease: "back.out(1.7)" },
					"-=0.9"
				)
				.from(
					`.${styles.cube}`,
					{ opacity: 0, y: -30, rotate: -20, duration: 0.9, ease: "back.out(1.7)" },
					"-=0.8"
				)
				/* draw the dashed connector lines */
				.to(
					`.${styles.connector}`,
					{
						strokeDashoffset: 0,
						duration: 1,
						stagger: 0.15,
						ease: "power2.inOut",
					},
					"-=0.6"
				)
				/* pop the four signal badges in */
				.from(
					`.${styles.badge}`,
					{
						opacity: 0,
						scale: 0.5,
						y: 14,
						duration: 0.6,
						stagger: 0.12,
						ease: "back.out(2.2)",
					},
					"-=0.9"
				)
				/* center brand badge */
				.from(
					`.${styles.centerBadge}`,
					{
						opacity: 0,
						scale: 0.6,
						duration: 0.7,
						ease: "back.out(2)",
					},
					"-=0.7"
				)
				.from(
					`.${styles.caption}`,
					{ opacity: 0, y: 10, duration: 0.5 },
					"-=0.3"
				);

			/* ================= AMBIENT / LOOPING ANIMATION ================= */

			gsap.to(`.${styles.glow}`, {
				scale: 1.18,
				opacity: 0.55,
				duration: 2.2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			gsap.to(`.${styles.ring}`, {
				rotate: 360,
				duration: 26,
				repeat: -1,
				ease: "none",
			});

			gsap.utils.toArray(`.${styles.badge}`).forEach((el, i) => {
				gsap.to(el, {
					y: i % 2 === 0 ? -10 : 10,
					duration: 2.4 + i * 0.3,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
					delay: 1.6,
				});
			});

			gsap.to(`.${styles.cube}`, {
				y: -12,
				rotate: 8,
				duration: 3.4,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			gsap.to(`.${styles.donut}`, {
				y: 10,
				rotate: -6,
				duration: 4,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			/* traveling pulse dots along each connector line */
			gsap.utils.toArray(`.${styles.pulseDot}`).forEach((dot, i) => {
				const path = dot.parentElement.querySelector(`.${styles.connector}`);
				if (!path) return;
				const len = path.getTotalLength();
				gsap.to(dot, {
					motionPath: {
						path,
						align: path,
						alignOrigin: [0.5, 0.5],
					},
					duration: 2.2,
					repeat: -1,
					delay: 1.8 + i * 0.4,
					ease: "power1.inOut",
				});
			});

			/* ================= MOUSE PARALLAX TILT ================= */

			const card = cardRef.current;
			const xTo = gsap.quickTo(card, "rotateY", { duration: 0.6, ease: "power3.out" });
			const yTo = gsap.quickTo(card, "rotateX", { duration: 0.6, ease: "power3.out" });

			const handleMove = (e) => {
				const rect = card.getBoundingClientRect();
				const px = (e.clientX - rect.left) / rect.width - 0.5;
				const py = (e.clientY - rect.top) / rect.height - 0.5;
				xTo(px * 10);
				yTo(py * -10);
			};

			const handleLeave = () => {
				xTo(0);
				yTo(0);
			};

			const rightCol = rootRef.current.querySelector(`.${styles.right}`);
			rightCol?.addEventListener("mousemove", handleMove);
			rightCol?.addEventListener("mouseleave", handleLeave);

			return () => {
				rightCol?.removeEventListener("mousemove", handleMove);
				rightCol?.removeEventListener("mouseleave", handleLeave);
			};
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.hero}>
			{/* channel="youtube" + videoId is the YouTube ID from a URL like
			    youtube.com/watch?v=VIDEO_ID_HERE — swap this placeholder
			    for your real video's ID before shipping 
				https://www.youtube.com/watch?v=DMuJzCS6YHw
				*/}
			<ModalVideo
				channel="youtube"
				videoId="ennl1yqXb40"
				isOpen={isVideoOpen}
				onClose={() => setIsVideoOpen(false)}
			/>

			<div className={styles.container}>
				{/* ================= LEFT ================= */}
				<div className={styles.left}>
					<div className={styles.eyebrow}>
						THE INTELLIGENCE SYSTEM TO EXECUTE ON YOUR DATA
					</div>

					<h1 className={styles.heading}>
						<span className={styles.titleLine}>
							<em>grync.io</em> helps you turn
						</span>
						<span className={styles.titleLine}>business signals into</span>
						<span className={`${styles.titleLine} ${styles.gradientText}`}>
							coordinated execution
						</span>
					</h1>

					<p className={styles.description}>
						We help enterprises reduce the time between an important
						business signal and the action required to respond to it.
					</p>

					<div className={styles.actions}>
						<Link href="https://calendly.com/nikhil-grync/30min" className={styles.primaryBtn}>
							Book a demo <span>→</span>
						</Link>
						<button
							type="button"
							onClick={() => setIsVideoOpen(true)}
							className={styles.secondaryBtn}
						>
							Watch how it works <span>→</span>
						</button>
					</div>
				</div>

				{/* ================= RIGHT ================= */}
				<div className={styles.right}>
					<div className={styles.donut} />
					<div className={styles.cube}>
						<span />
						<span />
						<span />
					</div>

					<div ref={cardRef} className={styles.card}>
						<div className={styles.cardTitlebar}>
							<span className={styles.dot} data-c="red" />
							<span className={styles.dot} data-c="yellow" />
							<span className={styles.dot} data-c="green" />
						</div>

						<div className={styles.cardBody}>
							<svg
								className={styles.linesSvg}
								viewBox="0 0 700 480"
								preserveAspectRatio="xMidYMid meet"
							>
								<path
									className={styles.connector}
									data-line="tl"
									d="M300,190 C245,164 210,152 178,128"
									fill="none"
								/>
								<path
									className={styles.connector}
									data-line="tr"
									d="M400,190 C455,164 490,152 522,128"
									fill="none"
								/>
								<path
									className={styles.connector}
									data-line="bl"
									d="M300,290 C245,314 210,326 178,350"
									fill="none"
								/>
								<path
									className={styles.connector}
									data-line="br"
									d="M400,290 C455,314 490,326 522,350"
									fill="none"
								/>
							</svg>

							<div className={styles.badgesWrap}>
								<div className={`${styles.badge} ${styles.badgeTL}`}>
									<span className={`${styles.badgeIcon} ${styles.iconRed}`}>
										<img
											src="/images/newhome/h1.png"
											alt=""
											className={styles.badgeIconImg}
										/>
									</span>
									<strong>Action triggered</strong>
									<i className={`${styles.pulseDot} ${styles.dotRed}`} />
								</div>

								<div className={`${styles.badge} ${styles.badgeTR}`}>
									<span className={`${styles.badgeIcon} ${styles.iconGreen}`}>
										<img
											src="/images/newhome/h2.png"
											alt=""
											className={styles.badgeIconImg}
										/>
									</span>
									<strong>Signal detected</strong>
									<i className={`${styles.pulseDot} ${styles.dotGreen}`} />
								</div>

								<div className={`${styles.badge} ${styles.badgeBL}`}>
									<span className={`${styles.badgeIcon} ${styles.iconOrange}`}>
										<img
											src="/images/newhome/h3.png"
											alt=""
											className={styles.badgeIconImg}
										/>
									</span>
									<strong>Risk flagged</strong>
									<i className={`${styles.pulseDot} ${styles.dotOrange}`} />
								</div>

								<div className={`${styles.badge} ${styles.badgeBR}`}>
									<span className={`${styles.badgeIcon} ${styles.iconBlue}`}>
										<img
											src="/images/newhome/h4.png"
											alt=""
											className={styles.badgeIconImg}
										/>
									</span>
									<strong>Revenue recovered</strong>
									<i className={`${styles.pulseDot} ${styles.dotBlue}`} />
								</div>
							</div>

							<div className={styles.centerBadge}>
								<span className={styles.ring} />
								<span className={styles.glow} />
								<div className={styles.centerInner}>
									<img
										src="/images/logo/Grync_Logo_Black%201.png"
										alt="grync.io"
										className={styles.centerMark}
									/>
									
								</div>
							</div>

							<p className={styles.caption}>
								Works with the tools you already run. No data
								migration. No new pipelines.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroTwo;