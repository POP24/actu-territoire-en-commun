import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

// Simplified Tribal Symbols
const TribalLandSymbol = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <path d="M32 6 L32 26 M58 32 L38 32 M32 58 L32 38 M6 32 L26 32" stroke="currentColor" strokeWidth="2"/>
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
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ObjectiveSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary/5 rounded-full blur-2xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
          <div className="max-w-7xl mx-auto">
          
          {/* Main Title */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <div className="mb-6">
                {/* Top Decorative Line */}
                <div className="relative flex items-center justify-center mb-4">
                  <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="absolute flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-wide">
                  <span className="text-foreground drop-shadow-sm">L'HEURE</span>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">EST VENUE</span>
                </h2>
                
                {/* Bottom Decorative Line */}
                <div className="relative flex items-center justify-center">
                  <div className="w-48 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                  <div className="absolute flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Les forces convergent, les outils sont prêts, les territoires s'éveillent
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Card 1: LES LIEUX ATTENDENT */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="group relative transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 rounded-2xl overflow-hidden shadow-lg min-h-[320px] flex flex-col">
                  
                  {/* Card Header */}
                  <div className="p-4 pb-2 flex-shrink-0">
                    <div className="flex flex-col items-center space-y-3">
                      
                      {/* Tribal Symbol */}
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                        <TribalLandSymbol />
                      </div>
                      
                      {/* Title */}
                      <div className="text-center">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-2"></div>
                        <h3 className="text-lg font-black text-emerald-700 dark:text-emerald-300 tracking-wider">
                          LES LIEUX
                        </h3>
                        <h4 className="text-base font-black text-emerald-600 dark:text-emerald-400 tracking-wider">
                          ATTENDENT
                        </h4>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mt-2"></div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-2">Des milliers d'opportunités</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Grid */}
                  <div className="p-4 pt-2 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 gap-2 mb-4 flex-grow">
                      <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg p-3 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                        <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-sm">Communes rurales</span>
                        <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">30.8K</span>
                      </div>
                      <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg p-3 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                        <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-sm">Tiers-lieux actifs</span>
                        <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">3.5K</span>
                      </div>
                      <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg p-3 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                        <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-sm">Hectares libres/an</span>
                        <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">150K</span>
                      </div>
                      <div className="flex justify-between items-center bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg p-3 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                        <span className="text-emerald-800 dark:text-emerald-200 font-semibold text-sm">Écolieux actifs</span>
                        <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">1.5K</span>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="flex items-center justify-center space-x-3 py-3 mt-auto">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base font-black text-emerald-700 dark:text-emerald-300 italic">Les terres se libèrent</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: LES OUTILS FONCTIONNENT */}
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="group relative transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-2xl overflow-hidden shadow-lg min-h-[320px] flex flex-col">
                  
                  {/* Card Header */}
                  <div className="p-4 pb-2 flex-shrink-0">
                    <div className="flex flex-col items-center space-y-3">
                      
                      {/* Tribal Symbol */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                        <TribalToolsSymbol />
                      </div>
                      
                      {/* Title */}
                      <div className="text-center">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-2"></div>
                        <h3 className="text-lg font-black text-blue-700 dark:text-blue-300 tracking-wider">
                          LES OUTILS
                        </h3>
                        <h4 className="text-base font-black text-blue-600 dark:text-blue-400 tracking-wider">
                          FONCTIONNENT
                        </h4>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mx-auto mt-2"></div>
                        <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2">L'infrastructure collaborative existe déjà</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Grid */}
                  <div className="p-4 pt-2 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 gap-2 mb-4 flex-grow">
                      <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                        <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm">Crowdfunding 2024 Don</span>
                        <span className="text-lg font-black text-blue-600 dark:text-blue-400">179M€</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                        <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm">Crowdfunding 2024 Immo</span>
                        <span className="text-lg font-black text-blue-600 dark:text-blue-400">850M€</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                        <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm">Monnaies locales</span>
                        <span className="text-lg font-black text-blue-600 dark:text-blue-400">82</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                        <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm">HelloAsso</span>
                        <span className="text-lg font-black text-blue-600 dark:text-blue-400">370K assos</span>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="flex items-center justify-center space-x-3 py-3 mt-auto">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base font-black text-blue-700 dark:text-blue-300 italic">La technologie est mûre</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: LES FORCES CONVERGENT */}
            <ScrollReveal animation="fade-right" delay={600}>
              <div className="group relative transform transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-card/95 to-card/85 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 rounded-2xl overflow-hidden shadow-lg min-h-[320px] flex flex-col">
                  
                  {/* Card Header */}
                  <div className="p-4 pb-2 flex-shrink-0">
                    <div className="flex flex-col items-center space-y-3">
                      
                      {/* Tribal Symbol */}
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                        <TribalForceSymbol />
                      </div>
                      
                      {/* Title */}
                      <div className="text-center">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-2"></div>
                        <h3 className="text-lg font-black text-purple-700 dark:text-purple-300 tracking-wider">
                          LES FORCES
                        </h3>
                        <h4 className="text-base font-black text-purple-600 dark:text-purple-400 tracking-wider">
                          CONVERGENT
                        </h4>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-400 mx-auto mt-2"></div>
                        <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-2">La mobilisation collective grandit</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Grid */}
                  <div className="p-4 pt-2 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 gap-2 mb-4 flex-grow">
                      <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                        <span className="text-purple-800 dark:text-purple-200 font-semibold text-sm">Associations actives</span>
                        <span className="text-lg font-black text-purple-600 dark:text-purple-400">1.5M</span>
                      </div>
                      <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                        <span className="text-purple-800 dark:text-purple-200 font-semibold text-sm">Bénévoles réguliers</span>
                        <span className="text-lg font-black text-purple-600 dark:text-purple-400">23M</span>
                      </div>
                      <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                        <span className="text-purple-800 dark:text-purple-200 font-semibold text-sm">Collectifs émergents</span>
                        <span className="text-lg font-black text-purple-600 dark:text-purple-400">10K+</span>
                      </div>
                      <div className="flex justify-between items-center bg-purple-50/80 dark:bg-purple-900/20 rounded-lg p-3 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                        <span className="text-purple-800 dark:text-purple-200 font-semibold text-sm">Coopératives</span>
                        <span className="text-lg font-black text-purple-600 dark:text-purple-400">3.2K</span>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="flex items-center justify-center space-x-3 py-3 mt-auto">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base font-black text-purple-700 dark:text-purple-300 italic">L'élan s'accélère</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Call to Action */}
          <ScrollReveal animation="fade-up" delay={800}>
            <div className="text-center">
              <div className="relative flex items-center justify-center mb-6">
                <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                <div className="absolute flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                REJOIGNEZ LE MOUVEMENT
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Participez à la construction d'un réseau de territoires libres et solidaires
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                DÉCOUVRIR COMMENT
              </Button>
            </div>
          </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;