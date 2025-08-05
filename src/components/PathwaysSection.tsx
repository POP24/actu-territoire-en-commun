import { Button } from "@/components/ui/button";

const PathwaysSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            CHOISISSEZ VOTRE CHEMIN
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chemin 1 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Chemin 1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Rejoindre la Communauté Nationale</h3>
                  <p className="text-muted-foreground italic">Adhésion annuelle - Coordination globale</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">👑</span>
                    <h4 className="text-lg font-semibold text-foreground">Adhésion Fondatrice</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Participez à la trésorerie collective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accédez à toutes les opportunités du réseau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Votez l'attribution des budgets territoriaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Rejoignez les cercles thématiques Discord/Telegram</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🎁</span>
                    <h4 className="text-lg font-semibold text-foreground">Avantages Exclusifs</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accès prioritaire aux séjours dans tous les territoires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Vote pour allouer les budgets aux futurs projets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Opportunité d'investissement dans les acquisitions collectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Formation aux outils de gouvernance partagée</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🔗</span>
                    <h4 className="text-lg font-semibold text-foreground">Connecter & Développer</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Invitez des membres via votre ID de parrainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Gagnez des points selon votre contribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recevez des airdrops pour votre engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Participez aux assemblées générales hybrides</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="hero" className="w-full mt-8">
                ADHÉRER AU RÉSEAU
              </Button>
            </div>
            
            {/* Chemin 2 */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Chemin 2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Créer Votre Territoire Local</h3>
                  <p className="text-muted-foreground italic">Action territoriale - 10€ + engagement</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🗺️</span>
                    <h4 className="text-lg font-semibold text-foreground">Cartographier Votre Territoire</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Rejoignez ou créez l'association locale de votre région</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Activez votre territoire sur la carte du réseau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Partagez votre vision sur votre profil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Connectez-vous aux pionniers locaux</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">⚡</span>
                    <h4 className="text-lg font-semibold text-foreground">Lancer Votre Collège Local</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Constituez la gouvernance de votre commune</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Invitez une communauté et développez des projets concrets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accédez aux outils (gouvernance locale, monnaie complémentaire)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Créez la cagnotte collective mensuelle</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🏡</span>
                    <h4 className="text-lg font-semibold text-foreground">Acquérir des Espaces Collectifs</h4>
                  </div>
                  <ul className="space-y-2 text-foreground ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Identifiez un espace physique (camping, ferme, mas...)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Utilisez les Launchpads de financement participatif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recevez accompagnement et cofinancement du réseau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ouvrez et fédérez habitants et visiteurs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button variant="cta" className="w-full mt-8">
                ACTIVER MON TERRITOIRE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;