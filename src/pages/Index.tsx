import HeroSection from "../components/HeroSection";
import FocusSection from "../components/FocusSection";
import AudienceSection from "../components/AudienceSection";
import WhySection from "../components/WhySection";
import ExperienceSection from "../components/ExperienceSection";
import IndustriesSection from "../components/IndustriesSection";
import OpenSourceSection from "../components/OpenSourceSection";
import PartnerSection from "../components/PartnerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FocusSection />
      <AudienceSection />
      <WhySection />
      <ExperienceSection />
      <IndustriesSection />
      <OpenSourceSection />
      <PartnerSection />
    </div>
  );
};

export default Index;
