import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              <span className="text-foreground drop-shadow-sm">L'HEURE</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent animate-pulse">EST VENUE</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 animate-fade-in">
            
            {/* Card 1: LES LIEUX ATTENDENT */}
            <div className="group relative animate-scale-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-600/20 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 group-hover:border-emerald-400/40 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 group-hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">🏡</div>
                  
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-emerald-700 dark:text-emerald-300 mb-3 tracking-wide">
                      LES LIEUX<br />ATTENDENT
                    </h3>
                    <p className="text-base font-bold text-emerald-600 dark:text-emerald-400 mb-6">Des milliers d'opportunités</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl p-4 space-y-2">
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">30 800 communes rurales</p>
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">3 500 tiers‑lieux en fonctionnement</p>
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">150 000 hectares/an libres</p>
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">1 500 écolieux actifs</p>
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">5 000+ fermes disponibles</p>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 py-4">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                    </div>
                    
                    <p className="text-base font-black text-emerald-800 dark:text-emerald-200 italic">Les terres se libèrent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: LES OUTILS FONCTIONNENT */}
            <div className="group relative animate-scale-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-600/20 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">⚙️</div>
                  
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-blue-700 dark:text-blue-300 mb-3 tracking-wide">
                      LES OUTILS FONCTIONNENT
                    </h3>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400 mb-6">Solutions éprouvées et gratuites</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 space-y-2">
                      <p className="text-blue-700 dark:text-blue-300 font-medium">Decidim, Loomio testés</p>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">HelloAsso : 20k assos</p>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">Open Collective transparent</p>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">Terre de Liens collectif</p>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">SCIC, SCI rodés</p>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 py-4">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                    </div>
                    
                    <p className="text-base font-black text-blue-800 dark:text-blue-200 italic">Pas besoin de réinventer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: LES FORCES VIVES BOUILLONNENT */}
            <div className="group relative animate-scale-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-600/20 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 group-hover:border-purple-400/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">✊</div>
                  
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-purple-700 dark:text-purple-300 mb-3 tracking-wide">
                      LES FORCES VIVES BOUILLONNENT
                    </h3>
                    <p className="text-base font-bold text-purple-600 dark:text-purple-400 mb-6">1 million de personnes prêtes</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-4 space-y-2">
                      <p className="text-purple-700 dark:text-purple-300 font-medium">200k néo-ruraux depuis 2020</p>
                      <p className="text-purple-700 dark:text-purple-300 font-medium">50k+ porteurs agricoles</p>
                      <p className="text-purple-700 dark:text-purple-300 font-medium">30k jeunes cherchent terres</p>
                      <p className="text-purple-700 dark:text-purple-300 font-medium">Réseaux CIVAM, MRJC actifs</p>
                      <p className="text-purple-700 dark:text-purple-300 font-medium">100k+ membres AMAP</p>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 py-4">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                    </div>
                    
                    <p className="text-base font-black text-purple-800 dark:text-purple-200 italic">L'énergie est là, mais dispersée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RELIONS-NOUS Section */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-700/5 rounded-3xl blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto text-center">
              
              {/* Title */}
              <div className="mb-12">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">RELIONS</span>
                  <span className="text-foreground"> - NOUS.</span>
                </h3>
              </div>
              
              {/* Central Message Card */}
              <div className="relative group mb-12 max-w-3xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-700/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-card/90 backdrop-blur-md border border-blue-200/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
                  <div className="space-y-6">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 bg-clip-text text-transparent tracking-wide">
                      Lieux • Cagnottes • Votes
                    </h4>
                    
                    <div className="w-20 h-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700 mx-auto"></div>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-foreground/90 font-semibold leading-relaxed max-w-2xl mx-auto">
                      On relie ce qui existe déjà pour faire basculer<br className="hidden sm:block" /> 
                      les territoires en autonomie.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <Button 
                  className="w-full sm:w-auto btn-cta-blue font-semibold text-white px-8 py-3 rounded-xl"
                >
                  ADHÉRER
                </Button>
                
                <a 
                  href="https://test24.lasuitedumonde.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full btn-cta-orange font-semibold text-white px-8 py-3 rounded-xl">
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