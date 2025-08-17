const LaunchpadSection = () => {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              FINANCEZ VOTRE <span className="text-cyan-400">TERRITOIRE</span>
            </h2>
            <p className="text-gray-300 text-lg mb-2">Transformez les idées en actions.</p>
            <p className="text-gray-400">Financez les projets qui comptent, ensemble.</p>
          </div>

          {/* Two Launchpads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Immobilier Partagé */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Immobilier <span className="text-cyan-400">Partagé</span>
              </h3>
              <p className="text-gray-300 mb-6">Mutualisez. Financez. Possédez.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Mock interface for Real Estate */}
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">🏕 CAMPING COLLECTIF</h4>
                    <div className="text-sm text-gray-500">DORDOGNE</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-24 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white font-bold">🏞️ Périgord Vert</div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">67%</div>
                      <div className="text-xs text-gray-500">FINANCÉ</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">850 000€ / 1 200 000€</div>
                      <div className="text-xs text-gray-500">Objectif</div>
                    </div>
                  </div>
                  
                  <div className="text-left text-xs text-gray-600 mb-4 space-y-1">
                    <div>📍 4 hectares - Périgord Vert</div>
                    <div>🏠 30 emplacements + gîtes</div>
                    <div>📈 Rendement: 3-5% annuel</div>
                    <div>Part minimum: 100€</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold">
                    INVESTIR MAINTENANT
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Devenez copropriétaire d'un camping écologique</p>
                <p className="text-gray-400 text-xs">Géré par la coopérative avec crédits séjours inclus</p>
              </div>
            </div>

            {/* Trésorerie Commune */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trésorerie <span className="text-cyan-400">Commune</span>
              </h3>
              <p className="text-gray-300 mb-6">Rejoignez. Votez. Décidez.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Mock interface for Membership */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-cyan-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-white">🌱 COMMUNE DU BANDIAT</h4>
                    <div className="text-xs text-cyan-400">⚡ ACTIVE</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-600 to-cyan-500 h-20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-white font-bold text-sm">👥 Communauté Locale</div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">67%</div>
                      <div className="text-xs text-gray-400">DES MEMBRES</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">1 247 / 2 000</div>
                      <div className="text-xs text-gray-400">Membres visés</div>
                    </div>
                  </div>
                  
                  <div className="text-left text-xs text-white mb-4 space-y-1">
                    <div className="font-semibold">TRÉSORERIE: 127 000€</div>
                    <div className="text-gray-300">Projets en vote:</div>
                    <div className="text-gray-400">• Achat tracteur collectif</div>
                    <div className="text-gray-400">• Rénovation grange commune</div>
                    <div className="text-gray-400">• Festival été 2025</div>
                  </div>
                  
                  <div className="text-left text-xs text-white mb-4">
                    <div>⭐ HABITANT: 10€/an</div>
                    <div>🔥 ARCHITECTE: 100€ unique</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold">
                    REJOINDRE LA COMMUNE
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Gouvernance directe de votre territoire</p>
                <p className="text-gray-400 text-xs">Vote sur tous les projets et accès aux équipements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadSection;