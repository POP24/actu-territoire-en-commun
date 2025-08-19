import { NavLink } from "react-router-dom";

interface NavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "#financement", label: "Territoires" },
  { to: "#gouvernance", label: "Gouvernance" },
  { to: "https://boutique.lasuitedumonde.com", label: "Boutique", external: true },
  { to: "#faq", label: "FAQ" }
];

const NavLinks = ({ onLinkClick, isMobile = false }: NavLinksProps) => {
  const baseClasses = isMobile 
    ? "block py-3 text-lg font-bold transition-colors duration-300"
    : "text-base font-medium transition-all duration-300 relative nav-link";
  
  const hoverClasses = isMobile 
    ? "hover:bg-blue-50 rounded-lg px-3 py-2"
    : "hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-lg";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onLinkClick?.();
  };

  const handleClick = (item: any) => {
    if (item.external) {
      window.open(item.to, '_blank');
      onLinkClick?.();
    } else if (item.to.startsWith('#')) {
      scrollToSection(item.to.replace('#', ''));
    } else {
      onLinkClick?.();
    }
  };

  return (
    <>
      {navItems.map((item) => {
        if (item.external || item.to.startsWith('#')) {
          return (
            <button
              key={item.to}
              onClick={() => handleClick(item)}
              className={`${baseClasses} ${hoverClasses} text-gray-800 hover:text-blue-600`}
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
                ? "text-blue-600 bg-blue-50" 
                : "text-gray-800 hover:text-blue-600"
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