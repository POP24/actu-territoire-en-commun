import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            CHOISISSEZ VOTRE CHEMIN
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Chemin 1 */}
          <Card className="bg-background shadow-elegant border-2 border-primary/20 hover:border-primary/40 transition-smooth">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary">
                Chemin 1 : Activer un Territoire
              </CardTitle>
              <p className="text-lg text-muted-foreground italic">
                Devenir activateur territorial
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">Votre mission :</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identifier 20-50 personnes localement
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Créer l'association territoriale
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Lancer la cagnotte locale
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Accompagner l'acquisition d'un lieu
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">On vous donne :</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    20 000€ de budget annuel
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Formation et outils
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Réseau national
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    100% d'autonomie locale
                  </li>
                </ul>
              </div>
              
              <Button variant="hero" className="w-full">
                Candidater →
              </Button>
            </CardContent>
          </Card>
          
          {/* Chemin 2 */}
          <Card className="bg-background shadow-elegant border-2 border-secondary/20 hover:border-secondary/40 transition-smooth">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-secondary">
                Chemin 2 : Financer le Réseau
              </CardTitle>
              <p className="text-lg text-muted-foreground italic">
                Rejoindre la méta-association
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100€ = 1 voix</div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Votez l'attribution des fonds
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Choisissez les territoires prioritaires
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Accédez à tous les lieux du réseau
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  Recevez des crédits d'usage
                </li>
              </ul>
              
              <Button variant="cta" className="w-full">
                Adhérer →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;