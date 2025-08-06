const FlowSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            FLUX FINANCIER
          </h2>
          
          <div className="space-y-16">
            {/* Flux financier en 2 colonnes */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Réseau général - Gauche */}
              <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Réseau général</h3>
                <div className="space-y-6 max-w-sm mx-auto">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-primary">1M€ collecté</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-secondary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-secondary-foreground">50 coordinateurs</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-accent-foreground">50 associations locales</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-primary">50 lieux acquis</span>
                  </div>
                </div>
              </div>
              
              {/* Réseau local - Droite */}
              <div className="bg-gradient-card p-8 rounded-xl shadow-soft border border-border">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Réseau local</h3>
                <div className="space-y-6 max-w-sm mx-auto">
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-secondary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-secondary-foreground">Cagnotte mensuelle</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-accent rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-accent-foreground">Acquisition collective</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-primary">Revenus générés</span>
                  </div>
                  <div className="text-muted-foreground text-center text-2xl">↓</div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
                    <div className="w-4 h-4 bg-secondary rounded-full mx-auto mb-2"></div>
                    <span className="text-lg font-semibold text-secondary-foreground">Réinvestissement territorial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Entrées/Sorties */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Entrées */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-8 rounded-xl shadow-soft border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-3xl font-bold mb-8 text-yellow-700 dark:text-yellow-300 text-center">Entrées</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-lg font-medium text-yellow-800 dark:text-yellow-200">adhésions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-lg font-medium text-yellow-800 dark:text-yellow-200">locations</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-lg font-medium text-yellow-800 dark:text-yellow-200">formations</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-lg font-medium text-yellow-800 dark:text-yellow-200">événements</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-lg font-medium text-yellow-800 dark:text-yellow-200">boutique collective</span>
                  </div>
                </div>
              </div>

              {/* Sorties */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl shadow-soft border border-blue-200 dark:border-blue-800">
                <h3 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 text-center">Sorties</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-blue-800 dark:text-blue-200">focalisateurs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-blue-800 dark:text-blue-200">maintenance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-blue-800 dark:text-blue-200">réseau global</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-blue-800 dark:text-blue-200">réserve collective</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-lg font-medium text-blue-800 dark:text-blue-200">budget de départ réseau local</span>
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

export default FlowSection;