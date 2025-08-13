import campingImage from "@/assets/camping-collectif.jpg";
import fermeImage from "@/assets/ferme-collective.jpg";
import tierslieuxImage from "@/assets/tiers-lieux.jpg";
import atelierImage from "@/assets/atelier-production.jpg";
import foretImage from "@/assets/foret-collective.jpg";
import patrimoineImage from "@/assets/patrimoine-culturel.jpg";
import moulinImage from "@/assets/moulin-lac.jpg";
import masImage from "@/assets/mas-domaine.jpg";

const TypologySection = () => {
  const biensTypes = [
    {
      emoji: "🏕️",
      title: "Campings Collectifs",
      description: "Lieux d'accueil et d'éducation populaire",
      image: campingImage
    },
    {
      emoji: "🌾",
      title: "Fermes Collectives", 
      description: "Agriculture régénérative et circuits courts",
      image: fermeImage
    },
    {
      emoji: "🏛️",
      title: "Tiers-lieux & Espaces de Coworking",
      description: "Innovation territoriale et télétravail",
      image: tierslieuxImage
    },
    {
      emoji: "🏭",
      title: "Espaces de Production",
      description: "Ateliers partagés et manufacture relocalisée", 
      image: atelierImage
    },
    {
      emoji: "🌲",
      title: "Forêts",
      description: "Gestion forestière collective et ressources naturelles",
      image: foretImage
    },
    {
      emoji: "🏰",
      title: "Patrimoines Culturels",
      description: "Lieux d'art, de formation et de transmission",
      image: patrimoineImage
    },
    {
      emoji: "💧",
      title: "Lacs & Moulins",
      description: "Autonomie énergétique et accès aux ressources",
      image: moulinImage
    },
    {
      emoji: "🏘️",
      title: "Mas & Domaines",
      description: "Habitats collectifs et expérimentation sociale",
      image: masImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
            <span className="text-foreground">TYPOLOGIE DES</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">BIENS</span>
          </h2>
          
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground">Ce qu'on active :</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {biensTypes.map((bien, index) => (
              <div
                key={index}
                className="relative bg-gradient-card rounded-2xl shadow-soft border border-border overflow-hidden group cursor-pointer transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-[1.02] hover:border-primary/60 hover:ring-4 hover:ring-primary/30 hover:rotate-1"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, box-shadow, border-color'
                }}
                onMouseEnter={(e) => {
                  console.log('[Typology] HOVER ENTER:', bien.title);
                  e.currentTarget.style.transform = 'translateY(-16px) scale(1.02) rotate(1deg)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(59, 130, 246, 0.4), 0 0 0 4px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  console.log('[Typology] HOVER LEAVE:', bien.title);
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                  e.currentTarget.style.boxShadow = '0 4px 20px -4px hsl(200 50% 50% / 0.2)';
                }}
              >
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={bien.image} 
                    alt={bien.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-125 group-hover:brightness-110 group-hover:contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-primary/60 group-hover:to-transparent transition-all duration-700"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-2xl sm:text-3xl bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    {bien.emoji}
                  </div>
                </div>
                <div className="p-4 sm:p-6 text-center group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-700">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary group-hover:scale-105 transition-all duration-500">{bien.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground/80 transition-all duration-500">{bien.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypologySection;