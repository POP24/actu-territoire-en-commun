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
      className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-xl animate-fade-in z-overlay"
      style={{ marginTop: 'var(--nav-h-xs)' }}
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-8">
        <div className="w-full max-w-sm text-center space-y-4">
          <NavLinks onLinkClick={onClose} isMobile />
          <ActionButtons onButtonClick={onClose} isMobile />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;