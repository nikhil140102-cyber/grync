"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	Users,
	Megaphone,
	Briefcase,
	CreditCard,
	Puzzle,
	Bell,
	ArrowUpRight,
	FileText,
	Settings,
	ArrowRight,
} from "lucide-react";
import styles from "./Integrations.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const systems = [
	{
		id: "customer",
		icon: Users,
		title: "Customer systems",
		subtitle: "Behavior, profile, chats",
	},
	{
		id: "sales",
		icon: Megaphone,
		title: "Sales & marketing",
		subtitle: "Leads, engagement, ads",
	},
	{
		id: "ops",
		icon: Briefcase,
		title: "Operations & workflow",
		subtitle: "Tickets, tasks, approvals",
	},
	{
		id: "finance",
		icon: CreditCard,
		title: "Finance & core systems",
		subtitle: "Billing, usage, invoices",
	},
	{
		id: "product",
		icon: Puzzle,
		title: "Product & digital + any system with an API",
		subtitle: null,
		dashed: true,
	},
];

const outcomes = [
	{
		id: "brief",
		icon: Bell,
		title: "Live team brief",
		badge: "LIVE",
		badgeTheme: "blue",
		description: "Context-rich brief delivered where your team works",
	},
	{
		id: "messages",
		icon: ArrowUpRight,
		title: "Customer messages",
		badge: "SENT",
		badgeTheme: "orange",
		description: "Personalized at the right moment, on the right channel",
	},
	{
		id: "writeback",
		icon: FileText,
		title: "Write back mechanisms",
		badge: "READY",
		badgeTheme: "green",
		description: "Smart replies, summaries and next-best actions",
	},
	{
		id: "workflow",
		icon: Settings,
		title: "Workflow API triggers",
		badge: "TRIGGERED",
		badgeTheme: "purple",
		description: "Real-time updates that keep your tools in sync",
	},
];

/* icon is now an image path, not a lucide component — rendered via <img> below */
const deviceSteps = [
	{ icon: "/images/newhome/m1.png", label: "Signals", sub: "Continuously" },
	{ icon: "/images/newhome/m2.png", label: "Understand", sub: "Patterns" },
	{ icon: "/images/newhome/m3.png", label: "Decide", sub: "What matters" },
	{ icon: "/images/newhome/m4.png", label: "Act", sub: "Automatically" },
];

