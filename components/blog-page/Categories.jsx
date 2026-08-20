import Link from "next/link";
function Categories() {
	return (
		<div className="sofax-subscription-field-categories">
			<h4>Categories:</h4>
			<ul>
				<li>
					<Link href="/blog-1">Business</Link>
				</li>
				<li>
					<Link href="/blog-2">Technology</Link>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
