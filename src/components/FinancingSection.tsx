import { Card, CardContent } from "@/components/ui/card";

const FinancingSection = () => {
  const mechanismSteps = [
    { label: "Recruter Focalisateur", bgColor: "bg-primary" },
    { label: "Rassembler Groupe", bgColor: "bg-secondary" },
    { label: "Créer Association", bgColor: "bg-accent" },
    { label: "Lancer Financement", bgColor: "bg-muted" },
    { label: "Acquérir Lieu", bgColor: "bg-primary/80" },
    { label: "Retour Réseau", bgColor: "bg-secondary/80" }
  ];

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
            <span className="text-foreground">ACTIVE TON</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-foreground mb-6 sm:mb-8">
              Coopérative intégrale transversale, pluridisciplinaire
            </p>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 sm:mb-8">
              Activer votre territoire
            </div>
          </div>

          {/* Mécanisme d'activation */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
              <span className="text-foreground">MÉCANISME D'ACTIVATION</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITORIALE</span>
            </h3>
            
            {/* Desktop/Tablet grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {mechanismSteps.map((step, index) => (
                <div key={index} className={`${step.bgColor} rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-4 sm:p-6 h-20 sm:h-24 shadow-soft hover:scale-105 transition-smooth`}>
                  <div className="text-xs sm:text-sm leading-tight">{step.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile stack */}
            <div className="sm:hidden space-y-4 mb-8">
              {mechanismSteps.map((step, index) => (
                <div key={index} className={`${step.bgColor} rounded-xl flex items-center justify-center text-white font-bold text-center p-4 shadow-soft`}>
                  <div className="text-sm">{step.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;