import { Card, CardContent } from "@/components/ui/card";
import { Users, Vote, Shield, Zap } from "lucide-react";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Gouvernance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gouvernance à deux niveaux : nationale et locale, décentralisée et tokenisée
          </p>
        </div>

        {/* Gouvernance à Deux Niveaux */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Gouvernance Nationale */}
          <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Gouvernance Nationale</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Au niveau national, notre association fonctionne comme une fédération de régions, avec une gouvernance participative :
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Les membres investissent collectivement dans la trésorerie commune en achetant un Pass numérique d'adhésion.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Chacun peut participer à l'orientation stratégique : attribution des budgets, priorités pour les achats de lieux, et sélection des territoires clés à activer.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Les votes se tiennent régulièrement via notre plateforme numérique, garantissant la transparence et l'inclusion de chaque voix, peu importe sa région.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Gouvernance Locale */}
          <Card className="border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <Vote className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Gouvernance Locale</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Au niveau local, chaque territoire ou région gère sa propre association :
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                  <span>La communauté locale décide, via des cercles thématiques ouverts, de l'utilisation de sa cagnotte commune : besoins du territoire, projets à soutenir, priorités d'action.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Tous les membres peuvent proposer ou co-financer des initiatives régionales, dans un esprit d'intelligence collective et de transparence.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gouvernance Décentralisée et Tokenisée */}
        <Card className="border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Une Gouvernance Décentralisée et Tokenisée</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Notre modèle repose sur une association tokenisée :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p className="text-foreground">
                  L'adhésion se fait en ligne, avec l'achat d'un « Pass » numérique qui fait office de carte de membre et ouvre l'accès à la plateforme, aux votes, aux discussions et à la répartition des budgets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p className="text-foreground">
                  Toutes les décisions concernant les cagnottes – qu'elles soient nationales ou locales – sont prises collectivement, sur le principe "une personne, une voix (ou un vote proportionnel à l'engagement)".
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <p className="text-foreground">
                  La gestion des budgets s'effectue sur une plateforme transparente et auditable, fonctionnant selon les principes d'une DAO (organisation autonome décentralisée) : chaque dépense et chaque allocation peuvent être suivies en temps réel.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Association Nouvelle Génération */}
        <Card className="border-2 border-gradient shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground ml-4">Une Association Nouvelle Génération</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Juridiquement</h4>
                  <p className="text-muted-foreground">Notre association est de droit commun, mais ses statuts sont adaptés à la gouvernance numérique, ouverte et tokenisée.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Financièrement</h4>
                  <p className="text-muted-foreground">Nos cagnottes sont constituées par les adhésions (mensuelles, annuelles) et redistribuées via des budgets collectifs.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Collectivement</h4>
                  <p className="text-muted-foreground">Nous fédérons des communautés territoriales autour de projets concrets et de budgets partagés pour transformer chaque territoire.</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <h4 className="font-semibold text-foreground mb-2">En rejoignant l'association</h4>
                  <p className="text-muted-foreground">Vous devenez acteur.trice : vous votez, décidez, fédérez et soutenez la vie de votre région et du projet collectif national.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
              <p className="text-center text-foreground font-medium">
                <strong>Intégrer notre gouvernance, c'est entrer dans une nouvelle ère du vivre-ensemble</strong>, où la confiance, la transparence et l'action décentralisée remplacent la gestion classique des associations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GovernanceSection;