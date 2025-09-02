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
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 border border-blue-400/30 max-w-sm mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`text-sm font-semibold transition-all duration-300 ${commissionSplit === 2.5 ? 'text-white' : 'text-blue-100'}`}>
                      Vous
                    </span>
                    {commissionSplit === 2.5 && (
                      <span className="ml-2 text-xs font-bold text-white bg-white/20 px-2 py-1 rounded">
                        2.5%
                      </span>
                    )}
                  </div>
                  
                  {/* Toggle Switch - Plus étroit */}
                  <div className="relative mx-3">
                    <div className="w-12 h-6 bg-white/20 rounded-full p-0.5 cursor-pointer transition-all duration-300" 
                         onClick={() => setCommissionSplit(commissionSplit === 2.5 ? 0 : 2.5)}>
                      <div className={`h-5 w-5 rounded-full transition-all duration-500 ease-out transform shadow-md ${
                        commissionSplit === 2.5 
                          ? 'translate-x-0 bg-orange-400' 
                          : 'translate-x-6 bg-green-400'
                      }`}>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className={`text-sm font-semibold transition-all duration-300 ${commissionSplit === 2.5 ? 'text-blue-100' : 'text-white'}`}>
                      Asso
                    </span>
                    {commissionSplit === 0 && (
                      <span className="ml-2 text-xs font-bold text-white bg-white/20 px-2 py-1 rounded">
                        2.5%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
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

      <Footer />
    </div>
  );
};

export default Parrainage;