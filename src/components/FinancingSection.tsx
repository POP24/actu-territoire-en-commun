import { Card, CardContent } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section id="financement" className="py-16 sm:py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-5 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 sm:left-20 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-card rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-foreground">FINANCEZ VOTRE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Immobilier Partagé */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Immobilier Partagé</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/20 shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">Obligations</div>
                  <div className="text-lg text-muted-foreground">Investissement sécurisé</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/20 shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">Crédits d'Usage</div>
                  <div className="text-lg text-muted-foreground">Accès aux lieux</div>
                </div>
              </div>
            </div>

            {/* Trésorerie Commune */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Trésorerie Commune</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/20 shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">Budget Participatif</div>
                  <div className="text-lg text-muted-foreground">Décisions collectives</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/20 shadow-soft">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">Caisse Commune</div>
                  <div className="text-lg text-muted-foreground">Mutualisation des ressources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;