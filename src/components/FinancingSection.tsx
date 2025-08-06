import { Card, CardContent } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section id="financement" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Crowdfund ton territoire
          </h2>
          
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-xl text-foreground mb-8">
              Coopérative intégrale transversale, pluridisciplinaire
            </p>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
              Activer votre territoire
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {/* Entrées */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Entrées</h3>
              <div className="space-y-2 text-foreground">
                <div>• Adhésions</div>
                <div>• Séjours</div>
                <div>• Formations</div>
                <div>• Boutique</div>
              </div>
            </div>

            {/* Sorties */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-blue-200/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sorties</h3>
              <div className="space-y-2 text-foreground">
                <div>• Coordinateur et focalisateur</div>
                <div>• Réseau local</div>
                <div>• Cagnotte pour réseau local</div>
              </div>
            </div>
          </div>

          {/* Résultat */}
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 border border-purple-200/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Résultat</h3>
            <div className="text-lg text-foreground">Activation de plusieurs territoires, ouverture, réveil, coordination</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;