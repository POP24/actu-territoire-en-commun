import { Card, CardContent } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section id="financement" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            FINANCEMENT
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Le circuit simple :
            </h3>
            
            {/* Flow visualization */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-3xl">💰</div>
                <div className="text-lg font-semibold text-green-800 dark:text-green-200">Cagnottes locales</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-3xl">🏡</div>
                <div className="text-lg font-semibold text-blue-800 dark:text-blue-200">Achat collectif</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              <div className="flex items-center gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="text-3xl">📈</div>
                <div className="text-lg font-semibold text-purple-800 dark:text-purple-200">Revenus</div>
              </div>
              
              <div className="text-2xl text-muted-foreground hidden md:block">→</div>
              
              <div className="flex items-center gap-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="text-3xl">♻️</div>
                <div className="text-lg font-semibold text-orange-800 dark:text-orange-200">Réinvestissement</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Entrées */}
            <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="text-3xl mr-3">💳</span>
                  Entrées
                </h3>
                <div className="space-y-4 text-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Adhésions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Séjours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Formations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sorties */}
            <Card className="border-2 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <span className="text-3xl mr-3">💸</span>
                  Sorties
                </h3>
                <div className="space-y-4 text-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Coordinateurs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Maintenance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Nouveau territoire</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Résultat */}
          <Card className="border-2 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                <span className="text-3xl mr-3">🎯</span>
                Résultat
              </h3>
              <div className="text-xl font-semibold text-purple-800 dark:text-purple-200">
                Propriété collective des communs
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;