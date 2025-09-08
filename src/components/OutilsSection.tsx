const OutilsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="title-with-underline text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              outils des <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">communs</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
              Gouverner, investir et connecter.
            </p>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Tout ce qu'il faut pour faire territoire ensemble.
            </p>
          </div>

          {/* 4 Piliers Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12">
            
            {/* COMMUNAUTÉ */}
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-3 sm:p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🤝</div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4">Communauté</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-3 sm:p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">⚖️</div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4">Gouvernance</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-3 sm:p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🌱</div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4">Financement</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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
            <div className="bg-gradient-card rounded-2xl shadow-soft border border-border p-3 sm:p-6 hover-scale cursor-pointer animate-scale-in">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🗺️</div>
                <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-4">Territoires</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
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

          {/* CTAs Section */}
          <div className="text-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="/volontariat" 
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl p-6 h-20 flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-scale cursor-pointer">
                  ÊTRE VOLONTAIRE
                </div>
              </a>
              <a 
                href="/parrainage" 
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl p-6 h-20 flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-scale cursor-pointer">
                  PARRAINER
                </div>
              </a>
              <a 
                href="/boutique" 
                className="block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-2xl p-6 h-20 flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover-scale cursor-pointer">
                  BOUTIQUE DES COMMUNS
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutilsSection;