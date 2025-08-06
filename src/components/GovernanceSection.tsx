import { Card, CardContent } from "@/components/ui/card";

const GovernanceSection = () => {
  return (
    <section id="gouvernance" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Gouvernance nouvelle génération
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center mb-8">
              <div className="text-lg text-foreground">🌍 Au niveau national : fédération de régions, on finance les coordinateurs territoriaux</div>
              <div className="text-lg text-foreground">🏘️ Au niveau local : chaque territoire = 1 association, 1 membre = 1 voix, décisions locales restent locales</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Niveau National */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-600/20 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative p-10">
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">🌍</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Niveau National</h3>
                </div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  L'association fonctionne comme une fédération de régions avec gouvernance participative.
                </p>
                <div className="relative rounded-2xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 p-6 border border-blue-300/20 backdrop-blur-sm">
                  <div className="font-bold text-blue-800 dark:text-blue-200 text-lg">
                    → On finance les coordinateurs territoriaux
                  </div>
                </div>
              </div>
            </div>

            {/* Niveau Local */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-green-600/20 border border-green-200/30 dark:border-green-800/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative p-10">
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">🏘️</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Niveau Local</h3>
                </div>
                <div className="space-y-4 text-lg text-foreground mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Chaque territoire = 1 association locale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Chaque membre = 1 voix</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>100% des décisions locales restent locales</span>
                  </div>
                </div>
                <div className="relative rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 p-6 border border-green-300/20 backdrop-blur-sm">
                  <div className="font-bold text-green-800 dark:text-green-200 text-lg leading-relaxed">
                    → Objectif : racheter des obligations sur le marché secondaire pour devenir propriétaire des communs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-purple-600/20 border border-purple-200/30 dark:border-purple-800/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-400/20 to-transparent rounded-tl-3xl"></div>
            
            <div className="relative p-10">
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">🔧</div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Comment ça marche</h3>
              </div>
              <div className="space-y-6 text-lg text-foreground">
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-400/20 border border-purple-300/30 font-semibold">Pass numérique</div>
                  <div className="text-2xl text-purple-400">=</div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 border border-violet-300/30">carte de membre</div>
                  <div className="text-2xl text-purple-400">=</div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/20 to-violet-400/20 border border-purple-300/30">accès votes + cagnottes</div>
                </div>
                <div className="text-center text-lg font-medium bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Décisions transparentes, budgets visibles en temps réel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;