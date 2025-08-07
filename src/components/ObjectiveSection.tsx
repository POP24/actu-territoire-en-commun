import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ObjectiveSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">L'OPPORTUNITÉ</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-10">L'ALIGNEMENT PARFAIT EST LÀ</h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <div className="p-5 rounded-xl border border-border bg-muted/30 text-left flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div className="text-foreground">10 000+ lieux alternatifs prêts à se connecter</div>
            </div>
            <div className="p-5 rounded-xl border border-border bg-muted/30 text-left flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div className="text-foreground">2 millions de Français aspirent à vivre autrement</div>
            </div>
            <div className="p-5 rounded-xl border border-border bg-muted/30 text-left flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div className="text-foreground">Les outils de gouvernance partagée sont matures</div>
            </div>
            <div className="p-5 rounded-xl border border-border bg-muted/30 text-left flex items-start gap-3">
              <span className="text-green-500 text-xl">✅</span>
              <div className="text-foreground">La technologie blockchain est enfin accessible</div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 border border-primary/20 backdrop-blur-sm mb-12">
            <div className="relative text-xl md:text-2xl font-bold text-foreground">
              🔗 IL MANQUE JUSTE... LE LIEN
            </div>
            <div className="text-muted-foreground mt-2">C'est exactement ce que nous construisons ensemble.</div>
          </div>

          {/* Animation : Points qui se connectent sur une carte de France (conceptuelle) */}
          <div className="relative mx-auto max-w-3xl h-60 rounded-2xl border border-border bg-gradient-to-br from-background to-muted/30 overflow-hidden">
            {[...Array(14)].map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/80 shadow-glow animate-pulse"
                style={{
                  top: `${10 + (i * 37) % 80}%`,
                  left: `${(i * 53) % 90}%`,
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <span
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                style={{
                  top: `${20 + (i * 23) % 70}%`,
                  left: `${(i * 29) % 80}%`,
                  width: `${20 + (i * 7) % 40}%`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;