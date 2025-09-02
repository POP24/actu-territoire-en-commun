import { NavLink } from "react-router-dom";

interface NavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const navItems = [
  { to: "/volontariat", label: "Volontariat" },
  { to: "/parrainage", label: "Parrainage" },
  { to: "/boutique", label: "Boutique des Communs" },
  { to: "#financement", label: "Calendrier Territorial" },
  { to: "#faq", label: "FAQ" }
];

const NavLinks = ({ onLinkClick, isMobile = false }: NavLinksProps) => {
  const baseClasses = isMobile 
    ? "block w-full py-4 text-xl font-bold transition-colors duration-300 text-center"
    : "text-sm lg:text-base font-bold transition-all duration-300 relative nav-link";
  
  const hoverClasses = isMobile 
    ? "hover:bg-primary/10 rounded-xl px-4 py-3 border-2 border-transparent hover:border-primary/20"
    : "hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-lg";

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
    } else {
      onLinkClick?.();
    }
  };

  return (
    <>
      {navItems.map((item) => {
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
        
        return (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onLinkClick}
            className={({ isActive }) => `${baseClasses} ${hoverClasses} ${
              isActive && item.to !== "/" 
                ? isMobile ? "text-primary bg-primary/10 border-primary/20" : "text-primary bg-primary/10"
                : isMobile ? "text-foreground hover:text-primary" : "text-gray-800 hover:text-primary"
            }`}
          >
            {item.label}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;