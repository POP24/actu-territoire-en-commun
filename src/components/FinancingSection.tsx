import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";

const FinancingSection = () => {
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleSelectMembership = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  const handleLocalClick = () => {
    setMembershipType("local");
    setIsPurchaseModalOpen(true);
  };

  const handleArchitectClick = () => {
    setMembershipType("architect");
    setIsPurchaseModalOpen(true);
  };
  return (
    <section id="financement" className="py-16 sm:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-5 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 sm:left-20 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-card rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-foreground">FINANCEZ VOTRE</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Immobilier Partagé */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Immobilier Partagé</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-primary mb-2">Obligations</div>
                  <div className="text-sm text-muted-foreground">Investissement sécurisé</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-secondary mb-2">Crédits d'Usage</div>
                  <div className="text-sm text-muted-foreground">Accès aux lieux</div>
                </div>
              </div>
            </div>

            {/* Trésorerie Commune */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Trésorerie Commune</span>
              </h3>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/20 shadow-soft space-y-4">
                <p className="text-lg font-bold text-foreground">
                  Rejoignez. Votez. Décidez.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-base font-bold text-foreground">
                    <span>🌐</span>
                    <span>ADHÉSION ASSOCIATIVE</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-base font-bold text-foreground">
                    <span>⚡</span>
                    <span>GOUVERNANCE</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <Button
                    onClick={handleLocalClick}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="text-sm">LOCALE</div>
                      <div className="text-xs">À PARTIR DE 10€</div>
                    </div>
                  </Button>
                  
                  <Button
                    onClick={handleArchitectClick}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="text-sm">ARCHITECTE</div>
                      <div className="text-xs">100€</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <MembershipSelectionModal
        isOpen={isSelectionModalOpen}
        onClose={() => setIsSelectionModalOpen(false)}
        onSelectMembership={handleSelectMembership}
      />
      
      <NFTPurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        membershipType={membershipType}
      />
    </section>
  );
};

export default FinancingSection;