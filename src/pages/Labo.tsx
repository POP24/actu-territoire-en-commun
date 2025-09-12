import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Labo = () => {
  const getCounter = (feature: string): number => {
    const stored = localStorage.getItem(`counter_${feature}`);
    return stored ? parseInt(stored, 10) : 0;
  };
  const [counters, setCounters] = useState({
    doleances: 0,
    calendrier: 0,
    marche: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load counters
    setCounters({
      doleances: getCounter("doleances"),
      calendrier: getCounter("calendrier"),
      marche: getCounter("marche")
    });
  }, []);

  const handleInterest = (feature: string) => {
    const currentCount = getCounter(feature);
    const newCount = currentCount + 1;
    localStorage.setItem(`counter_${feature}`, newCount.toString());
    setCounters(prev => ({
      ...prev,
      [feature]: newCount
    }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Labo - Outils en Développement"
        description="Découvrez les outils en développement qui transforment notre réseau en mouvement. Sortie hiver 2025-2026."
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
                LABO
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-bold mb-6 inline-block">
                EN DÉVELOPPEMENT • SORTIE HIVER 2025 - 2026
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">
                D'autres outils qui transforment notre réseau en mouvement
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
                      OUTILS EN <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">DÉVELOPPEMENT</span>
                    </h2>
                    <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tools Grid */}
            <div className="space-y-12 mb-16">
              {/* Doléances & Intelligence Collective */}
              <ScrollReveal animation="fade-left" delay={200}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      DOLÉANCES & INTELLIGENCE COLLECTIVE
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      Démocratie liquide nouvelle génération
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground">
                      Système de gouvernance horizontale où chaque voix façonne l'avenir du réseau. Propositions dynamiques, consensus émergent, actions auto-organisées.
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      <strong>Stack :</strong> Vote quadratique • Modération par IA • Fusion automatique des doublons
                    </p>
                    <div className="flex items-center gap-4">
                      <Button 
                        onClick={() => handleInterest('doleances')}
                        variant="outline"
                        className="rounded-xl"
                      >
                        👍 Ça m'intéresse →
                      </Button>
                      <span className="font-bold text-primary">{counters.doleances} intéressés</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Calendrier Territorial */}
              <ScrollReveal animation="fade-right" delay={300}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      CALENDRIER TERRITORIAL
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      L'agenda vivant des territoires
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground">
                      Cartographie temps réel des énergies locales. Chaque événement devient une opportunité de connexion, chaque rencontre un nœud du réseau.
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      <strong>Stack :</strong> Géolocalisation intuitive • Matching par affinités • Sync multi-calendriers
                    </p>
                    <div className="flex items-center gap-4">
                      <Button 
                        onClick={() => handleInterest('calendrier')}
                        variant="outline"
                        className="rounded-xl"
                      >
                        👍 Ça m'intéresse →
                      </Button>
                      <span className="font-bold text-primary">{counters.calendrier} intéressés</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Place du Marché des Communs */}
              <ScrollReveal animation="fade-left" delay={400}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      PLACE DU MARCHÉ DES COMMUNS
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      Économie post-monétaire en action
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground">
                      Bourse d'échanges multi-dimensionnelle où temps, compétences et ressources circulent librement. Le troc réinventé pour l'ère collaborative.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Flux disponibles :</h4>
                      <ul className="space-y-1 text-sm text-card-foreground ml-4">
                        <li>• Temps & compétences</li>
                        <li>• Crédits d'usage</li>
                        <li>• Obligations mutuelles</li>
                        <li>• Adhésions partagées</li>
                        <li>• Services & savoirs</li>
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground font-medium">
                      <strong>Stack :</strong> Smart contracts sociaux • Réputation décentralisée • Matching instantané
                    </p>
                    <div className="flex items-center gap-4">
                      <Button 
                        onClick={() => handleInterest('marche')}
                        variant="outline"
                        className="rounded-xl"
                      >
                        👍 Ça m'intéresse →
                      </Button>
                      <span className="font-bold text-primary">{counters.marche} intéressés</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Modules Complémentaires */}
              <ScrollReveal animation="scale" delay={500}>
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      MODULES COMPLÉMENTAIRES
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Communication décentralisée</h4>
                        <p className="text-sm text-muted-foreground">Messagerie chiffrée, forums thématiques, visio peer-to-peer</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Mode résilience</h4>
                        <p className="text-sm text-muted-foreground">Synchronisation hors-ligne pour zones blanches et chantiers isolés</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Cartographie vivante</h4>
                        <p className="text-sm text-muted-foreground">Visualisation des flux de besoins, offres et énergies en temps réel</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Notifications contextuelles</h4>
                        <p className="text-sm text-muted-foreground">Alertes intelligentes basées sur vos centres d'intérêt et localisation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* CTA Section */}
            <ScrollReveal animation="scale" delay={600}>
              <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
                  PARTICIPEZ À LA CRÉATION
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Les meilleurs outils naissent de l'intelligence collective.<br />
                  Votez pour prioriser les développements.
                </p>
                <Button 
                  variant="cta-orange"
                  size="lg"
                  className="rounded-xl px-8 py-4 text-lg font-bold"
                >
                  DEVENIR CO-CRÉATEUR
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
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Open Source</span> • Gouvernance Partagée
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Construit par la communauté, pour la communauté
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
                variant="cta-blue"
                size="lg"
                className="rounded-xl px-6 py-3 text-base font-bold"
              >
                REJOINDRE LE RÉSEAU
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

export default Labo;