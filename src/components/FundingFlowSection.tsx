import React, { useState } from 'react';
import WhereYouAtQuiz from './WhereYouAtQuiz';
import EcosystemModal from './EcosystemModal';

const FundingFlowSection = () => {
  const [showWhereYouAtQuiz, setShowWhereYouAtQuiz] = useState(false);
  const [showEcosystemModal, setShowEcosystemModal] = useState(false);
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-white">CONSTRUIRE LE</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">RÉSEAU</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-cyan-100 max-w-3xl mx-auto px-4">
              Votre adhésion construit le trésor commun.<br />
              Investir, réinvestir, libérer des terres ensemble.
            </p>
          </div>

          {/* How it works section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
            {/* Left side - How it works */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-cyan-400/20 h-full hover:bg-black/50 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-4 sm:mb-6 text-center hover:text-cyan-200 transition-colors duration-300 cursor-default">
                FLUX FINANCIERS
              </h3>
              
              <div className="space-y-3 sm:space-y-4 flex flex-col h-full">
                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30 flex-1 hover:bg-black/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">1️⃣ Les adhésions construisent le trésor commun</div>
                  <div className="text-cyan-100 text-xs group-hover:text-white transition-colors duration-300">Prix libre dès 10€ (local) • 100€ (architecte réseau)</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30 flex-1 hover:bg-black/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">2️⃣ Des professionnels pour fédérer chaque territoire</div>
                  <ul className="text-cyan-100 text-xs space-y-1">
                    <li className="group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">• Connaisseurs du terrain local</li>
                    <li className="group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">• Rémunérés par le trésor commun</li>
                    <li className="group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">• Fédèrent et animent la commune</li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30 flex-1 hover:bg-black/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">3️⃣ Acquisitions collectives de lieux clés</div>
                  <div className="text-cyan-100 text-xs group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">Terres agricoles • Espaces de production • Lieux de vie</div>
                  <div className="text-cyan-100 text-xs mt-1 group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">Campings, fermes, forêts, moulins...</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30 flex-1 hover:bg-black/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">4️⃣ Les bénéfices alimentent la croissance</div>
                  <div className="text-cyan-100 text-xs group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">Après charges et frais → Réinvestissement collectif</div>
                </div>

                <div className="bg-black/50 rounded-xl p-3 sm:p-4 border border-cyan-500/30 flex-1 hover:bg-black/70 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-cyan-300 font-semibold mb-1 text-xs sm:text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">5️⃣ Propriété collective progressive</div>
                  <div className="text-cyan-100 text-xs group-hover:text-white transition-colors duration-300 hover:translate-x-1 transition-transform">Petit à petit, les lieux deviennent des communs.</div>
                </div>
              </div>
            </div>

            {/* Right side - New containers */}
            <div className="flex flex-col space-y-4 sm:space-y-6 h-full">
              {/* Container 1 - TESTEZ VOTRE ANCRAGE LOCAL */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-cyan-400/20 text-center flex-1 flex flex-col justify-center hover:bg-black/50 hover:border-cyan-400/50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group cursor-pointer">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-4 sm:mb-6 group-hover:text-cyan-200 group-hover:scale-105 transition-all duration-300">TESTEZ VOTRE ANCRAGE LOCAL</h2>
                
                <p className="text-cyan-100 text-sm mb-6 px-2 group-hover:text-white transition-colors duration-300">
                  Quiz individuel et collectif pour évaluer<br className="hidden sm:block" />
                  votre conscience biorégionale
                </p>
                
                <button 
                  onClick={() => setShowWhereYouAtQuiz(true)}
                  className="bg-cyan-600/30 hover:bg-cyan-500/50 text-cyan-300 border border-cyan-500/50 rounded-lg py-3 px-4 sm:px-6 text-sm font-medium transition-all duration-300 mx-auto hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40 hover:text-white hover:border-cyan-400 hover:rotate-1 hover:-translate-y-1"
                >
                  DÉCOUVRIR LES QUIZZ
                </button>
              </div>

              {/* Container 2 - DONNÉES OUVERTES DU RÉSEAU */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-cyan-400/20 text-center flex-1 flex flex-col justify-center hover:bg-black/50 hover:border-cyan-400/50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group cursor-pointer">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 mb-4 sm:mb-6 group-hover:text-cyan-200 group-hover:scale-105 transition-all duration-300">DONNÉES OUVERTES DU RÉSEAU</h2>
                
                <p className="text-cyan-100 text-sm mb-6 px-2 group-hover:text-white transition-colors duration-300">
                  Explorez les cartes, projets et partenaires<br className="hidden sm:block" />
                  qui construisent les communs
                </p>
                
                <button 
                  onClick={() => setShowEcosystemModal(true)}
                  className="bg-cyan-600/30 hover:bg-cyan-500/50 text-cyan-300 border border-cyan-500/50 rounded-lg py-3 px-4 sm:px-6 text-sm font-medium transition-all duration-300 mx-auto hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40 hover:text-white hover:border-cyan-400 hover:-rotate-1 hover:-translate-y-1"
                >
                  DÉCOUVRIR L'ÉCOSYSTÈME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WhereYouAtQuiz 
        isOpen={showWhereYouAtQuiz} 
        onClose={() => setShowWhereYouAtQuiz(false)} 
      />
      
      <EcosystemModal 
        isOpen={showEcosystemModal} 
        onClose={() => setShowEcosystemModal(false)} 
      />
    </section>
  );
};

export default FundingFlowSection;