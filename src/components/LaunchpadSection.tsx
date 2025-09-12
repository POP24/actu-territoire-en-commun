import { useEffect,useState } from "react";
import { useContractPurchase } from "@/hooks/useContract";
import ScrollReveal from "@/components/ScrollReveal";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";

const LaunchpadSection = () => {
  const { getTotalOwners } = useContractPurchase()
  const NFTS = [
    {
      name: "USAGER LOCAL",
      contractAddress: "0x0b27EB1A9922c4Cd7327B9DbeA7F250622Ebbea9" // Replace with actual contract
    },
    {
      name: "ARCHITECTE RÉSEAU",
      contractAddress: "0x0b27EB1A9922c4Cd7327B9DbeA7F250622Ebbea9" // Replace with actual contract
    }
  ];

  const [totalOwners, setTotalOwners] = useState<number>(0);
  const [percentage, setPercentage] = useState<string>("0");
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleInvestClick = () => {
    window.open('https://test24.lasuitedumonde.com', '_blank');
  };

  const handleAdhererClick = () => {
    setIsSelectionModalOpen(true);
  };

  const handleMembershipSelect = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        let combined = 0;
        for (const nft of NFTS) {
          const owners = await getTotalOwners(nft.contractAddress);
          console.log(owners)
          combined += Number(owners);
        }
        setTotalOwners(combined);
        const percentageValue = (combined / 10000) * 100;
        console.log(percentageValue)
        setPercentage(percentageValue.toFixed(2)); // "0.06"
      } catch (err) {
        console.error("Failed to fetch total owners:", err);
      }
    };

    fetchOwners();
  }, [getTotalOwners]);

  console.log(percentage)
  
  return (
    <section id="activez-territoire" className="relative py-16 bg-black overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="title-with-underline text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Activez votre <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Territoire</span>
              </h2>
              <p className="text-gray-300 text-lg mb-2">Transformez les idées en actions.</p>
              <p className="text-gray-400">Financez les projets qui comptent, ensemble.</p>
            </div>
          </ScrollReveal>

          {/* Two Launchpads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Real-Estate Launchpad */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Immobilier <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Partagé</span>
                </h3>
                <p className="text-gray-300 mb-6">Mutualisez. Financez. Construire.</p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-fit">
                  {/* Mock interface for Real Estate */}
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-gray-800">🏕 CAMPINGS EN COMMUN - DORDOGNE</h4>
                      <div className="text-sm text-gray-500">🏠 IMMOBILIER</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4">
                      <div className="hover-scale cursor-pointer">
                        <div className="h-24 rounded-lg mb-2 overflow-hidden">
                          <img src="/lovable-uploads/963b287f-eb27-42eb-b638-6ff50e70d2d7.png" alt="Camping tentes" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xs text-gray-600">Premier palier</div>
                      </div>
                      <div className="hover-scale cursor-pointer">
                        <div className="h-24 rounded-lg mb-2 overflow-hidden">
                          <img src="/lovable-uploads/314ad510-583c-4e94-89f0-d64f6902556a.png" alt="Pavillon camping" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xs text-gray-600">Deuxième palier</div>
                      </div>
                      <div className="hover-scale cursor-pointer">
                        <div className="h-24 rounded-lg mb-2 overflow-hidden">
                          <img src="/lovable-uploads/82f7ffbd-1b63-4fb1-9b63-bba4d88b098e.png" alt="Vue aérienne camping" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xs text-gray-600">Troisième palier</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">0%</div>
                        <div className="text-xs text-gray-500">FINANCÉ</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">€0 / €2,650,000</div>
                        <div className="text-xs text-gray-500">Objectif</div>
                      </div>
                    </div>

                    <button 
                      className="w-full btn-cta-orange py-3 rounded-lg font-semibold"
                      onClick={handleInvestClick}
                    >
                      INVESTIR
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm">Achetons les terres de notre émancipation</p>
                  <p className="text-gray-400 text-xs">Propriété collective avec rendements durables.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Membership Launchpad */}
            <ScrollReveal animation="fade-right" delay={300}>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Trésorerie <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Commune</span>
                </h3>
                <p className="text-gray-300 mb-6">Rejoignez. Votez. Décidez.</p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-fit mt-4">
                  {/* Mock interface for Membership */}
                  <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-cyan-500/30">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-white">🌐 ADHÉSION ASSOCIATIVE</h4>
                      <div className="text-xs bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">⚡ GOUVERNANCE</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="hover-scale cursor-pointer">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 h-28 rounded-lg mb-2 flex flex-col items-center justify-center">
                          <div className="text-white font-bold text-base mb-1">LOCALE</div>
                          <div className="text-white font-bold text-sm">À PARTIR DE 10€</div>
                        </div>
                      </div>
                      <div className="hover-scale cursor-pointer">
                        <div className="bg-gradient-to-br from-green-600 to-green-700 h-28 rounded-lg mb-2 flex flex-col items-center justify-center">
                          <div className="text-white font-bold text-base mb-1">ARCHITECTE</div>
                          <div className="text-white font-bold text-sm">100€</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">{Math.round(parseFloat(percentage) * 100) / 100}%</div>
                        <div className="text-xs text-gray-400">SOUSCRIT</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-white">{totalOwners?totalOwners:0} / 10,000</div>
                        <div className="text-xs text-gray-400">Members</div>
                      </div>
                    </div>

                    <button 
                      className="w-full btn-cta-blue py-3 rounded-lg font-semibold"
                      onClick={handleAdhererClick}
                    >
                      ADHÉRER
                    </button>
                  </div>

                  <p className="text-gray-300 text-sm">Participez aux décisions de votre territoire</p>
                  <p className="text-gray-400 text-xs">Gouvernance, avantages et résilience collective.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
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

export default LaunchpadSection;