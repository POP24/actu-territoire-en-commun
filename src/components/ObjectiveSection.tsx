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
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
              Tout est déjà là, il suffit de connecter les points :
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-2">Les lieux existent</div>
                    <div className="text-muted-foreground">Des milliers de campings, fermes et domaines n'attendent que d'être reliés en réseau solidaire</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-2">Les outils sont prêts</div>
                    <div className="text-muted-foreground">Gouvernance partagée, cagnottes collectives, cercles de décision... tout existe, il faut juste les assembler</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-2">Le modèle va fonctionner</div>
                    <div className="text-muted-foreground">L'intelligence collective + cagnottes mensuelles = la formule qui change tout</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🌐</div>
                  <div>
                    <div className="text-lg font-semibold text-foreground mb-2">Les gens sont là</div>
                    <div className="text-muted-foreground">Partout en France, des réseaux s'activent et cherchent à se connecter</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 mt-12">
              <div className="text-xl font-semibold text-foreground mb-4">
                Ce qui manque ? <span className="text-primary">Le lien.</span>
              </div>
              <div className="text-lg text-muted-foreground">
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