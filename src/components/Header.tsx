import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="transition-transform hover:scale-105">
              <img src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" alt="Logo" className="w-16 h-16 rounded-lg" />
            </Link>
            <div className="flex flex-col">
              <Link to="/" className="transition-transform hover:scale-105">
                <img src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" alt="La Suite du Monde" className="h-8" />
              </Link>
              <span className="text-sm font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent ml-20">COMMUNE IMAGINÉE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => `font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Le Projet
            </NavLink>
            <NavLink 
              to="/opportunites" 
              className={({isActive}) => `font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Comment ça fonctionne
            </NavLink>
            <NavLink 
              to="/territoires" 
              className={({isActive}) => `font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Qui sommes-nous
            </NavLink>
            <NavLink 
              to="/gouvernance" 
              className={({isActive}) => `font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-foreground" 
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              FAQ
            </NavLink>
          </div>
          
          <div className="flex items-center space-x-6">
            <NavLink 
              to="/vision" 
              className={({isActive}) => `font-medium transition-colors duration-300 ${
                isActive 
                  ? "text-orange-500" 
                  : "text-orange-500 hover:text-orange-600"
              }`}
            >
              Vision
            </NavLink>
            <Button className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white">
              ADHÉRER
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;