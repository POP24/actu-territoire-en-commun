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
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-foreground px-4 sm:px-6 md:px-8 text-center">
                  VOTRE RÔLE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">D'AMBASSADEUR</span>
                </h2>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comment ça marche - Application mobile */}
      <section className="py-8 bg-background">
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
                <CardContent className="flex-1 flex flex-col justify-center">
                  {/* App Download Buttons */}
                  <div className="flex flex-row gap-3 items-center justify-center mt-auto">
                    <a 
                      href="https://apps.apple.com/us/app/la-suite-du-monde/id6751546986" 
                      className="block transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      aria-label="Télécharger sur l'App Store"
                    >
                      <img 
                        src="/lovable-uploads/d22b44de-59ec-4ff2-9095-88097346d30e.png" 
                        alt="Télécharger dans l'App Store" 
                        className="h-10 w-auto max-w-[140px] object-contain"
                      />
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.wimmov.lasuitedumonde" 
                      className="block transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      aria-label="L'obtenir sur Google Play"
                    >
                      <img 
                        src="/lovable-uploads/480cae2c-06d8-4554-b9aa-546bd3a59cf0.png" 
                        alt="L'obtenir sur Google Play" 
                        className="h-10 w-auto max-w-[140px] object-contain"
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
                <CardContent className="flex-1 flex flex-col justify-center">
                  <p className="text-muted-foreground text-lg font-medium mb-6">
                    Invitez votre réseau à contribuer au projet, et suivez vos parrainages en temps réel
                  </p>
                  <a 
                    href="mailto:?subject=Découvrez La Suite du Monde - Réseau collaboratif&body=Salut !%0A%0AJe voulais te parler d'un projet génial que j'ai découvert : La Suite du Monde.%0A%0AC'est un réseau collaboratif qui permet de créer des territoires autonomes et de soutenir l'économie locale. L'idée, c'est de construire ensemble des communs durables : campings écologiques, espaces de co-création, lieux de vie partagés...%0A%0ACe qui m'a séduit :%0A- Une approche concrète de l'écologie sociale%0A- Des investissements transparents dès 100€%0A- Une gouvernance partagée entre tous les membres%0A- Des projets qui ont du sens pour nos territoires%0A%0ASi ça t'intéresse de découvrir cette alternative, voici le lien : https://lasuitedumonde.com%0A%0AOn pourrait en discuter autour d'un café si tu veux !%0A%0ABelle journée 🌱"
                    className="inline-block"
                  >
                    <Button 
                      variant="outline"
                      className="rounded-xl px-6 py-2 text-sm font-bold transition-all duration-300 hover:scale-105"
                    >
                      📧 ENVOYER UNE INVITATION
                    </Button>
                  </a>
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
                <CardContent className="flex-1 flex flex-col justify-center">
                  <p className="text-muted-foreground text-lg mb-6 font-medium">
                    Choisissez comment répartir votre commission.
                  </p>
                  <div className="bg-white rounded-xl p-3 border border-gray-200 max-w-md mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center space-x-1 bg-gray-100 rounded-lg p-1">
                      {/* Option Vous */}
                      <button
                        onClick={() => setCommissionSplit(2.5)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                          commissionSplit === 2.5 
                            ? 'bg-white text-gray-800 shadow-md' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        Vous - 2.5%
                      </button>
                      
                      {/* Option Asso */}
                      <button
                        onClick={() => setCommissionSplit(0)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                          commissionSplit === 0 
                            ? 'bg-blue-500 text-white shadow-md' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        Asso - 2.5%
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Le pouvoir du bouche-à-oreille & Options de récompense */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Le pouvoir du bouche-à-oreille - Full width */}
            <ScrollReveal animation="fade-up">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30 mb-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
                      LE POUVOIR DU BOUCHE-À-OREILLE
                    </h3>
                    <p className="text-lg text-blue-700 dark:text-blue-300 font-medium">
                      Votre réseau au service de l'économie collaborative
                    </p>
                  </div>

                  {/* Exemple concret */}
                  <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900/50 dark:to-gray-800/50 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                    <h4 className="font-bold text-foreground mb-4 text-center">CONCRÈTEMENT</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">Votre contact que vous avez présenté à La Suite du Monde via l'application investit dans des obligations</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 rounded-xl border border-cyan-200 dark:border-cyan-700">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">Vous recommandez les campings disponibles sur lasuitedumonde.com</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">2.5%</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">Vous recevez votre commission<br/><span className="text-xs text-muted-foreground">(ex: 25€ sur 1000€)</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* VOS 3 OPTIONS DE RÉCOMPENSE */}
            <ScrollReveal animation="fade-up">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full -ml-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
                      VOS 3 OPTIONS DE RÉCOMPENSE
                    </h3>
                    <p className="text-lg text-purple-700 dark:text-purple-300 font-medium">
                      Chaque commission peut servir VOTRE vision
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Option 1 */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-green-200 dark:border-green-700">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto flex items-center justify-center mb-3">
                          <span className="text-white text-2xl font-bold">€</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2 text-center">COMMISSION PERSONNELLE</h4>
                      <p className="text-sm text-muted-foreground mb-2 text-center font-medium">Gardez votre rétribution</p>
                      <p className="text-xs text-muted-foreground/80 text-center">Pour valoriser votre temps et votre réseau</p>
                    </div>

                    {/* Option 2 */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-blue-200 dark:border-blue-700">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-3">
                          <span className="text-white text-2xl font-bold">+</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2 text-center">CRÉDITS D'USAGE</h4>
                      <p className="text-sm text-muted-foreground mb-2 text-center font-medium">Transformez en nuitées dans le réseau</p>
                      <p className="text-xs text-muted-foreground/80 text-center">1€ de commission = 1€ utilisable partout</p>
                    </div>

                    {/* Option 3 */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-purple-200 dark:border-purple-700">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-3">
                          <span className="text-white text-2xl font-bold">♥</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2 text-center">DON À L'ASSOCIATION</h4>
                      <p className="text-sm text-muted-foreground mb-2 text-center font-medium">Renforcez le mouvement des communs</p>
                      <p className="text-xs text-muted-foreground/80 text-center">Pour soutenir le développement du réseau</p>
                    </div>
                  </div>
                </div>
              </div>
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