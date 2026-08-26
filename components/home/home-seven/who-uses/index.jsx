"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import styles from "./WhoUsesGrync.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

/* Each tab's dashboard view is a real screenshot, not a hand-built UI —
   swap these placeholder paths for your actual exported images. */
const tabs = [
	{
		id: "ceo",
		label: "CEO",
		title: "CEO",
		description:
			"See the business as it is today, not as it was three days ago.",
		url: "app.platform.io/dashboard/executive-ceo",
		image: "/images/newhome/s1.png",
	},
	{
		id: "coo",
		label: "COO",
		title: "COO",
		description:
			"Every operational risk and bottleneck, surfaced before it becomes a fire drill.",
		url: "app.platform.io/dashboard/executive-coo",
		image: "/images/newhome/s2.png",
	},
	{
		id: "cto",
		label: "CTO",
		title: "CTO",
		description:
			"A live picture of system health and integration status across every connected tool.",
		url: "app.platform.io/dashboard/executive-cto",
		image: "/images/newhome/s3.png",
	},
	{
		id: "cro-cbo",
		label: "CRO/CBO",
		title: "CRO/CBO",
		description:
			"Pipeline risk and revenue signals in one view, so nothing slips between systems.",
		url: "app.platform.io/dashboard/executive-cro",
		image: "/images/newhome/s4.png",
	},
	{
		id: "cmo",
		label: "CMO",
		title: "CMO",
		description:
			"Campaign readiness and customer signals, connected to what your other teams already know.",
		url: "app.platform.io/dashboard/executive-cmo",
		image: "/images/newhome/s5.png",
	},
];

const WhoUsesGrync = () => {
	const rootRef = useRef(null);
	const panelRightRef = useRef(null);
	const panelLeftRef = useRef(null);
	const [activeId, setActiveId] = useState(tabs[0].id);
	const activeIndex = tabs.findIndex((t) => t.id === activeId);
	const activeTab = tabs[activeIndex];

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

			tl.from(`.${styles.eyebrow}`, { y: 18, opacity: 0, duration: 0.5 })
				.from(
					`.${styles.heading}`,
					{ y: 26, opacity: 0, duration: 0.6 },
					"-=0.25"
				)
				.from(
					`.${styles.subheading}`,
					{ y: 18, opacity: 0, duration: 0.5 },
					"-=0.35"
				)
				.from(
					`.${styles.tabBtn}`,
					{ y: 14, opacity: 0, duration: 0.4, stagger: 0.06 },
					"-=0.3"
				)
				.from(
					`.${styles.panel}`,
					{ y: 30, opacity: 0, duration: 0.6 },
					"-=0.2"
				)
				.from(
					`.${styles.dot}`,
					{ scale: 0, duration: 0.3, stagger: 0.06, ease: "back.out(2.4)" },
					"-=0.2"
				);
		}, rootRef);

		return () => ctx.revert();
	}, []);

	/* crossfade the left text + right image whenever the active tab changes */
	useEffect(() => {
		if (panelLeftRef.current) {
			gsap.fromTo(
				panelLeftRef.current,
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
			);
		}
		if (panelRightRef.current) {
			gsap.fromTo(
				panelRightRef.current,
				{ opacity: 0, scale: 0.98 },
				{ opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
			);
		}
	}, [activeId]);

	return (
		<section ref={rootRef} className={styles.section} id="WhousesGrync">
			<div className={styles.container}>
				<div className={styles.eyebrow}>WHO USES GRYNC</div>

				<h2 className={styles.heading}>
					One platform. <span className={styles.highlight}>Every leader</span>{" "}
					gets their own answer.
				</h2>

				<p className={styles.subheading}>
					Turn business signals into actionable insights, so every leader
					knows what needs attention and what to do next.
				</p>

				<div className={styles.tabRow}>
					{tabs.map((t) => (
						<button
							key={t.id}
							type="button"
							className={`${styles.tabBtn} ${
								t.id === activeId ? styles.tabBtnActive : ""
							}`}
							onClick={() => setActiveId(t.id)}
						>
							{t.label}
						</button>
					))}
				</div>

				<div className={styles.panel}>
					<div className={styles.panelGrid}>
						{/* ================= LEFT: TEXT ================= */}
						<div ref={panelLeftRef} className={styles.panelLeft}>
							<span className={styles.activeBadge}>
								<span className={styles.activeDot} />
								ACTIVE VIEW
							</span>

							<h3 className={styles.roleTitle}>{activeTab.title}</h3>

							<p className={styles.roleDescription}>
								{activeTab.description}
							</p>
						</div>

						{/* ================= RIGHT: DASHBOARD IMAGE ================= */}
						<div ref={panelRightRef} className={styles.panelRight}>
							<div className={styles.browserFrame}>
								<div className={styles.browserTitlebar}>
									<span className={styles.dotChrome} data-c="red" />
									<span className={styles.dotChrome} data-c="yellow" />
									<span className={styles.dotChrome} data-c="green" />
									<span className={styles.urlBar}>{activeTab.url}</span>
								</div>

								{/* TODO: replace with your actual dashboard screenshot for this role */}
								<img
									src={activeTab.image}
									alt={`${activeTab.title} dashboard view`}
									className={styles.dashboardImage}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.pagination}>
					{tabs.map((t) => (
						<button
							key={t.id}
							type="button"
							aria-label={`Show ${t.label} view`}
							className={`${styles.dot} ${
								t.id === activeId ? styles.dotActive : ""
							}`}
							onClick={() => setActiveId(t.id)}
						/>
					))}
				</div>

				<div className={styles.footerPill}>
					<p>
						If your business runs on more than three systems and more than
						one team, the gap grync closes already exists inside it.
					</p>
					<span className={styles.footerStar}>
						<Star size={18} fill="#f4602a" strokeWidth={0} />
					</span>
				</div>
			</div>
		</section>
	);
};

export default WhoUsesGrync;