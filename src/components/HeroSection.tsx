import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart } from "lucide-react";
import megaFireBackground from "@/assets/mega-fire-background.jpg";
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-36 sm:py-40">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              RÉSEAU DES <span className="text-white/90">COMMUNES</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/80 mb-12">
              SYSTÈME D'ORGANISATION LOCAL
            </h2>
            
            {/* Top Stats - 2 levels improved */}
            <div className="max-w-5xl mx-auto">
              {/* First Level - Main Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/15 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-sm mb-1">LIEUX COMMUNS</div>
                  <div className="text-3xl font-black text-white">1000+</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-sm mb-1">TRÉSOR COLLECTIF</div>
                  <div className="text-3xl font-black text-orange-400">1M€</div>
                </div>
                <div className="bg-white/15 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 text-center">
                  <div className="text-white font-bold text-sm mb-1">GOUVERNANCE</div>
                  <div className="text-lg font-bold text-white">LOCALE/GLOBAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Left: Interactive Real Map */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <h3 className="text-white font-bold text-lg mb-4 text-center">RÉSEAU EN CONSTRUCTION</h3>
                
                {/* Real France Map - Full country view */}
                <div className="relative w-full h-80 bg-gray-900 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-5.5%2C42.0%2C8.5%2C51.2&amp;layer=mapnik&amp;marker=45.1834%2C0.7167"
                    className="w-full h-full border-0 opacity-80"
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
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-6">
                  <div className="border-b-2 border-gray-200 pb-4 mb-6">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Usager Local */}
                      <div className="text-center hover-scale cursor-pointer">
                        <h3 className="text-lg font-black text-gray-900 mb-2">USAGER LOCAL</h3>
                        <div className="text-3xl font-black text-blue-700 mb-1">10€</div>
                        <div className="text-sm text-gray-600 mb-4">Prix libre (min 10€)</div>
                        <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl">
                          ADHÉRER
                        </Button>
                      </div>
                      
                      {/* Architecte Réseau */}
                      <div className="text-center border-l-2 border-gray-200 pl-8 hover-scale cursor-pointer">
                        <h3 className="text-lg font-black text-gray-900 mb-2">ARCHITECTE RÉSEAU</h3>
                        <div className="text-3xl font-black text-green-brand mb-1">100€</div>
                        <div className="text-sm text-gray-600 mb-4">100€ unique</div>
                        <Button className="w-full bg-green-brand hover:bg-green-dark text-white font-bold py-3 rounded-xl">
                          ADHÉRER
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objectif Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 px-4 rounded-t-lg font-bold text-sm tracking-wider">
                  OBJECTIF
                </div>
                
                {/* Trésor Commun Section */}
                <div className="bg-gray-100 rounded-b-lg rounded-t-none p-4">
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
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              ADHÉRER
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-white/80 mt-4 text-lg">
              Ensemble, créons les communes de demain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;