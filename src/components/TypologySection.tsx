const TypologySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            TYPOLOGIE DES BIENS
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Ce qu'on active :</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">🏕️</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Campings</h4>
              <p className="text-muted-foreground">15 000 en France, 500 à vendre</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Fermes</h4>
              <p className="text-muted-foreground">Avec terres agricoles</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">🏚️</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Mas/Domaines</h4>
              <p className="text-muted-foreground">Bâti important à rénover</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">💧</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Moulins</h4>
              <p className="text-muted-foreground">Autonomie énergétique</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Lacs</h4>
              <p className="text-muted-foreground">Accès à l'eau</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border text-center">
              <div className="text-4xl mb-4">🌲</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Forêts</h4>
              <p className="text-muted-foreground">Ressources naturelles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypologySection;