import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart, CloudCog } from "lucide-react";
import megaFireBackground from "@/assets/mega-fire-background.jpg";
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
    console.log("Fetching revenue...");

    const totalRevenue = await calculateTotalRevenue(NFTS, getTotalSupply, getKeyPrice);
    console.log("Total Revenue (EUR):", totalRevenue);

    const exchangeApiURL = `https://v6.exchangerate-api.com/v6/${exchangeRateAPIkey}/pair/EUR/GBP/${totalRevenue}`;

    const response = await fetch(exchangeApiURL);

    if (!response.ok) {
      throw new Error(`Exchange API failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.conversion_result) {
      throw new Error(`Invalid response: ${JSON.stringify(data)}`);
    }

    console.log("Total Revenue in GBP:", data.conversion_result);
    setRevenue(data.conversion_result);
    const targetRevenue = 1000000; // 1M
setTreasuryProgress(
  revenue ? Math.min((data.conversion_result) * 100, 100) : 0);
    return data.conversion_result;
  } catch (error) {
    console.error("Error fetching revenue:", error.message);
    return null; // or you can rethrow: throw error;
  }
};


useEffect(() => {
  console.log("fix");
  fetchRevenueCounter()
    .then(() => console.log("Revenue fetch done"))
    .catch((err) => console.error("Error fetching revenue:", err));
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

  // Animation des points lumineux
  useEffect(() => {
    const points = [1, 2, 3, 4, 5];
    points.forEach((point, index) => {
      setTimeout(() => {
        setAnimatedPoints(prev => [...prev, point]);
      }, index * 500);
    });

    // Debug PIN visibility
    setTimeout(() => {
      const pinElement = document.querySelector('.pin-debug');
      console.log('PIN element found:', pinElement);
      if (pinElement) {
        console.log('PIN visibility:', window.getComputedStyle(pinElement).visibility);
        console.log('PIN display:', window.getComputedStyle(pinElement).display);
        console.log('PIN z-index:', window.getComputedStyle(pinElement).zIndex);
      }
    }, 1000);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 z-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Gradient overlays inspired by the reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>

        {/* Light shape effect */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/976879dd-34f7-4896-9f36-09c3131d6526.png"
            alt="Effet lumineux"
            className="w-full h-full object-cover mix-blend-screen opacity-40"
          />
        </div>

        {/* Additional tech glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 pt-40 lg:pt-60 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="page-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              Réseau des Communes
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/80 mb-8 sm:mb-12">
              Association d'Organisation Locale
            </h2>

            {/* Top Stats - 2 levels improved */}
            <div className="max-w-5xl mx-auto">
              {/* Conteneur avec liseret OBJECTIFS */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                {/* Liseret OBJECTIFS */}
                <div className="bg-gradient-to-r from-blue-600 via-gray-600 to-gray-800 text-white text-center py-1 px-4">
                  <span className="font-bold text-sm tracking-wider">OBJECTIFS</span>
                </div>

                {/* Cards directement attachées */}
                <div className="grid grid-cols-3 gap-0 p-4">
                  <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 rounded-l-xl border-r border-white/20 text-center group hover:bg-white/25 transition-all duration-300">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">LIEUX COMMUNS</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-cyan-400 transition-all duration-300 drop-shadow-lg">1000+</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 border-r border-white/20 text-center group hover:bg-white/25 transition-all duration-300">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">TRÉSOR COLLECTIF</div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:via-orange-400 group-hover:to-red-400 transition-all duration-300 drop-shadow-lg">1M€</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 rounded-r-xl text-center group hover:bg-white/25 transition-all duration-300">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1">GOUVERNANCE</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold drop-shadow-lg">
                      <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-cyan-400 transition-all duration-300 block sm:inline">LOCALE</span>
                      <span className="hidden sm:inline text-white/80 mx-1">/</span>
                      <span className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent group-hover:from-green-400 group-hover:via-green-500 group-hover:to-green-600 transition-all duration-300 block sm:inline">NATIONALE</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">

            {/* Left: Interactive Real Map */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                {/* Bandeau REJOIGNEZ LE MOUVEMENT */}
                <div className="bg-gradient-to-r from-white via-gray-100 to-white rounded-lg p-2 sm:p-3 mb-4 sm:mb-6 shadow-lg border-2 border-gray-300 text-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.7)' }}>
                    REJOIGNEZ LE MOUVEMENT
                  </h2>
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

            {/* Right: Membership Cards Side by Side */}
            <div className="space-y-6">
              {/* Cards Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-4 sm:mb-6">
                  {/* Bandeau ADHÉSION */}
                  <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6 shadow-lg">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                      ADHÉSION
                    </h2>
                  </div>
                  
                  <div className="border-b-2 border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                      {/* Local */}
                      <div className="text-center hover-scale cursor-pointer flex flex-col h-full" onClick={() => handleDirectAdherClick("local")}>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2 sm:mb-3">LOCAL</h3>
                        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 shadow-inner border-2 border-blue-200/50">
                          <div className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg font-black text-white drop-shadow-lg leading-tight whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                            À PARTIR DE 10€
                          </div>
                        </div>
                      </div>

                      {/* Architecte */}
                      <div className="text-center border-l border-gray-200 pl-2 sm:pl-3 md:pl-6 lg:pl-8 hover-scale cursor-pointer flex flex-col h-full" onClick={() => handleDirectAdherClick("architect")}>
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-2 sm:mb-3">ARCHITECTE</h3>
                        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-inner border-2 border-green-200/50">
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
                      <span className="text-base sm:text-lg font-black text-gray-900">{treasureProgress}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-1 sm:mb-2">
                      <div
                        className="bg-gradient-orange-gold h-3 sm:h-4 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${treasureProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700">
                      <span>{revenue?revenue:0}€ collectés</span>
                      <span>Objectif: 1M€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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