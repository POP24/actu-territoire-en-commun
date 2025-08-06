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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Gouvernance nouvelle génération
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-center">
            {/* Niveau National */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 border border-blue-200/30">
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Niveau National</h3>
                <p className="text-sm text-foreground">Fédération de régions</p>
              </div>
            </div>

            {/* Niveau Local */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/20 border border-green-200/30">
              <div className="text-center">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Niveau Local</h3>
                <p className="text-sm text-foreground">1 territoire = 1 association</p>
              </div>
            </div>

            {/* Comment ça marche */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 border border-purple-200/30">
              <div className="text-center">
                <div className="text-3xl mb-3">🔧</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Comment ça marche</h3>
                <p className="text-sm text-foreground">Pass numérique = accès</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;