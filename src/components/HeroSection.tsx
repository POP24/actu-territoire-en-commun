import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart } from "lucide-react";
import megaFireBackground from "@/assets/mega-fire-background.jpg";
import { useState, useEffect } from "react";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";

const HeroSection = () => {
  const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);
  const [treasureProgress, setTreasuryProgress] = useState(65);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleAdherClick = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsModalOpen(true);
  };

  // Animation des points lumineux
  useEffect(() => {
    const points = [1, 2, 3, 4, 5];
    points.forEach((point, index) => {
      setTimeout(() => {
        setAnimatedPoints(prev => [...prev, point]);
      }, index * 500);
    });
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
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              RÉSEAU DES <span className="text-white/90">COMMUNES</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/80 mb-8 sm:mb-12">
              ASSOCIATION D'ORGANISATION LOCALE
            </h2>
            
            {/* Top Stats - 2 levels improved */}
            <div className="max-w-5xl mx-auto">
              {/* First Level - Main Categories */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6">
                <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm mb-1">LIEUX COMMUNS</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">1000+</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm mb-1">TRÉSOR COLLECTIF</div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-orange-400">1M€</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-2 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-xs sm:text-sm mb-1">GOUVERNANCE</div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-white">
                    <span className="block sm:inline">LOCALE</span>
                    <span className="hidden sm:inline">/</span>
                    <span className="block sm:inline">GLOBAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
            
            {/* Left: Interactive Real Map */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center">RÉSEAU EN CONSTRUCTION</h3>
                
                {/* Real France Map - Fixed for mobile with scroll passthrough */}
                <div className="relative w-full h-64 sm:h-80 md:h-[26rem] bg-gray-900 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-5.5%2C42.0%2C8.5%2C51.2&amp;layer=mapnik&amp;marker=45.1834%2C0.7167"
                    className="w-full h-full border-0 opacity-80 pointer-events-none"
                    title="Carte de France avec marqueur Dordogne"
                  ></iframe>
                  
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                    <span className="text-orange-400">📍</span> Dordogne - Territoire pionnier
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Membership Cards Side by Side */}
            <div className="space-y-6">
              {/* Cards Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="border-b-2 border-gray-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                      {/* Usager Local */}
                      <div className="text-center hover-scale cursor-pointer flex flex-col h-full">
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-1 sm:mb-2">USAGER LOCAL</h3>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-700 mb-1">Prix Libre</div>
                        <div className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4 flex-grow">à partir de 10€</div>
                        <Button
                          onClick={() => handleAdherClick("local")}
                          className="w-full btn-cta-blue font-semibold text-white"
                        >
                          ADHÉSION LOCALE →
                        </Button>
                      </div>
                      
                      {/* Architecte Réseau */}
                      <div className="text-center border-l border-gray-200 pl-2 sm:pl-3 md:pl-6 lg:pl-8 hover-scale cursor-pointer flex flex-col h-full">
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-1 sm:mb-2">ARCHITECTE RÉSEAU</h3>
                        <div className="text-3xl sm:text-4xl font-black text-green-brand mb-1">100€</div>
                        <div className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4 flex-grow">10 000 adhésions disponible</div>
                        <Button
                          onClick={() => handleAdherClick("architect")}
                          className="w-full btn-cta-green font-semibold text-white"
                        >
                          ADHÉSION ARCHITECTE →
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Objectif + Trésor Commun */}
                <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200">
                  <div className="text-center mb-3 sm:mb-4">
                    <div className="bg-gradient-orange-gold text-white inline-block py-1 sm:py-2 px-3 sm:px-6 rounded-lg font-bold text-xs sm:text-sm tracking-wider mb-2 sm:mb-3 shadow-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                      TRÉSOR COMMUN
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-bold text-gray-800">Progression</span>
                      <span className="text-base sm:text-lg font-black text-gray-900">{treasureProgress}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 sm:h-4 mb-2 sm:mb-3">
                      <div 
                        className="bg-gradient-orange-gold h-3 sm:h-4 rounded-full transition-all duration-500 shadow-sm" 
                        style={{width: `${treasureProgress}%`}}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700">
                      <span>650 000€ collectés</span>
                      <span>Objectif: 1M€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <NFTPurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        membershipType={membershipType}
      />
    </section>
  );
};

export default HeroSection;