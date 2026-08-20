import image1 from "@/public/images/v7/guides.png";
import image2 from "@/public/images/v7/synctrigger.png";
import image3 from "@/public/images/v7/dashboards.png";
import image4 from "@/public/images/v7/abtest.png";
import image5 from "@/public/images/v7/analytics.png";
import image6 from "@/public/images/v7/email.png";
import image7 from "@/public/images/v7/aiInsights.png";
import image8 from "@/public/images/v7/notificationAgent.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ValuePillarCard from "./ValuePillarCard";

const texts = [
	"grync.io delivers the intelligent infrastructure that modern applications need to understand, adapt, and thrive in complex distributed digital ecosystems."
];

const valuePillarsData = [
	{
		id: 1,
		image: image1,
		category: "In-Product Guides & Nudges",
		title: "Orchestrate In-Product Journeys That Convert",
		description: "Deliver contextual messaging, onboarding, and upsell flows at the exact moment of user need."
	},
	{
		id: 2,
		image: image2,
		category: "SyncTrigger",
		title: "Scale Personalization without Scaling Teams",
		description: "Automate segmentation and lifecycle workflows based on live product usage and intent."
	},
	{
		id: 3,
		image: image3,
		category: "Product Widgets & Dashboards",
		title: "Align Marketing and Product Around Real-Time Insights",
		description: "Break silos by giving GTM teams full visibility into product usage, adoption trends, and engagement health."
	},
	{
		id: 4,
		image: image4,
		category: "Behaviour, Segments, A/B Tests",
		title: "Turn Product Usage into Revenue Signals",
		description: "Identify high-intent behaviors and trigger automated campaigns to drive activation and expansion."
	},
	{
		id: 5,
		image: image5,
		category: "Product & Web Analytics",
		title: "Bridge Product, Sales and Marketing for Maximum Impact",
		description: "Equip teams with the same data, insights, and tools to accelerate time-to-value and grow revenue."
	},
	{
		id: 6,
		image: image6,
		category: "Email Notifications",
		title: "Align Marketing and Product Around Real-Time Insights",
		description: "Break silos by giving GTM teams full visibility into product usage, adoption trends, and engagement health."
	},
	{
		id: 7,
		image: image7,
		category: "Insight Agent",
		title: "Ask. Know. Act.",
		description: "Insight Agent lets your team/s explore product data with natural language—no SQL, no wait time. Discover trends, surface key metrics, and drive decisions in seconds."
	},
	{
		id: 8,
		image: image8,
		category: "Notification Agent",
		title: "Engage Users When It Matters Most.",
		description: "Deliver timely, personalized messages triggered by real user behaviour. No guesswork. No delays. Just automated alerts that increase retention and drive growth."
	}
]
;

function ValuePillars() {
	return (
		<section className="section sofax-section-padding bg-light" id="blog">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Value Pillars</h2>
						<p className={`"text-dark"`}>
							{texts}
						</p>
					</div>
				</div>
				<div className="row">
					{valuePillarsData.map((valuePillar, index) => (
						<FadeInStagger key={valuePillar.id} index={index} className="col-lg-4">
							<ValuePillarCard valuePillar={valuePillar} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default ValuePillars;
