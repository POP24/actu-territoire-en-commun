import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FinancingSection = () => {
  return (
    <section id="financement" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FINANCEZ VOTRE <span className="text-cyan-400">TERRITOIRE</span>
            </h2>
            <p className="text-gray-300 text-lg mb-2">Transformez les idées en actions.</p>
            <p className="text-gray-400">Financez les projets qui comptent, ensemble.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Immobilier Partagé */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Immobilier Partagé</h3>
                <p className="text-gray-300 mb-6">Mutualisez. Financez. Construire.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏕</span>
                    <span className="text-white font-semibold">CAMPINGS EN COMMUN - DORDOGNE</span>
                  </div>
                  
                  <div className="text-sm text-gray-400 space-y-1">
                    <div>🏠 IMMOBILIER</div>
                    <div>Camping tentes - Premier palier</div>
                    <div>Pavillon camping - Deuxième palier</div>
                    <div>Vue aérienne camping - Troisième palier</div>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-400 font-bold">35% FINANCÉ</span>
                      <span className="text-white">€850,000 / €2,650,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">Objectif</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">
                  Achetons les terres de notre émancipation
                </p>
                <p className="text-gray-400 text-sm">
                  Propriété collective avec rendements durables.
                </p>
              </CardContent>
            </Card>

            {/* Trésorerie Commune */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Trésorerie Commune</h3>
                <p className="text-gray-300 mb-6">Rejoignez. Votez. Décidez.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🌐</span>
                    <span className="text-white font-semibold">ADHÉSION ASSOCIATIVE</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-yellow-400">⭐ USAGER LOCAL</span>
                        <div className="text-sm text-gray-400">Prix libre (min 10€)</div>
                      </div>
                      <span className="text-2xl">⚡</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-red-500/20 rounded-lg p-3">
                      <div>
                        <span className="text-red-400">🔥 ARCHITECTE</span>
                        <div className="text-sm text-gray-400">100€ unique</div>
                      </div>
                      <span className="text-2xl">⭐</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-400 font-bold">13% MINTED</span>
                      <span className="text-white">1,247 / 10,000</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '13%'}}></div>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">Members</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">
                  Participez aux décisions de votre territoire
                </p>
                <p className="text-gray-400 text-sm">
                  Gouvernance, avantages et résilience collective.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;