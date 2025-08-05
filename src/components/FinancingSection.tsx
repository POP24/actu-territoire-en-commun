import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            FINANCER VOTRE TERRITOIRE
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Le modèle est simple :</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Phase 1 : Constitution</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>L'activateur rassemble 20+ personnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Création de l'association locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ouverture de la cagnotte</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 2 */}
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Phase 2 : Financement</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Objectif : 50-200k€ selon le projet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Crowdfunding + obligations locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Le réseau abonde jusqu'à 30%</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 3 */}
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h4 className="text-xl font-bold mb-4 text-foreground">Phase 3 : Acquisition</h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Achat collectif du lieu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>100% de gouvernance locale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Connexion au réseau national</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;