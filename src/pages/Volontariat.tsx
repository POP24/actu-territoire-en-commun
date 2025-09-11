import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TestAnimation from "@/components/TestAnimation";
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
              src="/lovable-uploads/976879dd-34f7-4896-9f36-09c3131d6526.png" 
              alt="Effet lumineux" 
              className="w-full h-full object-cover mix-blend-screen opacity-40"
            />
          </div>
          
          {/* Additional tech glow effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-40 lg:pt-60 pb-16 animate-hero-entrance">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up stagger-1">
              VOLONTARIAT DANS LE RÉSEAU
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium animate-fade-in-up stagger-2">
              Échangez votre temps contre des crédits d'usage
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="mb-16 animate-hero-entrance">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground animate-fade-in-up stagger-1">
              INVESTISSEZ VOTRE TEMPS, GAGNEZ DES CRÉDITS
            </h2>
            <p className="text-xl text-center text-muted-foreground animate-fade-in-up stagger-2">
              Alternative solidaire au woofing traditionnel
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-on-scroll">
            {/* Chantiers Participatifs */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-on-scroll-scale hover-card stagger-3">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                  🏕 CHANTIERS PARTICIPATIFS
                </CardTitle>
                <p className="text-lg font-semibold text-primary">
                  5 jours = 50€ de crédits
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-card-foreground">
                  <li>• Construction écologique</li>
                  <li>• Aménagement des lieux</li>
                  <li>• Jardinage et permaculture</li>
                </ul>
                <Button 
                  variant="cta-orange"
                  className="w-full rounded-xl py-3 text-base font-medium"
                >
                  VOIR LES CHANTIERS
                </Button>
              </CardContent>
            </Card>

            {/* Missions Courtes */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-on-scroll-scale hover-card stagger-4">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                  🌱 MISSIONS COURTES
                </CardTitle>
                <p className="text-lg font-semibold text-primary">
                  1 journée = 10€ de crédits
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-card-foreground">
                  <li>• Animation d'ateliers</li>
                  <li>• Aide aux événements</li>
                  <li>• Accueil des visiteurs</li>
                </ul>
                <Button 
                  variant="cta-blue"
                  className="w-full rounded-xl py-3 text-base font-medium"
                >
                  MISSIONS DISPONIBLES
                </Button>
              </CardContent>
            </Card>

            {/* Bénévolat à Distance */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-on-scroll-scale hover-card stagger-5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                  💻 BÉNÉVOLAT À DISTANCE
                </CardTitle>
                <p className="text-lg font-semibold text-primary">
                  Selon contribution
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-card-foreground">
                  <li>• Communication digitale</li>
                  <li>• Développement web</li>
                  <li>• Gestion administrative</li>
                </ul>
                <Button 
                  variant="cta-green"
                  className="w-full rounded-xl py-3 text-base font-medium"
                >
                  PROPOSER MES COMPÉTENCES
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border animate-on-scroll-scale">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
              Comment ça marche ?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              1 jour de volontariat = 10€ de crédits d'usage<br />
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
        </div>
      </section>

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
      <TestAnimation />
    </div>
  );
};

export default Volontariat;