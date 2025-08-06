import { Card, CardContent } from "@/components/ui/card";

const FinancingSection = () => {
  return (
    <section id="financement" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FINANCEMENT
          </h2>
          
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30">
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Le circuit simple :
              </h3>
            </div>
          </div>
          
          {/* Flow visualization futuristic */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-600/25 border border-green-200/40 dark:border-green-800/40 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">💰</div>
                <div className="text-xl font-bold text-green-800 dark:text-green-200">Cagnottes locales</div>
              </div>
            </div>
            
            <div className="text-3xl text-primary/60 hidden lg:block animate-pulse">→</div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-600/25 border border-blue-200/40 dark:border-blue-800/40 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🏡</div>
                <div className="text-xl font-bold text-blue-800 dark:text-blue-200">Achat collectif</div>
              </div>
            </div>
            
            <div className="text-3xl text-primary/60 hidden lg:block animate-pulse">→</div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/15 to-violet-600/25 border border-purple-200/40 dark:border-purple-800/40 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📈</div>
                <div className="text-xl font-bold text-purple-800 dark:text-purple-200">Revenus</div>
              </div>
            </div>
            
            <div className="text-3xl text-primary/60 hidden lg:block animate-pulse">→</div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/15 to-red-600/25 border border-orange-200/40 dark:border-orange-800/40 backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">♻️</div>
                <div className="text-xl font-bold text-orange-800 dark:text-orange-200">Réinvestissement</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Entrées */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-green-600/20 border border-green-200/30 dark:border-green-800/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">💳</span>
                  Entrées
                </h3>
                <div className="space-y-6 text-lg text-foreground">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-300/20">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-medium">Adhésions</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-300/20">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-100"></div>
                    <span className="font-medium">Séjours</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-300/20">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-200"></div>
                    <span className="font-medium">Formations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sorties */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-blue-600/20 border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">💸</span>
                  Sorties
                </h3>
                <div className="space-y-6 text-lg text-foreground">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-300/20">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="font-medium">Coordinateurs</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-300/20">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                    <span className="font-medium">Maintenance</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-300/20">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-200"></div>
                    <span className="font-medium">Nouveau territoire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Résultat */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/15 via-violet-500/10 to-purple-600/25 border border-purple-200/40 dark:border-purple-800/40 backdrop-blur-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-400/20 to-transparent rounded-tl-3xl"></div>
            
            <div className="relative p-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center justify-center">
                <span className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">🎯</span>
                Résultat
              </h3>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Propriété collective des communs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;