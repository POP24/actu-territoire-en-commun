import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Users, Globe, DollarSign, MapPin, Heart } from "lucide-react";
import megaFireBackground from "@/assets/mega-fire-background.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [animatedPoints, setAnimatedPoints] = useState<number[]>([]);
  const [treasureProgress, setTreasuryProgress] = useState(65);

  // Animation des points lumineux
  useEffect(() => {
    const points = [1, 2, 3, 4, 5];
    points.forEach((point, index) => {
      setTimeout(() => {
        setAnimatedPoints(prev => [...prev, point]);
      }, index * 500);
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-card to-muted/30">
      {/* Background Pattern Subtil */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--accent-terre))_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section avec titre en overlay */}
          <div className="relative mb-8">
            {/* Titre principal en overlay */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4 leading-tight font-serif">
                RÉSEAU DES <span className="text-primary">COMMUNES</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Système d'organisation locale pour des territoires autonomes et vivants
              </p>
            </div>

            {/* Stats animées en haut */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-card/80 backdrop-blur-sm px-6 py-6 rounded-xl border border-muted shadow-soft text-center hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl mb-2">🌱</div>
                  <div className="text-3xl font-bold text-primary mb-1" data-counter="1000">1000+</div>
                  <div className="text-sm font-medium text-muted-foreground">hectares libérés</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm px-6 py-6 rounded-xl border border-muted shadow-soft text-center hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl mb-2">🏛️</div>
                  <div className="text-3xl font-bold text-accent mb-1">1M€</div>
                  <div className="text-sm font-medium text-muted-foreground">trésor collectif</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm px-6 py-6 rounded-xl border border-muted shadow-soft text-center hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl mb-2">🤝</div>
                  <div className="text-lg font-bold text-secondary">LOCALE</div>
                  <div className="text-sm font-medium text-muted-foreground">gouvernance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section carte + adhésion */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Carte interactive agrandie (2/3 de l'espace) */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-6 shadow-terre border border-muted/50">
                <h3 className="text-foreground font-bold text-xl mb-6 text-center">
                  Réseau en construction
                  <span className="block text-sm font-normal text-muted-foreground mt-1">5 territoires pionniers</span>
                </h3>
                
                {/* Carte France agrandie */}
                <div className="relative w-full h-96 lg:h-[500px] bg-muted/20 rounded-2xl overflow-hidden border border-muted/30">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-5.5%2C41.3%2C9.7%2C51.2&amp;layer=mapnik"
                    className="w-full h-full border-0"
                    title="Carte de France - Réseau des Communes"
                  ></iframe>
                  
                  {/* Points animés sur la carte */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[
                      { top: '65%', left: '25%', name: 'Dordogne' },
                      { top: '45%', left: '35%', name: 'Centre' },
                      { top: '30%', left: '45%', name: 'Nord-Est' },
                      { top: '70%', left: '60%', name: 'Sud-Est' },
                      { top: '25%', left: '25%', name: 'Nord-Ouest' }
                    ].map((point, index) => (
                      <div
                        key={index}
                        className={`absolute transition-all duration-1000 ${
                          animatedPoints.includes(index + 1) 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-50'
                        }`}
                        style={{ top: point.top, left: point.left }}
                        title={point.name}
                      >
                        <div className="relative">
                          <div className="w-4 h-4 bg-accent rounded-full shadow-lg animate-pulse"></div>
                          <div className="absolute inset-0 w-4 h-4 bg-accent/50 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm border border-muted/50">
                    <span className="text-accent font-bold">●</span> Territoires actifs
                  </div>
                </div>
              </div>
            </div>

            {/* Section adhésion repensée (1/3) */}
            <div className="space-y-6">
              {/* Habitant Local */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-muted/50 hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">HABITANT LOCAL</h3>
                  <div className="text-3xl font-black text-primary mb-2">10€</div>
                  <p className="text-sm text-muted-foreground mb-4">Prix libre (minimum)</p>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    Pour vivre et participer à la vie de votre commune
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    REJOINDRE MA COMMUNE
                  </Button>
                </div>
              </div>
              
              {/* Architecte Réseau */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-muted/50 hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">ARCHITECTE RÉSEAU</h3>
                  <div className="text-3xl font-black text-secondary mb-2">100€</div>
                  <p className="text-sm text-muted-foreground mb-4">Contribution unique</p>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                    Pour bâtir et connecter les communes entre elles
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    CONSTRUIRE LE RÉSEAU
                  </Button>
                </div>
              </div>

              {/* Trésor Commun */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20">
                <h4 className="text-lg font-bold text-foreground mb-4 text-center">Trésor Commun</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-muted-foreground">Progression</span>
                    <span className="font-bold text-foreground">{treasureProgress}%</span>
                  </div>
                  <Progress value={treasureProgress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>650 000€</span>
                    <span>1M€</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
                    Pour financer les activateurs locaux et les projets communs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              REJOINDRE LE MOUVEMENT
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-muted-foreground mt-4 text-lg font-light">
              Ensemble, créons les communes de demain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;