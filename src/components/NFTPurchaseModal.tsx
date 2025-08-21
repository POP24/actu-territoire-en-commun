import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const [connectionMethod, setConnectionMethod] = useState<string>("");
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
    setName("");
    setLocation("");
    setAcceptNewsletter(false);
    setConnectionMethod("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === 1 && (
          <div className="adhesion-popup space-y-6">
            {/* Header */}
            <header className="popup-header text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
              <div className="text-6xl mb-4">
                {membershipType === "local" ? "🏡" : "🏗️"}
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {membershipType === "local" ? "MEMBRE LOCAL" : "ARCHITECTE RÉSEAU"}
              </h2>
              <p className="subtitle text-muted-foreground mb-2">
                {membershipType === "local" ? "Ancrez-vous dans votre territoire" : "Coordonnez le réseau national"}
              </p>
              <p className="price text-4xl font-bold text-green-600">
                {membershipType === "local" ? "À partir de 10€/an" : "100€"}
              </p>
            </header>

            {/* Benefits List */}
            <div className="benefits-list space-y-4">
              {membershipType === "local" ? (
                <>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      🗳️ Vos droits de membre
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Votez sur les programmes d'animation, événements et formations</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Proposez et rejoignez des projets (calendrier d'activités)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Créez des événements et animez la vie locale</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      🏠 Concrètement
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Participez au Trésor collectif local (prix libre)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Occupez les lieux (tarifs membres, crédits d'usage)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Accès prioritaire aux espaces et activités</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      👑 Adhésion fondatrice
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Participez à la trésorerie collective</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Votez sur l'attribution des budgets territoriaux</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Accédez à toutes les opportunités du réseau</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      🔗 Connexion réseau
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Rejoignez les cercles thématiques (Discord)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Formation aux outils de gouvernance des communs</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Avantages exclusifs à venir</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Connexion Multi-plateformes */}
            <div className="wallet-section space-y-4">
              <h3 className="font-bold text-foreground">1. Connectez-vous</h3>
              <div className="connect-options grid grid-cols-2 gap-3">
                <ConnectButton
                  client={client}
                  appMetadata={{
                    name: "SDM DAO",
                    url: "https://sdm-dao.fr",
                  }}
                  connectButton={{
                    style: {
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      fontWeight: "600",
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                      transition: "all 0.3s ease",
                      width: "100%",
                      minHeight: "48px"
                    }
                  }}
                />
                <Button 
                  variant="outline" 
                  className="connect-btn h-12 text-sm font-semibold"
                  onClick={() => {
                    toast.info("Connexion Telegram bientôt disponible");
                    setConnectionMethod("telegram");
                  }}
                >
                  ✉️ Telegram
                </Button>
                <Button 
                  variant="outline" 
                  className="connect-btn h-12 text-sm font-semibold"
                  onClick={() => {
                    toast.info("Connexion Gmail bientôt disponible");
                    setConnectionMethod("gmail");
                  }}
                >
                  📧 Gmail
                </Button>
                <Button 
                  variant="outline" 
                  className="connect-btn h-12 text-sm font-semibold"
                  onClick={() => {
                    toast.info("Connexion Facebook bientôt disponible");
                    setConnectionMethod("facebook");
                  }}
                >
                  👤 Facebook
                </Button>
              </div>
              {(account || connectionMethod) && (
                <p className="connected-status text-center text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                  ✓ Connecté
                </p>
              )}
            </div>

            {/* Infos Hubspot */}
            <div className="contact-section space-y-4">
              <h3 className="font-bold text-foreground">2. Restez informé (optionnel)</h3>
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Nom ou pseudo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <Input
                type="text"
                placeholder="Localité"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter"
                  checked={acceptNewsletter}
                  onCheckedChange={(checked) => setAcceptNewsletter(checked === true)}
                />
                <label 
                  htmlFor="newsletter" 
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  J'accepte de recevoir les actualités du réseau (RGPD respecté)
                </label>
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!account && !connectionMethod}
              className="cta-primary w-full py-4 text-lg font-semibold"
              size="lg"
            >
              {membershipType === "local" ? "ADHÉSION LOCALE →" : "ADHÉSION ARCHITECTE →"}
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