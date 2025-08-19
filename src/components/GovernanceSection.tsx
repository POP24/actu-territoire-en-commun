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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-white">GOUVERNANCE DES</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">COMMUNS</span>
            </h2>
          </div>

          {/* Organisation Horizontale */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">🏛️ ORGANISATION HORIZONTALE</h3>
            </div>
            
            {/* Réseau National */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 max-w-xs sm:max-w-sm">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">RÉSEAU NATIONAL</h4>
                <div className="space-y-1 text-white">
                  <div className="font-semibold text-sm sm:text-base">Caisse Commune</div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">1,000,000€</div>
                  <div className="text-xs sm:text-sm">Tous votent</div>
                </div>
              </div>
            </div>

            {/* Flèche et distribution */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-white font-semibold text-lg sm:text-xl">↓</div>
              <div className="text-white text-sm sm:text-base">Distribution équitable</div>
              <div className="text-white font-semibold text-lg sm:text-xl">↓</div>
            </div>

            {/* Communes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">COMMUNE A</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide localement</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">COMMUNE B</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide localement</div>
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">COMMUNE C</h4>
                <div className="text-xs sm:text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide localement</div>
                </div>
              </div>
            </div>

            {/* Principe */}
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm border border-cyan-400/40 max-w-3xl mx-auto shadow-lg">
              <div className="text-white">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-cyan-300">
                  Une organisation coopérative et transparente qui articule :
                </p>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">—</span>
                    <p className="text-base sm:text-lg text-white">
                      <span className="font-semibold text-cyan-300">Associations locales</span> (vie du lieu, programmation, bénévolat)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">—</span>
                    <p className="text-base sm:text-lg text-white">
                      <span className="font-semibold text-cyan-300">Fédération</span> (entraide, outils, cadre commun)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-xl mt-1">—</span>
                    <p className="text-base sm:text-lg text-white">
                      <span className="font-semibold text-cyan-300">Responsabilités légales</span> (gestion, sécurité, finances) assumées par les structures dédiées
                    </p>
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