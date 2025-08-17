const FundingFlowSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              FLUX DE <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">FINANCEMENT</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Votre adhésion construit le trésor commun.
            </p>
            <p className="text-lg text-muted-foreground">
              Investir, réinvestir, libérer des terres ensemble.
            </p>
          </div>

          {/* How it works section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - How it works */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                COMMENT ÇA MARCHE ?
              </h3>
              
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="text-foreground font-semibold mb-2">1️⃣ Les adhésions alimentent le trésor commun</div>
                  <div className="text-muted-foreground text-sm">10€ habitants + 100€ architectes = force collective</div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="text-foreground font-semibold mb-2">2️⃣ Chaque territoire active 2 FOCALISATEURS</div>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Connaisseurs du terrain local</li>
                    <li>• Rémunérés par le trésor commun</li>
                    <li>• Fédèrent et animent la commune</li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="text-foreground font-semibold mb-2">3️⃣ On acquiert des biens stratégiques</div>
                  <div className="text-muted-foreground text-sm">Campings, fermes, forêts, moulins...</div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="text-foreground font-semibold mb-2">4️⃣ Les revenus retournent au collectif</div>
                  <div className="text-muted-foreground text-sm">Location, production, événements → réinvestissement</div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="text-foreground font-semibold mb-2">5️⃣ Les biens deviennent communs</div>
                  <div className="text-muted-foreground text-sm">Progressivement, tout passe en propriété collective</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="text-6xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-foreground mb-4">Trésor Commun</h4>
                <p className="text-muted-foreground">
                  Les adhésions se transforment en patrimoine collectif
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="text-6xl mb-4">🏡</div>
                <h4 className="text-xl font-bold text-foreground mb-4">Biens Stratégiques</h4>
                <p className="text-muted-foreground">
                  Acquisition progressive de lieux d'exception
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-foreground mb-4">Croissance</h4>
                <p className="text-muted-foreground">
                  Réinvestissement permanent pour l'expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingFlowSection;