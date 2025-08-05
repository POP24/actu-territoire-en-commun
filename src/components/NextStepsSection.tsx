import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NextStepsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            PROCHAINES ÉTAPES
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: "1", text: "Adhérez à la méta-association (100€)" },
              { number: "2", text: "Votez pour les prochains territoires" },
              { number: "3", text: "Candidatez comme activateur" },
              { number: "4", text: "Participez aux réunions d'info" },
            ].map((step, index) => (
              <Card key={index} className="bg-background shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <p className="text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Contact :</strong> reseau@lescommunes.org
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button variant="hero" size="lg">
                Rejoindre le Réseau
              </Button>
              <Button variant="outline-hero" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;