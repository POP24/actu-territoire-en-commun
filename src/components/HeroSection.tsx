import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";
import heroPortrait from "/lovable-uploads/53182d9e-f20d-4927-8092-8aefbc7458f6.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl">
              Le Réseau des
              <br />
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Communes
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 drop-shadow-lg">
              Système d'Activation Territoriale
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed drop-shadow-lg max-w-2xl mx-auto lg:mx-0">
              Nous fédérons <strong>10 000 pionniers</strong>
              <br />
              pour lever <strong>1 million d'euros</strong>.
              <br className="hidden sm:block" />
              <span className="inline sm:block">Cet argent finance des activateurs territoriaux qui créent des communes autonomes.</span>
            </p>
            
            <div className="flex justify-center mt-8 sm:mt-12 gap-4">
              <Button asChild variant="territorial" size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full">
                <Link to="/investir?niveau=territorial" aria-label="Adhérer niveau territorial">ADHÉRER (TERRITORIAL)</Link>
              </Button>
              <Button asChild variant="national" size="lg" className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-bold rounded-full">
                <Link to="/investir?niveau=national" aria-label="Adhérer niveau national">ADHÉRER (NATIONAL)</Link>
              </Button>
            </div>
          </div>
          
          {/* Image - Right Side */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative group">
              {/* Cosmic roots border effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-primary rounded-xl sm:rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-smooth animate-pulse"></div>
              
              {/* Rainbow roots pattern */}
              <div className="absolute -inset-1 sm:-inset-2 rounded-lg sm:rounded-xl opacity-60">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg sm:rounded-xl animate-pulse"></div>
                <div className="absolute inset-1 bg-gradient-hero rounded-lg sm:rounded-xl"></div>
              </div>
              
              {/* Tree roots decorative elements */}
              <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-32 h-8 sm:h-16 opacity-40">
                <svg viewBox="0 0 100 50" className="w-full h-full text-white/60">
                  <path d="M50,50 Q30,30 10,10 M50,50 Q50,20 30,5 M50,50 Q70,30 90,10 M50,50 Q50,20 70,5" 
                        stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                </svg>
              </div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]">
                {/* Default image - Community gathering */}
                <img 
                  src={communityGathering} 
                  alt="Rassemblement communautaire"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-elegant relative z-10 transform group-hover:scale-105 transition-smooth group-hover:opacity-0"
                />
                
                {/* Hover image - Portrait mystique */}
                <img 
                  src={heroPortrait} 
                  alt="Portrait mystique"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl shadow-elegant z-10 transform group-hover:scale-105 transition-smooth opacity-0 group-hover:opacity-100"
                />
                
                {/* Cosmic glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/20 to-secondary/30 rounded-lg sm:rounded-xl z-20 pointer-events-none"></div>
              </div>
              
              {/* Bottom roots */}
              <div className="absolute -bottom-3 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-20 sm:w-40 h-6 sm:h-12 opacity-30">
                <svg viewBox="0 0 120 40" className="w-full h-full text-accent">
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