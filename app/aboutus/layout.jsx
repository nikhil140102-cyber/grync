import Header from "@/components/home/home-seven/header/one-page";
import Footer from "@/components/home/home-seven/footer";

export const metadata = {
	title: "About Us | Grync.io",
	description:
		"grync.io is the AI-powered execution layer for enterprise operations. See why we built it, what we believe, and the problem we kept seeing.",
};

function AboutUsLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default AboutUsLayout;