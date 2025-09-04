import FAQSection from "@/components/FAQSection";
import FundingFlowSection from "@/components/FundingFlowSection";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import PathwaysSection from "@/components/PathwaysSection";
import GovernanceSection from "@/components/GovernanceSection";
import FinancingSection from "@/components/FinancingSection";
import LaunchpadSection from "@/components/LaunchpadSection";
import MaillageTerritorialSection from "@/components/MaillageTerritorialSection";
import TypologySection from "@/components/TypologySection";
import OutilsSection from "@/components/OutilsSection";
import ChatButton from "@/components/ChatButton";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="SDM DAO"
        description="Financez ensemble les projets de vos territoires. Prix libre dès 10€."
      />
      <Header />
      <HeroSection />
      <PathwaysSection />
      <LaunchpadSection />
      <GovernanceSection />
      <MaillageTerritorialSection />
      <ObjectiveSection />
      <OutilsSection />
      <FundingFlowSection />
      <FAQSection />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
