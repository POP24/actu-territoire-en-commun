import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">L'HEURE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
          </h2>
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center max-w-6xl mx-auto mb-6 sm:mb-8">
              
              {/* LES LIEUX EXISTENT */}
              <div className="flex justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-green-400/60 hover:ring-4 hover:ring-green-400/30 cursor-pointer">
                  <div className="text-3xl sm:text-4xl mb-3">⚡</div>
                  <h3 className="text-base sm:text-lg font-bold text-green-700 dark:text-green-300 mb-2 tracking-wide text-center">LES LIEUX EXISTENT</h3>
                  <p className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 mb-3 text-center">Les territoires sont prêts</p>
                  <div className="space-y-1 text-center text-xs sm:text-sm">
                    <p className="text-green-600 dark:text-green-400">+1600 écolieux recensés</p>
                    <p className="text-green-600 dark:text-green-400">Milliers de tiers-lieux</p>
                    <p className="text-green-600 dark:text-green-400">Associations dynamiques</p>
                    <p className="text-green-600 dark:text-green-400">Entreprises engagées</p>
                    <div className="w-12 sm:w-16 h-px bg-green-500 my-2 mx-auto"></div>
                    <p className="text-xs sm:text-sm font-black text-green-700 dark:text-green-200">Tout est déjà là</p>
                  </div>
                </div>
              </div>

              {/* LES OUTILS SONT PRÊTS */}
              <div className="flex justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-blue-400/60 hover:ring-4 hover:ring-blue-400/30 cursor-pointer">
                  <div className="text-3xl sm:text-4xl mb-3">⚙️</div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 tracking-wide text-center">OUTILS PRÊTS</h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 text-center">Gouvernance, cagnottes</p>
                  <div className="space-y-1 text-center text-xs sm:text-sm">
                    <p className="text-blue-600 dark:text-blue-400">Gouvernance partagée</p>
                    <p className="text-blue-600 dark:text-blue-400">Financement participatif</p>
                    <p className="text-blue-600 dark:text-blue-400">Outils collaboratifs</p>
                    <p className="text-blue-600 dark:text-blue-400">Méthodes démocratisées</p>
                    <div className="w-12 sm:w-16 h-px bg-blue-500 my-2 mx-auto"></div>
                    <p className="text-xs sm:text-sm font-black text-blue-700 dark:text-blue-200">Boîte à outils prête</p>
                  </div>
                </div>
              </div>

              {/* LES GENS SONT LÀ */}
              <div className="flex justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-purple-400/60 hover:ring-4 hover:ring-purple-400/30 cursor-pointer">
                  <div className="text-3xl sm:text-4xl mb-3">✊</div>
                  <h3 className="text-base sm:text-lg font-bold text-purple-700 dark:text-purple-300 mb-2 tracking-wide text-center">LES GENS SONT LÀ</h3>
                  <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3 text-center">Réseaux actifs</p>
                  <div className="space-y-1 text-center text-xs sm:text-sm">
                    <p className="text-purple-600 dark:text-purple-400">Chantiers participatifs</p>
                    <p className="text-purple-600 dark:text-purple-400">Marches-composition</p>
                    <p className="text-purple-600 dark:text-purple-400">Défense des territoires</p>
                    <p className="text-purple-600 dark:text-purple-400">Milliers de personnes</p>
                    <div className="w-12 sm:w-16 h-px bg-purple-500 my-2 mx-auto"></div>
                    <p className="text-xs sm:text-sm font-black text-purple-700 dark:text-purple-200">Mais restent isolées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELIONS-NOUS Section */}
            <div className="flex justify-center py-12 sm:py-16">
              <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">RELIONS</span> - NOUS.
                </h3>
                <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 sm:p-8 max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
                    Lieux, Cagnottes, Votes.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                    On relie ce qui existe déjà pour faire basculer les territoires en autonomie.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8">
                  <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                    ADHÉRER
                  </button>
                  <a 
                    href="https://test24.lasuitedumonde.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
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