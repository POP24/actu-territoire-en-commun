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
                <span className="bg-white/20 border border-white/40 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  Telegram
                </span>
                <span className="bg-white/20 border border-white/40 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  Discord
                </span>
                <span className="bg-white/20 border border-white/40 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  Web
                </span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Contact :</h3>
              <a href="mailto:reseau@lescommunes.org" className="text-white hover:underline text-lg">
                reseau@lescommunes.org
              </a>
            </div>
            
            <Button 
              size="lg"
              className="text-lg px-12 py-4 bg-white text-primary hover:bg-white/90"
            >
              Adhérer à 100€
            </Button>
          </div>
          
          {/* Message inspirant */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <div className="space-y-4 text-lg md:text-xl leading-relaxed font-light italic">
              <p>"Nous ne sommes pas en train de créer un nouveau monde.</p>
              <p>Nous relions celui qui émerge déjà partout.</p>
              <br />
              <p>Quand les fils seront tissés,</p>
              <p>quand les communes seront reliées,</p>
              <p>quand les caisses seront communes,</p>
              <p>alors la France des territoires vivants sera née.</p>
              <br />
              <p className="font-bold text-xl md:text-2xl not-italic">Pas demain. Maintenant."</p>
            </div>
          </div>
          
          {/* Séparateur décoratif */}
          <div className="flex items-center justify-center mb-8">
            <div className="border-t border-white/30 flex-1 max-w-md"></div>
            <div className="px-4 text-white/60">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
            <div className="border-t border-white/30 flex-1 max-w-md"></div>
          </div>
          
          {/* Footer final */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold">LE RÉSEAU DES COMMUNES</h3>
            <p className="text-lg font-medium">Fédération de Communes libres pour l'autonomie territoriale</p>
            <a href="mailto:communelibre@lasuitedumonde.com" className="text-white hover:underline text-lg">
              communelibre@lasuitedumonde.com
            </a>
            <p className="text-lg">2025</p>
          </div>
          
          {/* Séparateur final */}
          <div className="flex items-center justify-center mt-8">
            <div className="text-white/40">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;