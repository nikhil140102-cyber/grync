import Header from "@/components/home/home-seven/header/one-page";
import Footer from "@/components/home/home-seven/footer";

export const metadata = {
	title: "Solutions | Grync.io",
	description:
		"See how grync.io leverages the business signals already moving through your systems to improve revenue and operational outcomes.",
};

function SolutionLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default SolutionLayout;
