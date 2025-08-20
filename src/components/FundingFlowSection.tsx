const FundingFlowSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 z-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Gradient overlays inspired by the reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
        
        {/* Additional tech glow effects */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-white">FLUX DE</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">FINANCEMENT</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-cyan-100 max-w-3xl mx-auto px-4">
              Votre adhésion construit le trésor commun.<br />
              Investir, réinvestir, libérer des terres ensemble.
            </p>
          </div>

          {/* How it works section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Left side - How it works */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-cyan-400/20">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-4 sm:mb-6 text-center">
                COMMENT ÇA MARCHE ?
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base">1️⃣ Les adhésions construisent le trésor commun</div>
                  <div className="text-cyan-100 text-xs">Prix libre dès 10€ (local) • 100€ (architecte réseau)</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base">2️⃣ Des professionnels pour fédérer chaque territoire</div>
                  <ul className="text-cyan-100 text-xs space-y-1">
                    <li>• Connaisseurs du terrain local</li>
                    <li>• Rémunérés par le trésor commun</li>
                    <li>• Fédèrent et animent la commune</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base">3️⃣ Acquisitions collectives de lieux clés</div>
                  <div className="text-cyan-100 text-xs">Terres agricoles • Espaces de production • Lieux de vie</div>
                  <div className="text-cyan-100 text-xs mt-1">Campings, fermes, forêts, moulins...</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base">4️⃣ Les bénéfices alimentent la croissance</div>
                  <div className="text-cyan-100 text-xs">Après charges et frais → Réinvestissement collectif</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base">5️⃣ Propriété collective progressive</div>
                  <div className="text-cyan-100 text-xs">Petit à petit, les lieux deviennent des communs.</div>
                </div>
              </div>
            </div>

            {/* Right side - New containers */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* Container 1 - Territory Knowledge Quiz */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-400/20">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-2">Connaissez-vous votre territoire ?</h2>
                <p className="text-cyan-100 text-sm mb-4 sm:mb-6">Deux approches pour tester votre ancrage local</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                    <h3 className="text-cyan-300 font-semibold text-sm mb-1">Where You At?</h3>
                    <span className="text-xs text-cyan-200 block mb-2">1981 - Le quiz originel</span>
                    <p className="text-xs text-cyan-100 mb-3">Testez votre connaissance du milieu naturel : cycles de l'eau, sols, plantes natives, saisons...</p>
                    <button className="w-full bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 rounded-lg py-2 px-3 text-xs font-medium transition-colors">
                      FAIRE LE TEST INDIVIDUEL
                    </button>
                  </div>
                  
                  <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30">
                    <h3 className="text-cyan-300 font-semibold text-sm mb-1">How You Live?</h3>
                    <span className="text-xs text-cyan-200 block mb-2">2012 - Version actualisée</span>
                    <p className="text-xs text-cyan-100 mb-3">Évaluez vos pratiques collectives : actions locales, résistance, communs, politique...</p>
                    <button className="w-full bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/50 rounded-lg py-2 px-3 text-xs font-medium transition-colors">
                      TESTER VOTRE COLLECTIF
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-cyan-200 text-center">D'après Van Andruss (1981) et Rollot & Schaffner (2024)</p>
              </div>

              {/* Container 2 - Commons Ecosystem */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-400/20">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-2">Écosystème des Communs</h2>
                <p className="text-cyan-100 text-sm mb-4 sm:mb-6">Les réseaux qui tissent l'autonomie territoriale</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30">
                    <h4 className="text-cyan-300 font-semibold text-sm mb-2">🌾 Terres & Agriculture</h4>
                    <ul className="text-xs text-cyan-100 space-y-1">
                      <li>• Terre de Liens</li>
                      <li>• Ouvre Ta Ferme</li>
                      <li>• CIVAM</li>
                      <li>• Fermes d'Avenir</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30">
                    <h4 className="text-cyan-300 font-semibold text-sm mb-2">💻 Outils Libres</h4>
                    <ul className="text-xs text-cyan-100 space-y-1">
                      <li>• Cagette.net</li>
                      <li>• Decidim</li>
                      <li>• Framasoft</li>
                      <li>• Open Food France</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30">
                    <h4 className="text-cyan-300 font-semibold text-sm mb-2">💰 Financement</h4>
                    <ul className="text-xs text-cyan-100 space-y-1">
                      <li>• Le Milliard</li>
                      <li>• BlueBees</li>
                      <li>• Zeste</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/50 rounded-xl p-3 border border-cyan-500/30">
                    <h4 className="text-cyan-300 font-semibold text-sm mb-2">🤝 Réseaux</h4>
                    <ul className="text-xs text-cyan-100 space-y-1">
                      <li>• France Tiers-Lieux</li>
                      <li>• Coopcycle</li>
                      <li>• Mobicoop</li>
                      <li>• Colibris</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="flex-1 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50 rounded-lg py-2 px-4 text-xs font-medium transition-colors">
                    EXPLORER LA CARTE
                  </button>
                  <button className="flex-1 bg-black/30 hover:bg-black/40 text-cyan-300 border border-cyan-500/50 rounded-lg py-2 px-4 text-xs font-medium transition-colors">
                    SE LISTER COMME PARTENAIRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingFlowSection;