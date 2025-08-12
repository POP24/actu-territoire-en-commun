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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-foreground">TYPOLOGIE DES</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">BIENS</span>
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Ce qu'on active :</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biensTypes.map((bien, index) => (
            <div key={index} className="bg-gradient-card rounded-2xl shadow-soft border border-border overflow-hidden group hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={bien.image} 
                  alt={bien.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    {bien.emoji}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-foreground mb-3">{bien.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{bien.description}</p>
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