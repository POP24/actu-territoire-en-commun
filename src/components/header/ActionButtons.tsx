import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/client";

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
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 hover:bg-white/20 transition-all duration-300">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Association des Communs",
              url: "https://association-des-communs.fr",
            }}
            connectButton={{
              label: "ADHÉRER"
            }}
          />
        </div>
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
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Association des Communs",
            url: "https://association-des-communs.fr",
          }}
          connectButton={{
            label: "ADHÉRER"
          }}
        />
      </div>
    </div>
  );
};

export default ActionButtons;