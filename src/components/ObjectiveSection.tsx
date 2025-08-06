import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            L'HEURE EST VENUE
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Tout est déjà là. Il suffit de connecter.
            </h3>
            
            {/* Flow visualization */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-3xl">📍</div>
                <div className="text-lg font-semibold text-green-800 dark:text-green-200">Les lieux existent</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-3xl">🤝</div>
                <div className="text-lg font-semibold text-blue-800 dark:text-blue-200">Les outils sont prêts</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              <div className="flex items-center gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="text-3xl">💡</div>
                <div className="text-lg font-semibold text-purple-800 dark:text-purple-200">Les gens sont là</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              {/* Problem highlighted in red */}
              <div className="flex items-center gap-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border-2 border-red-500 shadow-lg">
                <div className="text-3xl">🌐</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">Le lien manque</div>
              </div>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl">
              <div className="text-xl font-semibold text-foreground">
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