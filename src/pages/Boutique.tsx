import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Boutique = () => {
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [creatorShare, setCreatorShare] = useState(50);
  const [formData, setFormData] = useState({
    profile: "",
    territory: "",
    project: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsInterestModalOpen(false);
    // TODO: Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Boutique des Communs - Association des Communs"
        description="Soutenez le réseau en portant ses valeurs. Boutique éthique et transparente des créateurs locaux."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Modern Tech Background - Same as homepage */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/976879dd-34f7-4896-9f36-09c3131d6526.png" 
              alt="Effet lumineux" 
              className="w-full h-full object-cover mix-blend-screen opacity-40"
            />
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-40 lg:pt-60 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LA BOUTIQUE DES COMMUNS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">
              Soutenez le réseau en portant ses valeurs
            </p>
            <Button 
              onClick={() => window.open('https://boutique.lasuitedumonde.com', '_blank')}
              variant="cta-orange"
              size="lg"
              className="rounded-xl px-8 py-4 text-lg font-bold"
            >
              Découvrir la boutique →
            </Button>
          </div>
        </div>
      </section>

      {/* Modèle Économique */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              UN MODÈLE ÉCONOMIQUE TRANSPARENT
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chaque achat finance directement les projets du territoire 
              et rémunère équitablement les créateurs locaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Créateurs Locaux */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  CRÉATEURS LOCAUX
                </CardTitle>
                <p className="text-muted-foreground">
                  Artistes et artisans du réseau proposent leurs créations
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Design original</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Production éthique</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Matériaux durables</li>
                </ul>
              </CardContent>
            </Card>

            {/* Répartition Équitable */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  RÉPARTITION ÉQUITABLE
                </CardTitle>
                <p className="text-muted-foreground">
                  Chaque créateur définit sa contribution
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Sur les marges après production :
                  </p>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-card-foreground text-center">
                      Répartition personnalisable
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      value={creatorShare}
                      onChange={(e) => setCreatorShare(parseInt(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider-thumb"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-primary">
                        Créateur : <strong>{creatorShare}%</strong>
                      </span>
                      <span className="font-medium text-muted-foreground">
                        Communs : <strong>{100 - creatorShare}%</strong>
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Minimum 20% pour les communs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Circuit Vertueux */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🔄</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  CIRCUIT VERTUEUX
                </CardTitle>
                <p className="text-muted-foreground">
                  Les bénéfices alimentent automatiquement :
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Le trésor commun</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Les projets locaux</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>De nouvelles créations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              COMMENT ÇA FONCTIONNE ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Vous commandez", desc: "Sur notre boutique autonome, paiement sécurisé" },
              { num: "2", title: "Production locale", desc: "Impression à la demande, zéro stock, zéro déchet" },
              { num: "3", title: "Répartition directe", desc: "Les marges sont distribuées automatiquement selon nos accords" },
              { num: "4", title: "Impact visible", desc: "Suivez l'utilisation des fonds sur le tableau de bord" }
            ].map((etape, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {etape.num}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{etape.title}</h4>
                <p className="text-muted-foreground">{etape.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel Créateurs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              CRÉATEURS, REJOIGNEZ L'AVENTURE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ce que nous offrons</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Plateforme de vente clé en main</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Gestion automatisée des commandes</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Production et livraison gérées</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Communauté engagée d'acheteurs</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Rémunération équitable garantie</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ce que nous cherchons</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Designs alignés avec nos valeurs</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Créations originales et locales</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Engagement dans le temps</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Volonté de co-construire</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Transparence sur les process</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="cta-blue"
              size="lg"
              className="rounded-xl px-8 py-4 text-lg font-bold"
            >
              PROPOSER VOS CRÉATIONS
            </Button>
          </div>
        </div>
      </section>


      {/* Du Digital au Territorial */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DU DIGITAL AU TERRITORIAL
            </h2>
            <p className="text-xl text-muted-foreground">
              Un réseau de boutiques locales pour ancrer l'économie créative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  BOUTIQUE EN LIGNE
                </CardTitle>
                <p className="text-muted-foreground">Vitrine nationale disponible 24/7</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-card-foreground">
                  <li>• Tous les créateurs du réseau</li>
                  <li>• Livraison partout en France</li>
                  <li>• Production à la demande</li>
                </ul>
                <Button 
                  onClick={() => window.open('https://boutique.lasuitedumonde.com', '_blank')}
                  variant="outline"
                  className="w-full"
                >
                  Visiter →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🏪</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  BOUTIQUES LOCALES
                </CardTitle>
                <p className="text-muted-foreground">Pignon sur rue dans chaque territoire</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-card-foreground">
                  <li>• Créateurs locaux en dépôt-vente</li>
                  <li>• Point de rencontre du réseau</li>
                  <li>• Événements et ateliers</li>
                </ul>
                <Button 
                  onClick={() => setIsInterestModalOpen(true)}
                  variant="cta-orange"
                  className="w-full"
                >
                  Je suis intéressé →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              PASSEZ À L'ACTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">JE SUIS CRÉATEUR</h3>
              <p className="text-muted-foreground mb-6">Vendez en boutique physique et en ligne</p>
              <Button variant="cta-blue" className="w-full">PROPOSER MES CRÉATIONS</Button>
            </div>

            <div className="text-center bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">JE SUIS COORDINATEUR LOCAL</h3>
              <p className="text-muted-foreground mb-6">Ouvrez une boutique sur votre territoire</p>
              <Button variant="cta-orange" className="w-full">LANCER UNE BOUTIQUE</Button>
            </div>

            <div className="text-center bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-card-foreground mb-4">J'AI UN LOCAL DISPONIBLE</h3>
              <p className="text-muted-foreground mb-6">Mettez-le à disposition du réseau</p>
              <Button variant="cta-green" className="w-full">PROPOSER MON LOCAL</Button>
            </div>
          </div>

          <div className="text-center mt-16">
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
                DEVENIR CRÉATEUR
              </Button>
              <Button 
                variant="cta-blue"
                size="lg"
                className="rounded-xl px-6 py-3 text-base font-bold"
              >
                OUVRIR UNE BOUTIQUE LOCALE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Intérêt Boutique */}
      <Dialog open={isInterestModalOpen} onOpenChange={setIsInterestModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              BOUTIQUE PHYSIQUE - VOTRE INTÉRÊT
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Je suis...</label>
              <select 
                required
                value={formData.profile}
                onChange={(e) => handleInputChange('profile', e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="">Sélectionnez</option>
                <option value="creator">Créateur/Artisan</option>
                <option value="coordinator">Coordinateur territorial</option>
                <option value="owner">Propriétaire d'un local</option>
                <option value="client">Futur client local</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mon territoire</label>
              <input 
                type="text" 
                required
                value={formData.territory}
                onChange={(e) => handleInputChange('territory', e.target.value)}
                placeholder="Ville ou département" 
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mon projet</label>
              <textarea 
                value={formData.project}
                onChange={(e) => handleInputChange('project', e.target.value)}
                placeholder="Décrivez votre vision ou vos besoins..."
                rows={3}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Email*" 
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              />
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Téléphone"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <Button type="submit" className="w-full">
              ENVOYER MON INTÉRÊT
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground text-center">
            Nous vous recontacterons dès qu'un projet se monte sur votre territoire
          </p>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Boutique;