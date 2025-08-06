import { Button } from "@/components/ui/button";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CHOISISSEZ VOTRE CHEMIN
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chemin 1 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400 cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Chemin 1 : Rejoindre la Méta
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-2">100€</div>
                <div className="text-orange-600 font-semibold mb-4">Adhésion Focalisateur</div>
                <h3 className="text-xl font-bold text-foreground">Communauté Nationale</h3>
                <p className="text-muted-foreground italic">Coordination globale</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">👑</span>
                    <h4 className="text-lg font-semibold text-foreground">Adhésion Fondatrice</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Participez à la trésorerie collective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Accédez à toutes les opportunités du réseau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Votez l'attribution des budgets territoriaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Rejoignez les cercles thématiques Discord/Telegram</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🎁</span>
                    <h4 className="text-lg font-semibold text-foreground">Avantages Exclusifs</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Accès prioritaire aux séjours dans tous les territoires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Vote pour allouer les budgets aux futurs projets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Formation aux outils de gouvernance partagée</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🔗</span>
                    <h4 className="text-lg font-semibold text-foreground">Connecter & Développer</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Invitez des membres via votre ID de parrainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Gagnez des points selon votre contribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>Recevez des airdrops pour votre engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl">
                Devenir Focalisateur
              </Button>
            </div>
            
            {/* Chemin 2 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border-2 border-border transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Chemin 2 : Activer son Territoire
                </div>
                <div className="text-4xl font-bold text-blue-500 mb-2">Prix libre</div>
                <div className="text-blue-600 font-semibold mb-4">Membre du Réseau</div>
                <h3 className="text-xl font-bold text-foreground">Action Territoriale</h3>
                <p className="text-muted-foreground italic">Engagement local</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🗺️</span>
                    <h4 className="text-lg font-semibold text-foreground">Cartographier Votre Territoire</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Formation "Activation Territoriale" (3 jours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Kit de démarrage (outils, docs, méthodes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Accompagnement pendant 6 mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Connexion directe aux autres focalisateurs</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚡</span>
                    <h4 className="text-lg font-semibold text-foreground">Lancer Votre Collège Local</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Droit de vote sur les orientations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Accès à tous les territoires activés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Crédits d'usage (séjours, formations)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🏡</span>
                    <h4 className="text-lg font-semibold text-foreground">Acquérir des Espaces Collectifs</h4>
                  </div>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Participation aux décisions d'investissement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Discord et outils collaboratifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Accès aux financements collectifs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl">
                Rejoindre le Réseau
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;