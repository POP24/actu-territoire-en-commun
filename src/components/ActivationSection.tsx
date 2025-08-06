const ActivationSection = () => {
  const processSteps = [
    {
      title: "Recruter Focalisateur",
      subtitle: "20k€/an",
      duration: "12 mois",
      color: "bg-cyan-500",
      textColor: "text-cyan-700 dark:text-cyan-300"
    },
    {
      title: "Rassembler Groupe Local",
      subtitle: "20-50 membres",
      duration: "3-6 mois",
      color: "bg-red-500",
      textColor: "text-red-700 dark:text-red-300"
    },
    {
      title: "Créer Association",
      subtitle: "2 mois",
      duration: "2 mois",
      color: "bg-green-500",
      textColor: "text-green-700 dark:text-green-300"
    },
    {
      title: "Lancer Financement",
      subtitle: "50-200k€",
      duration: "6-12 mois",
      color: "bg-slate-500",
      textColor: "text-slate-700 dark:text-slate-300"
    },
    {
      title: "Acquérir Lieu",
      subtitle: "Autonome",
      duration: "En continu",
      color: "bg-yellow-500",
      textColor: "text-yellow-700 dark:text-yellow-300"
    },
    {
      title: "Retour Réseau",
      subtitle: "5% revenus",
      duration: "Continu",
      color: "bg-red-600",
      textColor: "text-red-700 dark:text-red-300"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
              <span className="text-foreground">PROCESSUS D'ACTIVATION TERRITORIALE : DE LA SÉLECTION DU FOCALISATEUR À</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">L'AUTONOMIE LOCALE</span>
            </h2>
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                <span className="text-foreground">ACTIVE TON</span>{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITOIRE</span>
              </h3>
              <p className="text-base sm:text-lg text-foreground">
                Coopérative intégrale transversale, pluridisciplinaire
              </p>
            </div>
          </div>

          {/* Processus d'activation */}
          <div className="mb-16 sm:mb-20">
            {/* Version Desktop/Tablet */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-24 lg:w-32 h-24 lg:h-32 ${step.color} rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-3 lg:p-4 hover:scale-105 transition-smooth shadow-elegant`}>
                      <div className="text-xs lg:text-sm leading-tight">{step.title}</div>
                    </div>
                    <div className={`mt-3 lg:mt-4 text-center ${step.textColor}`}>
                      <div className="font-semibold text-xs lg:text-sm">{step.subtitle}</div>
                      <div className="text-xs">{step.duration}</div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="mx-2 lg:mx-4 text-2xl lg:text-4xl text-muted-foreground">→</div>
                  )}
                </div>
              ))}
            </div>

            {/* Version Mobile/Small Tablet */}
            <div className="md:hidden space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center bg-card p-4 rounded-xl shadow-soft border border-border">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-center p-2 shadow-soft flex-shrink-0`}>
                    <div className="text-xs leading-tight">{step.title}</div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className={`font-semibold text-sm ${step.textColor}`}>{step.subtitle}</div>
                    <div className="text-xs text-muted-foreground">{step.duration}</div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="text-xl text-muted-foreground ml-2">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Le Rôle Clé du Focalisateur */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Le Rôle Clé du Focalisateur</h3>
              <p className="text-lg mb-6 text-muted-foreground italic">
                Le focalisateur n'est ni un chef ni un dirigeant, mais un <strong>tisserand de liens</strong>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cartographie des forces vives locales</h4>
                    <p className="text-sm text-muted-foreground">Identifier les personnes et structures motivées sur le territoire</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Animation des premiers cercles</h4>
                    <p className="text-sm text-muted-foreground">Faciliter l'émergence du collectif et la gouvernance partagée</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Accompagnement juridique et financier</h4>
                    <p className="text-sm text-muted-foreground">Aider à la création de l'association et au lancement de la cagnotte</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Connexion au réseau</h4>
                    <p className="text-sm text-muted-foreground">Assurer le lien avec la META DAO et les autres territoires</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground">
                  Le focalisateur agit pendant une période déterminée <strong>(12-18 mois)</strong> avec pour objectif de rendre le territoire autonome. 
                  Il s'agit d'un <strong>mandat d'activation</strong>, pas d'un poste permanent.
                </p>
              </div>
            </div>

            {/* Flux Financiers Déterministes */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Flux Financiers Déterministes</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Le système financier suit une logique simple et prévisible :
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Entrée</h4>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-200">100€ × 10 000 pionniers = <strong>1M€</strong> de trésorerie initiale</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300">Distribution</h4>
                  </div>
                  <p className="text-sm text-blue-800 dark:text-blue-200">20k€ × 50 focalisateurs = <strong>1M€</strong> d'investissement territorial</p>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">Multiplication</h4>
                  </div>
                  <p className="text-sm text-purple-800 dark:text-purple-200">Chaque focalisateur active <strong>50-200k€</strong> de financement local</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">Retour</h4>
                  </div>
                  <p className="text-sm text-orange-800 dark:text-orange-200"><strong>5%</strong> des revenus locaux alimentent de nouveaux territoires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivationSection;