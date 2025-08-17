import { NavLink } from "react-router-dom";

interface NavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/territoires", label: "Territoires" },
  { to: "/gouvernance", label: "Gouvernance" },
  { to: "/woofing", label: "Woofing" },
  { to: "/boutique", label: "Boutique" },
  { to: "/faq", label: "FAQ" }
];

const NavLinks = ({ onLinkClick, isMobile = false }: NavLinksProps) => {
  const baseClasses = isMobile 
    ? "block py-3 text-base font-medium transition-colors"
    : "text-sm xl:text-base font-medium transition-colors";

  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onLinkClick}
          className={({ isActive }) => `${baseClasses} ${
            isActive 
              ? "text-foreground border-b-2 border-blue-600" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;