import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import PathwaysSection from "@/components/PathwaysSection";
import GovernanceSection from "@/components/GovernanceSection";
import FinancingSection from "@/components/FinancingSection";
import TypologySection from "@/components/TypologySection";
import ToolsSection from "@/components/ToolsSection";
import FlowSection from "@/components/FlowSection";
import ActivationSection from "@/components/ActivationSection";
import NextStepsSection from "@/components/NextStepsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <PathwaysSection />
      <GovernanceSection />
      <FinancingSection />
      <TypologySection />
      <ToolsSection />
      <FlowSection />
      <ActivationSection />
      <NextStepsSection />
      <Footer />
    </div>
  );
};

export default Index;
