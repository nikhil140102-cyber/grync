import Image from "next/image";
import Link from "next/link";
import ailogo from "@/public/images/v7/ailogo.jpg";

function ValuePillarCard({ valuePillar: { image, date, title, description, category } }) {
	return (
		<div className="sofax-blog-wrap-v4">
			<div className="sofax-blog-img">
				<Image src={image} alt="blog image" />
			</div>
			<div className="sofax-blog-content blog-v7">
				<div className="sofax-blog-meta">
					<div className="blog-btn">
						{category}
						{category === "SyncTrigger" ? (
							<span style={{
								fontSize: "20px",
								marginLeft: "4px",
								verticalAlign: "top",
								position: "relative",
								top: "-6px",
								color: "black"
							}}>™</span>
						) : null}
					</div>
					<ul>
						<li>{date}</li>
					</ul>
					{category === "Insight Agent" ? (
						<Image src={ailogo} alt="ai logo" style={{maxWidth:"15% !important"}} />
					) : null}
					{category === "Notification Agent" ? (
						<Image src={ailogo} alt="ai logo" style={{maxWidth:"15% !important"}} />
					) : null}

				</div>

				<h4>{title}</h4>
				<p>{`${description}`}</p>

			</div>
		</div>
	);
}

export default ValuePillarCard;
