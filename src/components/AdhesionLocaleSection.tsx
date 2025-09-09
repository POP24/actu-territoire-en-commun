import { Button } from "@/components/ui/button";

const AdhesionLocaleSection = () => {
  return (
    <section id="adhesion-locale" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Chemin 1 · Association Locale
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-2">À partir de 10€</div>
            <div className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">ADHÉSION LOCALE</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Gouvernance du lieu</h2>
            <p className="text-lg text-muted-foreground italic">Engagement sur votre territoire</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Vos droits de membre */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🗳️</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Vos droits de membre</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Votez sur les programmes d'animation, événements et formations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Proposer et rejoindre des projets (calendrier d'activités)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Créer des événements et animer la vie locale</span>
                </li>
              </ul>
            </div>

            {/* Concrètement */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🏠</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Concrètement</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Participez au Trésor collectif local (prix libre)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-lg font-bold mt-1">✓</span>
                  <span className="text-sm sm:text-base">Occuper les lieux (tarifs membres, crédits d'usage)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="cta-blue" className="px-8 py-4 text-lg font-bold rounded-xl">
              REJOINDRE L'ADHÉSION LOCALE
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdhesionLocaleSection;