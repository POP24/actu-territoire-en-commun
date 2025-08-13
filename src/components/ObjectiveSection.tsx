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
            
            {/* Vague décorative améliorée - style header */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
              {/* Vague principale avec dégradé complexe */}
              <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-40 lg:h-48">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary) / 0.15)" />
                    <stop offset="50%" stopColor="hsl(var(--primary) / 0.25)" />
                    <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                  </linearGradient>
                </defs>
                <path d="M0 200L48 185C96 170 192 140 288 125C384 110 480 110 576 120C672 130 768 150 864 155C960 160 1056 150 1152 140C1248 130 1344 120 1392 115L1440 110V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V200Z" fill="url(#waveGradient)"/>
              </svg>
              
              {/* Vague secondaire pour plus de profondeur */}
              <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-20 md:h-24 lg:h-28 opacity-60">
                <path d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V100Z" fill="hsl(var(--primary) / 0.08)"/>
              </svg>
              
              {/* Effets de lueur subtils */}
              <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-gradient-to-t from-primary/10 to-transparent blur-2xl opacity-50"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-gradient-to-t from-primary/10 to-transparent blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;