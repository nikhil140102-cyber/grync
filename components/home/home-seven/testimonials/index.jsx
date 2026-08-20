import image1 from "@/public/images/v7/image3v7.png";
import image2 from "@/public/images/v7/image4v7.png";
import image3 from "@/public/images/v7/image5v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Grync.io has completely transformed how we track and analyze user behavior. The real-time insights have been invaluable for optimizing our customer journeys.",
		author: {
			"name": "Robert Johan",
			"title": "Product Manager"
		}
	},
	{
		id: 2,
		image: image2,
		rating: 5,
		review: "The level of automation and intelligence Grync.io provides is unparalleled. It helps us make data-driven decisions effortlessly, leading to significant growth.",
		author: {
			"name": "Jokbars Jeson",
			"title": "Lead Developer"
		}
	},
	{
		id: 3,
		image: image3,
		rating: 5,
		review: "With Grync.io, we now have a clear picture of how users interact with our product. The event tracking and workflow automation features are game changers!",
		author: {
			"name": "Alex Cleveiya",
			"title": "UX Designer"
		}
	}
]
;

function Testimonials() {
	return (
		<section className="sofax-section-padding2 position-ralatiove bg-light" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>See what our users have to say about it</h2>
					</div>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger key={testimonial.id} index={index} className="col-lg-4">
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
