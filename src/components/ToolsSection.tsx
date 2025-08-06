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
          {/* En-tête avec résultat */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-purple-200 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 inline-block">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-2">Résultat</h3>
              <p className="text-purple-700 text-sm sm:text-base">Activation de plusieurs territoires, ouverture, réveil, coordination</p>
            </div>
          </div>

          {/* Titre principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">ACTIVE TON</span>{" "}
            <span className="text-foreground">TERRITOIRE</span>
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
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;