import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface MembershipSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMembership: (type: "local" | "architect") => void;
}

const MembershipSelectionModal = ({ isOpen, onClose, onSelectMembership }: MembershipSelectionModalProps) => {
  const handleSelectLocal = () => {
    onSelectMembership("local");
    onClose();
  };

  const handleSelectArchitect = () => {
    onSelectMembership("architect");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-lg lg:max-w-2xl max-h-[95vh] overflow-y-auto p-3 sm:p-6" aria-describedby="membership-selection-description">
        <DialogHeader>
          <DialogTitle className="text-center mb-2 sm:mb-6">
              <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8 mb-2 sm:mb-3">
              <div className="hidden sm:block flex-1 h-1 bg-gradient-to-r from-transparent via-gray-700 to-gray-700 rounded-full shadow-md"></div>
              <h2 className="text-sm sm:text-xl lg:text-2xl font-black leading-tight tracking-wide text-center text-foreground px-1 sm:px-8 lg:px-12 drop-shadow-sm">
                CHOISISSEZ VOTRE <span className="text-foreground font-black">ADHÉSION</span>
              </h2>
              <div className="hidden sm:block flex-1 h-1 bg-gradient-to-l from-transparent via-gray-700 to-gray-700 rounded-full shadow-md"></div>
            </div>
          </DialogTitle>
          <div id="membership-selection-description" className="sr-only">
            Sélectionnez le type d'adhésion qui vous convient le mieux
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-8">
          {/* Usager Local */}
          <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-xl sm:rounded-2xl p-2 sm:p-5 lg:p-8 border border-border/20 hover:border-primary/30 transition-all duration-500 cursor-pointer group overflow-hidden shadow-soft hover:shadow-elegant"
               onClick={handleSelectLocal}>
            
            {/* Futuristic background pattern */}
            <div className="hidden sm:block absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-4 right-4 w-32 h-32 border border-primary/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-primary/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full"></div>
            </div>
            
            {/* Geometric accent */}
            <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rotate-45 rounded-sm"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-3 sm:mb-8">
                {/* Tech-inspired icon replacement */}
                <div className="w-8 h-8 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg rotate-3 shadow-lg"></div>
                  <div className="absolute inset-1 bg-background rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-8 sm:h-8 border-2 border-primary rounded-sm relative">
                      <div className="absolute inset-1 sm:inset-2 bg-primary/20 rounded-sm"></div>
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm sm:text-lg lg:text-xl font-black text-foreground mb-1 sm:mb-3 tracking-tight">USAGER LOCAL</h3>
                <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-primary/10 rounded-full mb-1 sm:mb-2">
                  <span className="text-sm sm:text-xl lg:text-2xl font-black text-primary">A PARTIR DE 10€</span>
                </div>
              </div>

              <div className="space-y-1 sm:space-y-3 mb-3 sm:mb-6">
                <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2">Accès Privilégié</h4>
                <div className="space-y-1 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Votez sur les programmes d'animation</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Proposer et rejoindre des projets</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Créer des événements locaux</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Trésor collectif local</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-primary to-primary/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Espaces communs</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSelectLocal}
                className="w-full btn-cta-blue font-semibold text-xs sm:text-base py-2 sm:py-4 group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">ADHÉSION LOCALE</span>
              </Button>
            </div>
          </div>

          {/* Architecte Réseau */}
          <div className="relative bg-gradient-to-br from-card via-background to-muted/50 rounded-xl sm:rounded-2xl p-2 sm:p-5 lg:p-8 border border-border/20 hover:border-green-brand/30 transition-all duration-500 cursor-pointer group overflow-hidden shadow-soft hover:shadow-elegant"
               onClick={handleSelectArchitect}>
            
            {/* Futuristic background pattern */}
            <div className="hidden sm:block absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-4 right-4 w-32 h-32 border border-green-brand/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-green-brand/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-brand/10 rounded-full"></div>
            </div>
            
            {/* Premium indicator */}
            <div className="hidden sm:block absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-gold to-gold-dark rounded-full text-xs font-bold text-white transform rotate-12">
              PREMIUM
            </div>
            
            {/* Geometric accent */}
            <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-brand/20 to-green-brand/10 rotate-45 rounded-sm"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-3 sm:mb-8">
                {/* Tech-inspired icon replacement */}
                <div className="w-8 h-8 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-brand to-green-dark rounded-lg rotate-3 shadow-lg"></div>
                  <div className="absolute inset-1 bg-background rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-8 sm:h-8 border-2 border-green-brand rounded-sm relative">
                      <div className="absolute inset-0.5 sm:inset-1 border border-green-brand/50 rounded-sm"></div>
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1 h-1 sm:w-2 sm:h-2 bg-green-brand rounded-sm"></div>
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-brand/70 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm sm:text-lg lg:text-xl font-black text-foreground mb-1 sm:mb-3 tracking-tight">ARCHITECTE RÉSEAU</h3>
                <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-green-brand/10 rounded-full mb-1 sm:mb-2">
                  <span className="text-sm sm:text-xl lg:text-2xl font-black text-green-brand">100€</span>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">10 000 accès disponibles</div>
              </div>

              <div className="space-y-1 sm:space-y-4 mb-3 sm:mb-8">
                <h4 className="font-bold text-foreground text-xs sm:text-base border-b border-border pb-1 sm:pb-2">Gouvernance Réseau</h4>
                <div className="space-y-1 sm:space-y-3">
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Privilèges Usager Local</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Gouvernance réseau</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Création territoires</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Commission développement</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-6 bg-gradient-to-b from-green-brand to-green-brand/50 mr-2 sm:mr-4 rounded-full"></div>
                    <span className="font-medium">Formation exclusive</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSelectArchitect}
                className="w-full btn-cta-green font-semibold text-xs sm:text-base py-2 sm:py-4 group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">ADHÉSION ARCHITECTE</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-3 sm:mt-8">
          <Button 
            onClick={onClose}
            variant="outline"
            className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm"
          >
            Annuler
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipSelectionModal;