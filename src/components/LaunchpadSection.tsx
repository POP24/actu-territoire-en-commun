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
            {/* Real-Estate Launchpad */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Immobilier <span className="text-cyan-400">Partagé</span>
              </h3>
              <p className="text-gray-300 mb-6">Mutualisez. Financez. Construire.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-fit">
                {/* Mock interface for Real Estate */}
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">🏕 CAMPINGS EN COMMUN - DORDOGNE</h4>
                    <div className="text-sm text-gray-500">🏠 IMMOBILIER</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="h-24 rounded-lg mb-2 overflow-hidden">
                        <img src="/lovable-uploads/963b287f-eb27-42eb-b638-6ff50e70d2d7.png" alt="Camping tentes" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-gray-600">Premier palier</div>
                    </div>
                    <div>
                      <div className="h-24 rounded-lg mb-2 overflow-hidden">
                        <img src="/lovable-uploads/314ad510-583c-4e94-89f0-d64f6902556a.png" alt="Pavillon camping" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-gray-600">Deuxième palier</div>
                    </div>
                    <div>
                      <div className="h-24 rounded-lg mb-2 overflow-hidden">
                        <img src="/lovable-uploads/82f7ffbd-1b63-4fb1-9b63-bba4d88b098e.png" alt="Vue aérienne camping" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-gray-600">Troisième palier</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">35%</div>
                      <div className="text-xs text-gray-500">FINANCÉ</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">€850,000 / €2,650,000</div>
                      <div className="text-xs text-gray-500">Objectif</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold">
                    INVESTIR
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Achetons les terres de notre émancipation</p>
                <p className="text-gray-400 text-xs">Propriété collective avec rendements durables.</p>
              </div>
            </div>

            {/* Membership Launchpad */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trésorerie <span className="text-cyan-400">Commune</span>
              </h3>
              <p className="text-gray-300 mb-6">Rejoignez. Votez. Décidez.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-fit">
                {/* Mock interface for Membership */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-cyan-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-white">🌐 ADHÉSION ASSOCIATIVE</h4>
                    <div className="text-xs text-cyan-400">⚡ GOUVERNANCE</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="bg-gradient-to-br from-purple-600 to-cyan-500 h-24 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-white font-bold">⭐ USAGER LOCAL</div>
                      </div>
                      <div className="text-xs text-gray-400">Prix libre (min 10€)</div>
                    </div>
                    <div>
                      <div className="bg-gradient-to-br from-blue-600 to-purple-500 h-24 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-white font-bold">🔥 ARCHITECTE</div>
                      </div>
                      <div className="text-xs text-gray-400">100€ unique</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">13%</div>
                      <div className="text-xs text-gray-400">MINTED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">1,247 / 10,000</div>
                      <div className="text-xs text-gray-400">Members</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold">
                    ADHÉRER
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Participez aux décisions de votre territoire</p>
                <p className="text-gray-400 text-xs">Gouvernance, avantages et résilience collective.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadSection;