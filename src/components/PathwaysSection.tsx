import { Button } from "@/components/ui/button";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-foreground">CHOISISSEZ VOTRE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">CHEMIN</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chemin 1 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-green-400 cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-green-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Entrée 1 · Fédération nationale
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">100€</div>
                <div className="text-green-600 font-semibold mb-4">Adhésion Architecte</div>
                <h3 className="text-xl font-bold text-foreground">Communauté Nationale</h3>
                <p className="text-muted-foreground italic">Coordination globale</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">👑</span>
                    <h4 className="text-lg font-semibold text-foreground">Adhésion fondatrice</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Participez à la trésorerie collective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Votez l'attribution des budgets territoriaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Accédez à toutes les opportunités du réseau</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🔗</span>
                    <h4 className="text-lg font-semibold text-foreground">Connexion réseau</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Rejoignez les cercles thématiques (Discord)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Formations aux outils de gouvernance partagée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Accès prioritaire aux séjours et rencontres du réseau</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-green-400 hover:bg-green-500 text-white font-bold py-3 rounded-xl">
                Adhérer (100€)
              </Button>
            </div>
            
            {/* Chemin 2 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Entrée 2 · Association locale
                </div>
                <div className="text-4xl font-bold text-blue-500 mb-2">10€ + prix libre</div>
                <div className="text-blue-600 font-semibold mb-4">Adhésion Locale</div>
                <h3 className="text-xl font-bold text-foreground">Gouvernance du lieu</h3>
                <p className="text-muted-foreground italic">Engagement sur votre territoire</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🗳️</span>
                    <h4 className="text-lg font-semibold text-foreground">Vos droits de membre</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Voter les grandes décisions du territoire / du lieu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Proposer et rejoindre des projets (calendrier d'activités)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Créer des événements et animer la vie locale</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🏠</span>
                    <h4 className="text-lg font-semibold text-foreground">Concrètement</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Trésor collectif local (budget participatif)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Occuper les lieux (tarifs membres, crédits d'usage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Accès prioritaire aux espaces et activités</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-3 mt-8">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl">
                  Adhérer à l'association locale
                </Button>
                <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 rounded-xl">
                  Voir la boutique
                </Button>
              </div>
            </div>
            
            {/* Chemin 3 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400 cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Entrée 3 · Investissement
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">Investir dans les lieux</div>
                <h3 className="text-xl font-bold text-foreground">Achat collectif de campings & espaces communs</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🏢</span>
                    <h4 className="text-lg font-semibold text-foreground">Ce que vous trouverez</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Opérations en cours et lieux cibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Obligations adossées à l'actif et crédits d'usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Dossiers d'investissement & FAQ risques/garanties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Modalités, calendrier et gouvernance des projets</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl">
                Accéder au site investissement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;