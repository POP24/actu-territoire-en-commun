import NavLinks from "./NavLinks";
import ActionButtons from "./ActionButtons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-xl z-40">
      <div className="px-6 py-6 space-y-2">
        <NavLinks onLinkClick={onClose} isMobile />
        <ActionButtons onButtonClick={onClose} isMobile />
      </div>
    </div>
  );
};

export default MobileMenu;