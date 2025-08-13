import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo et titre */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg" />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="transition-transform hover:scale-105">
                <img src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" alt="La Suite du Monde" className="h-6 sm:h-8" />
              </Link>
              <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent sm:ml-20">COMMUNE IMAGINÉE</span>
            </div>
          </div>
          
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Accueil
            </NavLink>
            <NavLink 
              to="/territoires" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Territoires
            </NavLink>
            <NavLink 
              to="/gouvernance" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Gouvernance
            </NavLink>
            <NavLink 
              to="/woofing" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Woofing
            </NavLink>
            <NavLink 
              to="/boutique" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Boutique
            </NavLink>
            <NavLink 
              to="/faq" 
              className={({isActive}) => `nav-link text-sm xl:text-base font-medium transition-colors ${
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </NavLink>
          </div>
          
          {/* Boutons droite */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <NavLink 
              to="/vision" 
              className={({isActive}) => `hidden sm:block font-medium text-sm xl:text-base transition-colors duration-300 ${
                isActive 
                  ? "text-orange-500" 
                  : "text-orange-500 hover:text-orange-600"
              }`}
            >
              Vision
            </NavLink>
            <Button className="hidden sm:block btn-primary rounded-xl sm:rounded-2xl text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg transition-all duration-300">
              ADHÉRER
            </Button>
            
            {/* Menu mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/territoires" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Territoires
              </NavLink>
              <NavLink 
                to="/gouvernance" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Gouvernance
              </NavLink>
              <NavLink 
                to="/woofing" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Woofing
              </NavLink>
              <NavLink 
                to="/boutique" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Boutique
              </NavLink>
              <NavLink 
                to="/faq" 
                onClick={() => setIsMenuOpen(false)}
                className={({isActive}) => `block py-2 text-base font-medium transition-colors ${
                  isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FAQ
              </NavLink>
              <NavLink 
                to="/vision" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Vision
              </NavLink>
              <div className="pt-4">
                <Button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full btn-primary rounded-xl text-sm py-3 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  ADHÉRER
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;