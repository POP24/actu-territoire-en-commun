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
              <DropdownMenuContent align="end" className="z-[999] p-0 bg-gradient-dropdown-bg backdrop-blur-xl border-2 border-orange-400/30 shadow-2xl rounded-3xl min-w-[320px] sm:min-w-[360px] animate-scale-in overflow-hidden">
                {/* Decorative top border with gradient */}
                <div className="h-1 bg-gradient-dropdown-border"></div>
                
                <div className="p-6 space-y-3">
                  {/* National Adhesion */}
                  <DropdownMenuItem asChild className="rounded-2xl p-0 border-0 hover:bg-gradient-item-hover transition-all duration-300 cursor-pointer group overflow-hidden">
                    <Link to="/investir?niveau=national" aria-label="Adhésion Nationale" className="block p-5 relative">
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold text-lg sm:text-xl text-white group-hover:text-orange-100 transition-colors">
                            Adhésion Nationale
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        </div>
                        <div className="text-sm sm:text-base text-orange-100/90 leading-relaxed">
                          Pionnier, Architecte, Bienfaiteurs
                        </div>
                        <div className="text-lg font-semibold text-white mt-1">
                          100€
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  
                  {/* Separator */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-2"></div>
                  
                  {/* Territorial Adhesion */}
                  <DropdownMenuItem asChild className="rounded-2xl p-0 border-0 hover:bg-gradient-item-hover transition-all duration-300 cursor-pointer group overflow-hidden">
                    <Link to="/investir?niveau=territorial" aria-label="Adhésion Territoriale" className="block p-5 relative">
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold text-lg sm:text-xl text-white group-hover:text-orange-100 transition-colors">
                            Adhésion Territoriale
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        </div>
                        <div className="text-sm sm:text-base text-orange-100/90 leading-relaxed">
                          Usagers, Artisans voisins
                        </div>
                        <div className="text-lg font-semibold text-white mt-1">
                          10€ + prix libre
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
                
                {/* Decorative bottom border with gradient */}
                <div className="h-1 bg-gradient-dropdown-border"></div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;