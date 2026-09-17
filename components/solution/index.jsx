"use client";

import { useState } from "react";
import StickySubNav, { navItems } from "./StickySubNav";
import TabContent from "./TabContent";
import styles from "./SolutionTabsSection.module.css";

/* Owns the single shared "which tab is active" state, so the sticky
   nav and the content panel below it always agree with each other. */
const SolutionTabsSection = () => {
	const [activeId, setActiveId] = useState(navItems[0].id);

	return (
		<section className={styles.section}>
			<StickySubNav activeId={activeId} onChange={setActiveId} />
			<div className={styles.container}>
				<TabContent activeId={activeId} />
			</div>
		</section>
	);
};

export default SolutionTabsSection;
