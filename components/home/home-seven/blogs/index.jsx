import image1 from "@/public/images/v7/image6v7.png";
import image2 from "@/public/images/v7/image7v7.png";
import image3 from "@/public/images/v7/image8v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import BlogCard from "./BlogCard";

const blogsData = [
	{
		id: 1,
		image: image1,
		category: "Product Analytics",
		date: "13 June 2024",
		title: "Leveraging User Behavior Insights to Optimize Your SaaS Growth",
		description: "Learn how Grync.io helps you track user interactions, improve retention, and drive conversions with actionable analytics."
	}
]
;

function Blogs() {
	return (
		<section className="section sofax-section-padding bg-light" id="blog">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Latest Blogs</h2>
					</div>
				</div>
				<div className="row">
					{blogsData.map((blog, index) => (
						<FadeInStagger key={blog.id} index={index} className="col-lg-4">
							<BlogCard blog={blog} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Blogs;