const Integrations2 = () => {
	const rootRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top 78%",
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
					`.${styles.description}`,
					{ y: 16, opacity: 0, duration: 0.5 },
					"-=0.35"
				)
				.from(
					`.${styles.panel}`,
					{ y: 30, opacity: 0, duration: 0.6 },
					"-=0.15"
				)
				.from(
					`.${styles.systemCard}`,
					{ x: -24, opacity: 0, duration: 0.5, stagger: 0.08 },
					"-=0.3"
				)
				.from(
					`.${styles.outcomeCard}`,
					{ x: 24, opacity: 0, duration: 0.5, stagger: 0.08 },
					"-=0.55"
				)
				.from(
					`.${styles.device}`,
					{ scale: 0.9, opacity: 0, duration: 0.6, ease: "back.out(1.6)" },
					"-=0.5"
				)
				// .from(
				// 	`.${styles.hubBadge}`,
				// 	{ scale: 0, duration: 0.4, stagger: 0.15, ease: "back.out(2.4)" },
				// 	"-=0.45"
				// )
				.to(
					`.${styles.connectorLeft}, .${styles.connectorRight}`,
					{ opacity: 1, duration: 0.5 },
					"-=0.15"
				);

			tl.eventCallback("onComplete", () => {
				gsap.to(`.${styles.systemCard}, .${styles.outcomeCard}`, {
					y: -4,
					duration: 2.2,
					repeat: -1,
					yoyo: true,
					stagger: 0.15,
					ease: "sine.inOut",
				});
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={rootRef} className={styles.section} id="Systemsandoutcomes">
			<div className={styles.container}>
				<div className={styles.eyebrow}>SYSTEMS TO OUTCOMES</div>

				<h2 className={styles.heading}>
					<span className={styles.highlight}>grync.io</span> works with what
					you already run.
				</h2>

				<p className={styles.description}>
					grync.io does not replace your stack and does not ask you to move
					your data.
					<br />
					It connects to the systems you already have, reads what it needs,
					and writes the action back and otherwise leaves them exactly as
					they are.
				</p>

				<div className={styles.panel}>
					<div className={styles.grid}>
						{/* ================= LEFT: YOUR SYSTEMS ================= */}
						<div className={styles.column}>
							<span className={styles.columnLabelLeft}>YOUR SYSTEMS</span>
							{systems.map((s) => {
								const Icon = s.icon;
								return (
									<div
										key={s.id}
										className={`${styles.systemCard} ${
											s.dashed ? styles.dashedCard : ""
										}`}
									>
										<span className={styles.systemIcon}>
											<Icon size={18} strokeWidth={2} />
										</span>
										<div>
											<strong>{s.title}</strong>
											{s.subtitle && <small>{s.subtitle}</small>}
										</div>
									</div>
								);
							})}
						</div>

						{/* ================= CONNECTOR: LEFT ================= */}
						<svg
							className={styles.connectorLeft}
							viewBox="0 0 100 500"
							preserveAspectRatio="none"
						>
							<path className={styles.dashLeft} d="M0,45 C55,60 70,120 100,250" fill="none" />
							<path className={styles.dashLeft} d="M0,155 C55,170 70,200 100,250" fill="none" />
							<path className={styles.dashLeft} d="M0,265 C60,265 80,258 100,250" fill="none" />
							<path className={styles.dashLeft} d="M0,375 C55,340 70,290 100,250" fill="none" />
							<path className={styles.dashLeft} d="M0,455 C55,400 70,300 100,250" fill="none" />
						</svg>

						{/* ================= CENTER: DEVICE ================= */}
						<div className={styles.centerCol}>
							<Link href="#" className={styles.hubBadge}>
								{/* TODO: replace with your actual file path */}
								<img
									src="/images/newhome/iconleft.png"
									alt=""
									className={styles.hubBadgeIcon}
								/>
							</Link>

							<div className={styles.device}>
								<img
									src="/images/logo/icon.png"
									alt="grync.io"
									className={styles.deviceLogo}
								/>
								<strong>grync.io</strong>
								<small>Intelligence Layer</small>
								<p>
									Continuous cross-system pattern matching & agentic
									orchestration
								</p>

								<div className={styles.deviceToolbar}>
									{deviceSteps.map((d) => (
										<div key={d.label} className={styles.deviceStep}>
											<span>
												<img
													src={d.icon}
													alt={d.label}
													className={styles.deviceStepIcon}
												/>
											</span>
											<strong>{d.label}</strong>
											<small>{d.sub}</small>
										</div>
									))}
								</div>
							</div>

							<Link href="#" className={`${styles.hubBadge} ${styles.hubBadgeDark}`}>
								{/* TODO: replace with your actual file path */}
								<img
									src="/images/newhome/iconright.png"
									alt=""
									className={styles.hubBadgeIcon}
								/>
							</Link>
						</div>

						{/* ================= CONNECTOR: RIGHT ================= */}
						<svg
							className={styles.connectorRight}
							viewBox="0 0 100 400"
							preserveAspectRatio="none"
						>
							<path className={styles.dashRight} d="M0,200 C30,150 45,80 100,55" fill="none" />
							<path className={styles.dashRight} d="M0,200 C25,190 45,175 100,175" fill="none" />
							<path className={styles.dashRight} d="M0,200 C25,210 45,225 100,255" fill="none" />
							<path className={styles.dashRight} d="M0,200 C30,250 45,320 100,345" fill="none" />
						</svg>

						{/* ================= RIGHT: TRIGGERED OUTCOMES ================= */}
						<div className={styles.column}>
							<span className={styles.columnLabelRight}>
								TRIGGERED OUTCOMES
							</span>
							{outcomes.map((o) => {
								const Icon = o.icon;
								return (
									<div key={o.id} className={styles.outcomeCard}>
										<span className={styles.outcomeIcon}>
											<Icon size={18} strokeWidth={2} />
										</span>
										<div className={styles.outcomeText}>
											<div className={styles.outcomeTitleRow}>
												<strong>{o.title}</strong>
												<span
													className={`${styles.badgePill} ${
														styles[`badge-${o.badgeTheme}`]
													}`}
												>
													{o.badge}
												</span>
											</div>
											<small>{o.description}</small>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Integrations2;
