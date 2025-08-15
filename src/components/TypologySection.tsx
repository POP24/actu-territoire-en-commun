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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
            <span className="text-foreground">CE QU'ON</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">ACTIVE</span>
          </h2>
          
          {/* Section Focus - Campings Collectifs */}
          <div className="mb-12">
            <div className="text-center border-t-2 border-b-2 border-primary/30 py-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-3xl">🏕️</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">CAMPINGS COLLECTIFS</h3>
                <span className="text-lg">⭐</span>
                <span className="text-sm font-semibold text-primary">FOCUS ACTUEL</span>
                <span className="text-lg">⭐</span>
              </div>
              <div className="text-center mt-2">
                <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 CAMPAGNE EN COURS
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/20 shadow-soft">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">en acquisition</div>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-secondary">12</div>
                  <div className="text-xs text-muted-foreground">identifiés</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-accent">✓</div>
                  <div className="text-xs text-muted-foreground">Rentabilité prouvée</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://lasuitedumonde.com/campings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  🔥 VOIR NOS CAMPINGS EN COURS
                </a>
                
                <div className="text-xs text-muted-foreground mt-2">
                  → lasuitedumonde.com/campings
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Autres développements */}
          <div className="border-t-2 border-primary/30 pt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              AUSSI EN DÉVELOPPEMENT :
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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
                  <div className="p-3 text-center">
                    <div className="text-sm font-medium text-foreground">{type.title}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
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