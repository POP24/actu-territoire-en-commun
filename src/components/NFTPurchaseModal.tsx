import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ConnectButton, useActiveAccount, BuyWidget } from "thirdweb/react";
import { client } from "@/client";
import { useContractPurchase } from "@/hooks/useContract";
import { arbitrum } from "thirdweb/chains";
import { toast } from "sonner";
import { inAppWallet, createWallet } from "thirdweb/wallets";

interface NFTPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  membershipType: "local" | "architect";
}

interface LocalMembershipFeatures {
  rights: string[];
  concrete: string[];
}

interface ArchitectMembershipFeatures {
  founding: string[];
  network: string[];
}

interface NFTConfig {
  name: string;
  price: number;
  description: string;
  contractAddress: string;
  features: LocalMembershipFeatures | ArchitectMembershipFeatures;
}

const NFTPurchaseModal = ({ isOpen, onClose, membershipType }: NFTPurchaseModalProps) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(true);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const account = useActiveAccount();
  const { approveUSDC, executePurchase, checkOwnership } = useContractPurchase();

  // Wallet configuration
  const wallets = [
    inAppWallet({
      auth: {
        options: ["google", "facebook", "telegram"],
      },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

  // NFT configuration based on membership type
  const nftConfig = {
    local: {
      name: "ADHÉSION LOCALE",
      price: 10,
      description: "Ancrez-vous dans votre territoire",
      contractAddress: "0x0b27EB1A9922c4Cd7327B9DbeA7F250622Ebbea9", // Replace with actual contract
      features: {
        rights: [
          "Votez sur les programmes d'animation, événements et formations",
          "Proposez et rejoignez des projets (calendrier d'activités)", 
          "Créez des événements et animez la vie locale"
        ],
        concrete: [
          "Participez au Trésor collectif local (prix libre)",
          "Occupez les lieux (tarifs membres, crédits d'usage)"
        ]
      }
    },
    architect: {
      name: "ARCHITECTE RÉSEAU", 
      price: 100,
      description: "Coordonnez et développez les communs",
      contractAddress: "0x0b27EB1A9922c4Cd7327B9DbeA7F250622Ebbea9", // Replace with actual contract
      features: {
        founding: [
          "Participez à la trésorerie collective",
          "Votez l'attribution des budgets territoriaux",
          "Accédez à toutes les opportunités du réseau"
        ],
        network: [
          "✓Rejoignez Discord",
          "✓Seulement 10 000 tickets"
        ]
      }
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
    setPhone("");
    setAcceptPolicy(true);
    setAcceptNewsletter(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg lg:max-w-2xl max-h-[95vh] overflow-y-auto p-2 sm:p-6" aria-describedby="nft-purchase-description">
        <DialogHeader>
          <DialogTitle className="text-center mb-2 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-2 sm:mb-4">
              <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400"></div>
              <h2 className="text-base sm:text-xl lg:text-2xl font-black leading-tight tracking-tight text-foreground px-1 sm:px-4 lg:px-8 text-center">
                FINALISER VOTRE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">ADHÉSION</span>
              </h2>
              <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400"></div>
            </div>
          </DialogTitle>
          <div id="nft-purchase-description" className="sr-only">
            Processus d'achat de votre adhésion NFT pour rejoindre l'association
          </div>
        </DialogHeader>
        {step === 1 && (
          <div className="space-y-3 sm:space-y-6">
            {/* NFT Details */}
            <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-xl sm:rounded-2xl p-2 sm:p-6 border border-border/20 hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-elegant overflow-hidden">
              
              {/* Futuristic background pattern */}
              <div className="hidden sm:block absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 border border-primary/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border border-primary/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-3 sm:mb-6">
                  {/* Tech-inspired icon replacement */}
                  <div className="w-8 h-8 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg rotate-3 shadow-lg"></div>
                    <div className="absolute inset-1 bg-background rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-8 sm:h-8 border-2 border-primary rounded-sm relative">
                        <div className="absolute inset-1 sm:inset-2 bg-primary/20 rounded-sm"></div>
                        <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-sm sm:text-lg lg:text-xl font-black text-foreground mb-1 sm:mb-3 tracking-tight">
                    {currentNft.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 font-medium">
                    {currentNft.description}
                  </p>
                  <div className="inline-flex items-center px-2 py-1 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full mb-1 sm:mb-2 border border-blue-500/30">
                    <span className="text-sm sm:text-xl lg:text-2xl font-black text-blue-600">
                      {membershipType === 'local' ? 'À PARTIR DE 10€' : `${currentNft.price}€`}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 sm:space-y-6">
                  {membershipType === "local" ? (
                    <>
                      <div>
                        <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                          🗳️ Vos droits de membre
                        </h4>
                        <div className="space-y-1 sm:space-y-3">
                          {(currentNft.features as LocalMembershipFeatures).rights.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start text-xs sm:text-sm text-foreground/80">
                              <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full mt-1"></div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                          🏠 Concrètement
                        </h4>
                        <div className="space-y-1 sm:space-y-3">
                          {(currentNft.features as LocalMembershipFeatures).concrete.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start text-xs sm:text-sm text-foreground/80">
                              <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full mt-1"></div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                          👑 Adhésion fondatrice
                        </h4>
                        <div className="space-y-1 sm:space-y-3">
                          {(currentNft.features as ArchitectMembershipFeatures).founding.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start text-xs sm:text-sm text-foreground/80">
                              <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full mt-1"></div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                          🔗 Connexion réseau
                        </h4>
                        <div className="space-y-1 sm:space-y-3">
                          {(currentNft.features as ArchitectMembershipFeatures).network.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start text-xs sm:text-sm text-foreground/80">
                              <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full mt-1"></div>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Wallet Connection */}
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-2 sm:mb-4">
                <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-primary/50"></div>
                <h4 className="text-xs sm:text-lg font-bold text-foreground px-2 sm:px-4">ÉTAPE 1 : CONNEXION</h4>
                <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-primary/50 to-primary/50"></div>
              </div>
              <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-xl p-2 sm:p-6 border border-border/20 hover:border-primary/30 transition-all duration-500 shadow-soft">
                <div className="flex flex-col items-center space-y-4">
                  <div className="connect-button-wrapper flex justify-center">
                    <ConnectButton
                      client={client}
                      connectModal={{ size: "compact" }}
                      wallets={wallets}
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
                          fontSize: "14px",
                          fontWeight: "600",
                          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                          transition: "all 0.3s ease",
                          minWidth: "200px",
                          minHeight: "44px"
                        }
                      }}
                    />
                  </div>
                  {account && (
                    <div className="text-center text-sm text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-200 font-medium">
                      ✓ Connecté avec succès
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-2 sm:mb-4">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-secondary/50"></div>
                <h4 className="text-xs sm:text-lg font-bold text-foreground px-2 sm:px-4">ÉTAPE 2 : PROFIL</h4>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-secondary/50 to-secondary/50"></div>
              </div>
              
              <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-xl p-2 sm:p-6 border border-border/20 hover:border-secondary/30 transition-all duration-500 shadow-soft space-y-2 sm:space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center mb-2 sm:mb-4 font-medium">Complétez votre profil (recommandé)</p>
                
                {/* Row 1: Email and Name side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-3 bg-background/50 border border-border rounded-lg text-foreground text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom ou organisation"
                    required
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-3 bg-background/50 border border-border rounded-lg text-foreground text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                {/* Row 2: Location and Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Localité"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-3 bg-background/50 border border-border rounded-lg text-foreground text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Téléphone"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-3 bg-background/50 border border-border rounded-lg text-foreground text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={acceptPolicy}
                      onChange={(e) => setAcceptPolicy(e.target.checked)}
                      className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary border-border rounded focus:ring-primary focus:ring-2 bg-background"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      J'accepte la politique de confidentialité
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={acceptNewsletter}
                      onChange={(e) => setAcceptNewsletter(e.target.checked)}
                      className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary border-border rounded focus:ring-primary focus:ring-2 bg-background"
                    />
                    <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Je souhaite m'inscrire à la newsletter pour recevoir les actualités
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => setStep(2)}
              disabled={!account}
              className="w-full py-2.5 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              {!account ? "Connectez votre portefeuille d'abord" : "CONTINUER L'ACHAT →"}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-2xl p-4 sm:p-6 border border-border/20 hover:border-primary/30 transition-all duration-500 shadow-soft hover:shadow-elegant overflow-hidden">
              
              {/* Background pattern */}
              <div className="hidden sm:block absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 border border-green-500/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border border-green-500/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-green-500/50"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground px-4">RÉSUMÉ DE COMMANDE</h3>
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-green-500/50 to-green-500/50"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-border">
                    <span className="font-medium text-foreground">Adhésion {currentNft.name}</span>
                    <span className="font-bold text-base sm:text-lg text-blue-600">
                      {membershipType === 'local' ? 'À PARTIR DE 10€' : `${currentNft.price}€`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-border">
                    <span className="font-medium text-foreground">Frais réseau</span>
                    <span className="text-muted-foreground">~2-5€</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/30">
                      <span className="font-bold text-lg text-foreground">Total</span>
                      <span className="font-black text-xl sm:text-2xl text-blue-600">{currentNft.price} USDC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Widget for insufficient balance */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4">
                <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-primary/50"></div>
                <h4 className="text-base sm:text-lg font-bold text-foreground px-4">AJOUTER DES FONDS</h4>
                <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-primary/50 to-primary/50"></div>
              </div>
              <div className="bg-gradient-to-br from-card via-background to-muted/50 rounded-xl p-4 sm:p-6 border border-border/20">
                <BuyWidget
                  client={client}
                  chain={arbitrum}
                  amount={String(currentNft.price)}
                  tokenAddress="0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 py-3 font-bold rounded-xl border-2 hover:bg-background/50 transition-all duration-300"
              >
                ← Retour
              </Button>
              <Button
                onClick={handlePurchase}
                disabled={isProcessing}
                className="flex-1 py-3 font-bold rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isProcessing ? "Traitement..." : "CONFIRMER L'ACHAT ✓"}
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-8">
            <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-2xl p-4 sm:p-8 border border-border/20 shadow-soft overflow-hidden">
              
              {/* Success background pattern */}
              <div className="hidden sm:block absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-green-500/30 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border border-green-500/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-500/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl sm:text-8xl mb-6 animate-bounce">🎉</div>
                <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6">
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-green-500"></div>
                  <h3 className="text-xl sm:text-2xl font-black text-green-600 px-4">FÉLICITATIONS !</h3>
                  <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-l from-transparent via-green-500 to-green-500"></div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 font-medium">
                  Votre adhésion "{currentNft.name}" a été confirmée avec succès.<br/>
                  Bienvenue dans le réseau des communes !
                </p>
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 sm:p-6 shadow-soft">
                  <div className="space-y-2">
                    <p className="text-green-800 text-sm font-medium flex items-center justify-center gap-2">
                      <span className="text-green-600">✓</span> NFT transféré vers votre portefeuille
                    </p>
                    <p className="text-green-800 text-sm font-medium flex items-center justify-center gap-2">
                      <span className="text-green-600">✓</span> Accès aux lieux communs activé
                    </p>
                    {email && (
                      <p className="text-green-800 text-sm font-medium flex items-center justify-center gap-2">
                        <span className="text-green-600">✓</span> Email de confirmation envoyé
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetAndClose}
                className="px-6 py-2 sm:px-8 sm:py-3 font-bold rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                EXPLORER LE RÉSEAU →
              </Button>
              <Button
                onClick={() => window.open('https://boutique.lasuitedumonde.com', '_blank')}
                variant="outline"
                className="px-6 py-2 sm:px-8 sm:py-3 font-bold rounded-xl border-2 hover:bg-background/50 transition-all duration-300"
                size="lg"
              >
                DÉCOUVRIR LA BOUTIQUE
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NFTPurchaseModal;