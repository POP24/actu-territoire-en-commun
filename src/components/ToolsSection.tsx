const ToolsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            OUTILS INTÉGRÉS
          </h2>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-foreground">
              Gouverner, investir et se connecter - Tout en un
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Communauté */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🤝</div>
                <h3 className="text-2xl font-bold text-foreground">Communauté</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Réseau social territorial connecté</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Carte des territoires et compétences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Profils utilisateurs et collèges locaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Place de marché freelance inter-territoires</span>
                </li>
              </ul>
            </div>
            
            {/* Gouvernance */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🏛️</div>
                <h3 className="text-2xl font-bold text-foreground">Gouvernance</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Suite complète d'outils DAO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gouvernance on-chain et transparente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gestion de trésorerie collective</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Systèmes de vote et prise de décision</span>
                </li>
              </ul>
            </div>
            
            {/* Launchpads */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold text-foreground">Launchpads</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Immobilier fractionné et financement de projets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tokenisation des adhésions territoriales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Marchés secondaires pour la liquidité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cagnottes collectives automatisées</span>
                </li>
              </ul>
            </div>
            
            {/* Écosystème */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">🌐</div>
                <h3 className="text-2xl font-bold text-foreground">Écosystème</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Store d'applications décentralisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Gestion des subventions publiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Messagerie P2P sécurisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Modules personnalisables par territoire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;