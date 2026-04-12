import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import ExplorePathsSection from "@/components/ExplorePathsSection";
import AudienceSection from "@/components/AudienceSection";
import WhySection from "@/components/WhySection";
import ExperienceSection from "@/components/ExperienceSection";
import IndustriesSection from "@/components/IndustriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FocusSection />
      <ExplorePathsSection />
      <AudienceSection />
      <WhySection />
      <ExperienceSection />
      <IndustriesSection />
    </div>
  );
};

export default Index;
