import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Volontariat = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Volontariat - Association des Communs"
        description="Investissez votre temps, gagnez des crédits. Alternative solidaire au woofing traditionnel."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              VOLONTARIAT DANS LE RÉSEAU
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Échangez votre temps contre des crédits d'usage
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              INVESTISSEZ VOTRE TEMPS, GAGNEZ DES CRÉDITS
            </h2>
            <p className="text-xl text-center text-muted-foreground">
              Alternative solidaire au woofing traditionnel
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Chantiers Participatifs */}
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
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
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
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
            <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300">
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
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border">
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

      <Footer />
    </div>
  );
};

export default Volontariat;