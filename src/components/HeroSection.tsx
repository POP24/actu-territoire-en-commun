import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart } from "lucide-react";
import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              RÉSEAU <span className="text-blue-300">COMMUNES</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-100 mb-8">
              SYSTÈME D'ACTIVATION TERRITORIALE
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/20">
                <div className="text-3xl font-black text-blue-200 mb-1">10K</div>
                <div className="text-blue-100 text-sm font-medium">PIONNIERS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/20">
                <div className="text-3xl font-black text-blue-200 mb-1">1M€</div>
                <div className="text-blue-100 text-sm font-medium">FONDS</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/20">
                <div className="text-3xl font-black text-blue-200 mb-1">20</div>
                <div className="text-blue-100 text-sm font-medium">TERRITOIRES</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left: Membership Cards */}
            <div className="space-y-8">
              
              {/* Local Membership */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-1">ADHÉSION LOCALE</h3>
                      <p className="text-gray-600 font-medium">Habitants unis, projets réalisés</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-6xl font-black text-blue-600">10€</span>
                    <span className="text-2xl text-gray-500 font-bold">+ prix libre</span>
                  </div>
                  <p className="text-gray-600">Engagement minimum accessible à tous</p>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ADHÉRER LOCALEMENT
                  <Heart className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Architect Membership */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-1">ADHÉSION ARCHITECTE</h3>
                      <p className="text-gray-600 font-medium">Territoires connectés, impact démultiplié</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-6xl font-black text-orange-600">100€</span>
                  </div>
                  <p className="text-gray-600">Pour les porteurs de transformation territoriale</p>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  DEVENIR ARCHITECTE
                  <DollarSign className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-blue-200/20">
                <img 
                  src={communityGathering} 
                  alt="Rassemblement communautaire" 
                  className="w-full h-96 lg:h-[450px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl pointer-events-none"></div>
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