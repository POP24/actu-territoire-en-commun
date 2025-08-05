import { Button } from "@/components/ui/button";

const NextStepsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            PROCHAINES ÉTAPES
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Adhérez</h3>
              <p className="text-muted-foreground">à la méta-association (100€)</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Votez</h3>
              <p className="text-muted-foreground">pour les prochains territoires</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Candidatez</h3>
              <p className="text-muted-foreground">comme activateur</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Participez</h3>
              <p className="text-muted-foreground">aux réunions d'info</p>
            </div>
          </div>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Contact :</h3>
            <a href="mailto:reseau@lescommunes.org" className="text-primary hover:underline text-lg">
              reseau@lescommunes.org
            </a>
          </div>
          
          <Button variant="cta" size="lg" className="text-lg px-12 py-4">
            Participer à 100€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;