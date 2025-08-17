const MaillageTerritorialSection = () => {
  const categories = [
    // VIVRE & ACCUEILLIR
    {
      title: "CAMPINGS COLLECTIFS", 
      emoji: "🏕",
      subtitle: "Revenus + Accueil",
      badge: "🔥 EN COURS",
      metric: "775k€ à lever • Dordogne",
      image: "/lovable-uploads/2ca5809b-7acf-4fa7-a3af-c2c73102508e.png",
      type: "VIVRE",
      isHot: true
    },
    {
      title: "TIERS-LIEUX",
      emoji: "🏘",
      subtitle: "Vie sociale + Travail", 
      badge: "LIEN SOCIAL",
      metric: "30+ emplois créés",
      image: "/lovable-uploads/301ed433-68f3-4972-88e1-bc23c23940fd.png",
      type: "VIVRE"
    },
    // PRODUIRE & TRANSFORMER
    {
      title: "FERMES COLLECTIVES",
      emoji: "🌾",
      subtitle: "Autonomie alimentaire",
      badge: "NOURRIR",
      metric: "100% bio • Circuits courts",
      image: "/lovable-uploads/78b36e6d-519e-40e3-8f9b-b6338ed51187.png",
      type: "PRODUIRE"
    },
    {
      title: "MANUFACTURES",
      emoji: "🏭",
      subtitle: "Production locale",
      badge: "FABRIQUER",
      metric: "0km • Artisanat local",
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
      metric: "Préservation des écosystèmes",
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
        
        {/* Light effect overlay - positioned bottom right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <img 
            src="/lovable-uploads/5f0f71d0-d521-44d1-b966-be3358bf8879.png" 
            alt="Effet lumineux" 
            className="w-full h-full object-cover mix-blend-screen opacity-30"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MAILLAGE DES <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">COMMUNS ESSENTIELS</span>
            </h2>
            <p className="text-gray-300 text-lg mb-2">Acquérir ensemble, mailler le territoire,</p>
            <p className="text-gray-400">créer l'autonomie par l'entraide</p>
          </div>

          {/* Compact 4x2 Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {categories.map((category, index) => {
              const CardWrapper = category.isHot ? 'a' : 'div';
              const cardProps = category.isHot 
                ? { href: "https://www.lasuitedumonde.com", target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <CardWrapper 
                  key={index} 
                  {...cardProps}
                  className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-10"
                >
                  {/* Card */}
                  <div className={`backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
                    category.isHot 
                      ? 'bg-red-500/20 border-red-500/50 shadow-lg shadow-red-500/30 group-hover:border-red-400/80 group-hover:bg-red-500/30' 
                      : 'bg-white/10 border-white/20 group-hover:border-cyan-400/50 group-hover:bg-white/20'
                  }`}>
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden rounded-t-xl">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Badge */}
                      <div className="absolute top-2 left-2">
                        <span className={`text-xs px-2 py-1 rounded font-bold ${
                          category.isHot 
                            ? "bg-red-600/90 text-white shadow-lg" 
                            : category.type === "VIVRE" ? "bg-cyan-500/90 text-white" :
                              category.type === "PRODUIRE" ? "bg-green-500/90 text-white" :
                              "bg-blue-500/90 text-white"
                        }`}>
                          {category.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title and info below image */}
                    <div className="p-3 text-center">
                      <h4 className="font-bold text-white text-xs md:text-sm mb-1">{category.title}</h4>
                      <p className="text-gray-400 text-xs mb-2">{category.subtitle}</p>
                      <div className="text-2xl md:text-3xl">{category.emoji}</div>
                    </div>

                    {/* Hover Info Panel */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/95 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-center">
                        <span className={`text-xs font-semibold ${
                          category.isHot ? 'text-red-400' : 'text-cyan-400'
                        }`}>{category.metric}</span>
                        {category.isHot && (
                          <div className="text-orange-300 text-xs mt-1">
                            Investir dès 50€ →
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Bottom explanation */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-gray-300 text-lg italic">
                "Notre stratégie : acquérir des biens complémentaires qui s'auto-renforcent."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaillageTerritorialSection;