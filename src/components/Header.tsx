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
          
          <div className="hidden md:flex items-center">
            <nav className="flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-8">
                <NavLink 
                  to="/" 
                  className={({isActive}) => `relative font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-orange-500 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded-full" 
                      : "text-foreground/80 hover:text-orange-500 hover:scale-105"
                  }`}
                >
                  Accueil
                </NavLink>
                <div className="w-px h-6 bg-white/20"></div>
                <NavLink 
                  to="/opportunites" 
                  className={({isActive}) => `relative font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-orange-500 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded-full" 
                      : "text-foreground/80 hover:text-orange-500 hover:scale-105"
                  }`}
                >
                  Opportunités
                </NavLink>
                <div className="w-px h-6 bg-white/20"></div>
                <NavLink 
                  to="/territoires" 
                  className={({isActive}) => `relative font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-orange-500 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded-full" 
                      : "text-foreground/80 hover:text-orange-500 hover:scale-105"
                  }`}
                >
                  Territoires
                </NavLink>
                <div className="w-px h-6 bg-white/20"></div>
                <NavLink 
                  to="/gouvernance" 
                  className={({isActive}) => `relative font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-orange-500 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded-full" 
                      : "text-foreground/80 hover:text-orange-500 hover:scale-105"
                  }`}
                >
                  Gouvernance
                </NavLink>
              </div>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              asChild 
              variant="outline"
              className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <Link to="/vision">VISION</Link>
            </Button>
            <Button className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              ADHÉRER
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;