import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface ActionButtonsProps {
  onButtonClick?: () => void;
  isMobile?: boolean;
}

const ActionButtons = ({ onButtonClick, isMobile = false }: ActionButtonsProps) => {
  if (isMobile) {
    return (
      <div className="pt-4 space-y-3">
        <NavLink 
          to="/vision" 
          onClick={onButtonClick}
          className="block py-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Vision
        </NavLink>
        <Button 
          onClick={onButtonClick}
          variant="cta-blue"
          className="w-full rounded-xl py-3"
        >
          ADHÉRER
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <NavLink 
        to="/vision" 
        className={({ isActive }) => `hidden sm:block font-medium text-sm xl:text-base transition-colors duration-300 ${
          isActive 
            ? "text-blue-700" 
            : "text-blue-700 hover:text-blue-800"
        }`}
      >
        Vision
      </NavLink>
      <Button variant="cta-blue" className="rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base">
        ADHÉRER
      </Button>
    </div>
  );
};

export default ActionButtons;