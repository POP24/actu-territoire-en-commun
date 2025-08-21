import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConnectButton, useActiveAccount, BuyWidget } from "thirdweb/react";
import { client } from "@/client";
import { useContractPurchase } from "@/hooks/useContract";
import { arbitrum } from "thirdweb/chains";
import { toast } from "sonner";

interface NFTPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  membershipType: "local" | "architect";
}

const NFTPurchaseModal = ({ isOpen, onClose, membershipType }: NFTPurchaseModalProps) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const account = useActiveAccount();
  const { approveUSDC, executePurchase, checkOwnership } = useContractPurchase();

  // NFT configuration based on membership type
  const nftConfig = {
    local: {
      name: "USAGER LOCAL",
      price: 10,
      description: "Adhésion locale avec accès aux lieux communs du réseau",
      contractAddress: "0x1234567890123456789012345678901234567890", // Replace with actual contract
      features: [
        "Accès aux lieux communs",
        "Participation aux décisions locales",
        "Crédits d'usage",
        "Support communautaire"
      ]
    },
    architect: {
      name: "ARCHITECTE RÉSEAU", 
      price: 100,
      description: "Adhésion réseau avec droits de gouvernance étendue",
      contractAddress: "0x1234567890123456789012345678901234567890", // Replace with actual contract
      features: [
        "Tous les avantages Usager Local",
        "Droits de gouvernance réseau",
        "Création de nouveaux lieux",
        "Commission sur les adhésions",
        "Formation exclusive"
      ]
    }
  };

  const currentNft = nftConfig[membershipType];

  const handlePurchase = async () => {
    if (!account) {
      toast.error("Veuillez connecter votre portefeuille");
      return;
    }

    setIsProcessing(true);

    try {
      // Check if user already owns this NFT
      const alreadyOwns = await checkOwnership(currentNft.contractAddress);
      if (alreadyOwns) {
        toast.error("Vous possédez déjà cette adhésion");
        setIsProcessing(false);
        return;
      }

      const trx = {
        values: [currentNft.price * 10 ** 6], // Convert to USDC decimals
        recipients: [account.address],
        referrers: ["0x0000000000000000000000000000000000000000"],
        keyManagers: ["0x0000000000000000000000000000000000000000"],
        data: ["0x"],
      };

      toast.info("Approbation de l'USDC...");
      await approveUSDC(currentNft.contractAddress, trx.values[0] as any);
      toast.success("USDC approuvé !");

      toast.info("Traitement de l'achat...");
      await executePurchase(currentNft.contractAddress, trx);
      toast.success("Achat réussi ! Bienvenue dans le réseau !");

      setStep(3); // Success step
    } catch (error) {
      console.error("Purchase failed:", error);
      toast.error("Erreur lors de l'achat. Veuillez réessayer.");
    } finally {
      setIsProcessing(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {currentNft.name}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            {/* NFT Details */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">
                  {membershipType === "local" ? "🏠" : "🏗️"}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentNft.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {currentNft.description}
                </p>
                <div className="text-4xl font-bold text-green-600">
                  {currentNft.price}€
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Inclus dans votre adhésion :</h4>
                {currentNft.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Connection */}
            <div className="space-y-4">
              <h4 className="font-semibold">1. Connectez votre portefeuille</h4>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 shadow-lg">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-4xl mb-2">🔐</div>
                  <div className="connect-button-wrapper flex justify-center">
                    <ConnectButton
                      client={client}
                      appMetadata={{
                        name: "Association des Communs",
                        url: "https://association-des-communs.fr",
                      }}
                      connectButton={{
                        style: {
                          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          padding: "12px 24px",
                          fontSize: "16px",
                          fontWeight: "600",
                          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                          transition: "all 0.3s ease",
                          minWidth: "200px",
                          minHeight: "50px"
                        }
                      }}
                    />
                  </div>
                  {account && (
                    <div className="text-center text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                      ✓ Connecté avec succès
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <h4 className="font-semibold">2. Email de confirmation (optionnel)</h4>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Action Button */}
            <Button
              onClick={() => setStep(2)}
              disabled={!account}
              className="w-full py-4 text-lg font-semibold"
              size="lg"
            >
              {!account ? "Connectez votre portefeuille d'abord" : "Continuer"}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Résumé de votre commande</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Adhésion {currentNft.name}</span>
                  <span className="font-bold">{currentNft.price}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais réseau</span>
                  <span>~2-5€</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-green-600">{currentNft.price} USDC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Widget for insufficient balance */}
            <div className="space-y-4">
              <h4 className="font-semibold">Ajoutez des fonds si nécessaire</h4>
              <BuyWidget
                client={client}
                chain={arbitrum}
                amount={String(currentNft.price)}
                tokenAddress="0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1"
              >
                Retour
              </Button>
              <Button
                onClick={handlePurchase}
                disabled={isProcessing}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {isProcessing ? "Traitement..." : "Confirmer l'achat"}
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6">
            <div className="text-8xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-green-600">
              Félicitations !
            </h3>
            <p className="text-muted-foreground">
              Votre adhésion "{currentNft.name}" a été confirmée avec succès.
              Bienvenue dans le réseau des communes !
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 text-sm">
                ✓ NFT transféré vers votre portefeuille<br/>
                ✓ Accès aux lieux communs activé<br/>
                {email && "✓ Email de confirmation envoyé"}
              </p>
            </div>
            <Button
              onClick={resetAndClose}
              className="w-full"
            >
              Continuer
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NFTPurchaseModal;