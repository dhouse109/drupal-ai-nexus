import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FocusSection from "@/components/FocusSection";
import IndustriesSection from "@/components/IndustriesSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FocusSection />
      <IndustriesSection />
      <OpenSourceSection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;
