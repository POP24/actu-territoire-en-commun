import { useState } from "react";
import Logo from "./header/Logo";
import NavLinks from "./header/NavLinks";
import ActionButtons from "./header/ActionButtons";
import MobileMenu from "./header/MobileMenu";
import MobileToggle from "./header/MobileToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 sm:h-18">
          <Logo />
          
          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ActionButtons />
            <MobileToggle 
              isOpen={isMenuOpen} 
              onToggle={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
        </nav>
        
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;