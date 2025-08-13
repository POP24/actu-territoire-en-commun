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
                {/* Card 1 - COMMUNE VIVANTE */}
                <div className="group relative bg-gradient-to-br from-emerald-400/20 to-green-800/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-300/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-emerald-300/25 hover:to-green-700/25">
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-white font-bold mb-4 text-2xl leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                      COMMUNE VIVANTE
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                      Habitants unis, projets réalisés
                    </p>
                    
                    {/* Subtle accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"></div>
                  </div>
                </div>
                
                {/* Card 2 - RÉSEAU PUISSANT */}
                <div className="group relative bg-gradient-to-br from-orange-400/20 to-red-800/20 backdrop-blur-lg rounded-2xl p-8 border border-orange-300/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-orange-300/25 hover:to-red-700/25">
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5-5-9-5-9-9s4-4 9-9" />
                      </svg>
                    </div>
                    
                    <h3 className="text-white font-bold mb-4 text-2xl leading-tight bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                      RÉSEAU PUISSANT
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                      Territoires connectés, impact démultiplié
                    </p>
                    
                    {/* Subtle accent line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
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
              
               {/* MEGA FIRE EFFECT - Multiple layers of filaments */}
               
               {/* TOP FIRE - Layer 1 */}
               <div className="absolute -top-20 sm:-top-32 left-1/2 transform -translate-x-1/2 w-64 sm:w-128 h-32 sm:h-64 opacity-20">
                 <svg viewBox="0 0 100 50" className="w-full h-full text-orange-400">
                   <path d="M50,50 Q30,30 10,10 M50,50 Q50,20 30,5 M50,50 Q70,30 90,10 M50,50 Q50,20 70,5" 
                         stroke="currentColor" strokeWidth="1" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* TOP FIRE - Layer 2 */}
               <div className="absolute -top-16 sm:-top-24 left-1/2 transform -translate-x-1/2 w-48 sm:w-80 h-24 sm:h-40 opacity-15">
                 <svg viewBox="0 0 100 50" className="w-full h-full text-red-500">
                   <path d="M50,50 Q35,35 15,15 M50,50 Q65,35 85,15" 
                         stroke="currentColor" strokeWidth="0.8" fill="none" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                 </svg>
               </div>

               {/* LEFT FIRE - Reduced */}
               <div className="absolute -left-12 sm:-left-20 top-1/2 transform -translate-y-1/2 w-24 sm:w-40 h-48 sm:h-80 opacity-15">
                 <svg viewBox="0 0 50 100" className="w-full h-full text-orange-500">
                   <path d="M0,50 Q20,30 40,10 M0,50 Q20,70 40,90" 
                         stroke="currentColor" strokeWidth="0.8" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* RIGHT FIRE - Reduced */}
               <div className="absolute -right-12 sm:-right-20 top-1/2 transform -translate-y-1/2 w-24 sm:w-40 h-48 sm:h-80 opacity-15">
                 <svg viewBox="0 0 50 100" className="w-full h-full text-orange-600">
                   <path d="M50,50 Q30,30 10,10 M50,50 Q30,70 10,90" 
                         stroke="currentColor" strokeWidth="0.8" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               {/* DIAGONAL FIRE - Simplified */}
               <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-16 sm:w-24 h-16 sm:h-24 opacity-12">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-orange-400">
                   <path d="M0,50 Q25,25 50,0" 
                         stroke="currentColor" strokeWidth="0.6" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-16 sm:w-24 h-16 sm:h-24 opacity-12">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-orange-500">
                   <path d="M50,50 Q25,25 0,0" 
                         stroke="currentColor" strokeWidth="0.6" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-16 sm:w-24 h-16 sm:h-24 opacity-12">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-orange-600">
                   <path d="M0,0 Q25,25 50,50" 
                         stroke="currentColor" strokeWidth="0.6" fill="none" className="animate-pulse"/>
                 </svg>
               </div>

               <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-16 sm:w-24 h-16 sm:h-24 opacity-12">
                 <svg viewBox="0 0 50 50" className="w-full h-full text-orange-700">
                   <path d="M50,0 Q25,25 0,50" 
                         stroke="currentColor" strokeWidth="0.6" fill="none" className="animate-pulse"/>
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
               
               {/* BOTTOM FIRE - Reduced */}
               <div className="absolute -bottom-16 sm:-bottom-24 left-1/2 transform -translate-x-1/2 w-64 sm:w-96 h-24 sm:h-32 opacity-15">
                 <svg viewBox="0 0 120 40" className="w-full h-full text-orange-500">
                   <path d="M60,0 Q40,20 20,40 M60,0 Q80,20 100,40" 
                         stroke="currentColor" strokeWidth="0.8" fill="none" className="animate-pulse"/>
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