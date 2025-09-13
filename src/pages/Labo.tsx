import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";
import { useEffect, useState } from "react";

const Labo = () => {
  const [counters, setCounters] = useState({
    doleances: 0,
    calendrier: 0,
    marche: 0
  });

  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isNFTModalOpen, setIsNFTModalOpen] = useState(false);
  const [selectedMembershipType, setSelectedMembershipType] = useState<"local" | "architect" | null>(null);

  // Simuler les compteurs si CountAPI ne fonctionne pas
  const loadCounters = async () => {
    try {
      const features = ['doleances', 'calendrier', 'marche'];
      const promises = features.map(feature => 
        fetch(`https://api.countapi.xyz/get/lasuitedumonde.com/${feature}`)
          .then(res => {
            if (!res.ok) throw new Error('CountAPI unavailable');
            return res.json();
          })
          .catch(() => {
            // Fallback - use localStorage or default values
            const stored = localStorage.getItem(`counter-${feature}`);
            return { value: stored ? parseInt(stored) : Math.floor(Math.random() * 50) + 10 };
          })
      );
      
      const results = await Promise.all(promises);
      setCounters({
        doleances: results[0].value || 0,
        calendrier: results[1].value || 0,
        marche: results[2].value || 0
      });
    } catch (error) {
      console.log('Using fallback counters');
      // Utiliser des valeurs locales si CountAPI ne fonctionne pas
      setCounters({
        doleances: parseInt(localStorage.getItem('counter-doleances') || '15'),
        calendrier: parseInt(localStorage.getItem('counter-calendrier') || '23'),
        marche: parseInt(localStorage.getItem('counter-marche') || '8')
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCounters();
  }, []);

  const handleInterest = async (feature: string) => {
    // Vérifier si déjà voté
    if (localStorage.getItem(`voted-${feature}`)) {
      alert('Vous avez déjà voté pour cette fonctionnalité !');
      return;
    }
    
    try {
      // Essayer CountAPI d'abord
      const response = await fetch(`https://api.countapi.xyz/hit/lasuitedumonde.com/${feature}`);
      
      if (response.ok) {
        const data = await response.json();
        setCounters(prev => ({
          ...prev,
          [feature]: data.value
        }));
      } else {
        throw new Error('CountAPI unavailable');
      }
    } catch (error) {
      // Fallback - incrémenter localement
      const newValue = counters[feature as keyof typeof counters] + 1;
      setCounters(prev => ({
        ...prev,
        [feature]: newValue
      }));
      localStorage.setItem(`counter-${feature}`, newValue.toString());
    }
    
    // Marquer comme voté
    localStorage.setItem(`voted-${feature}`, 'true');
    alert('Merci pour votre intérêt !');
  };

  const handleMembershipSelection = (type: "local" | "architect") => {
    setSelectedMembershipType(type);
    setIsNFTModalOpen(true);
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

            {/* Tools Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
              
              {/* Doléances & Intelligence Collective */}
              <ScrollReveal animation="fade-left" delay={200}>
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      DOLÉANCES & INTELLIGENCE COLLECTIVE
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      La démocratie directe en action
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-card-foreground text-sm">
                      <li>• Postez vos propositions pour améliorer le réseau</li>
                      <li>• Votez sur les priorités communes</li>
                      <li>• Formez des groupes d'action spontanés</li>
                      <li>• Suivez l'impact de vos idées</li>
                      <li>• Système anti-doublon + synthèse automatique</li>
                    </ul>
                    <div className="flex items-center gap-4 pt-2">
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
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      CALENDRIER TERRITORIAL
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      Tous les événements locaux en un clic
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-card-foreground text-sm">
                      <li>• Proposez vos ateliers, chantiers, fêtes</li>
                      <li>• Inscrivez-vous en 2 secondes</li>
                      <li>• Filtrez par distance et intérêts</li>
                      <li>• Synchronisez avec votre agenda</li>
                      <li>• Matching automatique selon vos skills</li>
                    </ul>
                    <div className="flex items-center gap-4 pt-2">
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
                <Card className="bg-card border-border hover:shadow-elegant hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      PLACE DU MARCHÉ DES COMMUNS
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      L'économie circulaire du réseau
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-card-foreground text-sm font-medium mb-3">
                      Échangez librement :
                    </p>
                    <ul className="space-y-1 text-card-foreground text-sm ml-4">
                      <li>• Temps contre temps</li>
                      <li>• Crédits d'usage entre membres</li>
                      <li>• Obligations de travail</li>
                      <li>• Adhésions partagées</li>
                      <li>• Compétences et services</li>
                    </ul>
                    <p className="text-xs text-muted-foreground font-medium pt-2">
                      Système de troc 2.0 + réputation intégrée
                    </p>
                    <div className="flex items-center gap-4 pt-2">
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

              {/* Aussi en Préparation */}
              <ScrollReveal animation="fade-right" delay={500}>
                <Card className="bg-card border-border h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      AUSSI EN PRÉPARATION
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-semibold text-card-foreground">Outils de communication</h4>
                        <p className="text-muted-foreground">Messagerie, forums, visio</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">Mode hors-ligne</h4>
                        <p className="text-muted-foreground">Pour les zones blanches</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">Carte interactive</h4>
                        <p className="text-muted-foreground">Des besoins/offres</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">Notifications intelligentes</h4>
                        <p className="text-muted-foreground">Alertes contextuelles</p>
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
                  onClick={() => setIsMembershipModalOpen(true)}
                  variant="cta-orange"
                  size="lg"
                  className="rounded-xl px-8 py-4 text-lg font-bold"
                >
                  DEVENIR CO-CRÉATEUR : ADHÉRER
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

      {/* Membership Selection Modal */}
      <MembershipSelectionModal 
        isOpen={isMembershipModalOpen}
        onClose={() => setIsMembershipModalOpen(false)}
        onSelectMembership={handleMembershipSelection}
      />

      {/* NFT Purchase Modal */}
      <NFTPurchaseModal
        isOpen={isNFTModalOpen}
        onClose={() => setIsNFTModalOpen(false)}
        membershipType={selectedMembershipType || "local"}
      />

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Labo;