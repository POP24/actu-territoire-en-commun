import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">L'HEURE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
          </h2>
          
          <div className="text-center mb-16">
            <div className="flex flex-wrap items-center justify-center gap-8 max-w-8xl mx-auto">
              {/* LES LIEUX EXISTENT - Cercle futuriste nature */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 via-emerald-500/30 to-teal-500/20 blur-xl animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-green-50/90 via-emerald-100/80 to-teal-100/70 dark:from-green-900/40 dark:via-emerald-900/50 dark:to-teal-900/60 border-4 border-green-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-6 group-hover:shadow-2xl group-hover:shadow-green-500/40">
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-emerald-400 animate-bounce delay-300"></div>
                  <div className="text-5xl mb-3">📍</div>
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2 tracking-wide">LES LIEUX EXISTENT</h3>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-3">Territoires prêts</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="font-medium text-green-700 dark:text-green-400">+1600 écolieux recensés</p>
                    <p className="font-medium text-green-700 dark:text-green-400">Milliers de tiers-lieux</p>
                    <p className="font-medium text-green-700 dark:text-green-400">Associations dynamiques</p>
                    <p className="font-medium text-green-700 dark:text-green-400">Entreprises engagées</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent my-2"></div>
                    <p className="text-xs font-black text-green-900 dark:text-green-200">Tout est déjà là</p>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DE CONNEXION */}
              <div className="hidden lg:block">
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="text-xl text-center mt-1">→</div>
              </div>

              {/* LES OUTILS SONT PRÊTS - Cercle futuriste nature */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/30 to-indigo-500/20 blur-xl animate-pulse delay-150"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-50/90 via-cyan-100/80 to-indigo-100/70 dark:from-blue-900/40 dark:via-cyan-900/50 dark:to-indigo-900/60 border-4 border-blue-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-6 group-hover:shadow-2xl group-hover:shadow-blue-500/40">
                  <div className="absolute top-6 left-4 w-3 h-3 rounded-full bg-blue-500 animate-ping delay-100"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-500"></div>
                  <div className="text-5xl mb-3">🤝</div>
                  <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2 tracking-wide">OUTILS PRÊTS</h3>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3">Gouvernance, cagnottes</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="font-medium text-blue-700 dark:text-blue-400">Gouvernance partagée</p>
                    <p className="font-medium text-blue-700 dark:text-blue-400">Financement participatif</p>
                    <p className="font-medium text-blue-700 dark:text-blue-400">Outils collaboratifs</p>
                    <p className="font-medium text-blue-700 dark:text-blue-400">Méthodes démocratisées</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-2"></div>
                    <p className="text-xs font-black text-blue-900 dark:text-blue-200">Boîte à outils prête</p>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DE CONNEXION */}
              <div className="hidden lg:block">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full animate-pulse delay-300"></div>
                <div className="text-xl text-center mt-1">→</div>
              </div>

              {/* LES GENS SONT LÀ - Cercle futuriste nature */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-violet-500/30 to-pink-500/20 blur-xl animate-pulse delay-300"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-50/90 via-violet-100/80 to-pink-100/70 dark:from-purple-900/40 dark:via-violet-900/50 dark:to-pink-900/60 border-4 border-purple-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-6 group-hover:shadow-2xl group-hover:shadow-purple-500/40">
                  <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-purple-500 animate-ping"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-violet-400 animate-bounce delay-700"></div>
                  <div className="text-5xl mb-3">💡</div>
                  <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2 tracking-wide">LES GENS SONT LÀ</h3>
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-3">Réseaux actifs</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="font-medium text-purple-700 dark:text-purple-400">Chantiers participatifs</p>
                    <p className="font-medium text-purple-700 dark:text-purple-400">Marches-composition</p>
                    <p className="font-medium text-purple-700 dark:text-purple-400">Défense des territoires</p>
                    <p className="font-medium text-purple-700 dark:text-purple-400">Milliers de personnes</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-2"></div>
                    <p className="text-xs font-black text-purple-900 dark:text-purple-200">Mais restent isolées</p>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DE CONNEXION SPÉCIALE */}
              <div className="hidden lg:block">
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 rounded-full animate-pulse delay-500"></div>
                <div className="text-xl text-center mt-1 animate-bounce">⚡</div>
              </div>

              {/* LE LIEN MANQUE - Cercle futuriste nature avec animation spéciale */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/30 via-red-500/40 to-amber-500/30 blur-xl animate-pulse delay-500"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-400/20 via-red-400/30 to-amber-400/20 blur-lg animate-ping"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-orange-50/90 via-red-100/80 to-amber-100/70 dark:from-orange-900/40 dark:via-red-900/50 dark:to-amber-900/60 border-4 border-orange-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-6 group-hover:shadow-2xl group-hover:shadow-orange-500/40 animate-pulse">
                  <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-orange-500 animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-red-400 animate-bounce delay-1000"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-1500"></div>
                  <div className="text-5xl mb-3">🌐</div>
                  <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2 tracking-wide">LE LIEN MANQUE</h3>
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-3">C'est ça qu'on résout !</p>
                  <div className="space-y-1 text-center text-xs">
                    <p className="font-medium text-orange-700 dark:text-orange-400">Énergies fragmentées</p>
                    <p className="font-medium text-orange-700 dark:text-orange-400">Projets isolés</p>
                    <p className="font-medium text-orange-700 dark:text-orange-400">Manque de moyens</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-2"></div>
                    <p className="text-xs font-black text-orange-900 dark:text-orange-200">Trésorerie commune</p>
                    <p className="text-xs font-black text-orange-900 dark:text-orange-200">+ Activateurs locaux</p>
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