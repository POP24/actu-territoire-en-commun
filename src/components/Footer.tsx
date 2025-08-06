import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            REJOINDRE LE MOUVEMENT
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-elegant mb-12">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Les liens invisibles existent déjà. Il ne reste qu'à les activer.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-6">Adhésion via :</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline-hero" className="bg-white/20 border-white/40 hover:bg-white/30">
                  Telegram
                </Button>
                <Button variant="outline-hero" className="bg-white/20 border-white/40 hover:bg-white/30">
                  Discord
                </Button>
                <Button variant="outline-hero" className="bg-white/20 border-white/40 hover:bg-white/30">
                  Web
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact :</h3>
              <a href="mailto:reseau@lescommunes.org" className="text-white hover:underline text-lg">
                reseau@lescommunes.org
              </a>
            </div>
            
            <Button variant="cta" size="lg" className="text-lg px-12 py-4 bg-white text-primary hover:bg-white/90">
              Adhérer à 100€
            </Button>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-white/80">
            <p className="text-lg">
              <strong>Le Réseau des Communes</strong> - Tout existe déjà, connectons-le - 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;