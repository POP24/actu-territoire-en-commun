import { Button } from "@/components/ui/button";
import { TT } from "@/components/TooltipGlossary";
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
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              🏛️ LE RÉSEAU DES
              <br />
              <span className="bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">COMMUNES</span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80">
              La première <TT term={"DAO" as any}>Organisation Autonome Décentralisée</TT> française pour l'activation territoriale
            </h2>

            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm px-4 py-2 rounded-full border border-border bg-background/40 backdrop-blur">
              <span>🎯</span>
              <span className="font-semibold">NOUS RECHERCHONS 1000 ARCHITECTES</span>
            </div>

            <div className="grid sm:flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="px-4 py-3 rounded-xl border border-border bg-background/50">
                <span className="font-bold">127/1000</span> Architectes
              </div>
              <div className="px-4 py-3 rounded-xl border border-border bg-background/50">
                <span className="font-bold">12 700€/100 000€</span>
              </div>
              <div className="px-4 py-3 rounded-xl border border-border bg-background/50">
                <span className="font-bold">2</span> Territoires activés
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-foreground/80 font-medium">💡 DEVENEZ ARCHITECTE FONDATEUR</div>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="px-8">
                  CHOISIR MON NIVEAU D'ENGAGEMENT
                </Button>
              </div>
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

              {/* Explosive filaments - Multiple directions */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                {/* Filaments radiating outward */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-primary via-accent to-transparent origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-50px)`,
                      animation: `pulse 0.5s ease-out ${i * 0.1}s, scale-in 0.8s ease-out ${i * 0.05}s`
                    }}
                  />
                ))}
                
                {/* Smaller connecting filaments */}
                {[...Array(24)].map((_, i) => (
                  <div
                    key={`small-${i}`}
                    className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-t from-secondary via-primary/50 to-transparent origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-30px)`,
                      animation: `fade-in 0.6s ease-out ${i * 0.03}s, pulse 2s infinite ${i * 0.1}s`
                    }}
                  />
                ))}

                {/* Dispersing light particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-accent rounded-full shadow-glow"
                    style={{
                      top: `${30 + Math.sin(i * 0.785) * 40}%`,
                      left: `${30 + Math.cos(i * 0.785) * 40}%`,
                      animation: `scale-in 0.4s ease-out ${i * 0.1}s, pulse 1.5s infinite ${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Tree roots decorative elements - Enhanced */}
              <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 w-16 sm:w-32 h-8 sm:h-16 opacity-40 group-hover:opacity-80 transition-all duration-500">
                <svg viewBox="0 0 100 50" className="w-full h-full text-white/60">
                  <path d="M50,50 Q30,30 10,10 M50,50 Q50,20 30,5 M50,50 Q70,30 90,10 M50,50 Q50,20 70,5" 
                        stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse group-hover:animate-none"/>
                  {/* Additional branching roots */}
                  <path d="M30,30 Q20,20 5,15 M70,30 Q80,20 95,15 M50,20 Q40,10 25,0 M50,20 Q60,10 75,0" 
                        stroke="currentColor" strokeWidth="1" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"/>
                </svg>
              </div>

              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] overflow-hidden">
                {/* Default image - Community gathering */}
                <img 
                  src={communityGathering} 
                  alt="Rassemblement communautaire"
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-elegant relative z-10 transform group-hover:scale-110 transition-all duration-700 group-hover:opacity-0"
                />
                
                {/* Hover image - Portrait mystique */}
                <img 
                  src={heroPortrait} 
                  alt="Portrait mystique"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg sm:rounded-xl shadow-elegant z-10 transform scale-95 group-hover:scale-110 transition-all duration-700 opacity-0 group-hover:opacity-100"
                />
                
                {/* Cosmic glow overlay - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/20 to-secondary/30 rounded-lg sm:rounded-xl z-20 pointer-events-none group-hover:from-primary/10 group-hover:via-secondary/30 group-hover:to-accent/40 transition-all duration-700"></div>
                
                {/* Energy burst overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent rounded-lg sm:rounded-xl z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              {/* Bottom roots - Enhanced */}
              <div className="absolute -bottom-3 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-20 sm:w-40 h-6 sm:h-12 opacity-30 group-hover:opacity-70 transition-all duration-500">
                <svg viewBox="0 0 120 40" className="w-full h-full text-accent">
                  <path d="M60,0 Q40,20 20,40 M60,0 Q60,25 40,35 M60,0 Q80,20 100,40 M60,0 Q60,25 80,35" 
                        stroke="currentColor" strokeWidth="3" fill="none"/>
                  {/* Deep root extensions */}
                  <path d="M20,40 Q10,50 0,60 M100,40 Q110,50 120,60 M40,35 Q30,45 15,50 M80,35 Q90,45 105,50" 
                        stroke="currentColor" strokeWidth="2" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"/>
                </svg>
              </div>

              {/* Side connection filaments */}
              <div className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-r from-transparent via-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-l from-transparent via-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-1/2"></div>
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