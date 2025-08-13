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
          <div className="text-white space-y-6 sm:space-y-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl">
              Le Réseau des{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Communes
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 drop-shadow-lg">
              Système d'Activation Territoriale
            </h2>
            
            <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto space-y-6 text-center">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 - Association locale */}
                <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-white/25 hover:to-white/10">
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-white font-bold mb-4 text-xl leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      Une association locale pour chaque lieu
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      Décidez ensemble des projets, des usages et de la vie quotidienne.
                    </p>
                    
                    {/* Subtle accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  </div>
                </div>
                
                {/* Card 2 - Fédération nationale */}
                <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-white/25 hover:to-white/10">
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5-5-9-5-9-9s4-4 9-9" />
                      </svg>
                    </div>
                    
                    <h3 className="text-white font-bold mb-4 text-xl leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                      Une fédération nationale pour passer à l'échelle
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      Mutualisons nos moyens pour activer des territoires et créer l'autonomie locale.
                    </p>
                    
                    {/* Subtle accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-white drop-shadow-2xl text-xl">
                  Nous fédérons <strong className="drop-shadow-lg">10 000 pionniers</strong><br />
                  pour lever <strong className="drop-shadow-lg">1 million d'euros</strong>
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 sm:mt-12">
              <Button 
                size="lg"
                className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 drop-shadow-xl hover:scale-105"
              >
                ADHÉRER
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
              
               {/* Tree roots decorative elements - TOP */}
               <div className="absolute -top-24 sm:-top-48 left-1/2 transform -translate-x-1/2 w-96 sm:w-192 h-48 sm:h-96 opacity-50">
                 <svg viewBox="0 0 100 50" className="w-full h-full text-white/70">
                   <path d="M50,50 Q30,30 10,10 M50,50 Q50,20 30,5 M50,50 Q70,30 90,10 M50,50 Q50,20 70,5 M50,50 Q20,35 5,15 M50,50 Q80,35 95,15" 
                         stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* LEFT side filaments */}
               <div className="absolute -left-16 sm:-left-32 top-1/2 transform -translate-y-1/2 w-32 sm:w-64 h-64 sm:h-128 opacity-40">
                 <svg viewBox="0 0 50 100" className="w-full h-full text-blue-300/60">
                   <path d="M0,50 Q20,30 40,10 M0,50 Q25,50 45,30 M0,50 Q20,70 40,90 M0,50 Q15,35 35,20 M0,50 Q15,65 35,80" 
                         stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* RIGHT side filaments */}
               <div className="absolute -right-16 sm:-right-32 top-1/2 transform -translate-y-1/2 w-32 sm:w-64 h-64 sm:h-128 opacity-40">
                 <svg viewBox="0 0 50 100" className="w-full h-full text-purple-300/60">
                   <path d="M50,50 Q30,30 10,10 M50,50 Q25,50 5,30 M50,50 Q30,70 10,90 M50,50 Q35,35 15,20 M50,50 Q35,65 15,80" 
                         stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* DIAGONAL filaments - TOP LEFT */}
               <div className="absolute -top-12 -left-12 sm:-top-24 sm:-left-24 w-24 sm:w-48 h-24 sm:h-48 opacity-30">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-yellow-300/50">
                   <path d="M0,50 Q15,35 30,20 Q35,15 50,0 M0,50 Q20,40 40,30 M0,50 Q10,25 25,10" 
                         stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* DIAGONAL filaments - TOP RIGHT */}
               <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-24 sm:w-48 h-24 sm:h-48 opacity-30">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-green-300/50">
                   <path d="M50,50 Q35,35 20,20 Q15,15 0,0 M50,50 Q30,40 10,30 M50,50 Q40,25 25,10" 
                         stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* DIAGONAL filaments - BOTTOM LEFT */}
               <div className="absolute -bottom-12 -left-12 sm:-bottom-24 sm:-left-24 w-24 sm:w-48 h-24 sm:h-48 opacity-30">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-pink-300/50">
                   <path d="M0,0 Q15,15 30,30 Q35,35 50,50 M0,0 Q20,10 40,20 M0,0 Q10,25 25,40" 
                         stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* DIAGONAL filaments - BOTTOM RIGHT */}
               <div className="absolute -bottom-12 -right-12 sm:-bottom-24 sm:-right-24 w-24 sm:w-48 h-24 sm:h-48 opacity-30">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-cyan-300/50">
                   <path d="M50,0 Q35,15 20,30 Q15,35 0,50 M50,0 Q30,10 10,20 M50,0 Q40,25 25,40" 
                         stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse"/>
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
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/20 to-secondary/30 rounded-lg sm:rounded-xl z-20 pointer-events-none"></div>
               </div>
               
               {/* Bottom roots - ENHANCED */}
               <div className="absolute -bottom-18 sm:-bottom-36 left-1/2 transform -translate-x-1/2 w-120 sm:w-240 h-36 sm:h-72 opacity-40">
                 <svg viewBox="0 0 120 40" className="w-full h-full text-accent">
                   <path d="M60,0 Q40,20 20,40 M60,0 Q60,25 40,35 M60,0 Q80,20 100,40 M60,0 Q60,25 80,35 M60,0 Q25,15 5,35 M60,0 Q95,15 115,35" 
                         stroke="currentColor" strokeWidth="2.5" fill="none" className="animate-pulse"/>
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