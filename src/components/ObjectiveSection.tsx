import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">L'HEURE</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">EST VENUE</span>
          </h2>
          
          <div className="text-center mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
              {/* LE CONSTAT - Cercle futuriste nature */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/30 to-red-500/20 blur-xl animate-pulse"></div>
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-amber-50/90 via-orange-100/80 to-red-100/70 dark:from-amber-900/40 dark:via-orange-900/50 dark:to-red-900/60 border-4 border-amber-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-8 group-hover:shadow-2xl group-hover:shadow-amber-500/40">
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-amber-500 animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-orange-400 animate-bounce delay-300"></div>
                  <div className="text-6xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300">🌍</div>
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-4 tracking-wide">LE CONSTAT</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-bold text-amber-700 dark:text-amber-400">36K communes</p>
                    <p className="text-sm font-bold text-amber-700 dark:text-amber-400">10K lieux alternatifs</p>
                    <p className="text-sm font-bold text-amber-700 dark:text-amber-400">2M personnes prêtes</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent my-3"></div>
                    <p className="text-sm font-black text-amber-900 dark:text-amber-200">Rien ne les relie</p>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DE CONNEXION */}
              <div className="hidden md:block">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
                <div className="text-2xl text-center mt-2">→</div>
              </div>

              {/* LA SOLUTION - Cercle futuriste nature */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/30 to-cyan-500/20 blur-xl animate-pulse delay-150"></div>
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-emerald-50/90 via-teal-100/80 to-cyan-100/70 dark:from-emerald-900/40 dark:via-teal-900/50 dark:to-cyan-900/60 border-4 border-emerald-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-8 group-hover:shadow-2xl group-hover:shadow-emerald-500/40">
                  <div className="absolute top-6 left-4 w-3 h-3 rounded-full bg-emerald-500 animate-ping delay-100"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-teal-400 animate-bounce delay-500"></div>
                  <div className="text-6xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300 delay-100">🌿</div>
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4 tracking-wide">LA SOLUTION</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Caisse commune</p>
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Activateurs terrain</p>
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Réseau d'entraide</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent my-3"></div>
                    <p className="text-sm font-black text-emerald-900 dark:text-emerald-200">Force du collectif</p>
                  </div>
                </div>
              </div>

              {/* FLÈCHE DE CONNEXION */}
              <div className="hidden md:block">
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 rounded-full animate-pulse delay-300"></div>
                <div className="text-2xl text-center mt-2">→</div>
              </div>

              {/* L'ACTION - Cercle futuriste nature avec animation spéciale */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/40 to-purple-500/30 blur-xl animate-pulse delay-300"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/30 to-purple-400/20 blur-lg animate-ping"></div>
                <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-blue-50/90 via-indigo-100/80 to-purple-100/70 dark:from-blue-900/40 dark:via-indigo-900/50 dark:to-purple-900/60 border-4 border-blue-400/50 backdrop-blur-md group-hover:scale-110 transition-all duration-500 flex flex-col items-center justify-center p-8 group-hover:shadow-2xl group-hover:shadow-blue-500/40 animate-pulse">
                  <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-indigo-400 animate-bounce delay-700"></div>
                  <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-1000"></div>
                  <div className="text-6xl mb-4 animate-bounce group-hover:scale-125 transition-transform duration-300 delay-200">⚡</div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 tracking-wide">L'ACTION</h3>
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-400">Vous: 100€</p>
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-400">Tisseurs de liens</p>
                    <p className="text-sm font-bold text-blue-700 dark:text-blue-400">Territoires actifs</p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-3"></div>
                    <p className="text-sm font-black text-blue-900 dark:text-blue-200">France reconnectée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;