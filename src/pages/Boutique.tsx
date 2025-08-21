import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
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

        <div className="relative z-10 container mx-auto px-4 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16">
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

      {/* Lancement de la Boutique */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8">
              LANCEMENT DE LA BOUTIQUE
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phase Actuelle */}
              <Card className="bg-primary/10 border border-primary">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mb-4 mx-auto">MAINTENANT</Badge>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Phase d'amorçage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-card-foreground">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Recrutement des créateurs</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Mise en place technique</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Premiers designs</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Printemps 2025 */}
              <Card className="bg-card border-border">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="mb-4 mx-auto">PRINTEMPS 2025</Badge>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Ouverture officielle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-card-foreground">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>Boutique en ligne active</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>10 créateurs fondateurs</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>1ère boutique physique</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Fin 2025 */}
              <Card className="bg-card border-border">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="mb-4 mx-auto">FIN 2025</Badge>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Déploiement réseau
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-card-foreground">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>3 boutiques physiques</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>50 créateurs actifs</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">→</span>Autonomie financière</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="cta-orange"
                size="lg"
                className="rounded-xl px-8 py-4 text-lg font-bold"
              >
                FAIRE PARTIE DES FONDATEURS
              </Button>
            </div>
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

      {/* Concept Boutique Locale */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              CRÉONS ENSEMBLE VOS BOUTIQUES DE TERRITOIRE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  GESTION COLLECTIVE
                </CardTitle>
                <p className="text-muted-foreground">
                  Les créateurs se relaient pour tenir la boutique
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li>• Planning partagé</li>
                  <li>• 1 jour/semaine par créateur</li>
                  <li>• Formation vente incluse</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  DÉPÔT-VENTE LOCAL
                </CardTitle>
                <p className="text-muted-foreground">
                  Système équitable pour tous
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li>• 70% créateur / 30% boutique</li>
                  <li>• Rotation des collections</li>
                  <li>• Gestion simplifiée</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  SYNERGIE COMMERCIALE
                </CardTitle>
                <p className="text-muted-foreground">
                  Plus qu'une boutique, un lieu de vie
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li>• Vitrine des savoir-faire locaux</li>
                  <li>• Ateliers et démonstrations</li>
                  <li>• Point info du réseau</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              VOTRE TERRITOIRE EST PRÊT ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ce qu'il faut pour démarrer</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>5 créateurs minimum engagés</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Un local disponible ou identifié</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Une association locale active</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>20 adhérents sur le territoire</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ce que nous apportons</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Kit de démarrage (signalétique, outils)</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Formation gestion collective</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Système de caisse partagé</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Communication nationale</li>
                <li className="flex items-center"><span className="text-green-500 mr-3">✓</span>Mutualisation des bonnes pratiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Votre Rôle d'Ambassadeur */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              VOTRE RÔLE D'AMBASSADEUR
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Étape 1 */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  INSCRIVEZ-VOUS
                </CardTitle>
                <p className="text-muted-foreground">
                  Recevez votre code ambassadeur et vos outils
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="cta-blue" size="lg" className="w-full mb-4">
                  DEVENIR AMBASSADEUR
                </Button>
                <div className="flex justify-center gap-4">
                  <div className="bg-black text-white px-3 py-1 rounded text-xs flex items-center gap-1">
                    <span>📱</span> App Store
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-xs flex items-center gap-1">
                    <span>🤖</span> Play Store
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Étape 2 */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  PARRAINEZ
                </CardTitle>
                <p className="text-muted-foreground">
                  Partagez votre vision, invitez votre réseau
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="cta-orange" size="lg" className="w-full">
                  INVITER MON RÉSEAU
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  "Contactez-moi, je veux vous mettre en relation avec La Suite du Monde"
                </p>
              </CardContent>
            </Card>

            {/* Étape 3 */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  CHOISISSEZ VOTRE RÉPARTITION
                </CardTitle>
                <p className="text-muted-foreground mb-4">
                  Commission totale : 5%
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="10"
                      max="40"
                      value={25}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider-thumb"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-primary">
                        Pour vous : <strong>2.5%</strong>
                      </span>
                      <span className="font-medium text-muted-foreground">
                        Pour l'asso : <strong>2.5%</strong>
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Minimum 1% pour l'association
                  </p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              REJOIGNEZ LE MOUVEMENT
            </h2>
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