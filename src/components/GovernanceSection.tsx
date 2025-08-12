import { Card, CardContent } from "@/components/ui/card";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">GOUVERNANCE NOUVELLE</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">GÉNÉRATION</span>
            </h2>
          </div>

          {/* Organisation Horizontale */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">🏛️ ORGANISATION HORIZONTALE</h3>
            </div>
            
            {/* Réseau National */}
            <div className="text-center mb-8">
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 max-w-sm">
                <h4 className="text-xl font-bold text-foreground mb-2">RÉSEAU NATIONAL</h4>
                <div className="space-y-1 text-foreground">
                  <div className="font-semibold">Caisse Commune</div>
                  <div className="text-2xl font-bold">1,000,000€</div>
                  <div className="text-sm">Tous votent</div>
                </div>
              </div>
            </div>

            {/* Flèche et distribution */}
            <div className="text-center mb-8">
              <div className="text-foreground font-semibold">↓</div>
              <div className="text-foreground">Distribution équitable</div>
              <div className="text-foreground font-semibold">↓</div>
            </div>

            {/* Communes */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/30">
                <h4 className="font-bold text-foreground mb-2">COMMUNE A</h4>
                <div className="text-sm text-foreground space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/30">
                <h4 className="font-bold text-foreground mb-2">COMMUNE B</h4>
                <div className="text-sm text-foreground space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/30">
                <h4 className="font-bold text-foreground mb-2">COMMUNE C</h4>
                <div className="text-sm text-foreground space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
            </div>

            {/* Principe */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 max-w-md mx-auto">
              <div className="text-xl font-bold text-foreground mb-2">PAS DE HIÉRARCHIE</div>
              <div className="text-lg text-foreground">Juste de la COOPÉRATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;