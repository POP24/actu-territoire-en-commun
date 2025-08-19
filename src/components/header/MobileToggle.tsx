import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileToggle = ({ isOpen, onToggle }: MobileToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className="lg:hidden p-2 hover:bg-orange-50 transition-colors duration-300"
      aria-label="Toggle menu"
    >
      <div className="transition-transform duration-300">
        {isOpen ? <X size={24} className="transition-transform duration-300 rotate-90" /> : <Menu size={24} className="transition-transform duration-300" />}
      </div>
    </Button>
  );
};

export default MobileToggle;