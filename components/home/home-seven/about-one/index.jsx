"use client";
import Link from "next/link";
import CountUp from "react-countup";
import FadeInUp from "../../../animation/FadeInUp";

function AboutOne() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content tac mr-50">
							<div className="tg-heading-subheading animation-style3">
								<h2>Unlock Actionable Insights with Grync.io</h2>
							</div>
							<p>
								Grync.io empowers businesses with real-time event analytics, user journey tracking, and
								in-product guidance to drive engagement and growth. Our AI-powered insights help you
								understand user behavior, optimize conversions, and deliver personalized experiences.
							</p>
							<p>
								With Grync.io, you can automate workflows, monitor key user interactions, and create
								customizable reports to make data-driven decisions effortlessly.
							</p>
						</div>
						<FadeInUp className="sofax-title-btn extra-mt">
							<Link className="sofax-default-btn pill" data-text="Learn More" href="/about-us">
								<span className="button-wraper">Learn More</span>
							</Link>
						</FadeInUp>
					</div>
					<div className="col-lg-5">
						<div className="sofax-default-content">
							<div id="sofax-counter"></div>
							<div className="sofax-counter-wrapperv7 ml-50">
								<div className="sofax-counter-wrap-v7">
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp className="sofax-counter" end={98} duration={3} redraw={true} enableScrollSpy />%
										</h2>
										<p>Customer Satisfaction</p>
									</div>
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp className="sofax-counter" end={2000} duration={3} redraw={true} enableScrollSpy />+
										</h2>
										<p>Businesses Using Grync.io</p>
									</div>
								</div>
								<div className="sofax-counter-wrap-v7">
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp className="sofax-counter" end={50} duration={3} redraw={true} enableScrollSpy />+
										</h2>
										<p>Workflow Automations</p>
									</div>
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp className="sofax-counter" end={500000} duration={3} redraw={true} enableScrollSpy />+
										</h2>
										<p>Events Tracked Daily</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
