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
    ? "block py-3 text-base font-medium transition-colors"
    : "text-sm xl:text-base font-medium transition-colors";

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
              className={`${baseClasses} text-muted-foreground hover:text-foreground`}
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
            className={({ isActive }) => `${baseClasses} ${
              isActive 
                ? "text-foreground border-b-2 border-blue-700" 
                : "text-muted-foreground hover:text-foreground"
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