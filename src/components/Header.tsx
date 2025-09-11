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
    fixed top-0 left-0 right-0 z-header transition-all duration-300
    bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50
    h-[var(--nav-h-xs)] md:h-[var(--nav-h-md)] lg:h-[var(--nav-h-lg)]
    ${scrolled ? 'bg-background/95' : 'bg-background/85'}
  `.trim();

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <nav className="flex items-center justify-between py-3 sm:py-4">
          <Logo />
          
          {/* Navigation responsive */}
          <div className="flex items-center justify-center flex-1">
            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <MobileToggle 
                isOpen={isMenuOpen} 
                onToggle={() => setIsMenuOpen(!isMenuOpen)} 
              />
            </div>
            
            {/* Navigation desktop */}
            <div className="hidden lg:block">
              <NavLinks />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-4">
            <ActionButtons />
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