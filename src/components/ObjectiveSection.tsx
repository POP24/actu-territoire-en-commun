import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Symboles tribaux ancestraux en SVG
const TribalLandSymbol = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <path d="M32 6 L32 26 M58 32 L38 32 M32 58 L32 38 M6 32 L26 32" stroke="currentColor" strokeWidth="2"/>
    <path d="M46 18 L36 28 M46 46 L36 36 M18 46 L28 36 M18 18 L28 28" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
    <circle cx="32" cy="12" r="2" fill="currentColor"/>
    <circle cx="52" cy="32" r="2" fill="currentColor"/>
    <circle cx="32" cy="52" r="2" fill="currentColor"/>
    <circle cx="12" cy="32" r="2" fill="currentColor"/>
  </svg>
);

const TribalToolsSymbol = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <path d="M16 32 Q32 16 48 32 Q32 48 16 32" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 16 Q48 32 32 48 Q16 32 32 16" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <path d="M24 24 L40 40 M40 24 L24 40" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="44" cy="20" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="44" cy="44" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="20" cy="44" r="2" fill="currentColor" opacity="0.6"/>
  </svg>
);

const TribalForceSymbol = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="20" r="3" fill="currentColor"/>
    <circle cx="44" cy="26" r="3" fill="currentColor"/>
    <circle cx="48" cy="40" r="3" fill="currentColor"/>
    <circle cx="40" cy="50" r="3" fill="currentColor"/>
    <circle cx="24" cy="50" r="3" fill="currentColor"/>
    <circle cx="16" cy="40" r="3" fill="currentColor"/>
    <circle cx="20" cy="26" r="3" fill="currentColor"/>
    <path d="M32 20 L44 26 L48 40 L40 50 L24 50 L16 40 L20 26 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ObjectiveSection = () => {
  return (
    <section className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 sm:p-8 md:p-10">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-112 2xl:h-112 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      
        <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          
          {/* Enhanced Main Title */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 animate-fade-in">
            <div className="mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
              <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-0.5 md:h-1 lg:h-1 xl:h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 rounded-full"></div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-black mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 leading-tight tracking-wide px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">
                <span className="text-foreground drop-shadow-sm block xs:block sm:inline">L'HEURE</span>{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block xs:block sm:inline">EST VENUE</span>
              </h2>
              <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-0.5 md:h-1 lg:h-1 xl:h-1.5 bg-gradient-to-r from-accent via-secondary to-primary mx-auto rounded-full"></div>
            </div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground max-w-full xs:max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
              Les forces convergent, les outils sont prêts, les territoires s'éveillent
            </p>
          </div>

          {/* Enhanced Cards Grid - Mobile 1 Column, Compact Width */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 3xl:gap-10 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 animate-fade-in max-w-sm xs:max-w-md sm:max-w-none mx-auto">
            
            {/* Card 1: LES LIEUX ATTENDENT - Territorial Awakening */}
            <div className="group relative transform transition-all duration-700 hover:scale-102 xs:hover:scale-103 sm:hover:scale-104 md:hover:scale-105 animate-scale-in">
              <div className="absolute -inset-0.5 xs:-inset-1 sm:-inset-1 md:-inset-2 lg:-inset-2 xl:-inset-3 bg-gradient-to-r from-emerald-400/30 via-green-400/30 to-emerald-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl blur-lg xs:blur-xl sm:blur-xl md:blur-xl lg:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/50 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl overflow-hidden shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl xl:shadow-3xl min-h-[320px] xs:min-h-[360px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pb-1 xs:pb-2 sm:pb-2 md:pb-3 lg:pb-3 xl:pb-4 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl xs:blur-2xl sm:blur-2xl md:blur-2xl lg:blur-3xl"></div>
                  <div className="relative flex flex-col items-center space-y-1 xs:space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl blur-md xs:blur-lg sm:blur-lg md:blur-lg lg:blur-xl opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalLandSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-3">
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-0.5 xs:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2"></div>
                        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-emerald-700 dark:text-emerald-300 tracking-wider leading-tight">
                          LES LIEUX
                        </h3>
                        <h4 className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-wider">
                          ATTENDENT
                        </h4>
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mt-0.5 xs:mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2"></div>
                      </div>
                      <p className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">Des milliers d'opportunités</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pt-0 xs:pt-1 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-3 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4 mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 flex-grow">
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Communes rurales</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-emerald-600 dark:text-emerald-400">30.8K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Tiers-lieux actifs</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-emerald-600 dark:text-emerald-400">3.5K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Hectares libres/an</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-emerald-600 dark:text-emerald-400">150K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Écolieux actifs</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-emerald-600 dark:text-emerald-400">1.5K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Fermes disponibles</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-emerald-600 dark:text-emerald-400">5K+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-1.5 xs:space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-3.5 xl:space-x-4 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-5 2xl:py-6 mt-auto">
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-emerald-700 dark:text-emerald-300 italic">Les terres se libèrent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: LES OUTILS FONCTIONNENT - Digital Mastery */}
            <div className="group relative transform transition-all duration-700 hover:scale-102 xs:hover:scale-103 sm:hover:scale-104 md:hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="absolute -inset-0.5 xs:-inset-1 sm:-inset-1 md:-inset-2 lg:-inset-2 xl:-inset-3 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl blur-lg xs:blur-xl sm:blur-xl md:blur-xl lg:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-blue-200/50 dark:border-blue-800/50 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl overflow-hidden shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl xl:shadow-3xl min-h-[320px] xs:min-h-[360px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pb-1 xs:pb-2 sm:pb-2 md:pb-3 lg:pb-3 xl:pb-4 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl xs:blur-2xl sm:blur-2xl md:blur-2xl lg:blur-3xl"></div>
                  <div className="relative flex flex-col items-center space-y-1 xs:space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl blur-md xs:blur-lg sm:blur-lg md:blur-lg lg:blur-xl opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalToolsSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-3">
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-0.5 xs:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2"></div>
                        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-blue-700 dark:text-blue-300 tracking-wider leading-tight">
                          LES OUTILS
                        </h3>
                        <h4 className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-black text-blue-600 dark:text-blue-400 tracking-wider">
                          FONCTIONNENT
                        </h4>
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mx-auto mt-0.5 xs:mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2"></div>
                      </div>
                      <p className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-blue-600 dark:text-blue-400 mb-1 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">L'infrastructure collaborative existe déjà</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pt-0 xs:pt-1 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-3 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4 mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 flex-grow">
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Crowdfunding 2024 Don</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-blue-600 dark:text-blue-400">179M€</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Crowdfunding 2024 Immo</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-blue-600 dark:text-blue-400">850M€</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Monnaies locales</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-blue-600 dark:text-blue-400">82</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">HelloAsso</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-blue-600 dark:text-blue-400">370K assos</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">SEL actifs</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-blue-600 dark:text-blue-400">600+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-1.5 xs:space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-3.5 xl:space-x-4 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-5 2xl:py-6 mt-auto">
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-blue-700 dark:text-blue-300 italic">L'infrastructure est prête</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: LES FORCES VIVES BOUILLONNENT - Collective Power */}
            <div className="group relative transform transition-all duration-700 hover:scale-102 xs:hover:scale-103 sm:hover:scale-104 md:hover:scale-105 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="absolute -inset-0.5 xs:-inset-1 sm:-inset-1 md:-inset-2 lg:-inset-2 xl:-inset-3 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl blur-lg xs:blur-xl sm:blur-xl md:blur-xl lg:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-purple-200/50 dark:border-purple-800/50 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl overflow-hidden shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl xl:shadow-3xl min-h-[320px] xs:min-h-[360px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px] xl:min-h-[580px] 2xl:min-h-[620px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pb-1 xs:pb-2 sm:pb-2 md:pb-3 lg:pb-3 xl:pb-4 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl xs:blur-2xl sm:blur-2xl md:blur-2xl lg:blur-3xl"></div>
                  <div className="relative flex flex-col items-center space-y-1 xs:space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl blur-md xs:blur-lg sm:blur-lg md:blur-lg lg:blur-xl opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-3xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalForceSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-3">
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-0.5 xs:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2"></div>
                        <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-purple-700 dark:text-purple-300 tracking-wider leading-tight">
                          LES FORCES VIVES
                        </h3>
                        <h4 className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-black text-purple-600 dark:text-purple-400 tracking-wider">
                          BOUILLONNENT
                        </h4>
                        <div className="w-4 xs:w-5 sm:w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto mt-0.5 xs:mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2"></div>
                      </div>
                      <p className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-purple-600 dark:text-purple-400 mb-1 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">1 million de personnes prêtes</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-2 xs:p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-8 pt-0 xs:pt-1 sm:pt-1 md:pt-2 lg:pt-2 xl:pt-3 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 xl:gap-3.5 2xl:gap-4 mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 flex-grow">
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Néo-ruraux 2020+</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-purple-600 dark:text-purple-400">200K</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Porteurs agricoles</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-purple-600 dark:text-purple-400">50K+</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Jeunes cherchent terres</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-purple-600 dark:text-purple-400">30K</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">CIVAM, MRJC</span>
                      <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-purple-600 dark:text-purple-400">ACTIFS</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl xl:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-5 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Membres AMAP</span>
                      <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-purple-600 dark:text-purple-400">100K+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-1.5 xs:space-x-2 sm:space-x-2.5 md:space-x-3 lg:space-x-3.5 xl:space-x-4 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-5 2xl:py-6 mt-auto">
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-purple-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-purple-700 dark:text-purple-300 italic">L'énergie est là, mais dispersée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RELIONS-NOUS Section */}
          <div className="relative animate-fade-in px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-700/5 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-4xl blur-2xl xs:blur-3xl sm:blur-3xl md:blur-3xl lg:blur-4xl"></div>
            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
              
              {/* Title with same style as L'HEURE EST VENUE but fully responsive */}
              <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
                <div className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 h-0.5 sm:h-0.5 md:h-1 lg:h-1 xl:h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 rounded-full"></div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-black mb-2 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8 leading-tight tracking-wide px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">
                  <span className="text-foreground drop-shadow-sm block xs:block sm:inline">RELIONS</span>{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block xs:block sm:inline">- NOUS</span>
                </h3>
                <div className="w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 h-0.5 sm:h-0.5 md:h-1 lg:h-1 xl:h-1.5 bg-gradient-to-r from-accent via-secondary to-primary mx-auto rounded-full"></div>
              </div>
              
              {/* Central Message Card */}
              <div className="relative group mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 max-w-full xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                <div className="absolute -inset-0.5 xs:-inset-0.5 sm:-inset-1 md:-inset-1 lg:-inset-1.5 xl:-inset-2 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-700/20 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-4xl blur xs:blur-sm sm:blur md:blur-lg lg:blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-card/90 backdrop-blur-md border border-blue-200/50 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-4xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 shadow-lg xs:shadow-xl sm:shadow-xl md:shadow-2xl lg:shadow-2xl xl:shadow-3xl">
                  <div className="space-y-2 xs:space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8">
                    <h4 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-black bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent tracking-wide px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">
                      Lieux • Cagnottes • Votes
                    </h4>
                    
                    <div className="w-8 xs:w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 2xl:w-24 h-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 mx-auto"></div>
                    
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground/90 font-semibold leading-relaxed max-w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto px-1 xs:px-2 sm:px-2 md:px-3 lg:px-4">
                      On relie ce qui existe déjà pour faire basculer<br className="hidden md:block" /> 
                      les territoires en autonomie.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-center items-center max-w-full xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
                <Button 
                  className="w-full xs:w-full sm:w-auto btn-cta-blue font-semibold text-white px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-2xl text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  ADHÉRER
                </Button>
                
                <a 
                  href="https://test24.lasuitedumonde.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full xs:w-full sm:w-auto"
                >
                  <button className="w-full btn-cta-orange font-semibold text-white px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2 xs:py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-2xl text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    INVESTIR LOCALEMENT
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;