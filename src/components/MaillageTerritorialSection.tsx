const MaillageTerritorialSection = () => {
  const categories = [
    {
      title: "FERMES COLLECTIVES",
      emoji: "🌾",
      subtitle: "Autonomie alimentaire",
      image: "/lovable-uploads/78b36e6d-519e-40e3-8f9b-b6338ed51187.png",
      type: "PRODUCTION"
    },
    {
      title: "CAMPINGS COLLECTIFS", 
      emoji: "🏕",
      subtitle: "Revenus + Accueil",
      image: "/lovable-uploads/2ca5809b-7acf-4fa7-a3af-c2c73102508e.png",
      type: "PRODUCTION"
    },
    {
      title: "TIERS-LIEUX",
      emoji: "🏘",
      subtitle: "Vie sociale + Travail", 
      image: "/lovable-uploads/301ed433-68f3-4972-88e1-bc23c23940fd.png",
      type: "PRODUCTION"
    },
    {
      title: "MANUFACTURES",
      emoji: "🏭",
      subtitle: "Production locale",
      image: "/lovable-uploads/c7c2c7c6-055e-463e-a54c-c039f1d3d5d2.png",
      type: "PRODUCTION"
    },
    {
      title: "FORÊTS COMMUNES",
      emoji: "🌲", 
      subtitle: "Bois + Biodiversité",
      image: "/lovable-uploads/d81ea063-32a4-4888-b82e-0a5071efbfb2.png",
      type: "RESSOURCES"
    },
    {
      title: "MOULINS & ÉNERGIES",
      emoji: "⚙️",
      subtitle: "Autonomie énergétique", 
      image: "/lovable-uploads/3126d349-a083-43f4-9b5c-c8513459b48b.png",
      type: "RESSOURCES"
    },
    {
      title: "SOURCES & LACS",
      emoji: "💧",
      subtitle: "Eau + Loisirs",
      image: "/lovable-uploads/26270418-4447-4d0d-89c3-3b28ff3cfc50.png", 
      type: "RESSOURCES"
    },
    {
      title: "PATRIMOINE VIVANT",
      emoji: "🏰",
      subtitle: "Culture + Mémoire",
      image: "/lovable-uploads/014dc230-2cf3-464e-b3aa-96f8f1f5aee2.png",
      type: "RESSOURCES"
    }
  ];

  const productionCategories = categories.filter(cat => cat.type === "PRODUCTION");
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

          {/* Production Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-cyan-400">PRODUCTION</span>
              </h3>
              <p className="text-gray-300">Nœuds productifs du territoire</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productionCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
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
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-cyan-400">RESSOURCES</span>
              </h3>
              <p className="text-gray-300">Ressources stratégiques communes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ressourcesCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
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

          {/* Bottom explanation */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg italic max-w-4xl mx-auto">
              "Plutôt que d'acheter au hasard, nous ciblons des biens stratégiques qui, une fois maillés, créent un territoire autonome : 
              <span className="text-cyan-400"> Chaque acquisition renforce le réseau.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaillageTerritorialSection;