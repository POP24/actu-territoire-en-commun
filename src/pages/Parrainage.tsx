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
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCommissionSplit(value);
  };

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

        <div className="relative z-10 container mx-auto px-4 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16">
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
                Inscrivez-vous
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Recevez votre code ambassadeur et vos outils
              </p>
              <Button 
                variant="cta-orange"
                size="sm"
                className="rounded-xl px-6 py-2 text-sm font-bold mb-2"
              >
                DEVENIR AMBASSADEUR
              </Button>
              <div className="flex justify-center gap-2 text-xs text-muted-foreground">
                <span>📱 App Store</span>
                <span>•</span>  
                <span>🤖 Play Store</span>
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
              <p className="text-muted-foreground text-lg mb-6">
                Partagez votre vision, invitez votre réseau
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="rounded-xl px-6 py-2 text-sm font-bold"
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
                Choisissez votre répartition
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Commission totale : 5%
              </p>
              <div className="bg-card rounded-xl p-6 border border-border max-w-sm mx-auto">
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium text-primary">
                    Pour vous : {commissionSplit.toFixed(1)}%
                  </span>
                  <span className="font-medium text-muted-foreground">
                    Pour l'asso : {(5 - commissionSplit).toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="0.1"
                  value={commissionSplit}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Minimum 1% pour l'association
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border">
            <Button 
              variant="cta-orange"
              size="lg"
              className="rounded-xl px-8 py-4 text-lg font-bold mb-4"
            >
              DEVENIR AMBASSADEUR
            </Button>
            <p className="text-muted-foreground">
              Application mobile disponible
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parrainage;