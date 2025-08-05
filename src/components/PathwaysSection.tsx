import { Button } from "@/components/ui/button";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            CHOISISSEZ VOTRE CHEMIN
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chemin 1 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Chemin 1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Activer un Territoire</h3>
                  <p className="text-muted-foreground italic">Devenir activateur territorial</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Votre mission :</h4>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Identifier 20-50 personnes localement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Créer l'association territoriale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Lancer la cagnotte locale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accompagner l'acquisition d'un lieu</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">On vous donne :</h4>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>20 000€ de budget annuel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Formation et outils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Réseau national</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>100% d'autonomie locale</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="hero" className="w-full">
                Candidater →
              </Button>
            </div>
            
            {/* Chemin 2 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Chemin 2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Financer le Réseau</h3>
                  <p className="text-muted-foreground italic">Rejoindre la méta-association</p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-primary mb-2">100€ = 1 voix</div>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Votez l'attribution des fonds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Choisissez les territoires prioritaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accédez à tous les lieux du réseau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Recevez des crédits d'usage</span>
                  </li>
                </ul>
              </div>
              
              <Button variant="cta" className="w-full">
                Adhérer →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;