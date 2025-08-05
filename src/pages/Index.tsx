import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import PathwaysSection from "@/components/PathwaysSection";
import FinancingSection from "@/components/FinancingSection";
import TypologySection from "@/components/TypologySection";
import FlowSection from "@/components/FlowSection";
import NextStepsSection from "@/components/NextStepsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <PathwaysSection />
      <FinancingSection />
      <TypologySection />
      <FlowSection />
      <NextStepsSection />
      <Footer />
    </div>
  );
};

export default Index;
