import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">L'HEURE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
          </h2>
          
          <div className="text-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-6xl mx-auto mb-8">
              
              {/* LES LIEUX EXISTENT */}
              <div className="flex justify-center">
                <div className="w-72 h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-green-400/60 hover:ring-4 hover:ring-green-400/30 cursor-pointer">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2 tracking-wide">LES LIEUX EXISTENT</h3>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">Territoires prêts</p>
                  <div className="space-y-1 text-center text-sm">
                    <p className="text-green-600 dark:text-green-400">+1600 écolieux recensés</p>
                    <p className="text-green-600 dark:text-green-400">Milliers de tiers-lieux</p>
                    <p className="text-green-600 dark:text-green-400">Associations dynamiques</p>
                    <p className="text-green-600 dark:text-green-400">Entreprises engagées</p>
                    <div className="w-16 h-px bg-green-500 my-2 mx-auto"></div>
                    <p className="text-sm font-black text-green-700 dark:text-green-200">Tout est déjà là</p>
                  </div>
                </div>
              </div>

              {/* LES OUTILS SONT PRÊTS */}
              <div className="flex justify-center">
                <div className="w-72 h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-blue-400/60 hover:ring-4 hover:ring-blue-400/30 cursor-pointer">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 tracking-wide">OUTILS PRÊTS</h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Gouvernance, cagnottes</p>
                  <div className="space-y-1 text-center text-sm">
                    <p className="text-blue-600 dark:text-blue-400">Gouvernance partagée</p>
                    <p className="text-blue-600 dark:text-blue-400">Financement participatif</p>
                    <p className="text-blue-600 dark:text-blue-400">Outils collaboratifs</p>
                    <p className="text-blue-600 dark:text-blue-400">Méthodes démocratisées</p>
                    <div className="w-16 h-px bg-blue-500 my-2 mx-auto"></div>
                    <p className="text-sm font-black text-blue-700 dark:text-blue-200">Boîte à outils prête</p>
                  </div>
                </div>
              </div>

              {/* LES GENS SONT LÀ */}
              <div className="flex justify-center">
                <div className="w-72 h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-purple-400/60 hover:ring-4 hover:ring-purple-400/30 cursor-pointer">
                  <div className="text-4xl mb-3">✊</div>
                  <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-2 tracking-wide">LES GENS SONT LÀ</h3>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Réseaux actifs</p>
                  <div className="space-y-1 text-center text-sm">
                    <p className="text-purple-600 dark:text-purple-400">Chantiers participatifs</p>
                    <p className="text-purple-600 dark:text-purple-400">Marches-composition</p>
                    <p className="text-purple-600 dark:text-purple-400">Défense des territoires</p>
                    <p className="text-purple-600 dark:text-purple-400">Milliers de personnes</p>
                    <div className="w-16 h-px bg-purple-500 my-2 mx-auto"></div>
                    <p className="text-sm font-black text-purple-700 dark:text-purple-200">Mais restent isolées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LE LIEN MANQUE - Rectangle en dessous */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl h-32 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-2 hover:scale-[1.01] hover:border-red-400/60 hover:ring-4 hover:ring-red-400/30 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🔗</div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-1">LE LIEN MANQUE</h3>
                    <p className="text-sm text-red-600 dark:text-red-400">C'est ça qu'on résout !</p>
                  </div>
                  <div className="text-center text-sm space-x-4">
                    <span className="text-red-600 dark:text-red-400">Énergies fragmentées</span>
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span className="text-red-600 dark:text-red-400">Projets isolés</span>
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span className="font-black text-red-700 dark:text-red-200">Trésorerie commune + Activateurs locaux</span>
                  </div>
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