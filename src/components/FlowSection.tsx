const FlowSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            FLUX FINANCIER
          </h2>
          
          <div className="space-y-12">
            {/* L'argent du réseau */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">L'argent du réseau :</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">1M€</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">50 activateurs</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">50 associations locales</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">50 lieux acquis</span>
              </div>
            </div>
            
            {/* L'argent local */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">L'argent local :</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">Cagnotte</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">Acquisition</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">Revenus</span>
                <span className="text-muted-foreground text-sm">(séjours, formations)</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">Réinvestissement</span>
              </div>
            </div>
            
            {/* Retour au réseau */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Retour au réseau :</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">5% des revenus locaux</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">Fonds commun</span>
                <span className="text-muted-foreground">→</span>
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">Nouveaux territoires</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;