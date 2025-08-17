const OutilsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              OUTILS DES <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">COMMUNS</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
              Gouverner, investir et connecter.
            </p>
            <p className="text-lg text-muted-foreground">
              Tout ce qu'il faut pour faire territoire ensemble.
            </p>
          </div>

          {/* 4 Piliers Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12">
            
            {/* COMMUNAUTÉ */}
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Communauté</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Réseau social local
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Carte des territoires
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Annuaire des habitants
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Place de marché des communs
                </li>
              </ul>
            </div>

            {/* GOUVERNANCE */}
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Gouvernance</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Assemblées locales
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Votes collectifs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gestion du trésor commun
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Décisions partagées
                </li>
              </ul>
            </div>

            {/* FINANCEMENT */}
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Financement</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Campagnes immobilières
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cagnottes de projets
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Adhésions & cotisations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bourse d'échange local
                </li>
              </ul>
            </div>

            {/* TERRITOIRES */}
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-foreground mb-4">Territoires</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bibliothèque des savoirs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Agenda des communes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Messagerie inter-communes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Outils sur mesure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutilsSection;