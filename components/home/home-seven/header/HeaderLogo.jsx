import Logo from "@/public/images/logo/Grync_Logo_Color.png";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
	return (
		<div className="brand-logo" style={{ display: "flex", alignItems: "center" }}>
			<Link href="/" style={{ display: "flex", alignItems: "center" }}>
				<Image
					src={Logo}
					alt="Logo"
					className="light-version-logo"
					style={{ maxWidth: "140%" }}
				/>
				<span style={{
					fontSize: "20px",
					marginLeft: "4px",
					verticalAlign: "top",
					position: "relative",
					top: "-6px",
					color: "black"
				}}>™</span>
			</Link>
		</div>

	);
}

export default HeaderLogo;
