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
          className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
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
      <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300">
        ADHÉRER
      </Button>
    </div>
  );
};

export default ActionButtons;