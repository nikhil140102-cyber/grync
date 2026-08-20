import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import blogThumb1 from "@/public/images/blog/blogthumb1.png";
import blogThumb2 from "@/public/images/blog/architecture.jpeg";
import blogThumb3 from "@/public/images/blog/blogThumbnail3.jpeg";
import blogThumb4 from "@/public/images/v7/dashboardv7.png";
import blogThumb5 from "@/public/images/blog/blogThumbnail5.png";
import blogThumb6 from "@/public/images/v7/synctrigger.png";
import blogThumb7 from "@/public/images/v7/aiInsights.png";
import blogThumb8 from "@/public/images/v7/notificationAgent.png";
import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

const blogData = [
	{
		id: 11,
		image: blogThumb8,
		category: "Business",
		date: "November 4, 2025",
		title: "Inside grync.io: Building AI that Drives Product-Led Growth",
		slug: "building-ai-that-drives-product-led-growth",
		description:
			"At grync.io, we believe AI shouldn’t sit beside the product—it should power it. Our engineering philosophy centers on embedding intelligence directly into every layer of the product experience, so that growth becomes self-sustaining and data-driven.",
	},
	{
		id: 10,
		image: blogThumb3,
		category: "Business",
		date: "October 11, 2025",
		title: "The Evolution of Product-Led Growth: From Inception to the Future of SaaS",
		slug: "the-evolution-of-product-led-growth",
		description:
			"Product-Led Growth (PLG) has transformed how SaaS companies grow. What started as a simple idea — letting the product sell itself — has now become the foundation of how modern software companies operate.",
	},
	{
		id: 9,
		image: blogThumb4,
		category: "Business",
		date: "October 6, 2025",
		title: "Activation: The Growth Lever You Are Missing",
		slug: "activating-the-growth-lever-you-are-missing",
		description:
			"When businesses look at growth, they often focus on getting more signups. More ads, more traffic, more users. But here’s the truth: signups alone don’t drive growth. ",
	},
	{
		id: 8,
		image: blogThumb8,
		category: "Business",
		date: "September 24, 2025",
		title: "Grync Notification Agent: Instant Signals, Instant Action ",
		slug: "grync-notification-agent-instant-signals-instant-action",
		description:
			"In product-led growth, speed = survival. The difference between winning or missing an opportunity? How quickly your team knows what's happening inside your product.\n" +
			"\n" +
			"That’s where Grync’s Notification Agent comes in.. ",
	},
	{
		id: 7,
		image: blogThumb7,
		category: "Business",
		date: "August 27, 2025",
		title: "From Data Bottlenecks to Instant Insights: How grync.io’s Insights Agent is Reshaping Product Intelligence ",
		slug: "from-data-bottleneck-to-instant-insights",
		description:
			"The Problem Every Product Team Faces: You're drowning in data but starved for insights. ",
	},
	{
		id: 6,
		image: blogThumb6,
		category: "Business",
		date: "August 5, 2025",
		title: "Supercharge Your Product Engagement with SyncTrigger by grync.io ",
		slug: "supercharge-your-product-engagement-with-synctrigger",
		description:
			"In today's fast-paced product landscape, automation isn't just helpful, it's essential. As user journeys become more complex and product experiences more personalized, teams need tools that can respond to real-time behavior without creating bottlenecks. \n" +
			"\n" +
			"That’s where SyncTrigger, the flagship feature from grync.io, comes in. ",
	},
	{
		id: 5,
		image: blogThumb5,
		category: "Business",
		date: "July 21, 2025",
		title: "Smarter Onboarding, Accelerated Growth: AI-Powered Experiences for Modern PLG ",
		slug: "smarter-onboadring-accelerated-growth",
		description:
			"The User Activation Problem in SaaS—and How AI-Powered PLG Is Solving It",
	},
	{
		id: 4,
		image: blogThumb4,
		category: "Business",
		date: "July 21, 2025",
		title: "CMO Wake-Up Call: Your Funnel Is Leaking Revenue (And AI Is Speeding It Up) ",
		slug: "cmo-wakeup-call",
		description:
			"Your MQLs are trending up. The pipeline looks solid. But revenue? Stuck. \n" +
			"\n" +
			"Here’s the problem: While you’re tweaking email subject lines and perfecting nurture flows, your prospects are already trying out your competitor’s product and making purchase decisions without ever talking to sales. ",
	},
	{
		id: 3,
		image: blogThumb3,
		category: "Business",
		date: "July 7, 2025",
		title: "Is Your Product Doing the Selling? - A PLG Readiness Checklist for SaaS Teams ",
		slug: "a-plg-readiness-checklist-for-saas-teams",
		description:
			"If your sales team is grinding while your product just sits there, something’s off. In successful SaaS companies like Slack, Notion, and Zoom, the product is the primary growth engine, not just a feature showcase.",
	},
	{
		id: 2,
		image: blogThumb2,
		category: "Technology",
		date: "June 3, 2025",
		title: "Fixing the SaaS Integration Mess.",
		slug: "fixing-the-saas-integration-mess",
		description:
			"A Founder CTO's honest take on why your customer tools don't talk to each other. Here's what keeps me up at night: we're losing customers not because our product is bad, but because our customer experience is fragmented.",
	},
	{
		id: 1,
		image: blogThumb1,
		category: "Business",
		date: "May 20, 2025",
		title: "The Great SaaS Disconnect: How Unified Customer Experience Will Define Tomorrow's Winners.",
		slug: "the-great-saas-disconnect",
		description:
			"Let's get real for a minute. The B2B software landscape has exploded with innovations around AI, automation, integration etc, but we're drowning in our own success. Every day I talk with founders and executives who have the same painful realization: more features haven't solved their fundamental growth problems such as complexity rather than value, leading to a concerning trend of high churn and disappointing conversion metrics.",
	},
];
function Blog() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="sofax-inner-blog-wrap" key={blog.id} index={index}>
								<BlogCard blog={blog} />
							</FadeInStagger>
						))}
					</div>
					<div className="col-lg-4">
						<div className="sofax-inner-blog-sidebar-menu">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
