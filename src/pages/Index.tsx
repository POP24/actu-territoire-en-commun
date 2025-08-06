import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import PathwaysSection from "@/components/PathwaysSection";
import GovernanceSection from "@/components/GovernanceSection";
import FinancingSection from "@/components/FinancingSection";
import TypologySection from "@/components/TypologySection";
import ToolsSection from "@/components/ToolsSection";
import ActivationSection from "@/components/ActivationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <PathwaysSection />
      <FinancingSection />
      <GovernanceSection />
      <ActivationSection />
      <TypologySection />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
