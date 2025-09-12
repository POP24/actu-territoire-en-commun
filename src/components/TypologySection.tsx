import campingImage from "@/assets/camping-collectif.jpg";
import fermeImage from "@/assets/ferme-collective.jpg";
import tierslieuxImage from "@/assets/tiers-lieux.jpg";
import atelierImage from "@/assets/atelier-production.jpg";
import foretImage from "@/assets/foret-collective.jpg";
import patrimoineImage from "@/assets/patrimoine-culturel.jpg";
import moulinImage from "@/assets/moulin-lac.jpg";
import masImage from "@/assets/mas-domaine.jpg";

const TypologySection = () => {
  const autresTypes = [
    { emoji: "🌾", title: "Fermes Régénératives", image: fermeImage },
    { emoji: "🏛️", title: "Tiers-lieux", image: tierslieuxImage },
    { emoji: "🏭", title: "Ateliers de Production", image: atelierImage },
    { emoji: "🌲", title: "Forêts Communes", image: foretImage },
    { emoji: "🏰", title: "Patrimoines Culturels", image: patrimoineImage },
    { emoji: "💧", title: "Moulins & Ressources", image: moulinImage },
    { emoji: "🏘️", title: "Habitats Partagés", image: masImage },
    { emoji: "🎪", title: "Espaces Événementiels", image: campingImage }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-foreground">CE QU'ON</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">ACTIVE</span>
          </h2>
          
          {/* Section Focus - Campings Collectifs */}
          <div className="mb-6 sm:mb-8">
            <div className="text-center border-t border-b border-primary/30 py-3 sm:py-4 mb-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">🏕️</span>
                  <h3 className="text-sm sm:text-lg font-bold text-foreground">CAMPINGS COLLECTIFS</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">⭐</span>
                  <span className="text-xs font-semibold text-primary">FOCUS ACTUEL</span>
                  <span className="text-sm">⭐</span>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 CAMPAGNE EN COURS
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-3 sm:p-4 border border-primary/20 shadow-soft">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                <div className="bg-primary/10 rounded-lg p-2 text-center">
                  <div className="text-sm sm:text-lg font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">en acquisition</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-2 text-center">
                  <div className="text-sm sm:text-lg font-bold text-secondary">12</div>
                  <div className="text-xs text-muted-foreground">identifiés</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-2 text-center">
                  <div className="text-sm sm:text-lg font-bold text-accent">✓</div>
                  <div className="text-xs text-muted-foreground">Rentabilité prouvée</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://test24.lasuitedumonde.com/campings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  🔥 VOIR NOS CAMPINGS EN COURS
                </a>
                
                <div className="text-xs text-muted-foreground mt-2">
                  → test24.lasuitedumonde.com/campings
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Autres développements */}
          <div className="border-t border-primary/30 pt-6 sm:pt-8">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6 text-foreground">
              AUSSI EN DÉVELOPPEMENT :
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
              {autresTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="relative h-24 overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-2 right-2 text-lg bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                      {type.emoji}
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 text-center">
                    <div className="text-xs sm:text-sm font-medium text-foreground">{type.title}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-accent to-secondary text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                PROPOSER UN LIEU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypologySection;