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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-foreground">FINANCEZ VOTRE</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Immobilier Partagé */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Immobilier Partagé</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-primary mb-2">Obligations</div>
                  <div className="text-sm text-muted-foreground">Investissement sécurisé</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-secondary mb-2">Crédits d'Usage</div>
                  <div className="text-sm text-muted-foreground">Accès aux lieux</div>
                </div>
              </div>
            </div>

            {/* Trésorerie Commune */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Trésorerie Commune</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-accent mb-2">Budget Participatif</div>
                  <div className="text-sm text-muted-foreground">Décisions collectives</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/20 shadow-soft">
                  <div className="text-base sm:text-lg font-bold text-primary mb-2">Caisse Commune</div>
                  <div className="text-sm text-muted-foreground">Mutualisation des ressources</div>
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