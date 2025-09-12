import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart, CloudCog } from "lucide-react";
import megaFireBackground from "@/assets/mega-fire-background.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";
import { useContractPurchase } from "@/hooks/useContract";
import { calculateTotalRevenue } from "@/utils/getCounter";

const HeroSection = () => {

  
  const { getTotalSupply, getKeyPrice } = useContractPurchase();
  const [revenue, setRevenue] = useState(0);
  const exchangeRateAPIkey = "37e5dd65a83c6aa37b3ba2c4";
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
const fetchRevenueCounter = async () => {
  try {
    const totalRevenue = await calculateTotalRevenue(NFTS, getTotalSupply, getKeyPrice);
    const exchangeApiURL = `https://v6.exchangerate-api.com/v6/${exchangeRateAPIkey}/pair/EUR/GBP/${totalRevenue}`;
    const response = await fetch(exchangeApiURL);

    if (!response.ok) {
      throw new Error(`Exchange API failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.conversion_result) {
      throw new Error(`Invalid response: ${JSON.stringify(data)}`);
    }

    setRevenue(data.conversion_result);
    const targetRevenue = 1000000; // 1M
    setTreasuryProgress(
      data.conversion_result ? Math.min((data.conversion_result / targetRevenue) * 100, 100) : 0
    );
    return data.conversion_result;
  } catch (error) {
    return null;
  }
};


useEffect(() => {
  fetchRevenueCounter()
    .then(() => {})
    .catch(() => {});
}, []);




  const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);
  const [treasureProgress, setTreasuryProgress] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleDirectAdherClick = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  const handleGeneralAdherClick = () => {
    setIsSelectionModalOpen(true);
  };

  const handleMembershipSelect = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  const handleInvestClick = () => {
    window.open('https://lasuitedumonde.com', '_blank');
  };

  // Animation des points lumineux - optimisée
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPoints([1, 2, 3, 4, 5]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background with uploaded image */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/31958358-6f78-4b88-8c0b-5637ee53dc5d.png"
            alt="Camping association background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 pt-40 lg:pt-60 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="page-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                Association de Gouvernance
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 sm:mb-12" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                Outils d'Organisation Local
              </h2>
            </div>
          </ScrollReveal>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">

            {/* Left: Interactive Real Map */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="relative">
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                 {/* Bandeau REJOIGNEZ LE MOUVEMENT */}
                 <div className="text-center mb-4 sm:mb-6">
                   <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                     <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-white/80 to-white/80 rounded-full shadow-lg"></div>
                     <h2 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight tracking-wide whitespace-nowrap text-white px-6 sm:px-8 drop-shadow-lg">
                       REJOIGNEZ LE <span className="text-white font-black">MOUVEMENT</span>
                     </h2>
                     <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-white/80 to-white/80 rounded-full shadow-lg"></div>
                   </div>
                 </div>
                
                {/* Real France Map - Slightly increased height */}
                <div className="relative w-full h-52 sm:h-64 md:h-80 bg-gray-900 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-5.5%2C42.0%2C8.5%2C51.2&amp;layer=mapnik&amp;marker=45.1834%2C0.7167"
                    className="w-full h-full border-0 opacity-80 pointer-events-none"
                    title="Carte de France avec marqueur Dordogne"
                  ></iframe>

                  <div
                    className="pin-debug absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm z-50 border-2 border-orange-400"
                    style={{
                      position: 'absolute',
                      zIndex: 999,
                      display: 'block',
                      visibility: 'visible',
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      minWidth: 'fit-content'
                    }}
                  >
                    <span className="text-orange-400">📍</span> Dordogne - Territoire pionnier
                  </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Membership Cards Side by Side */}
            <ScrollReveal animation="fade-right" delay={400}>
              <div className="space-y-6">
              {/* Cards Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-4 sm:mb-6">
                   {/* Bandeau ADHÉSION */}
                   <div className="text-center mb-4 sm:mb-6">
                     <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                       <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-800/60 to-gray-800/60 rounded-full shadow-md"></div>
                       <h2 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight tracking-wide whitespace-nowrap text-gray-900 px-6 sm:px-8 drop-shadow-sm">
                         <span className="text-gray-900 font-black bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">ADHÉSION</span>
                       </h2>
                       <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-gray-800/60 to-gray-800/60 rounded-full shadow-md"></div>
                     </div>
                   </div>
                  
                  <div className="border-b-2 border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                      {/* Local */}
                      <div className="text-center hover-scale cursor-pointer flex flex-col h-full" onClick={() => handleDirectAdherClick("local")}>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2 sm:mb-3">LOCALE</h3>
                        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-inner border-2 border-blue-200/50 flex items-center justify-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                          <div className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg font-black text-white drop-shadow-lg leading-tight whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                            À PARTIR DE 10€
                          </div>
                        </div>
                      </div>

                      {/* Architecte */}
                      <div className="text-center border-l border-gray-200 pl-2 sm:pl-3 md:pl-6 lg:pl-8 hover-scale cursor-pointer flex flex-col h-full" onClick={() => handleDirectAdherClick("architect")}>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2 sm:mb-3">ARCHITECTE</h3>
                        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-inner border-2 border-green-200/50 flex items-center justify-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                            100€
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Objectif + Trésor Commun */}
                <div className="bg-white rounded-xl p-2 sm:p-3 border border-gray-200">
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm font-bold text-gray-800">Progression</span>
                      <span className="text-base sm:text-lg font-black text-gray-900">{(Math.ceil(treasureProgress * 100) / 100).toFixed(2)}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-1 sm:mb-2">
                      <div
                        className="bg-gradient-orange-gold h-3 sm:h-4 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${treasureProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700">
                      <span>{revenue ? Math.ceil(revenue * 100) / 100 : 0}€ collectés</span>
                      <span>Objectif: 1M€</span>
                    </div>
                  </div>
                </div>
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

export default HeroSection;