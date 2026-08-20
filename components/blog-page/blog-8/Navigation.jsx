import Icon1 from "@/public/images/blog/Icon1.png";
import Icon2 from "@/public/images/blog/Icon2.png";
import Thumb1 from "@/public/images/blog/blogthumb1.png";
import Thumb2 from "@/public/images/blog/architecture.jpeg";
import Image from "next/image";
import Link from "next/link";
function Navigation() {
	return (
		<div className="sofax-post-navigation-wrapper">
			<div className="nav-preview-wrap">
				<div className="nav-preview-icon">
					<Link href="/blog-1">
						<Image src={Icon1} alt="arrow Icon" />
						Preview Post
					</Link>
				</div>
				<div className="title-post-thumb sofax-post-navigation-wrap">
					<div className="title-post-img">
						<Image src={Thumb1} alt="blog thumb" />
					</div>
					<div className="title-post-content">
						<ul>
							<li>May 20, 2025</li>
						</ul>
						<h6>The Great SaaS Disconnect: How Unified Customer Experience Will Define Tomorrow's Winners</h6>
					</div>
				</div>
			</div>
			<div className="nav-preview-wrap">
				<div className="nav-preview-icon ml-650">
					<Link href="/blog-2">
						Next Post
						<Image src={Icon2} alt="arrow icon" />
					</Link>
				</div>
				<div className="title-post-thumb sofax-post-navigation-wrap">
					<div className="title-post-content">
						<ul>
							<li>June 3, 2025</li>
						</ul>
						<h6>Fixing the SaaS Integration Mess</h6>
					</div>
					<div className="title-post-img">
						<Image src={Thumb2} alt="blog thumb" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
