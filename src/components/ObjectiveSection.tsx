import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            L'HEURE EST VENUE
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-muted-foreground">
            Notre objectif : 1 million d'euros pour activer 50 territoires
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2 text-foreground">20 000€ par territoire</h4>
              <p className="text-muted-foreground">1 activateur rémunéré pendant 1 an</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold mb-2 text-foreground">50 activateurs</h4>
              <p className="text-muted-foreground">50 communes en création simultanée</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold mb-2 text-foreground">50 communes</h4>
              <p className="text-muted-foreground">1 réseau national interconnecté</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h4 className="text-2xl font-bold mb-6">Où en sommes-nous ?</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">147 000€</div>
              <div className="text-white/80">collectés</div>
            </div>
            <div>
              <div className="text-3xl font-bold">7 territoires</div>
              <div className="text-white/80">activés</div>
            </div>
            <div>
              <div className="text-3xl font-bold">843 pionniers</div>
              <div className="text-white/80">engagés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;