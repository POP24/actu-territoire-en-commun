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
            {/* Liste des éléments avec checkmarks */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              <div className="flex items-center justify-start text-left text-xl md:text-2xl font-semibold text-foreground group hover:scale-105 transition-all duration-300">
                <span className="text-green-500 text-3xl mr-4 group-hover:animate-pulse">✅</span>
                <span><strong>10,000+</strong> lieux alternatifs prêts à se connecter</span>
              </div>
              
              <div className="flex items-center justify-start text-left text-xl md:text-2xl font-semibold text-foreground group hover:scale-105 transition-all duration-300">
                <span className="text-green-500 text-3xl mr-4 group-hover:animate-pulse">✅</span>
                <span><strong>2 millions</strong> de français aspirent à vivre autrement</span>
              </div>
              
              <div className="flex items-center justify-start text-left text-xl md:text-2xl font-semibold text-foreground group hover:scale-105 transition-all duration-300">
                <span className="text-green-500 text-3xl mr-4 group-hover:animate-pulse">✅</span>
                <span>Les outils de <strong>gouvernance partagée</strong> sont matures</span>
              </div>
              
              <div className="flex items-center justify-start text-left text-xl md:text-2xl font-bold text-foreground group hover:scale-110 transition-all duration-300 mt-8 p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-300/30">
                <span className="text-orange-500 text-3xl mr-4 animate-bounce">🔗</span>
                <span className="text-orange-600 dark:text-orange-400">IL MANQUE JUSTE... <strong>LE LIEN</strong></span>
              </div>
            </div>

            {/* Animation de carte de France avec connexions */}
            <div className="relative mb-12 h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-200/30 dark:border-blue-800/30 overflow-hidden">
              {/* Fond de carte stylisé */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
              
              {/* Points de connexion animés */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{
                    left: `${20 + (i * 7) % 60}%`,
                    top: `${30 + (i * 11) % 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                >
                  {/* Lignes de connexion */}
                  <div 
                    className="absolute w-16 h-0.5 bg-gradient-to-r from-primary to-transparent animate-pulse origin-left"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                </div>
              ))}
              
              {/* Texte central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="text-lg font-semibold text-foreground/80">Connexions en cours...</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 border border-primary/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl"></div>
              <div className="relative text-2xl md:text-3xl font-bold text-foreground">
                C'est exactement ce que nous construisons <strong className="text-primary">ensemble</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;