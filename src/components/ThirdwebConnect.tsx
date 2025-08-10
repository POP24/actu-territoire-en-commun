import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { lightTheme } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { ethereum } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID_HERE", // Remplacez par votre vrai clientId
});

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "telegram", "discord", "email"],
    },
  }),
  createWallet("io.metamask"),
];

interface ThirdwebConnectProps {
  label?: string;
  size?: "compact" | "wide";
  className?: string;
}

export function ThirdwebConnect({ 
  label = "ADHÉRER", 
  size = "compact",
  className 
}: ThirdwebConnectProps) {
  return (
    <div className={className}>
      <ConnectButton
        accountAbstraction={{
          chain: ethereum,
          sponsorGas: true,
        }}
        client={client}
        connectButton={{ label }}
        connectModal={{
          size,
          titleIcon: "https://963b0792-986d-4523-9700-2fd46b95dd58.lovableproject.com/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png",
        }}
        locale={"fr_FR"}
        theme={lightTheme({
          colors: { primaryButtonBg: "#3B82F6" }, // Couleur du bouton territorial
        })}
        wallets={wallets}
      />
    </div>
  );
}