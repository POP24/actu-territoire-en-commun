import { Card, CardContent } from "@/components/ui/card";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            GOUVERNANCE
          </h2>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Association nouvelle génération
            </h3>
            <div className="text-xl font-bold text-primary mb-8">C'EST SIMPLE :</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Niveau National */}
            <Card className="border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🌍</div>
                  <h3 className="text-2xl font-bold text-foreground">Niveau National</h3>
                </div>
                <p className="text-foreground mb-4">
                  L'association fonctionne comme une fédération de régions avec gouvernance participative.
                </p>
                <div className="bg-blue-100 dark:bg-blue-800/30 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 dark:text-blue-200">
                    → On finance les coordinateurs territoriaux
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Niveau Local */}
            <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🏘️</div>
                  <h3 className="text-2xl font-bold text-foreground">Niveau Local</h3>
                </div>
                <div className="space-y-3 text-foreground mb-4">
                  <div>Chaque territoire = 1 association locale</div>
                  <div>Chaque membre = 1 voix</div>
                  <div>100% des décisions locales restent locales</div>
                </div>
                <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded-lg">
                  <div className="font-semibold text-green-800 dark:text-green-200">
                    → Objectif : racheter des obligations sur le marché secondaire pour devenir propriétaire des communs
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comment ça marche */}
          <Card className="border-2 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">🔧</div>
                <h3 className="text-2xl font-bold text-foreground">Comment ça marche</h3>
              </div>
              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-4">
                  <div className="font-semibold">Pass numérique</div>
                  <div className="text-muted-foreground">=</div>
                  <div>carte de membre</div>
                  <div className="text-muted-foreground">=</div>
                  <div>accès votes + cagnottes</div>
                </div>
                <div>Décisions transparentes, budgets visibles en temps réel</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;