import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";

interface ActionButtonsProps {
  onButtonClick?: () => void;
  isMobile?: boolean;
}

const ActionButtons = ({ onButtonClick, isMobile = false }: ActionButtonsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleAdherClick = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsModalOpen(true);
    onButtonClick?.();
  };

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
          onClick={() => handleAdherClick("local")}
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold"
        >
          ADHÉRER
        </Button>
      </div>
    );
  }

  const mobileContent = (
    <div className="pt-4 space-y-3">
      <NavLink 
        to="/vision" 
        onClick={onButtonClick}
        className="block py-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Vision
      </NavLink>
      <Button
        onClick={() => handleAdherClick("local")}
        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold"
      >
        ADHÉRER
      </Button>
    </div>
  );

  const desktopContent = (
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
      <Button
        onClick={() => handleAdherClick("local")}
        className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold px-4 py-2"
      >
        ADHÉRER
      </Button>
    </div>
  );

  return (
    <>
      {isMobile ? mobileContent : desktopContent}
      <NFTPurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        membershipType={membershipType}
      />
    </>
  );
};

export default ActionButtons;