import Link from "next/link";
function ServiceCard({ service: { id, title, description } }) {
	return (
		<div className="sofax-service-table-item">
			<div className="sofax-service-table-title">
				<h3>{`${id}. ${title}`}</h3>
			</div>
			<div className="sofax-service-table-body">
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ServiceCard;
