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
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-8xl mx-auto">
          
          {/* Enhanced Main Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight tracking-wide px-2">
                <span className="text-foreground drop-shadow-sm block sm:inline">L'HEURE</span>{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block sm:inline">EST VENUE</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent via-secondary to-primary mx-auto rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Les forces convergent, les outils sont prêts, les territoires s'éveillent
            </p>
          </div>

          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 animate-fade-in">
            
            {/* Card 1: LES LIEUX ATTENDENT - Territorial Awakening */}
            <div className="group relative transform transition-all duration-700 hover:scale-105 animate-scale-in md:col-span-1">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-emerald-400/30 via-green-400/30 to-emerald-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl min-h-[480px] sm:min-h-[520px] md:min-h-[580px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 pb-2 sm:pb-3 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl"></div>
                  <div className="relative flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl sm:rounded-2xl blur-lg opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalLandSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 sm:mb-2">
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-1 sm:mb-2"></div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-700 dark:text-emerald-300 tracking-wider leading-tight">
                          LES LIEUX
                        </h3>
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-wider">
                          ATTENDENT
                        </h4>
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mt-1 sm:mt-2"></div>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-emerald-600 dark:text-emerald-400 mb-2 sm:mb-3 md:mb-4 px-2">Des milliers d'opportunités</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-0 sm:pt-1 md:pt-2 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 flex-grow">
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs sm:text-sm md:text-base">Communes rurales</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-600 dark:text-emerald-400">30.8K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs sm:text-sm md:text-base">Tiers-lieux actifs</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-600 dark:text-emerald-400">3.5K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs sm:text-sm md:text-base">Hectares libres/an</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-600 dark:text-emerald-400">150K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs sm:text-sm md:text-base">Écolieux actifs</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-600 dark:text-emerald-400">1.5K</span>
                    </div>
                    <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                      <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-xs sm:text-sm md:text-base">Fermes disponibles</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-emerald-600 dark:text-emerald-400">5K+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 py-2 sm:py-3 md:py-6 mt-auto">
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-emerald-700 dark:text-emerald-300 italic">Les terres se libèrent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: LES OUTILS FONCTIONNENT - Digital Mastery */}
            <div className="group relative transform transition-all duration-700 hover:scale-105 animate-scale-in md:col-span-1" style={{animationDelay: '0.2s'}}>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-blue-200/50 dark:border-blue-800/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl min-h-[480px] sm:min-h-[520px] md:min-h-[580px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 pb-2 sm:pb-3 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                  <div className="relative flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl blur-lg opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalToolsSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 sm:mb-2">
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-1 sm:mb-2"></div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-700 dark:text-blue-300 tracking-wider leading-tight">
                          LES OUTILS
                        </h3>
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-blue-600 dark:text-blue-400 tracking-wider">
                          FONCTIONNENT
                        </h4>
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mx-auto mt-1 sm:mt-2"></div>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 md:mb-4 px-2">L'infrastructure collaborative existe déjà</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-0 sm:pt-1 md:pt-2 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 flex-grow">
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-base">Crowdfunding 2024 Don</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400">179M€</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-base">Crowdfunding 2024 Immo</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400">850M€</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-base">Monnaies locales</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400">82</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-base">HelloAsso</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400">370K assos</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm md:text-base">SEL actifs</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-blue-600 dark:text-blue-400">600+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 py-2 sm:py-3 md:py-6 mt-auto">
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-blue-700 dark:text-blue-300 italic">L'infrastructure est prête</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: LES FORCES VIVES BOUILLONNENT - Collective Power */}
            <div className="group relative transform transition-all duration-700 hover:scale-105 animate-scale-in md:col-span-1" style={{animationDelay: '0.4s'}}>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-xl border border-purple-200/50 dark:border-purple-800/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl min-h-[480px] sm:min-h-[520px] md:min-h-[580px] flex flex-col">
                
                {/* Card Header with Tribal Symbol */}
                <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 pb-2 sm:pb-3 flex-shrink-0">
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                  <div className="relative flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
                    
                    {/* Enhanced Tribal Symbol */}
                    <div className="relative group/symbol">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl sm:rounded-2xl blur-lg opacity-40 group-hover/symbol:opacity-70 transition-all duration-500"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-xl transform group-hover/symbol:rotate-12 transition-all duration-500">
                        <TribalForceSymbol />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="text-center">
                      <div className="mb-1 sm:mb-2">
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-1 sm:mb-2"></div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-purple-700 dark:text-purple-300 tracking-wider leading-tight">
                          LES FORCES VIVES
                        </h3>
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-purple-600 dark:text-purple-400 tracking-wider">
                          BOUILLONNENT
                        </h4>
                        <div className="w-6 sm:w-8 md:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto mt-1 sm:mt-2"></div>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3 md:mb-4 px-2">1 million de personnes prêtes</p>
                    </div>
                  </div>
                </div>
                
                {/* Data Grid */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-0 sm:pt-1 md:pt-2 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 flex-grow">
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs sm:text-sm md:text-base">Néo-ruraux 2020+</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-purple-600 dark:text-purple-400">200K</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs sm:text-sm md:text-base">Porteurs agricoles</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-purple-600 dark:text-purple-400">50K+</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs sm:text-sm md:text-base">Jeunes cherchent terres</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-purple-600 dark:text-purple-400">30K</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs sm:text-sm md:text-base">CIVAM, MRJC</span>
                      <span className="text-sm sm:text-base md:text-lg font-black text-purple-600 dark:text-purple-400">ACTIFS</span>
                    </div>
                    <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold text-xs sm:text-sm md:text-base">Membres AMAP</span>
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-purple-600 dark:text-purple-400">100K+</span>
                    </div>
                  </div>
                  
                  {/* Mystical Separator */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 py-2 sm:py-3 md:py-6 mt-auto">
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    <div className="relative">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-purple-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-purple-700 dark:text-purple-300 italic">L'énergie est là, mais dispersée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RELIONS-NOUS Section */}
          <div className="relative animate-fade-in px-3 sm:px-4 md:px-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-700/5 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center">
              
              {/* Title with same style as L'HEURE EST VENUE but fully responsive */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight tracking-wide px-2">
                  <span className="text-foreground drop-shadow-sm block sm:inline">RELIONS</span>{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block sm:inline">- NOUS</span>
                </h3>
                <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-accent via-secondary to-primary mx-auto rounded-full"></div>
              </div>
              
              {/* Central Message Card */}
              <div className="relative group mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-700/20 rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-card/90 backdrop-blur-md border border-blue-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-xl sm:shadow-2xl">
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent tracking-wide px-2">
                      Lieux • Cagnottes • Votes
                    </h4>
                    
                    <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 mx-auto"></div>
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 font-semibold leading-relaxed max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-2">
                      On relie ce qui existe déjà pour faire basculer<br className="hidden md:block" /> 
                      les territoires en autonomie.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4">
                <Button 
                  className="w-full sm:w-auto btn-cta-blue font-semibold text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base"
                >
                  ADHÉRER
                </Button>
                
                <a 
                  href="https://test24.lasuitedumonde.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full btn-cta-orange font-semibold text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
                    INVESTIR LOCALEMENT
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;