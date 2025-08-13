import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";
import heroPortrait from "/lovable-uploads/53182d9e-f20d-4927-8092-8aefbc7458f6.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Image - Top */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-smooth"></div>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img 
                src={communityGathering} 
                alt="Rassemblement communautaire"
                className="w-full h-full object-cover rounded-2xl shadow-elegant relative z-10 group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-secondary/20 rounded-2xl z-20"></div>
            </div>
          </div>
        </div>

        {/* Main Content - Center */}
        <div className="text-center text-white space-y-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Le Réseau des{" "}
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Communes
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
              Système d'Activation Territoriale
            </h2>
          </div>

          {/* Key Concepts - Flowing layout */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Notre Vision</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Association locale pour chaque lieu</h4>
                      <p className="text-white/80">Décidez ensemble des projets, des usages et de la vie quotidienne.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Fédération nationale pour passer à l'échelle</h4>
                      <p className="text-white/80">Mutualisons nos moyens pour activer des territoires et créer l'autonomie locale.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl sm:text-3xl font-bold">
                <span className="text-white/90">Nous fédérons </span>
                <span className="text-white">10 000 pionniers</span>
                <br />
                <span className="text-white/90">pour lever </span>
                <span className="text-white">1 million d'euros</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="text-xl px-16 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 bg-white text-primary hover:bg-white/90"
            >
              ADHÉRER
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;