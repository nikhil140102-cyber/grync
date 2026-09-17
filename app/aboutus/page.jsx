import AboutHero from "@/components/about-us/hero/Hero";
import TeamSection from "@/components/about-us/team/TeamSection";
import BeliefsSection from "@/components/about-us/beliefs/BeliefsSection";
import SolutionSection from "@/components/about-us/solution/SolutionSection";
import ProblemSection from "@/components/about-us/problem/ProblemSection";
import ClosingSection from "@/components/about-us/closing/ClosingSection";

function AboutUs() {
	return (
		<>
			<AboutHero />
			<ProblemSection />
			<SolutionSection />
			<BeliefsSection />
			<TeamSection />
			<ClosingSection/>
		</>
	);
}

export default AboutUs;