const MaillageTerritorialSection = () => {
  const categories = [
    // VIVRE & ACCUEILLIR
    {
      title: "CAMPINGS COLLECTIFS", 
      emoji: "🏕",
      subtitle: "Revenus + Accueil",
      badge: "FINANCEMENT",
      metric: "3-8% rendement",
      image: "/lovable-uploads/2ca5809b-7acf-4fa7-a3af-c2c73102508e.png",
      type: "VIVRE"
    },
    {
      title: "TIERS-LIEUX",
      emoji: "🏘",
      subtitle: "Vie sociale + Travail", 
      badge: "LIEN SOCIAL",
      metric: "30+ emplois",
      image: "/lovable-uploads/301ed433-68f3-4972-88e1-bc23c23940fd.png",
      type: "VIVRE"
    },
    // PRODUIRE & TRANSFORMER
    {
      title: "FERMES COLLECTIVES",
      emoji: "🌾",
      subtitle: "Autonomie alimentaire",
      badge: "NOURRIR",
      metric: "100% bio",
      image: "/lovable-uploads/78b36e6d-519e-40e3-8f9b-b6338ed51187.png",
      type: "PRODUIRE"
    },
    {
      title: "MANUFACTURES",
      emoji: "🏭",
      subtitle: "Production locale",
      badge: "FABRIQUER",
      metric: "0 km transport",
      image: "/lovable-uploads/c7c2c7c6-055e-463e-a54c-c039f1d3d5d2.png",
      type: "PRODUIRE"
    },
    // RESSOURCER
    {
      title: "FORÊTS COMMUNES",
      emoji: "🌲", 
      subtitle: "Bois + Biodiversité",
      badge: "RESSOURCE",
      metric: "∞ renouvelable",
      image: "/lovable-uploads/d81ea063-32a4-4888-b82e-0a5071efbfb2.png",
      type: "RESSOURCES"
    },
    {
      title: "SOURCES & LACS",
      emoji: "💧",
      subtitle: "Eau + Loisirs",
      badge: "RESSOURCE",
      metric: "Eau pure",
      image: "/lovable-uploads/26270418-4447-4d0d-89c3-3b28ff3cfc50.png", 
      type: "RESSOURCES"
    },
    {
      title: "MOULINS & ÉNERGIES",
      emoji: "⚙️",
      subtitle: "Autonomie énergétique",
      badge: "RESSOURCE", 
      metric: "100% autonome",
      image: "/lovable-uploads/3126d349-a083-43f4-9b5c-c8513459b48b.png",
      type: "RESSOURCES"
    },
    {
      title: "PATRIMOINE VIVANT",
      emoji: "🏰",
      subtitle: "Culture + Mémoire",
      badge: "PATRIMOINE",
      metric: "Events payants",
      image: "/lovable-uploads/014dc230-2cf3-464e-b3aa-96f8f1f5aee2.png",
      type: "RESSOURCES"
    }
  ];

  const vivreCategories = categories.filter(cat => cat.type === "VIVRE");
  const produireCategories = categories.filter(cat => cat.type === "PRODUIRE");
  const ressourcesCategories = categories.filter(cat => cat.type === "RESSOURCES");

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MAILLAGE DES <span className="text-cyan-400">COMMUNS ESSENTIELS</span>
            </h2>
            <p className="text-gray-300 text-lg mb-2">Acquérir ensemble, mailler le territoire,</p>
            <p className="text-gray-400">créer l'autonomie par l'interdépendance</p>
          </div>

          {/* Vivre & Accueillir Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-cyan-400">VIVRE & ACCUEILLIR</span>
              </h3>
              <p className="text-gray-300">Lieux de rencontre et financement</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {vivreCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">{category.badge}</span>
                    <span className="text-xs text-gray-400">{category.metric}</span>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{category.emoji}</div>
                    <h4 className="font-bold text-white text-sm mb-1">{category.title}</h4>
                    <p className="text-gray-400 text-xs">{category.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produire & Transformer Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-cyan-400">PRODUIRE & TRANSFORMER</span>
              </h3>
              <p className="text-gray-300">Autonomie alimentaire et industrielle</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {produireCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">{category.badge}</span>
                    <span className="text-xs text-gray-400">{category.metric}</span>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{category.emoji}</div>
                    <h4 className="font-bold text-white text-sm mb-1">{category.title}</h4>
                    <p className="text-gray-400 text-xs">{category.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-cyan-400">RESSOURCER</span>
              </h3>
              <p className="text-gray-300">Ressources stratégiques communes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ressourcesCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{category.badge}</span>
                    <span className="text-xs text-gray-400">{category.metric}</span>
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">{category.emoji}</div>
                    <h4 className="font-bold text-white text-sm mb-1">{category.title}</h4>
                    <p className="text-gray-400 text-xs">{category.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Diagram */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-4">ÉCOSYSTÈME TERRITORIAL</h3>
              <div className="max-w-2xl mx-auto bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-cyan-400">🏕 Campings (€)</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Finance</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-white">🌾 Fermes + 🏭 Manufactures</span>
                  </div>
                  <div className="text-center text-gray-500">↓</div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-white">🏘 Tiers-lieux</span>
                    <span className="text-gray-500">←→</span>
                    <span className="text-blue-400">🌲🏰💧⚙️ Ressources communes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom explanation */}
          <div className="text-center mt-12">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-gray-300 text-lg italic">
                "Notre stratégie : acquérir des biens complémentaires qui s'auto-renforcent."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-cyan-400">Les CAMPINGS financent l'ensemble</div>
                <div className="text-green-400">Les FERMES nourrissent les communes</div>
                <div className="text-blue-400">Les RESSOURCES sécurisent l'avenir</div>
              </div>
              <p className="text-white font-semibold">
                <span className="text-cyan-400">Ensemble, ils forment un territoire résilient.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaillageTerritorialSection;