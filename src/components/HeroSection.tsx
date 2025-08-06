import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="text-white space-y-8">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
              Le Réseau des
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Communes
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 drop-shadow-lg">
              Système d'Activation Territoriale
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed drop-shadow-lg">
              Nous fédérons <strong>10 000 pionniers</strong> pour lever <strong>1 million d'euros</strong>.
              <br />
              Cet argent finance des activateurs territoriaux qui créent des communes autonomes.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="text-xl px-16 py-6 font-bold rounded-full">
                Participer à 100€
              </Button>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Cosmic roots border effect */}
              <div className="absolute -inset-4 bg-gradient-to-t from-green-400 via-blue-500 via-purple-500 to-pink-400 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Rainbow roots pattern */}
              <div className="absolute -inset-2 rounded-xl opacity-60">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 rounded-xl animate-pulse"></div>
                <div className="absolute inset-1 bg-gradient-hero rounded-xl"></div>
              </div>
              
              {/* Tree roots decorative elements */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-16 opacity-40">
                <svg viewBox="0 0 100 50" className="w-full h-full text-white/60">
                  <path d="M50,50 Q30,30 10,10 M50,50 Q50,20 30,5 M50,50 Q70,30 90,10 M50,50 Q50,20 70,5" 
                        stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                </svg>
              </div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src={heroPortrait} 
                  alt="Portrait mystique"
                  className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Cosmic glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/20 to-purple-400/30 rounded-xl z-20 pointer-events-none"></div>
              </div>
              
              {/* Bottom roots */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-12 opacity-30">
                <svg viewBox="0 0 120 40" className="w-full h-full text-green-400">
                  <path d="M60,0 Q40,20 20,40 M60,0 Q60,25 40,35 M60,0 Q80,20 100,40 M60,0 Q60,25 80,35" 
                        stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
            </div>
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