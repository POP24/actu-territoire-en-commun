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
          
          <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Notre objectif : 1 million d'euros pour activer 50 territoires
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl mb-4">💰</div>
                <div className="text-lg font-semibold text-foreground">20 000€ par territoire</div>
                <div className="text-muted-foreground">= 1 activateur rémunéré pendant 1 an</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">👥</div>
                <div className="text-lg font-semibold text-foreground">50 activateurs</div>
                <div className="text-muted-foreground">= 50 communes en création simultanée</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">🌍</div>
                <div className="text-lg font-semibold text-foreground">50 communes</div>
                <div className="text-muted-foreground">= 1 réseau national interconnecté</div>
              </div>
            </div>
            
            <div className="border-t border-border pt-8">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Où en sommes-nous ?</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">147 000€</div>
                  <div className="text-muted-foreground">collectés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">7 territoires</div>
                  <div className="text-muted-foreground">activés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">843 pionniers</div>
                  <div className="text-muted-foreground">engagés</div>
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