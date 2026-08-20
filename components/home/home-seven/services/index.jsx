import ServiceCard from "./ServiceCard";
const serviceData = [
	{
		id: 1,
		title: "Disconnected tools break the customer journey",
		description: "Track real-time behaviour and engage users—no engineering needed, improving user experience.",
	},
	{
		id: 2,
		title: "Too many platforms, not enough impact",
		description:
			"Deliver dynamic in-app messages, banners, and onboarding flows all within the app triggered by live actions, accelerating activation and value.",
	},
	{
		id: 3,
		title: "Campaigns miss real behaviour signals",
		description:
			"Run automated campaigns based on real-time user behaviour, boosting conversions and revenue.",
	},
	{
		id: 4,
		title: "Teams work in silos, insights get lost",
		description:
			"Auto-identify qualified leads and trigger outreach seamlessly, aligning sales and product teams.",
	},
	{
		id: 5,
		title: "Dashboards lack action, context, and triggers",
		description:
			"Send hyper-relevant emails triggered by live product data, driving retention and engagement.",
	},
];
function Services() {
	return (
		<section className="section sofax-section-padding2 bg-light position-ralatiove" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Tailored for every product led-growth use case</h2>
					</div>
				</div>

				<div className="sofax-service-table-wrap">
					{serviceData.map((service, index) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
