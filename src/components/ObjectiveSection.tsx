import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-4 sm:pb-6 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="text-foreground">L'HEURE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
          </h2>
          
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto mb-6 sm:mb-8">
              
              {/* LES LIEUX EXISTENT */}
              <div className="flex justify-center animate-scale-in">
                <div className="w-full max-w-xs sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-green-400/60 hover:ring-4 hover:ring-green-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">⚡</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-green-700 dark:text-green-300 mb-1 sm:mb-2 tracking-wide text-center">LES LIEUX EXISTENT</h3>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1 sm:mb-2 md:mb-3 text-center">Les territoires sont prêts</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="text-green-600 dark:text-green-400">+1600 écolieux recensés</p>
                    <p className="text-green-600 dark:text-green-400">Milliers de tiers-lieux</p>
                    <p className="text-green-600 dark:text-green-400">Associations dynamiques</p>
                    <p className="text-green-600 dark:text-green-400">Entreprises engagées</p>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-green-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-green-700 dark:text-green-200">Tout est déjà là</p>
                  </div>
                </div>
              </div>

              {/* LES OUTILS SONT PRÊTS */}
              <div className="flex justify-center animate-scale-in">
                <div className="w-full max-w-xs sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-blue-400/60 hover:ring-4 hover:ring-blue-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">⚙️</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 sm:mb-2 tracking-wide text-center">OUTILS PRÊTS</h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2 md:mb-3 text-center">Gouvernance, cagnottes</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="text-blue-600 dark:text-blue-400">Gouvernance partagée</p>
                    <p className="text-blue-600 dark:text-blue-400">Financement participatif</p>
                    <p className="text-blue-600 dark:text-blue-400">Outils collaboratifs</p>
                    <p className="text-blue-600 dark:text-blue-400">Méthodes démocratisées</p>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-blue-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-blue-700 dark:text-blue-200">Boîte à outils prête</p>
                  </div>
                </div>
              </div>

              {/* LES GENS SONT LÀ - Prend toute la largeur sur mobile, normal sur desktop */}
              <div className="flex justify-center animate-scale-in col-span-2 sm:col-span-1">
                <div className="w-full max-w-xs sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-purple-400/60 hover:ring-4 hover:ring-purple-400/30 cursor-pointer">
                  <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">✊</div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-purple-700 dark:text-purple-300 mb-1 sm:mb-2 tracking-wide text-center">LES GENS SONT LÀ</h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2 md:mb-3 text-center">Réseaux actifs</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="text-purple-600 dark:text-purple-400">Chantiers participatifs</p>
                    <p className="text-purple-600 dark:text-purple-400">Marches-composition</p>
                    <p className="text-purple-600 dark:text-purple-400">Défense des territoires</p>
                    <p className="text-purple-600 dark:text-purple-400">Milliers de personnes</p>
                    <div className="w-6 sm:w-8 md:w-12 h-px bg-purple-500 my-1 sm:my-2 mx-auto"></div>
                    <p className="text-xs font-black text-purple-700 dark:text-purple-200">Mais restent isolées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELIONS-NOUS Section */}
            <div className="flex justify-center py-4 sm:py-6 animate-fade-in">
              <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">RELIONS</span> - NOUS.
                </h3>
                <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                    Lieux, Cagnottes, Votes.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    On relie ce qui existe déjà pour faire basculer les territoires en autonomie.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mt-4 sm:mt-6 md:mt-8">
                  <button className="w-full sm:w-auto btn-cta-blue px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm">
                    ADHÉRER
                  </button>
                  <a 
                    href="https://test24.lasuitedumonde.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-cta-orange px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm"
                  >
                    INVESTIR LOCALEMENT
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