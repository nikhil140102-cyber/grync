import ArrowRight from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog: { id, title, slug, category, description, date, image } }) {
	return (
		<>
			<div className="sofax-inner-blog-img">
				<Image src={image} alt="blog thumb" />
			</div>
			<div className="sofax-inner-blog-content">
				<div className="sofax-inner-blog-meta">
					<Link href={`/blog-${id}`}>
						<h5>{category}</h5>
						<ul>
							<li>{date}</li>
						</ul>
					</Link>
				</div>
				<div className="sofax-inner-blog-text">
					<Link href={`/${slug}`}>
						<h3>{title}</h3>
					</Link>
					<p>{description}</p>
				</div>
				<Link className="sofax-icon-btn sofax-blog-icon-btn" href={`/${slug}`}>
					Learn More <Image src={ArrowRight} alt="arrow right" />
				</Link>
			</div>
		</>
	);
}

export default BlogCard;
