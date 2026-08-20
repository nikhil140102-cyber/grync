import AboutOne from "@/components/home/home-seven/about-one";
import ValuePillars from "@/components/home/home-seven/valuepillar";
import Blogs from "@/components/home/home-seven/blogs";
import Features from "@/components/home/home-seven/features";

import Services from "@/components/home/home-seven/services";
import Usecases from "@/components/home/home-seven/usecases";
import AutoSlider from "@/components/common/auto-slider";
import HeroTwo from "@/components/home/home-seven/hero-two";
import BusinessChallenge from "@/components/home/home-seven/business-challenge";
import ToolGaps from "@/components/home/home-seven/tool-gaps";
import HowItWorks from "@/components/home/home-seven/how-it-works";
import BusinessOutcomes from "@/components/home/home-seven/business-outcomes";
import FaqSection from "@/components/home/home-seven/faq-section";
import ProductOverview from "@/components/home/home-seven/product-overview";
import Integrationsnew from "@/components/home/home-seven/integrations2";
import WhoUsesGrync from "@/components/home/home-seven/who-uses";
import CtaForm from "@/components/home/home-seven/cta-form";
function HomeSeven() {
  return (
    <>
      <HeroTwo />
      <BusinessChallenge />
      <ToolGaps />
      <HowItWorks />
      <BusinessOutcomes />
      <ProductOverview />
      <Integrationsnew />
      <WhoUsesGrync />
	  <CtaForm/>
      <FaqSection />

      {/* <ValuePillars />
			<Features />
			<AutoSlider />
			<Usecases /> */}
    </>
  );
}

export default HomeSeven;
