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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* LE CONSTAT */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/20 border-2 border-red-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">LE CONSTAT</h3>
                  <div className="space-y-3 text-lg text-red-600 dark:text-red-400">
                    <p className="font-semibold">36,000 communes en France.</p>
                    <p className="font-semibold">10,000 lieux alternatifs.</p>
                    <p className="font-semibold">2 millions de personnes prêtes.</p>
                    <p className="text-xl font-bold text-red-700 dark:text-red-300 mt-4">Mais rien ne les relie.</p>
                  </div>
                </div>
              </div>

              {/* LA SOLUTION */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/20 border-2 border-blue-400/30 hover:scale-105 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🔗</div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">LA SOLUTION</h3>
                  <div className="space-y-3 text-lg text-blue-600 dark:text-blue-400">
                    <p className="font-semibold">Une caisse commune.</p>
                    <p className="font-semibold">Des activateurs de terrain.</p>
                    <p className="font-semibold">Un réseau d'entraide.</p>
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-300 mt-4">La force du collectif.</p>
                  </div>
                </div>
              </div>

              {/* L'ACTION */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/20 border-2 border-green-400/30 hover:scale-105 transition-all duration-300 animate-pulse">
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">L'ACTION</h3>
                  <div className="space-y-3 text-lg text-green-600 dark:text-green-400">
                    <p className="font-semibold">Vous mettez 100€.</p>
                    <p className="font-semibold">On finance des tisseurs de liens.</p>
                    <p className="font-semibold">Les territoires s'activent.</p>
                    <p className="text-xl font-bold text-green-700 dark:text-green-300 mt-4">La France se reconnecte.</p>
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