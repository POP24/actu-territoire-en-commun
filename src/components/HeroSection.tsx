import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart } from "lucide-react";
import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);
  const [treasureProgress, setTreasuryProgress] = useState(65);

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Fullscreen */}
      <div className="absolute inset-0 z-0">
        <img 
          src={communityGathering} 
          alt="Arrière-plan communautaire" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              RÉSEAU DES <span className="text-blue-300">COMMUNES</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-100 mb-8">
              SYSTÈME D'ORGANISATION LOCAL
            </h2>
            
            {/* Top Stats */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white font-bold text-sm sm:text-base mb-12">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-blue-300">(1000)</span> LIEUX COMMUNS
              </span>
              <span className="hidden sm:inline text-blue-300">━</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                CO-GOUVERNANCE <span className="text-blue-300">(par niveau)</span>
              </span>
              <span className="hidden sm:inline text-blue-300">━</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-orange-400">(1M€)</span> TRÉSOR COMMUN
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Left: Interactive France Map */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-200/20">
                <h3 className="text-white font-bold text-lg mb-4 text-center">RÉSEAU EN CONSTRUCTION</h3>
                
                {/* Simple France SVG Map */}
                <div className="relative w-full h-80 bg-blue-900/30 rounded-2xl flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Simplified France outline */}
                    <path
                      d="M80 120 L90 80 L120 70 L160 75 L190 80 L220 85 L250 90 L280 100 L300 120 L310 140 L315 160 L310 180 L300 200 L290 220 L280 240 L270 260 L250 280 L220 290 L190 295 L160 290 L130 285 L100 270 L85 250 L75 220 L70 190 L75 160 L80 120 Z"
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="rgba(147, 197, 253, 0.8)"
                      strokeWidth="2"
                      className="transition-all duration-300 hover:fill-blue-400/40"
                    />
                    
                    {/* Points lumineux en Dordogne (Sud-Ouest) */}
                    {[
                      { x: 140, y: 220, delay: 0 },
                      { x: 160, y: 235, delay: 500 },
                      { x: 180, y: 210, delay: 1000 },
                      { x: 155, y: 200, delay: 1500 },
                      { x: 170, y: 245, delay: 2000 }
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#f97316"
                        className={`transition-all duration-1000 ${
                          animatedPoints.includes(index + 1) 
                            ? 'opacity-100 animate-pulse' 
                            : 'opacity-0'
                        }`}
                      >
                        <animate
                          attributeName="r"
                          values="4;8;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                  </svg>
                  
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
                    <span className="text-orange-400">●</span> Dordogne - 5 projets actifs
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Membership Cards Side by Side */}
            <div className="space-y-6">
              {/* Cards Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="border-b-2 border-gray-200 pb-4 mb-6">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Habitant Local */}
                      <div className="text-center">
                        <h3 className="text-lg font-black text-gray-900 mb-2">HABITANT LOCAL</h3>
                        <div className="text-3xl font-black text-blue-600 mb-1">10€</div>
                        <div className="text-sm text-gray-600 mb-4">Prix libre (min 10€)</div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl">
                          ADHÉRER
                        </Button>
                      </div>
                      
                      {/* Architecte Réseau */}
                      <div className="text-center border-l-2 border-gray-200 pl-8">
                        <h3 className="text-lg font-black text-gray-900 mb-2">ARCHITECTE RÉSEAU</h3>
                        <div className="text-3xl font-black text-orange-600 mb-1">100€</div>
                        <div className="text-sm text-gray-600 mb-4">100€ unique</div>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl">
                          ADHÉRER
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trésor Commun Section */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">TRÉSOR COMMUN</h4>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Progression</span>
                      <span className="text-sm font-bold text-gray-900">{treasureProgress}%</span>
                    </div>
                    <Progress value={treasureProgress} className="h-3 mb-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>650 000€ collectés</span>
                      <span>Objectif: 1M€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              REJOINDRE LE RÉSEAU COMMUNES
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-blue-100 mt-4 text-lg">
              Ensemble, créons les communes de demain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;