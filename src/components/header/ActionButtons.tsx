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

  const handleVisionClick = () => {
    if (window.location.pathname === '/vision') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/vision';
    }
    onButtonClick?.();
  };

  const handleMembershipSelect = (type: "local" | "architect") => {
    setMembershipType(type);
    setIsPurchaseModalOpen(true);
  };

  if (isMobile) {
    return (
      <>
        <div className="pt-6 space-y-4 w-full">
          <Button
            onClick={handleAdherClick}
            className="w-full btn-cta-blue rounded-xl font-bold text-lg py-4"
          >
            ADHÉRER
          </Button>
          <button 
            onClick={handleVisionClick}
            className="block w-full py-4 text-xl font-bold text-center text-primary hover:text-primary/80 transition-colors hover:bg-primary/10 rounded-xl px-4 border-2 border-transparent hover:border-primary/20"
          >
            Vision
          </button>
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
        <button 
          onClick={handleVisionClick}
          className="hidden sm:block font-bold text-sm xl:text-base transition-colors duration-300 text-blue-700 hover:text-blue-800"
        >
          Vision
        </button>
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