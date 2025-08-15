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
      className="lg:hidden p-2 hover:bg-accent"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
  );
};

export default MobileToggle;