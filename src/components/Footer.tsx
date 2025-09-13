import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Light effect overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/5f0f71d0-d521-44d1-b966-be3358bf8879.png" 
          alt="Effet lumineux footer" 
          className="w-full h-full object-cover mix-blend-screen opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Réseau des Communes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-background/80 max-w-2xl mx-auto leading-relaxed">
              Construire ensemble un réseau de communes autonomes pour expérimenter, 
              se rencontrer, gouverner.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Projet */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Projet</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    L'association
                  </a>
                </li>
                <li>
                  <a href="/#gouvernance" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    Gouvernance
                  </a>
                </li>
                <li>
                  <a href="/labo" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    Laboratoire
                  </a>
                </li>
              </ul>
            </div>

            {/* Communauté */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Communauté</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="mailto:reseau@lescommunes.org" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors flex items-center gap-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <p className="text-xs sm:text-sm text-background/80 font-medium">
                    Rejoignez notre application mobile
                  </p>
                </li>
              </ul>
            </div>

            {/* Participer */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Participer</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/volontariat" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    Volontariat
                  </a>
                </li>
                <li>
                  <a href="/parrainage" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    Parrainage
                  </a>
                </li>
                <li>
                  <a href="/boutique" className="text-xs sm:text-sm text-background/80 hover:text-background transition-colors">
                    Boutique
                  </a>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">Réseaux sociaux</h3>
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-background/80 hover:text-background transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  Facebook
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-background/80 hover:text-background transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-background/80 hover:text-background transition-colors"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-6 sm:py-8 border-t border-background/20">
            <button className="btn-cta-green font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base md:text-lg transition-all hover:scale-105">
              Adhérer à 100€
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
              <a href="/cgv" className="hover:text-background transition-colors">
                CGV
              </a>
              <a href="/politique-confidentialite" className="hover:text-background transition-colors">
                Politique de confidentialité
              </a>
            </div>
            <div className="text-sm text-background/60">
              © 2025 Réseau des Communes. Fondé en 2024.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;