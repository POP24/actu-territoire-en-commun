const FundingFlowSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 z-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Gradient overlays inspired by the reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
        
        {/* Additional tech glow effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">FLUX DE</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">FINANCEMENT</span>
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Votre adhésion construit le trésor commun.<br />
              Investir, réinvestir, libérer des terres ensemble.
            </p>
          </div>

          {/* How it works section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left side - How it works */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">
                COMMENT ÇA MARCHE ?
              </h3>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-2">1️⃣ Les adhésions alimentent le trésor commun</div>
                  <div className="text-cyan-100 text-sm">10€ habitants + 100€ architectes = force collective</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-2">2️⃣ Chaque territoire active 2 FOCALISATEURS</div>
                  <ul className="text-cyan-100 text-sm space-y-1">
                    <li>• Connaisseurs du terrain local</li>
                    <li>• Rémunérés par le trésor commun</li>
                    <li>• Fédèrent et animent la commune</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-2">3️⃣ On acquiert des biens stratégiques</div>
                  <div className="text-cyan-100 text-sm">Campings, fermes, forêts, moulins...</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-2">4️⃣ Les revenus retournent au collectif</div>
                  <div className="text-cyan-100 text-sm">Location, production, événements → réinvestissement</div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-cyan-300 font-semibold mb-2">5️⃣ Les biens deviennent communs</div>
                  <div className="text-cyan-100 text-sm">Progressivement, tout passe en propriété collective</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 text-center">
                <div className="text-6xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4">Trésor Commun</h4>
                <p className="text-cyan-100">
                  Les adhésions se transforment en patrimoine collectif
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 text-center">
                <div className="text-6xl mb-4">🏡</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4">Biens Stratégiques</h4>
                <p className="text-cyan-100">
                  Acquisition progressive de lieux d'exception
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4">Croissance</h4>
                <p className="text-cyan-100">
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