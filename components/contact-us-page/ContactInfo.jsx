import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Image from "next/image";
function ContactInfo() {
	return (
		<div className="contactus-authore-wrapper">
			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon1} alt="Icon chat" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Curious how Grync.io fits your needs? Let's chat</h4>
					<p><strong>Follow us at : </strong><a>https://x.com/grync_io</a> <strong>and</strong> <a>https://www.linkedin.com/company/grync-io</a>.</p>
				</div>
			</div>

			<div className="sofax-iconbox-wrap2">
				<div className="sofax-iconbox-icon2">
					<Image src={Icon3} alt="Email Icon" />
				</div>
				<div className="sofax-iconbox-data2">
					<h4>Email Us</h4>
					<p>Email Us at <a><strong>info@grync.io</strong></a>. We reply fast.</p>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
