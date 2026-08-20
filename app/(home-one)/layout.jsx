import Footer from "@/components/home/home-seven/footer";
import Header from "@/components/home/home-seven/header/one-page";
export const metadata = {
	title: "Grync.io",
	description: "Grync.io",
};
function OnePageLayoutSeven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutSeven;
