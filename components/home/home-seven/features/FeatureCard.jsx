import Image from "next/image";

function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-features-boxv7">
			<div className="sofax-features-iconv7">
				<Image src={icon} alt="icon" />
			</div>
			<div className="sofax-features-contentv7">
				<h4>
					{title === "SyncTrigger - Automate the important stuff." ? (
						<>
							SyncTrigger
							<span
								style={{
									fontSize: "20px",
									marginLeft: "4px",
									verticalAlign: "top",
									position: "relative",
									top: "-6px",
									color: "black"
								}}
							>™
      					</span>{" "}
							- Automate the important stuff.
						</>
					) : (
						title
					)}
				</h4>

				<p>{description}</p>
				<p></p>
			</div>
		</div>
	);
}

export default FeatureCard;
