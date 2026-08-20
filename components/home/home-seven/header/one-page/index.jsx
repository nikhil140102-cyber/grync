"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Logo from "@/public/images/logo/Grync_Logo_Color 1.png";

const navItems = [
	{
		label: "Platform",
		href: "/productBrief",
	},
	{
		label: "Solutions",
		href: "/landingPage",
	},
	{
		label: "Why grync",
		href: "/faq-page",
	},
	{
		label: "Integrations",
		href: "/productBrief",
	},
	{
		label: "Resources",
		href: "/blog-page",
	},
];

const Header = () => {
	const headerRef = useRef(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			tl.fromTo(
				headerRef.current,
				{
					y: -35,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
				}
			);

			tl.fromTo(
				".grync-nav-item",
				{
					y: -15,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.45,
					stagger: 0.08,
				},
				"-=0.35"
			);

			tl.fromTo(
				".grync-header-actions > *",
				{
					y: -15,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.45,
					stagger: 0.1,
				},
				"-=0.25"
			);
		}, headerRef);

		return () => ctx.revert();
	}, []);

	const closeMobileMenu = () => {
		setMobileOpen(false);
	};

	return (
		<header
			ref={headerRef}
			className={`grync-header ${
				mobileOpen ? "grync-header-mobile-open" : ""
			}`}
		>
			<div className="grync-header-inner">

				{/* LOGO */}
				<Link
					href="/"
					className="grync-logo"
					onClick={closeMobileMenu}
				>
					<Image
						src={Logo}
						alt="grync.io"
						width={150}
						height={55}
						priority
					/>
				</Link>

				{/* DESKTOP NAV */}
				<nav className="grync-nav">
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="grync-nav-item"
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* ACTIONS */}
				<div className="grync-header-actions">

					<Link
						href="/sign-in"
						className="grync-signin"
					>
						Sign In
					</Link>

					<Link
						href="/contact-us-page"
						className="grync-demo-btn"
					>
						<span>Book a demo</span>
						<span className="grync-demo-arrow">
							→
						</span>
					</Link>

				</div>

				{/* MOBILE BUTTON */}
				<button
					type="button"
					className="grync-menu-button"
					onClick={() =>
						setMobileOpen((current) => !current)
					}
					aria-label="Toggle navigation"
					aria-expanded={mobileOpen}
				>
					<span />
					<span />
					<span />
				</button>
			</div>

			{/* MOBILE NAV */}
			<div className="grync-mobile-nav">
				{navItems.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						onClick={closeMobileMenu}
					>
						{item.label}
					</Link>
				))}

				<div className="grync-mobile-actions">
					<Link
						href="/sign-in"
						onClick={closeMobileMenu}
					>
						Sign In
					</Link>

					<Link
						href="/contact-us-page"
						className="grync-mobile-demo"
						onClick={closeMobileMenu}
					>
						Book a demo →
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;