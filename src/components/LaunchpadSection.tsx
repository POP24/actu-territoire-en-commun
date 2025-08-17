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
              CROWDFUND <span className="text-cyan-400">YOUR BIOREGION</span>
            </h2>
            <p className="text-gray-300 text-lg mb-2">Turn Ideas Into Action.</p>
            <p className="text-gray-400">Finance projects that matter, together.</p>
          </div>

          {/* Two Launchpads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Real-Estate Launchpad */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Real-Estate <span className="text-cyan-400">Launchpad</span>
              </h3>
              <p className="text-gray-300 mb-6">Fractionalize. Finance. Build.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Mock interface for Real Estate */}
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">Primary Market</h4>
                    <div className="text-sm text-gray-500">🏠 REAL ESTATE</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="bg-gray-100 h-20 rounded-lg mb-2"></div>
                      <div className="text-xs text-gray-600">Property Details</div>
                    </div>
                    <div>
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-20 rounded-lg mb-2"></div>
                      <div className="text-xs text-gray-600">Virtual Tour</div>
                    </div>
                    <div>
                      <div className="bg-gray-100 h-20 rounded-lg mb-2"></div>
                      <div className="text-xs text-gray-600">Investment Info</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">67%</div>
                      <div className="text-xs text-gray-500">SUBSCRIBED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">€850,000 / €1,200,000</div>
                      <div className="text-xs text-gray-500">Target Amount</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold">
                    Invest Now
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Crowdfund real-world assets like farms and shared spaces.</p>
                <p className="text-gray-400 text-xs">Empower collective ownership with sustainable returns.</p>
              </div>
            </div>

            {/* Membership Launchpad */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Membership <span className="text-cyan-400">Launchpad</span>
              </h3>
              <p className="text-gray-300 mb-6">Join. Federate. Organize.</p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                {/* Mock interface for Membership */}
                <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-cyan-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-white">🌐 NFT MEMBERSHIP</h4>
                    <div className="text-xs text-cyan-400">⚡ ACTIVE</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="bg-gradient-to-br from-purple-600 to-cyan-500 h-24 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-white font-bold">✨ GENESIS</div>
                      </div>
                      <div className="text-xs text-gray-400">Genesis Membership</div>
                    </div>
                    <div>
                      <div className="bg-gradient-to-br from-blue-600 to-purple-500 h-24 rounded-lg mb-2 flex items-center justify-center">
                        <div className="text-white font-bold">🚀 CAPTAIN</div>
                      </div>
                      <div className="text-xs text-gray-400">Leadership Role</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">67%</div>
                      <div className="text-xs text-gray-400">MINTED</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">1,247 / 10,000</div>
                      <div className="text-xs text-gray-400">Members</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold">
                    Join Network
                  </button>
                </div>
                
                <p className="text-gray-300 text-sm">Onboard pioneers with tokenized memberships.</p>
                <p className="text-gray-400 text-xs">Unlock governance, perks, and collective resilience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadSection;