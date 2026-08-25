"use client";

import Link from "next/link";
import styles from "./SiteFooter.module.css";

const navLinks = [
	// { label: "Platform", href: "/platform" },
	// { label: "Solutions", href: "/solutions" },
	// { label: "Insights", href: "/insights" },
	// { label: "Contact Us", href: "/contact-us-page" },
	// { label: "Request Demo", href: "/contact-us-page" },
	{
		label: "How Grync works",
		href: "/#HowGryncworks",
	},
	{
		label: "Product overview",
		href: "/#Productoverview",
	},
	{
		label: "Systems and outcomes",
		href: "/#Systemsandoutcomes",
	},
	{
		label: "Who uses Grync",
		href: "/#WhousesGrync",
	},
];

/* Each social icon is an image, opening in a new tab. Swap these
   placeholder paths and hrefs for your real assets/profile URLs. */
const socialLinks = [
	{
		id: "linkedin",
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/grync-io/",
		icon: "/images/newhome/linkedin.png",
	},
	{
		id: "instagram",
		label: "Instagram",
		href: "#",
		icon: "/images/newhome/instagram.png",
	},
	{
		id: "facebook",
		label: "Facebook",
		href: "#",
		icon: "/images/newhome/facebook.png",
	},
	{
		id: "twitter",
		label: "Twitter",
		href: "#",
		icon: "/images/newhome/twitter.png",
	},
];

const SiteFooter = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topRow}>
					<div className={styles.brand}>
						{/* TODO: replace with your actual white logo lockup file */}
						<img
							src="/images/logo/grync-logo-white.png"
							alt="grync.io"
							className={styles.logo}
						/>
						<p className={styles.tagline}>
							The Intelligence Layer that bridges the gap between
							fragmented SaaS platforms.
						</p>
					</div>

					<nav className={styles.nav}>
						{navLinks.map((l) => (
							<Link key={l.label} href={l.href} className={styles.navLink}>
								{l.label}
							</Link>
						))}
					</nav>
				</div>

				<div className={styles.divider} />

				<div className={styles.bottomRow}>
					<p className={styles.copyright}>
						&copy; {year} Grync Inc. All rights reserved.
					</p>

					<div className={styles.socials}>
						{socialLinks.map((s) => (
							<a
								key={s.id}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={s.label}
								className={styles.socialLink}
							>
								<img src={s.icon} alt="" className={styles.socialIcon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;