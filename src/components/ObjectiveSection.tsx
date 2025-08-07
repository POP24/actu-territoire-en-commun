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
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Tout est déjà là. Il suffit de connecter.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              {/* Les lieux existent */}
              <div className="group p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/20 border border-green-200/30 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-3">📍</div>
                  <h4 className="text-lg font-bold text-green-800 dark:text-green-200 mb-2">Les lieux existent</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Territoires prêts</p>
                </div>
              </div>
              
              {/* Les outils sont prêts */}
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-600/20 border border-blue-200/30 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">Les outils sont prêts</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Gouvernance, cagnottes</p>
                </div>
              </div>
              
              {/* Les gens sont là */}
              <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-violet-600/20 border border-purple-200/30 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">Les gens sont là</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Réseaux actifs</p>
                </div>
              </div>
              
              {/* Le lien manque */}
              <div className="group p-6 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-600/30 border-2 border-red-400/50 hover:scale-105 transition-all duration-300 animate-pulse">
                <div className="text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">Le lien manque</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">C'est ça qu'on résout !</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 border border-primary/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl"></div>
              <div className="relative text-2xl font-bold text-foreground">
                C'est exactement ce qu'on construit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;