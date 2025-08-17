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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Réseau des Communes
            </h2>
            <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
              Construire ensemble un réseau de communes autonomes pour expérimenter, 
              se rencontrer, gouverner.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12">
            
            {/* Projet */}
            <div>
              <h3 className="text-xl font-bold mb-6">Projet</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/vision" className="text-background/80 hover:text-background transition-colors">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="/territoires" className="text-background/80 hover:text-background transition-colors">
                    Les Territoires
                  </a>
                </li>
                <li>
                  <a href="/investir" className="text-background/80 hover:text-background transition-colors">
                    Investir
                  </a>
                </li>
                <li>
                  <a href="/gouvernance" className="text-background/80 hover:text-background transition-colors">
                    Gouvernance
                  </a>
                </li>
              </ul>
            </div>

            {/* Communauté */}
            <div>
              <h3 className="text-xl font-bold mb-6">Communauté</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/equipe" className="text-background/80 hover:text-background transition-colors">
                    L'Équipe
                  </a>
                </li>
                <li>
                  <a href="/rejoindre" className="text-background/80 hover:text-background transition-colors">
                    Nous rejoindre
                  </a>
                </li>
                <li>
                  <a href="mailto:reseau@lescommunes.org" className="text-background/80 hover:text-background transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-background/80 hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Participer */}
            <div>
              <h3 className="text-xl font-bold mb-6">Participer</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/opportunites" className="text-background/80 hover:text-background transition-colors">
                    Participer maintenant
                  </a>
                </li>
                <li>
                  <a href="/proposer-territoire" className="text-background/80 hover:text-background transition-colors">
                    Proposer un territoire
                  </a>
                </li>
                <li>
                  <a href="/boutique" className="text-background/80 hover:text-background transition-colors">
                    La boutique
                  </a>
                </li>
                <li>
                  <a href="/newsletter" className="text-background/80 hover:text-background transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-bold mb-6">Réseaux sociaux</h3>
              <div className="space-y-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-8 border-t border-background/20">
            <button className="bg-green-brand hover:bg-green-dark text-white font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
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