import { Button } from "@/components/ui/button";

const AdhesionArchitecteSection = () => {
  return (
    <section id="adhesion-architecte" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-green-50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-green-brand text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Chemin 2 · Fédération nationale
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-brand mb-2">100€</div>
            <div className="text-xl sm:text-2xl text-green-brand font-semibold mb-4">ADHÉSION ARCHITECTE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Communauté Nationale</h2>
            <p className="text-lg text-muted-foreground italic">Coordination globale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Adhésion fondatrice */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">👑</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Adhésion fondatrice</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Participez à la trésorerie collective</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Votez sur l'attribution des budgets territoriaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Accédez à toutes les opportunités du réseau</span>
                </li>
              </ul>
            </div>

            {/* Connexion réseau */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🔗</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Connexion réseau</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Rejoignez les cercles thématiques (Discord)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Formation aux outils de gouvernance des communs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-brand text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Avantages exclusifs à venir</span>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta-green" className="px-8 py-4 text-lg font-bold rounded-xl">
              REJOINDRE L'ADHÉSION ARCHITECTE
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdhesionArchitecteSection;