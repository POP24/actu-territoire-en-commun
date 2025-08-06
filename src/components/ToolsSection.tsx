const ToolsSection = () => {
  const processSteps = [
    { 
      label: "Recruter Focalisateur", 
      details: ["20k€/an", "12 mois"], 
      bgColor: "bg-cyan-500",
      textColor: "text-white"
    },
    { 
      label: "Rassembler Groupe Local", 
      details: ["20-50 membres", "3-6 mois"], 
      bgColor: "bg-red-500",
      textColor: "text-white"
    },
    { 
      label: "Créer Association", 
      details: ["2 mois", "2 mois"], 
      bgColor: "bg-green-500",
      textColor: "text-white"
    },
    { 
      label: "Lancer Financement", 
      details: ["50-200k€", "6-12 mois"], 
      bgColor: "bg-slate-600",
      textColor: "text-white"
    },
    { 
      label: "Acquérir Lieu", 
      details: ["Autonome", "En continu"], 
      bgColor: "bg-yellow-600",
      textColor: "text-white"
    }
  ];

  return (
    <section id="activation" className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-5 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 sm:left-20 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-card rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Titre principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            <span className="text-foreground">ACTIVE TON</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium text-center mb-12 sm:mb-16">
            Du Focalisateur à l'Autonomie Locale
          </p>

          {/* Processus circulaire - Version desktop */}
          <div className="hidden lg:block mb-16">
            <div className="relative flex items-center justify-center">
              {/* Première ligne - 5 étapes */}
              <div className="flex items-center gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`${step.bgColor} ${step.textColor} rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4 shadow-lg`}>
                      <div className="font-bold text-sm mb-1">{step.label}</div>
                      <div className="text-xs">
                        <div>{step.details[0]}</div>
                        <div>{step.details[1]}</div>
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="text-2xl text-gray-400 mx-4">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Flèche vers le bas */}
            <div className="flex justify-center my-8">
              <div className="text-2xl text-gray-400">↓</div>
            </div>
            
            {/* Retour Réseau */}
            <div className="flex justify-center">
              <div className="bg-red-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4 shadow-lg">
                <div className="font-bold text-sm mb-1">Retour Réseau</div>
                <div className="text-xs">
                  <div>5% revenus</div>
                  <div>Continu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Version mobile/tablette */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className={`${step.bgColor} ${step.textColor} rounded-2xl p-6 text-center shadow-lg`}>
                  <div className="font-bold text-base mb-2">{step.label}</div>
                  <div className="text-sm">
                    <div>{step.details[0]}</div>
                    <div>{step.details[1]}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Retour Réseau - mobile */}
            <div className="flex justify-center">
              <div className="bg-red-500 text-white rounded-2xl p-6 text-center shadow-lg w-full max-w-xs">
                <div className="font-bold text-base mb-2">Retour Réseau</div>
                <div className="text-sm">
                  <div>5% revenus</div>
                  <div>Continu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section sur les focalisateurs */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
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

export default ToolsSection;