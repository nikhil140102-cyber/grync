import image1 from "@/public/images/blog/blogthumb1.png";
import image2 from "@/public/images/blog/architecture.jpeg";
import image3 from "@/public/images/blog/blogthumb6.png";
import Image from "next/image";

import Link from "next/link";
const recentPostData = [
	{
		id: 1,
		image: image1,
		date: "May 20, 2025",
		title: "The Great SaaS Disconnect: How Unified Customer Experience Will Define Tomorrow's Winners",
	},
	{
		id: 2,
		image: image2,
		date: "June 3, 2025",
		title: "Fixing the SaaS Integration Mess",
	},
];
function RecentPosts() {
	return (
		<div className="sofax-subscription-field-post">
			<h4>Recent Posts:</h4>
			{recentPostData.map((post) => (
				<Link href={`/blog-${post.id}`} key={post.id}>
					<div className="title-post-thumb">
						<div className="title-post-img">
							<Image src={post.image} alt="blog post image" />
						</div>
						<div className="title-post-content">
							<ul>
								<li>{post.date}</li>
							</ul>
							<h6>{post.title}</h6>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default RecentPosts;
