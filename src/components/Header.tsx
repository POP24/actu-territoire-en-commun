import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
          
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/" className={({isActive}) => `font-semibold transition-colors ${isActive ? "text-foreground" : "text-foreground/90 hover:text-foreground"}`}>Accueil</NavLink>
            <NavLink to="/opportunites" className={({isActive}) => `font-semibold transition-colors ${isActive ? "text-foreground" : "text-foreground/90 hover:text-foreground"}`}>Opportunités</NavLink>
            <NavLink to="/territoires" className={({isActive}) => `font-semibold transition-colors ${isActive ? "text-foreground" : "text-foreground/90 hover:text-foreground"}`}>Territoires</NavLink>
            <NavLink to="/gouvernance" className={({isActive}) => `font-semibold transition-colors ${isActive ? "text-foreground" : "text-foreground/90 hover:text-foreground"}`}>Gouvernance</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="territorial" className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">ADHÉRER</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-[999] bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-xl p-2 min-w-[280px] animate-scale-in">
                <DropdownMenuItem asChild className="rounded-lg p-4 hover:bg-gradient-national/10 transition-all duration-200 cursor-pointer group border border-orange-500/20 bg-gradient-to-r from-orange-50/50 to-orange-100/30">
                  <Link to="/investir?niveau=national" aria-label="Adhésion Nationale" className="block">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-orange-700 group-hover:text-orange-800 transition-colors">
                          Adhésion Nationale
                        </div>
                        <div className="text-xs text-orange-600/80 mt-2">
                          Pionnier, Architecte, Bienfaiteurs
                        </div>
                      </div>
                      <div className="text-sm font-bold text-orange-700 ml-3">
                        100€
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg p-4 hover:bg-gradient-territorial/10 transition-all duration-200 cursor-pointer group border border-blue-500/20 mt-1 bg-gradient-to-r from-blue-50/50 to-blue-100/30">
                  <Link to="/investir?niveau=territorial" aria-label="Adhésion Territoriale" className="block">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-blue-700 group-hover:text-blue-800 transition-colors">
                          Adhésion Territoriale
                        </div>
                        <div className="text-xs text-blue-600/80 mt-2">
                          Usagers, Artisans voisins
                        </div>
                      </div>
                      <div className="text-sm font-bold text-blue-700 ml-3">
                        10€ + prix libre
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;