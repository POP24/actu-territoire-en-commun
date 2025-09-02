import { Card, CardContent } from "@/components/ui/card";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
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
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-white">GOUVERNANCE DES</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">COMMUNS</span>
            </h2>
          </div>

          {/* Organisation Horizontale */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-default">🏛️ ORGANISATION COOPERATIVE</h3>
            </div>
            
            {/* Niveau National */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 max-w-xs sm:max-w-sm hover:bg-white/20 hover:border-cyan-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer group">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">TRÉSOR COLLECTIF</h4>
                <div className="space-y-1 text-white">
                  <div className="text-sm sm:text-base group-hover:text-cyan-100 transition-colors duration-300">Budget commun</div>
                  <div className="text-xs sm:text-sm group-hover:text-cyan-200 transition-colors duration-300">Assemblée nationale</div>
                </div>
              </div>
            </div>

            {/* Flèche et distribution */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-white font-semibold text-lg sm:text-xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-default">↓</div>
              <div className="text-white text-sm sm:text-base hover:text-cyan-200 transition-colors duration-300 cursor-default">Distribution</div>
              <div className="text-white font-semibold text-lg sm:text-xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-default">↓</div>
            </div>

            {/* Cagnottes Territoriales */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">CAGNOTTE A</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">CAGNOTTE B</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">CAGNOTTE C</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
            </div>

            {/* Nouvelle Architecture */}
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm border border-cyan-400/40 max-w-4xl mx-auto shadow-lg hover:from-white/25 hover:via-white/20 hover:to-white/15 hover:border-cyan-400/60 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer group">
              <div className="text-white">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-cyan-300">
                  🏛 Nouvelle architecture de gouvernance
                </p>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">1.</span>
                    <div>
                      <p className="text-base sm:text-lg text-white">
                        <span className="font-semibold text-cyan-300">Articulation entre niveaux :</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mt-1">
                        Chaque lieu délègue un ou deux représentants au national. Décisions nationales redistribuent moyens et outils.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">2.</span>
                    <div>
                      <p className="text-base sm:text-lg text-white">
                        <span className="font-semibold text-cyan-300">Transparence et suivi :</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mt-1">
                        Tableau de bord partagé, rapports périodiques, boucle de retour avec possibilité de réajustement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">3.</span>
                    <div>
                      <p className="text-base sm:text-lg text-white">
                        <span className="font-semibold text-cyan-300">Canaux de participation :</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mt-1">
                        Réunions physiques, plateforme numérique, groupes de discussion pour préparer les décisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">4.</span>
                    <div>
                      <p className="text-base sm:text-lg text-white">
                        <span className="font-semibold text-cyan-300">Autonomie locale :</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mt-1">
                        Assemblées locales décident besoins concrets (aménagements, activités, programmation).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">5.</span>
                    <div>
                      <p className="text-base sm:text-lg text-white">
                        <span className="font-semibold text-cyan-300">Coordination nationale :</span>
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mt-1">
                        Vote et répartition du budget collectif, grandes orientations, formations, outils communs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;