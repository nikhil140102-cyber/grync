"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StickySubNav.module.css";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

/* Three icon states per tab — default, hover, and active — swapped
   via CSS opacity (see .iconStack rules below) rather than JS state,
   so hovering doesn't trigger a re-render. Swap these placeholder
   paths for your real exported icons once you have them; if you only
   have one icon per tab for now, point all three fields at the same
   file and it'll just look unchanged until the hover/active variants
   are ready. */
export const navItems = [
	{
		id: "operational",
		lines: ["Operational", "Risk & Performance"],
		icon: "/images/solution/1.svg",
		iconHover: "/images/solution/1.svg",
		iconActive: "/images/solution/11.svg",
	},
	{
		id: "churn",
		lines: ["Reduce", "Churn"],
		icon: "/images/solution/2.svg",
		iconHover: "/images/solution/2.svg",
		iconActive: "/images/solution/22.svg",
	},
	{
		id: "activation",
		lines: ["Improve", "User Activation"],
		icon: "/images/solution/3.svg",
		iconHover: "/images/solution/3.svg",
		iconActive: "/images/solution/33.svg",
	},
	{
		id: "expansion",
		lines: ["Grow", "Expansion Revenue"],
		icon: "/images/solution/4.svg",
		iconHover: "/images/solution/4.svg",
		iconActive: "/images/solution/44.svg",
	},
	{
		id: "lifecycle",
		lines: ["Customer", "Lifecycle"],
		icon: "/images/solution/5.svg",
		iconHover: "/images/solution/5.svg",
		iconActive: "/images/solution/55.svg",
	},
];

/* Controlled component now — activeId/onChange come from the parent
   (SolutionTabsSection) so the content panel below can stay in sync
   with whichever tab is selected here. */
const StickySubNav = ({ activeId, onChange }) => {
	const rootRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(`.${styles.navItem}`, {
				y: 16,
				opacity: 0,
				duration: 0.5,
				stagger: 0.08,
				ease: "back.out(1.7)",
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top 85%",
					once: true,
				},
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={rootRef} className={styles.wrap}>
			<nav className={styles.navBar}>
				{navItems.map((item) => {
					const isActive = item.id === activeId;
					return (
						<button
							key={item.id}
							type="button"
							onClick={() => onChange(item.id)}
							className={`${styles.navItem} ${
								isActive ? styles.navItemActive : ""
							}`}
						>
							<span className={styles.iconStack}>
								<img
									src={item.icon}
									alt=""
									className={`${styles.navIcon} ${styles.iconDefault}`}
								/>
								<img
									src={item.iconHover}
									alt=""
									className={`${styles.navIcon} ${styles.iconHover}`}
								/>
								<img
									src={item.iconActive}
									alt=""
									className={`${styles.navIcon} ${styles.iconActiveImg}`}
								/>
							</span>
							<span className={styles.navLabel}>
								<span>{item.lines[0]}</span>
								<span>{item.lines[1]}</span>
							</span>
						</button>
					);
				})}
			</nav>
		</div>
	);
};

export default StickySubNav;
