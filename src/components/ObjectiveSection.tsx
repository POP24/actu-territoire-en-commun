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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-6xl mx-auto mb-8">
              
              {/* LES LIEUX EXISTENT */}
              <div className="flex justify-center">
                <div className="w-72 h-72 bg-gradient-card rounded-2xl shadow-soft border border-border flex flex-col items-center justify-center p-6 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-4 hover:scale-[1.02] hover:border-green-400/60 hover:ring-4 hover:ring-green-400/30 cursor-pointer">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-2 tracking-wide">LES LIEUX EXISTENT</h3>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">Les territoires sont prêts</p>
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

            {/* RELIONS-NOUS Section */}
            <div className="flex justify-center py-16">
              <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">RELIONS</span> - NOUS.
                </h3>
                <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
                  Lieux, Cagnottes, Votes.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto">
                  On relie ce qui existe déjà pour faire basculer les territoires en autonomie.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    ADHÉRER
                  </button>
                  <a 
                    href="https://test24.lasuitedumonde.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    INVESTIR LOCALEMENT
                  </a>
                </div>
              </div>
            </div>
            
            {/* Vague bleue décorative */}
            <div className="w-full -mb-1 overflow-hidden">
              <svg viewBox="0 0 20000 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 scale-x-[500%]">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
                    <stop offset="25%" stopColor="hsl(var(--secondary) / 0.15)" />
                    <stop offset="50%" stopColor="hsl(var(--accent) / 0.2)" />
                    <stop offset="75%" stopColor="hsl(var(--primary) / 0.15)" />
                    <stop offset="100%" stopColor="hsl(var(--secondary) / 0.2)" />
                  </linearGradient>
                </defs>
                <path d="M0 80L800 90C1600 100 3200 120 4800 110C6400 100 8000 60 9600 50C11200 40 12800 60 14400 70C16000 80 17600 80 18400 80L20000 80V160H18400C17600 160 16000 160 14400 160C12800 160 11200 160 9600 160C8000 160 6400 160 4800 160C3200 160 1600 160 800 160H0V80Z" fill="url(#waveGradient)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;