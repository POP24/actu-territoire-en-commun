import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const navItems = [
  { 
    to: "/", 
    label: "L'Association",
    hasDropdown: true,
    subItems: [
      { to: "#gouvernance", label: "GOUVERNANCE" }
    ]
  },
  { to: "/volontariat", label: "Volontariat" },
  { to: "/parrainage", label: "Parrainage" },
  { to: "/boutique", label: "Boutique des Communs" },
  { to: "#faq", label: "FAQ" }
];

const NavLinks = ({ onLinkClick, isMobile = false }: NavLinksProps) => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const baseClasses = isMobile 
    ? "block w-full py-4 text-xl font-bold transition-colors duration-300 text-center"
    : "text-xs xl:text-sm 2xl:text-base font-bold transition-all duration-300 relative nav-link whitespace-nowrap";
  
  const hoverClasses = isMobile 
    ? "hover:bg-primary/10 rounded-xl px-4 py-3 border-2 border-transparent hover:border-primary/20"
    : "hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-lg";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onLinkClick?.();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onLinkClick?.();
  };

  const handleClick = (item: any) => {
    if (item.to.startsWith('#')) {
      scrollToSection(item.to.replace('#', ''));
    } else if (item.to === "/" && location.pathname === "/") {
      // Si on est déjà sur la homepage et qu'on clique sur "L'Association", remonter en haut
      scrollToTop();
    } else {
      onLinkClick?.();
    }
  };

  return (
    <div className={isMobile ? "space-y-4" : "grid grid-cols-3 xl:grid-cols-5 gap-2 xl:gap-4 items-center"}>
      {navItems.map((item) => {
        // Pour les éléments avec dropdown
        if (item.hasDropdown) {
          if (isMobile) {
            // Version mobile avec dropdown centré
            return (
              <div key={item.to} className="relative">
                <button
                  onClick={() => {
                    if (item.to === "/" && location.pathname === "/") {
                      scrollToTop();
                    } else if (openDropdown === item.label) {
                      setOpenDropdown(null);
                    } else {
                      setOpenDropdown(item.label);
                    }
                  }}
                  className={`${baseClasses} ${hoverClasses} text-foreground hover:text-primary flex items-center justify-center gap-2`}
                >
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openDropdown === item.label && (
                  <div className="mt-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg animate-fade-in">
                    {item.subItems?.map((subItem) => (
                      <button
                        key={subItem.to}
                        onClick={() => {
                          scrollToSection(subItem.to.replace('#', ''));
                          setOpenDropdown(null);
                        }}
                        className="block w-full py-3 px-4 text-center text-lg font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            // Version desktop avec dropdown
            return (
              <div 
                key={item.to} 
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  onClick={(e) => {
                    if (item.to === "/" && location.pathname === "/") {
                      e.preventDefault();
                      scrollToTop();
                    } else {
                      onLinkClick?.();
                    }
                  }}
                  className={({ isActive }) => `${baseClasses} ${hoverClasses} ${
                    isActive && item.to !== "/" 
                      ? "text-primary bg-primary/10" 
                      : "text-gray-800 hover:text-primary"
                  } flex items-center gap-1`}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </NavLink>
                
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg min-w-[200px] animate-fade-in z-50">
                    {item.subItems?.map((subItem) => (
                      <button
                        key={subItem.to}
                        onClick={() => {
                          scrollToSection(subItem.to.replace('#', ''));
                          onLinkClick?.();
                        }}
                        className="block w-full py-3 px-4 text-left text-sm font-semibold text-gray-800 hover:text-primary hover:bg-primary/10 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        }
        
        // Pour les éléments avec lien anchor (#)
        if (item.to.startsWith('#')) {
          return (
            <button
              key={item.to}
              onClick={() => handleClick(item)}
              className={`${baseClasses} ${hoverClasses} ${isMobile ? 'text-foreground hover:text-primary' : 'text-gray-800 hover:text-primary'}`}
            >
              {item.label}
            </button>
          );
        }
        
        // Pour les éléments normaux
        return (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={(e) => {
              onLinkClick?.();
            }}
            className={({ isActive }) => `${baseClasses} ${hoverClasses} ${
              isActive 
                ? isMobile ? "text-primary bg-primary/10 border-primary/20" : "text-primary bg-primary/10"
                : isMobile ? "text-foreground hover:text-primary" : "text-gray-800 hover:text-primary"
            }`}
          >
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;