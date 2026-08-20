"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
	const heroRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power3.out",
				},
			});

			tl.from(".hero-eyebrow", {
				y: 25,
				opacity: 0,
				duration: 0.6,
			})
				.from(
					".hero-title-line",
					{
						y: 70,
						opacity: 0,
						duration: 0.75,
						stagger: 0.12,
					},
					"-=0.25"
				)
				.from(
					".hero-description",
					{
						y: 25,
						opacity: 0,
						duration: 0.6,
					},
					"-=0.3"
				)
				.from(
					".hero-actions",
					{
						y: 25,
						opacity: 0,
						duration: 0.6,
					},
					"-=0.25"
				)
				.from(
					".hero-dashboard",
					{
						x: 100,
						opacity: 0,
						scale: 0.94,
						duration: 1,
					},
					"-=0.7"
				);

			/* floating animation */

			gsap.to(".hero-float-1", {
				y: -14,
				rotation: 4,
				duration: 3,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			gsap.to(".hero-float-2", {
				y: 15,
				rotation: -5,
				duration: 3.5,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			gsap.to(".hero-float-3", {
				y: -10,
				x: 8,
				duration: 2.8,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			/* dashboard cards */

			gsap.to(".hero-card-1", {
				y: -7,
				duration: 2.2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			gsap.to(".hero-card-2", {
				y: 7,
				duration: 2.6,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			/* glowing center */

			gsap.to(".hero-center-glow", {
				scale: 1.15,
				opacity: 0.45,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="grync-hero"
		>
			<div className="grync-hero-container">

				{/* ================= LEFT ================= */}

				<div className="grync-hero-left">

					<div className="hero-eyebrow">
						<span className="hero-eyebrow-dot" />
						INTELLIGENCE FOR BUSINESS EXECUTION
					</div>

					<h1 className="grync-hero-heading">

						<span className="hero-title-line">
							Turn your business
						</span>

						<span className="hero-title-line">
							signals into
						</span>

						<span className="hero-title-line hero-title-gradient">
							coordinated action.
						</span>

					</h1>

					<p className="hero-description">
						grync.io connects your business signals,
						people and systems so your teams can
						respond faster and execute with confidence.
					</p>

					<div className="hero-actions">

						<Link
							href="/contact-us-page"
							className="hero-primary-button"
						>
							Book a demo
							<span>↗</span>
						</Link>

						<Link
							href="/productBrief"
							className="hero-secondary-button"
						>
							Explore platform
							<span>→</span>
						</Link>

					</div>

					<div className="hero-trust">

						<span>Built for modern enterprises</span>

						<div className="hero-trust-line" />

						<span>No migration required</span>

					</div>

				</div>


				{/* ================= RIGHT ================= */}

				<div className="grync-hero-right">

					<div className="hero-orbit hero-orbit-1" />
					<div className="hero-orbit hero-orbit-2" />

					<div className="hero-float hero-float-1">
						<span className="float-icon orange">
							↗
						</span>
						<div>
							<small>Business signal</small>
							<strong>New opportunity</strong>
						</div>
					</div>

					<div className="hero-float hero-float-2">
						<span className="float-icon pink">
							✓
						</span>
						<div>
							<small>Execution</small>
							<strong>Action completed</strong>
						</div>
					</div>

					<div className="hero-float hero-float-3">
						<span className="float-icon purple">
							$
						</span>
						<div>
							<small>Revenue</small>
							<strong>+$184K recovered</strong>
						</div>
					</div>


					{/* Dashboard */}

					<div className="hero-dashboard">

						<div className="hero-dashboard-header">

							<div className="dashboard-brand">
								<div className="dashboard-brand-mark">
									G
								</div>

								<div>
									<strong>grync.io</strong>
									<small>Business intelligence</small>
								</div>
							</div>

							<div className="dashboard-dots">
								<span />
								<span />
								<span />
							</div>

						</div>


						<div className="dashboard-body">

							<div className="dashboard-heading">
								<div>
									<small>LIVE SIGNALS</small>
									<h3>Business activity</h3>
								</div>

								<span className="live-status">
									<span />
									LIVE
								</span>
							</div>


							<div className="dashboard-chart">

								<div className="chart-grid grid-1" />
								<div className="chart-grid grid-2" />
								<div className="chart-grid grid-3" />
								<div className="chart-grid grid-4" />

								<svg
									viewBox="0 0 500 180"
									preserveAspectRatio="none"
								>
									<defs>
										<linearGradient
											id="heroChartGradient"
											x1="0"
											x2="1"
										>
											<stop
												offset="0%"
												stopColor="#f04c30"
											/>
											<stop
												offset="100%"
												stopColor="#c92b73"
											/>
										</linearGradient>
									</defs>

									<path
										d="M0 145 C45 135 50 120 90 126 C130 132 145 80 180 92 C215 104 220 116 250 88 C280 60 300 100 330 75 C360 50 380 67 405 45 C430 24 450 40 500 12"
										fill="none"
										stroke="url(#heroChartGradient)"
										strokeWidth="4"
										strokeLinecap="round"
									/>

									<path
										d="M0 145 C45 135 50 120 90 126 C130 132 145 80 180 92 C215 104 220 116 250 88 C280 60 300 100 330 75 C360 50 380 67 405 45 C430 24 450 40 500 12 L500 180 L0 180 Z"
										fill="url(#heroChartGradient)"
										opacity="0.08"
									/>
								</svg>

								<div className="chart-point point-1" />
								<div className="chart-point point-2" />
								<div className="chart-point point-3" />

							</div>


							<div className="dashboard-cards">

								<div className="dashboard-stat hero-card-1">
									<small>Signals detected</small>
									<strong>2,847</strong>
									<span className="positive">
										+18.4%
									</span>
								</div>

								<div className="dashboard-stat hero-card-2">
									<small>Actions executed</small>
									<strong>1,932</strong>
									<span className="positive">
										+24.7%
									</span>
								</div>

								<div className="dashboard-stat">
									<small>Revenue impact</small>
									<strong>$4.82M</strong>
									<span className="positive">
										+31.2%
									</span>
								</div>

							</div>

						</div>

					</div>


					{/* Center intelligence badge */}

					<div className="hero-center-badge">

						<div className="hero-center-glow" />

						<div className="hero-center-inner">

							<span className="hero-center-icon">
								G
							</span>

							<strong>
								grync
							</strong>

							<small>
								Connect • Engage • Grow
							</small>

						</div>

					</div>

				</div>

			</div>
		</section>
	);
};

export default Hero;