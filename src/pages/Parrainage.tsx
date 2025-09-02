import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Parrainage = () => {
  const [commissionSplit, setCommissionSplit] = useState(2.5);

  return (
    <div className="min-h-screen">
      <SEO
        title="Programme Ambassadeur - Association des Communs"
        description="Faites grandir le réseau, gagnez des commissions. Devenez ambassadeur du réseau des communs."
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

        <div className="relative z-10 container mx-auto px-4 text-center pt-40 lg:pt-60 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PROGRAMME AMBASSADEUR
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Faites grandir le réseau, gagnez des commissions
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              VOTRE RÔLE D'AMBASSADEUR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Rejoignez notre application mobile
              </h3>
              <p className="text-muted-foreground text-lg mb-8 font-medium">
                Téléchargez l'Application Ambassadeur
              </p>
              
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="#" 
                  className="block transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
                  aria-label="Télécharger sur l'App Store"
                >
                  <img 
                    src="/lovable-uploads/d22b44de-59ec-4ff2-9095-88097346d30e.png" 
                    alt="Télécharger dans l'App Store" 
                    className="h-12 w-auto"
                  />
                </a>
                <a 
                  href="#" 
                  className="block transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden"
                  aria-label="L'obtenir sur Google Play"
                >
                  <img 
                    src="/lovable-uploads/480cae2c-06d8-4554-b9aa-546bd3a59cf0.png" 
                    alt="L'obtenir sur Google Play" 
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Parrainez
              </h3>
              <p className="text-muted-foreground text-lg mb-8 font-medium">
                Invitez votre réseau à contribuer au projet, et suivez vos parrainages en temps réel
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="default"
                    size="lg"
                    className="rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    INVITER MON RÉSEAU
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Invitation à votre réseau local</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Contactez-moi, je veux vous mettre en relation avec La Suite du Monde
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Votre nom" />
                      <Input placeholder="Email" type="email" />
                      <Input placeholder="Téléphone" type="tel" />
                      <Textarea placeholder="Votre message..." />
                    </div>
                    <Button className="w-full">
                      ENVOYER L'INVITATION
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Étape 3 */}
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Soyez récompensé !
              </h3>
              <p className="text-muted-foreground text-lg mb-8 font-medium">
                Choisissez votre répartition : 2.5% pour vous ou 2.5% pour l'association
              </p>
              <div className="bg-card rounded-xl p-6 border border-border max-w-xs mx-auto shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold">
                    <span className={`transition-all duration-300 ${commissionSplit === 2.5 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                      Pour vous : 2.5%
                    </span>
                    <span className={`transition-all duration-300 ${commissionSplit === 2.5 ? 'text-muted-foreground' : 'text-blue-500'}`}>
                      Pour l'asso : 2.5%
                    </span>
                  </div>
                  
                  {/* Compact Toggle Switch */}
                  <div className="relative mx-auto w-32">
                    <div className="w-full h-8 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full p-1 cursor-pointer transition-all duration-300" 
                         onClick={() => setCommissionSplit(commissionSplit === 2.5 ? 0 : 2.5)}>
                      <div className={`h-6 w-1/2 rounded-full transition-all duration-500 ease-out transform shadow-md ${
                        commissionSplit === 2.5 
                          ? 'translate-x-0 bg-gradient-to-r from-orange-400 to-orange-500' 
                          : 'translate-x-full bg-gradient-to-r from-blue-400 to-blue-500'
                      }`}>
                        <div className="h-full w-full rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className={`text-sm font-semibold transition-all duration-300 ${
                      commissionSplit === 2.5 
                        ? 'text-orange-500' 
                        : 'text-blue-500'
                    }`}>
                      {commissionSplit === 2.5 ? 'Vous : 2.5%' : 'Asso : 2.5%'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-12">
              Téléchargez l'application et devenez ambassadeur dès maintenant
            </p>
          </div>
          
          {/* Bannière Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/47b56ce3-43aa-48e1-9fb6-bee0f0cfb7e1.png" 
              alt="Fonctionnalités de l'application mobile" 
              className="w-full h-auto rounded-2xl shadow-2xl mx-auto max-w-5xl"
            />
          </div>
          
          {/* Section CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            {/* QR Code */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Téléchargement rapide
                </h3>
              </div>
              <div className="bg-white rounded-xl p-4 mb-4 border">
                <img 
                  src="/lovable-uploads/7e36a26f-369d-4ce0-b760-7846dec7f583.png" 
                  alt="QR Code pour télécharger l'application" 
                  className="w-32 h-32 mx-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm text-center font-medium">
                Scannez pour télécharger
              </p>
            </div>
            
            {/* Séparateur */}
            <div className="flex items-center">
              <div className="hidden sm:block w-16 h-px bg-border mx-4"></div>
              <span className="text-muted-foreground text-lg font-medium px-4">ou</span>
              <div className="hidden sm:block w-16 h-px bg-border mx-4"></div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <Button 
                variant="cta-orange"
                size="lg"
                className="rounded-xl px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                TÉLÉCHARGER L'APP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parrainage;