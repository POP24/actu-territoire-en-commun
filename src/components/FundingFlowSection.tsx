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

            {/* Right side - Visual representation */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-cyan-400/20 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3">💰</div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-cyan-300 mb-2">Trésor Commun</h4>
                <p className="text-cyan-100 text-xs sm:text-sm">
                  Les adhésions se transforment en patrimoine collectif
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-cyan-400/20 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3">🏡</div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-cyan-300 mb-2">Biens Stratégiques</h4>
                <p className="text-cyan-100 text-xs sm:text-sm">
                  Acquisition progressive de lieux d'exception
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-cyan-400/20 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3">🌱</div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-cyan-300 mb-2">Croissance</h4>
                <p className="text-cyan-100 text-xs sm:text-sm">
                  Réinvestissement permanent pour l'expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingFlowSection;