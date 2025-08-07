import { Button } from "@/components/ui/button";
import { TT } from "@/components/TooltipGlossary";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-foreground">VOS DEUX</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">CHEMINS D'ENGAGEMENT</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* ARCHITECTE NATIONAL */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ARCHITECTE NATIONAL
                </div>
                <div className="text-4xl font-bold text-primary mb-2">À partir de 100€</div>
                <div className="text-muted-foreground font-semibold mb-4">Co-gouvernance de la <TT term={"Trésorerie commune" as any}>trésorerie nationale</TT> (100 000€)</div>
                <h3 className="text-xl font-bold text-foreground">Portée nationale</h3>
                <p className="text-muted-foreground italic">Accès à tous les territoires</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Vote sur les allocations</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span>Accès tous territoires</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span><TT term={"Crédits d'usage" as any}>Crédits d'usage</TT> annuels</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span><span><TT term={"Statut Fondateur" as any}>Statut Fondateur</TT></span></li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8">SOUSCRIRE</Button>
            </div>
            
            {/* ARCHITECTE LOCAL */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ARCHITECTE LOCAL
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">Engagement libre</div>
                <div className="text-muted-foreground font-semibold mb-4">Activation de votre territoire</div>
                <h3 className="text-xl font-bold text-foreground">Autonomie locale</h3>
                <p className="text-muted-foreground italic">Gouvernance locale</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2"><span className="text-secondary mt-1">✓</span><span>Formation focalisateur</span></li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-1">✓</span><span>Création association locale</span></li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-1">✓</span><span>Lancement cagnotte locale</span></li>
                    <li className="flex items-start gap-2"><span className="text-secondary mt-1">✓</span><span><TT term={"Gouvernance locale" as any}>Autonomie décisionnelle</TT></span></li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8" variant="secondary">POSTULER</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;