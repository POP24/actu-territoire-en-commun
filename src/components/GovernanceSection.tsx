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
            
            {/* Réseau National */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 max-w-xs sm:max-w-sm hover:bg-white/20 hover:border-cyan-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 cursor-pointer group">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">TRÉSOR COLLECTIF</h4>
                <div className="space-y-1 text-white">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">1 000 000€ visés</div>
                  <div className="text-xs sm:text-sm group-hover:text-cyan-100 transition-colors duration-300">Budget commun</div>
                </div>
              </div>
            </div>

            {/* Flèche et distribution */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-white font-semibold text-lg sm:text-xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-default">↓</div>
              <div className="text-white text-sm sm:text-base hover:text-cyan-200 transition-colors duration-300 cursor-default">Distribution</div>
              <div className="text-white font-semibold text-lg sm:text-xl hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-default">↓</div>
            </div>

            {/* Communes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">LIEU A</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">LIEU B</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20 hover:bg-white/20 hover:border-cyan-400/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-cyan-200 transition-colors duration-300">LIEU C</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Assemblée locale</div>
                  <div className="group-hover:text-cyan-300 group-hover:scale-125 transition-all duration-300">↓</div>
                  <div className="group-hover:text-cyan-100 transition-colors duration-300">Décisions autonomes</div>
                </div>
              </div>
            </div>

            {/* RÉPARTITION DES RESPONSABILITÉS */}
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-default">🏛️ RÉPARTITION DES RESPONSABILITÉS</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
              {/* Cercle Local - Vert */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-green-400/50 hover:border-green-400/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-400 group-hover:border-green-300 group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-300">
                      <span className="text-2xl text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300">🏘️</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">Cercle Local</h4>
                  </div>
                  <div className="space-y-3 text-white text-sm sm:text-base">
                    <div><span className="font-semibold text-green-300">•</span> Gestion quotidienne du lieu</div>
                    <div><span className="font-semibold text-green-300">•</span> Animation de la vie collective</div>
                    <div><span className="font-semibold text-green-300">•</span> Programmation culturelle et pédagogique</div>
                    <div><span className="font-semibold text-green-300">•</span> Relations avec le territoire immédiat</div>
                  </div>
                </div>
              </div>

              {/* Cercle National - Violet */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-purple-400/50 hover:border-purple-400/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center border-2 border-purple-400 group-hover:border-purple-300 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300">
                      <span className="text-2xl text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300">🔗</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Cercle National</h4>
                  </div>
                  <div className="space-y-3 text-white text-sm sm:text-base">
                    <div><span className="font-semibold text-purple-300">•</span> Mutualisation des ressources</div>
                    <div><span className="font-semibold text-purple-300">•</span> Représentation politique</div>
                    <div><span className="font-semibold text-purple-300">•</span> Développement des outils communs</div>
                    <div><span className="font-semibold text-purple-300">•</span> Coordination inter-territoriale</div>
                  </div>
                </div>
              </div>

              {/* Structures Juridiques - Orange */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-orange-400/50 hover:border-orange-400/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center border-2 border-orange-400 group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-400/50 transition-all duration-300">
                      <span className="text-2xl text-orange-400 group-hover:text-orange-300 group-hover:scale-110 transition-all duration-300">⚖️</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">Structures juridiques</h4>
                  </div>
                  <div className="space-y-3 text-white text-sm sm:text-base">
                    <div><span className="font-semibold text-orange-300">SA/SCI:</span> Propriété foncière collective</div>
                    <div><span className="font-semibold text-orange-300">Association loi 1901:</span> Rachat progressif des Communs</div>
                    <div><span className="font-semibold text-orange-300">Coopérative:</span> Activités économiques</div>
                  </div>
                </div>
              </div>
            </div>

            {/* TROIS CERCLES DE DÉCISION */}
            <div className="mt-12 sm:mt-16 md:mt-20">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-default">⚡ TROIS CERCLES DE DÉCISION</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                {/* Cercle Territorial - Bleu */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-blue-400/50 hover:border-blue-400/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-400 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300">
                        <span className="text-2xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">🔵</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Cercle Territorial</h4>
                    </div>
                    <div className="space-y-3 text-white text-sm sm:text-base">
                      <div><span className="font-semibold text-blue-300">Qui :</span> Usagers actifs du lieu</div>
                      <div><span className="font-semibold text-blue-300">Décide :</span> Vie quotidienne, programmation, aménagements locaux</div>
                      <div><span className="font-semibold text-blue-300">Budget :</span> Cagnotte locale autonome</div>
                    </div>
                  </div>
                </div>

                {/* Cercle de Coordination - Rouge */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-red-400/50 hover:border-red-400/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-400 group-hover:border-red-300 group-hover:shadow-lg group-hover:shadow-red-400/50 transition-all duration-300">
                        <span className="text-2xl text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all duration-300">🔴</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300">Cercle de Coordination</h4>
                    </div>
                    <div className="space-y-3 text-white text-sm sm:text-base">
                      <div><span className="font-semibold text-red-300">Qui :</span> Architectes + délégués territoriaux</div>
                      <div><span className="font-semibold text-red-300">Décide :</span> Budget national, orientations, outils mutualisés</div>
                      <div><span className="font-semibold text-red-300">Vote :</span> Architectes (budget) + délégués (orientations)</div>
                      <div><span className="font-semibold text-red-300">Budget :</span> Trésor national (1M€ visé)</div>
                    </div>
                  </div>
                </div>

                {/* Cercle Gardien - Blanc */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/60 to-gray-300/60 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 sm:p-8 bg-black/90 rounded-2xl border border-white/50 hover:border-white/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/60 group-hover:border-white/80 group-hover:shadow-lg group-hover:shadow-white/50 transition-all duration-300">
                        <span className="text-2xl text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">⚪</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">Cercle Gardien</h4>
                    </div>
                    <div className="space-y-3 text-white text-sm sm:text-base">
                      <div><span className="font-semibold text-white/80">Qui :</span> 7 anciens tirés au sort</div>
                      <div><span className="font-semibold text-white/80">Décide :</span> Respect charte, médiation, évolutions</div>
                      <div><span className="font-semibold text-white/80">Pouvoir :</span> Véto sur dérives, protection des valeurs</div>
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