import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NFTPurchaseModal from "@/components/NFTPurchaseModal";
import MembershipSelectionModal from "@/components/MembershipSelectionModal";

interface ActionButtonsProps {
  onButtonClick?: () => void;
  isMobile?: boolean;
}

const ActionButtons = ({ onButtonClick, isMobile = false }: ActionButtonsProps) => {
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [membershipType, setMembershipType] = useState<"local" | "architect">("local");

  const handleAdherClick = () => {
    setIsSelectionModalOpen(true);
    onButtonClick?.();
  };

  const handleMembershipSelect = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  if (isMobile) {
    return (
      <>
        <div className="pt-4 space-y-3">
          <NavLink 
            to="/vision" 
            onClick={onButtonClick}
            className="block py-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Vision
          </NavLink>
          <Button
            onClick={handleAdherClick}
            className="w-full btn-cta-blue rounded-lg font-semibold"
          >
            ADHÉRER
          </Button>
        </div>
        <MembershipSelectionModal
          isOpen={isSelectionModalOpen}
          onClose={() => setIsSelectionModalOpen(false)}
          onSelectMembership={handleMembershipSelect}
        />
        <NFTPurchaseModal
          isOpen={isPurchaseModalOpen}
          onClose={() => setIsPurchaseModalOpen(false)}
          membershipType={membershipType}
        />
      </>
    );
  }

  return (
    <>
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
          onClick={handleAdherClick}
          className="btn-cta-blue px-4 py-2 font-semibold"
        >
          ADHÉRER
        </Button>
      </div>
      <MembershipSelectionModal
        isOpen={isSelectionModalOpen}
        onClose={() => setIsSelectionModalOpen(false)}
        onSelectMembership={handleMembershipSelect}
      />
      <NFTPurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        membershipType={membershipType}
      />
    </>
  );
};

export default ActionButtons;