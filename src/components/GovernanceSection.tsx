import { Card, CardContent } from "@/components/ui/card";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-20 relative overflow-hidden">
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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">GOUVERNANCE NOUVELLE</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">GÉNÉRATION</span>
            </h2>
          </div>

          {/* Organisation Horizontale */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">🏛️ ORGANISATION HORIZONTALE</h3>
            </div>
            
            {/* Réseau National */}
            <div className="text-center mb-8">
              <div className="inline-block p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 max-w-sm">
                <h4 className="text-xl font-bold text-white mb-2">RÉSEAU NATIONAL</h4>
                <div className="space-y-1 text-white">
                  <div className="font-semibold">Caisse Commune</div>
                  <div className="text-2xl font-bold text-cyan-400">1,000,000€</div>
                  <div className="text-sm">Tous votent</div>
                </div>
              </div>
            </div>

            {/* Flèche et distribution */}
            <div className="text-center mb-8">
              <div className="text-white font-semibold">↓</div>
              <div className="text-white">Distribution équitable</div>
              <div className="text-white font-semibold">↓</div>
            </div>

            {/* Communes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2">COMMUNE A</h4>
                <div className="text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2">COMMUNE B</h4>
                <div className="text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-cyan-400/20">
                <h4 className="font-bold text-white mb-2">COMMUNE C</h4>
                <div className="text-sm text-white space-y-1">
                  <div>Autonome</div>
                  <div>↓</div>
                  <div>Décide locale</div>
                </div>
              </div>
            </div>

            {/* Principe */}
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 max-w-md mx-auto">
              <div className="text-xl font-bold text-white mb-2">PAS DE HIÉRARCHIE</div>
              <div className="text-lg text-white">Juste de la COOPÉRATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;