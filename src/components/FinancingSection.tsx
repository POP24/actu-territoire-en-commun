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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            <span className="text-foreground">ACTIVE TON</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITOIRE</span>
          </h2>
          
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-xl text-foreground mb-8">
              Coopérative intégrale transversale, pluridisciplinaire
            </p>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
              Activer votre territoire
            </div>
          </div>

          {/* Mécanisme d'activation */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-16">
              <span className="text-foreground">MÉCANISME D'ACTIVATION</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">TERRITORIALE</span>
            </h3>
            
            <div className="grid lg:grid-cols-6 gap-6 mb-12">
              <div className="bg-cyan-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Recruter Focalisateur</div>
              </div>
              <div className="bg-red-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Rassembler Groupe</div>
              </div>
              <div className="bg-green-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Créer Association</div>
              </div>
              <div className="bg-slate-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Lancer Financement</div>
              </div>
              <div className="bg-yellow-500 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Acquérir Lieu</div>
              </div>
              <div className="bg-red-600 rounded-full flex flex-col items-center justify-center text-white font-bold text-center p-6 h-24">
                <div className="text-xs leading-tight">Retour Réseau</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;