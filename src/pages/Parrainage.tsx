import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

const Parrainage = () => {
  const [commissionSplit, setCommissionSplit] = useState(2.5);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Parrainage - Association des Communs"
        description="Œuvrons ensemble pour faire grandir les communs. Recommandez et soyez récompensé."
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
          
          {/* Blue background texture */}
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

        <div className="relative z-10 container mx-auto px-4 text-center pt-40 lg:pt-60 pb-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                PARRAINAGE
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                Œuvrons ensemble pour faire grandir les communs
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-lg text-white/80">
                Recommandez et soyez récompensé
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VOTRE RÔLE D'AMBASSADEUR */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground px-4 sm:px-6 md:px-8 text-center">
                  VOTRE RÔLE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">D'AMBASSADEUR</span>
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
              </div>
              <p className="text-lg text-muted-foreground mt-4">
                Le bouche-à-oreille au service du collectif
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Le pouvoir du bouche-à-oreille */}
            <ScrollReveal animation="fade-right">
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Le pouvoir du bouche-à-oreille :</strong><br />
                    Vous êtes force de proposition → Vous parlez de La Suite du Monde → Quelqu'un achète des obligations → Commission de 2,5%
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-foreground mb-3">Concrètement :</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Vous recommandez les campings disponibles sur lasuitedumonde.com
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Votre contact investit dans des obligations (ex: 1000€)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Vous recevez 25€ de commission
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* VOS 3 OPTIONS DE RÉCOMPENSE */}
            <ScrollReveal animation="fade-left">
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    VOS 3 OPTIONS DE RÉCOMPENSE
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Chaque commission peut servir VOTRE vision :
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Option 1 */}
                  <div className="bg-muted/50 rounded-xl p-4 transition-all duration-300 hover:bg-muted/70">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💶</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1">COMMISSION PERSONNELLE</h4>
                        <p className="text-xs text-muted-foreground mb-1">Gardez votre rétribution</p>
                        <p className="text-xs text-muted-foreground/80">Pour valoriser votre temps et votre réseau</p>
                      </div>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className="bg-muted/50 rounded-xl p-4 transition-all duration-300 hover:bg-muted/70">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎫</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1">CRÉDITS D'USAGE</h4>
                        <p className="text-xs text-muted-foreground mb-1">Transformez en nuitées dans le réseau</p>
                        <p className="text-xs text-muted-foreground/80">1€ de commission = 1€ utilisable partout</p>
                      </div>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="bg-muted/50 rounded-xl p-4 transition-all duration-300 hover:bg-muted/70">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌱</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-sm mb-1">DON À L'ASSOCIATION</h4>
                        <p className="text-xs text-muted-foreground mb-1">Renforcez le mouvement des communs</p>
                        <p className="text-xs text-muted-foreground/80">Pour soutenir le développement du réseau</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comment ça marche - Application mobile */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground mb-6">
                Rejoignez notre application mobile
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Étape 1 */}
            <ScrollReveal animation="fade-left" delay={0}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 text-center p-8 h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    1
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Téléchargez l'Application Ambassadeur
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  
                  {/* App Download Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-auto">
                    <a 
                      href="https://apps.apple.com/us/app/la-suite-du-monde/id6751546986" 
                      className="block transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
                      aria-label="Télécharger sur l'App Store"
                    >
                      <img 
                        src="/lovable-uploads/d22b44de-59ec-4ff2-9095-88097346d30e.png" 
                        alt="Télécharger dans l'App Store" 
                        className="h-16 w-auto"
                      />
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.wimmov.lasuitedumonde" 
                      className="block transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
                      aria-label="L'obtenir sur Google Play"
                    >
                      <img 
                        src="/lovable-uploads/480cae2c-06d8-4554-b9aa-546bd3a59cf0.png" 
                        alt="L'obtenir sur Google Play" 
                        className="h-16 w-auto"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Étape 2 */}
            <ScrollReveal animation="fade-up" delay={200}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 text-center p-8 h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    2
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Parrainez
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-lg mb-8 font-medium">
                    Invitez votre réseau à contribuer au projet, et suivez vos parrainages en temps réel
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Étape 3 */}
            <ScrollReveal animation="fade-right" delay={400}>
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 text-center p-8 h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    3
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    Soyez récompensé !
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-lg mb-8 font-medium">
                    Choisissez comment répartir votre commission.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Floating QR Code */}
      <div className="fixed top-32 right-6 z-40 hidden md:block">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 border border-blue-400/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <div className="text-center mb-3">
            <p className="text-xs font-semibold text-white">Télécharger l'app</p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <img 
              src="/lovable-uploads/7e36a26f-369d-4ce0-b760-7846dec7f583.png" 
              alt="QR Code pour télécharger l'application" 
              className="w-20 h-20 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">          
          {/* Download Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="text-center space-y-8">
                {/* App Preview Image */}
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/094fc38c-78c7-4bb5-9a70-beee7a9b6087.png" 
                    alt="Fonctionnalités de l'application mobile" 
                    className="w-full max-w-3xl mx-auto h-auto rounded-xl shadow-2xl"
                  />
                </div>
                
                {/* CTA Button */}
                <a 
                  href="https://lasuitedumonde.wimmov.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    variant="cta-orange"
                    size="lg"
                    className="rounded-xl px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    TÉLÉCHARGER L'APP
                  </Button>
                </a>
              </div>
            </div>
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
                DEVENIR PARRAIN
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

export default Parrainage;