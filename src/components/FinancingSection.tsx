import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            FINANCER VOTRE TERRITOIRE
          </h2>
          <h3 className="text-2xl text-muted-foreground">
            Le modèle est simple :
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <CardTitle className="text-xl text-foreground">Phase 1 : Constitution</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-muted-foreground">L'activateur rassemble 20+ personnes</p>
              <p className="text-muted-foreground">Création de l'association locale</p>
              <p className="text-muted-foreground">Ouverture de la cagnotte</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <CardTitle className="text-xl text-foreground">Phase 2 : Financement</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-muted-foreground">Objectif : 50-200k€ selon le projet</p>
              <p className="text-muted-foreground">Crowdfunding + obligations locales</p>
              <p className="text-muted-foreground">Le réseau abonde jusqu'à 30%</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft hover:shadow-elegant transition-smooth">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <CardTitle className="text-xl text-foreground">Phase 3 : Acquisition</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-muted-foreground">Achat collectif du lieu</p>
              <p className="text-muted-foreground">100% de gouvernance locale</p>
              <p className="text-muted-foreground">Connexion au réseau national</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Typologie des biens */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            TYPOLOGIE DES BIENS
          </h3>
          <p className="text-xl text-center mb-8 text-muted-foreground">Ce qu'on active :</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🏕️", title: "Campings", desc: "15 000 en France, 500 à vendre" },
              { emoji: "🌾", title: "Fermes", desc: "Avec terres agricoles" },
              { emoji: "🏚️", title: "Mas/Domaines", desc: "Bâti important à rénover" },
              { emoji: "💧", title: "Moulins", desc: "Autonomie énergétique" },
              { emoji: "🌊", title: "Lacs", desc: "Accès à l'eau" },
              { emoji: "🌲", title: "Forêts", desc: "Ressources naturelles" },
            ].map((item, index) => (
              <Card key={index} className="bg-background shadow-soft hover:shadow-elegant transition-smooth text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Flux financier */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">FLUX FINANCIER</h3>
          
          <div className="space-y-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">L'argent du réseau :</h4>
              <p className="text-lg">1M€ → 50 activateurs → 50 associations locales → 50 lieux acquis</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">L'argent local :</h4>
              <p className="text-lg">Cagnotte → Acquisition → Revenus (séjours, formations) → Réinvestissement</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Retour au réseau :</h4>
              <p className="text-lg">5% des revenus locaux → Fonds commun → Nouveaux territoires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;