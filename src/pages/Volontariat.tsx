import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const Volontariat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Volontariat - Association des Communs"
        description="Investissez votre temps, gagnez des crédits. Alternative solidaire au woofing traditionnel."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Modern Tech Background - Same as homepage */}
        <div className="absolute inset-0 z-0">
          {/* Base black background */}
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Gradient overlays inspired by the reference */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
          
          {/* Light shape effect */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/8853fc84-be3a-40e6-b3b9-ce168934295e.png" 
              alt="Background texture bleu" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          
          {/* Additional tech glow effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-40 lg:pt-60 pb-20 animate-hero-entrance">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                VOLONTARIAT DANS LE RÉSEAU
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">
                Échangez votre temps contre des crédits d'usage
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <ScrollReveal animation="fade-up" delay={300}>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="mb-16">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground px-4 sm:px-6 md:px-8 text-center">
                      TRANSFORMEZ VOTRE TEMPS EN <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">EXPÉRIENCES</span>
                    </h2>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
                  </div>
                </div>
                <p className="text-xl text-center text-muted-foreground">
                  Participez à la vie du réseau
                </p>
              </div>
            </ScrollReveal>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Chantiers Participatifs */}
              <ScrollReveal animation="fade-left" delay={200}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      🏕 CHANTIERS PARTICIPATIFS
                    </CardTitle>
                     <p className="text-lg font-semibold text-primary">
                       5 jours = 100€ de crédits
                     </p>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <ul className="space-y-2 text-card-foreground">
                       <li>• Construction écologique & éco-rénovation</li>
                       <li>• Permaculture et jardins nourriciers</li>
                       <li>• Aménagement d'espaces collectifs</li>
                       <li className="italic text-muted-foreground">• Hébergement et repas inclus</li>
                     </ul>
                    <Button 
                      variant="cta-orange"
                      className="w-full rounded-xl py-3 text-base font-medium"
                    >
                      VOIR LES CHANTIERS
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Missions Courtes */}
              <ScrollReveal animation="scale" delay={300}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center">
                   <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                       🌱 MISSIONS PONCTUELLES
                     </CardTitle>
                     <p className="text-lg font-semibold text-primary">
                       1 journée = 20€ de crédits
                     </p>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <ul className="space-y-2 text-card-foreground">
                       <li>• Animation d'ateliers et transmission de savoirs</li>
                       <li>• Support lors d'événements</li>
                       <li>• Accueil et orientation des visiteurs</li>
                       <li className="italic text-muted-foreground">• Idéal pour les week-ends</li>
                     </ul>
                    <Button 
                      variant="cta-blue"
                      className="w-full rounded-xl py-3 text-base font-medium"
                    >
                      MISSIONS DISPONIBLES
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Bénévolat à Distance */}
              <ScrollReveal animation="fade-right" delay={400}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center">
                   <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                       💻 BÉNÉVOLAT À DISTANCE
                     </CardTitle>
                     <div className="text-center">
                       <p className="text-lg font-semibold text-primary">
                         Crédits d'Usage selon l'implication
                       </p>
                     </div>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <ul className="space-y-2 text-card-foreground">
                       <li>• Communication et réseaux sociaux</li>
                       <li>• Développement web et design</li>
                       <li>• Support administratif et traduction</li>
                       <li className="italic text-muted-foreground">• Restons-ensemble depuis chez vous</li>
                     </ul>
                    <Button 
                      variant="cta-green"
                      className="w-full rounded-xl py-3 text-base font-medium"
                    >
                      PROPOSER MES COMPÉTENCES
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* CTA Section */}
            <ScrollReveal animation="scale" delay={500}>
              <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
                  Comment ça marche ?
                </h2>
                 <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                   1 jour de volontariat = 20€ de crédits d'usage<br />
                   Utilisables sur tous les lieux du réseau
                 </p>
                <Button 
                  variant="cta-orange"
                  size="lg"
                  className="rounded-xl px-8 py-4 text-lg font-bold"
                >
                  S'INSCRIRE COMME VOLONTAIRE
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight whitespace-nowrap text-foreground px-8 sm:px-12">
                  Rejoignez le <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Mouvement</span>
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Créateurs, territoires, citoyens : construisons ensemble l'économie de demain
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button 
                onClick={() => window.open('https://boutique.lasuitedumonde.com', '_blank')}
                variant="outline"
                size="lg"
                className="rounded-xl px-6 py-3 text-base font-bold"
              >
                DÉCOUVRIR LA BOUTIQUE
              </Button>
              <Button 
                variant="cta-orange"
                size="lg"
                className="rounded-xl px-6 py-3 text-base font-bold"
              >
                DEVENIR VOLONTAIRE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Volontariat;