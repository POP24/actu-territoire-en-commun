import NavLinks from "./NavLinks";
import ActionButtons from "./ActionButtons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-lg shadow-xl animate-fade-in"
      style={{ zIndex: 999999, paddingTop: 'var(--navbar-height, 80px)' }}
    >
      <div className="px-6 py-6 space-y-2 h-full overflow-y-auto">
        <NavLinks onLinkClick={onClose} isMobile />
        <ActionButtons onButtonClick={onClose} isMobile />
      </div>
    </div>
  );
};

export default MobileMenu;