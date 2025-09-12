import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";

const PathwaysSection = () => {
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleLocalClick = () => {
    setMembershipType("local");
    setIsPurchaseModalOpen(true);
  };

  const handleArchitectClick = () => {
    setMembershipType("architect");
    setIsPurchaseModalOpen(true);
  };

  const handleMembershipSelect = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsSelectionModalOpen(false);
    setIsPurchaseModalOpen(true);
  };
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Title */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight whitespace-nowrap text-foreground px-8 sm:px-12 font-sans">
                  Choisissez votre <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Chemin</span>
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-6 max-w-7xl mx-auto">
            {/* Chemin 1 - Association locale */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="bg-gradient-card p-4 sm:p-6 md:p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 cursor-pointer flex flex-col h-full">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                  Chemin 1 · Association Locale
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">À partir de 10€</div>
                <div className="text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">ADHÉSION LOCALE</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Gouvernance du lieu</h3>
                <p className="text-muted-foreground italic text-sm">Engagement sur votre territoire</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl">🗳️</span>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Vos droits de membre</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-foreground text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Votez sur les programmes d'animation, événements et formations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Proposer et rejoindre des projets (calendrier d'activités)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Créer des événements et animer la vie locale</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl">🏠</span>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Concrètement</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-foreground text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Participez au Trésor collectif local (prix libre)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Occuper les lieux (tarifs membres, crédits d'usage)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={handleLocalClick}
                variant="cta-blue" 
                className="w-full mt-auto font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
              >
                ADHÉSION LOCALE →
              </Button>
              </div>
            </ScrollReveal>
            
            {/* Chemin 2 - Fédération nationale */}
            <ScrollReveal animation="scale" delay={300}>
              <div className="bg-gradient-card p-4 sm:p-6 md:p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-green-brand cursor-pointer flex flex-col h-full">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="bg-green-brand text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                  Chemin 2 · Fédération nationale
                </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-brand mb-2">100€</div>
                  <div className="text-green-brand font-semibold mb-3 sm:mb-4 text-sm sm:text-base">ADHÉSION ARCHITECTE</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Communauté Nationale</h3>
                  <p className="text-muted-foreground italic text-sm">Coordination globale</p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-6 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl">👑</span>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Adhésion fondatrice</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-foreground text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Participez à la trésorerie collective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Votez sur l'attribution des budgets territoriaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Accédez à toutes les opportunités du réseau</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl">🔗</span>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Connexion réseau</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-foreground text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Rejoignez les cercles thématiques (Discord)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Avantages exclusifs à venir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-brand mt-1">✓</span>
                      <span>Avantages exclusifs à venir</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={handleArchitectClick}
                variant="cta-green" 
                className="w-full mt-auto font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
              >
                ADHÉSION ARCHITECTE →
              </Button>
              </div>
            </ScrollReveal>
            
            {/* Chemin 3 - Investissement Immobilier */}
            <ScrollReveal animation="fade-right" delay={400}>
              <div className="bg-gradient-card p-4 sm:p-6 md:p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400 cursor-pointer flex flex-col h-full">
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                  Chemin 3 · Investissement Immobilier
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-2">À partir de 50€</div>
                <div className="text-orange-500 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Obligation & Crédit d'Usage</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">Achat collectif de Communs</h3>
                <p className="text-muted-foreground italic text-sm">et de services</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl">🏢</span>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Ce que vous trouverez</h4>
                  </div>
                  <ul className="space-y-1 sm:space-y-2 text-foreground text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Opérations en cours et lieux cibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Obligations adossées à l'immobilier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Crédits d'usage sur les lieux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Dossiers d'investissement & FAQ risques/garanties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Modalités, calendrier et gouvernance des projets</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={() => window.open('https://test24.lasuitedumonde.com', '_blank')}
                variant="cta-orange" 
                className="w-full mt-auto font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base"
              >
                INVESTIR DANS LES COMMUNS →
              </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <MembershipSelectionModal
        isOpen={isSelectionModalOpen}
        onClose={() => setIsSelectionModalOpen(false)}
        onSelectMembership={handleMembershipSelect}
      />
      
      <NFTPurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        membershipType={membershipType}
      />
    </section>
  );
};

export default PathwaysSection;