import Icon1 from "@/public/images/v7/icon1v7.png";
import Icon2 from "@/public/images/v7/icon2v7.png";
import Icon3 from "@/public/images/v7/icon3v7.png";
import Icon4 from "@/public/images/v7/workflow-optimization.png"
import Icon5 from "@/public/images/v7/guide-book.png"
import Icon6 from "@/public/images/v7/email-marketing.png"
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: "Analytics",
		icon: Icon1,
		title: "Analytics - Understand what’s working and what’s not",
		description: "Track user behavior, journeys, and drop-offs in real time to make smarter, faster product decisions.",
	},
	{
		id: "Workflows",
		icon: Icon4,
		title: "SyncTrigger - Automate the important stuff.",
		description: "Set up easy workflows that run automatically and take quantitative actions without any coding.",
	},
	{
		id: "Guides",
		icon: Icon5,
		title: "Guides - Help your users, right when they need it.",
		description: "Deliver in-app tips and tutorials to guide users, reduce churn, and improve onboarding.",
	},
	{
		id: "Email Campaigns",
		icon: Icon6,
		title: "Email Campaigns - Send the right message, at the right time —automagically.",
		description: "Create targeted, personalized emails based on user behavior and lifecycle triggers.",
	},
	{
		id: "Custom Events Tracking",
		icon: Icon3,
		title: "Custom Events Tracking - Track what really matters to your business.",
		description: "Capture specific actions that matter most to your business, with insight driven engagement.",
	},
	{
		id: "AI Insights",
		icon: Icon2,
		title: "AI Insight & Notification Agent.",
		description: "Empower teams with critical insights and trends without relying on analysts. Automate tailored alerts and updates based on user behavior, ensuring timely engagement that drives retention and growth.",
	},
];
function Features() {
	return (
		<section className="sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Why Grync.io ?</h2><br/>
						<h3 style={{color:"#d63384 !important"}}>Let Your Product Do the Talking—and the Selling</h3>
						<p>Engage, convert, and grow your customers from inside the product—where real decisions happen.
						</p>

					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
