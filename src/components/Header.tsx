import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "./header/Logo";
import NavLinks from "./header/NavLinks";
import ActionButtons from "./header/ActionButtons";
import MobileMenu from "./header/MobileMenu";
import MobileToggle from "./header/MobileToggle";
import { useScroll } from "@/hooks/use-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll(10);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled 
      ? 'bg-background/90 backdrop-blur-md shadow-lg' 
      : 'bg-background/80 backdrop-blur-lg shadow-sm'
    }
    border-b border-border/50
  `.trim();

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-2 sm:py-3 md:py-4">
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
      </div>
        
      {/* Mobile Menu via Portal */}
      {isMenuOpen && createPortal(
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />,
        document.body
      )}
    </header>
  );
};

export default Header;