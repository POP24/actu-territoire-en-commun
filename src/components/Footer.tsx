const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
              <span className="text-xl font-bold">Les Communes</span>
            </div>
            <p className="text-primary-foreground/80">
              Créons ensemble un réseau de territoires autonomes et connectés.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#accueil" className="hover:text-white transition-smooth">Accueil</a></li>
              <li><a href="#territoire" className="hover:text-white transition-smooth">Territoires</a></li>
              <li><a href="#financement" className="hover:text-white transition-smooth">Financement</a></li>
              <li><a href="#contact" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Actions</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-smooth">Devenir activateur</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Financer le réseau</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Rejoindre une commune</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-primary-foreground/80 mb-2">
              reseau@lescommunes.org
            </p>
            <p className="text-primary-foreground/80">
              Un mouvement pour l'avenir des territoires
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Les Communes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;