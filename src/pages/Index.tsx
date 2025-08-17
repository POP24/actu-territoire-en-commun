import FAQSection from "@/components/FAQSection";
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


import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Réseau des Communes — Activer des communes autonomes"
        description="10 000 membres pour financer des activateurs locaux. Adhérez dès 100€."
      />
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <LaunchpadSection />
      <MaillageTerritorialSection />
      <PathwaysSection />
      <GovernanceSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
