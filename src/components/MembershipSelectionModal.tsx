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
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">
            CHOISISSEZ VOTRE ADHÉSION
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Usager Local */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 cursor-pointer group"
               onClick={handleSelectLocal}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">USAGER LOCAL</h3>
              <div className="text-4xl font-black text-blue-700 mb-2">Prix Libre</div>
              <div className="text-lg text-gray-600 mb-4">à partir de 10€</div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900">Inclus dans votre adhésion :</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Accès aux lieux communs
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Participation aux décisions locales
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Crédits d'usage
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Support communautaire
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSelectLocal}
              className="w-full btn-cta-blue font-semibold text-lg py-3 group-hover:scale-105 transition-transform duration-300"
            >
              CHOISIR USAGER LOCAL
            </Button>
          </div>

          {/* Architecte Réseau */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200 hover:border-green-300 transition-all duration-300 cursor-pointer group"
               onClick={handleSelectArchitect}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">ARCHITECTE RÉSEAU</h3>
              <div className="text-4xl font-black text-green-700 mb-2">100€</div>
              <div className="text-lg text-gray-600 mb-4">10 000 adhésions disponibles</div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="font-semibold text-gray-900">Inclus dans votre adhésion :</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Tous les avantages Usager Local
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Droits de gouvernance réseau
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Création de nouveaux lieux
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Commission sur les adhésions
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Formation exclusive
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSelectArchitect}
              className="w-full btn-cta-green font-semibold text-lg py-3 group-hover:scale-105 transition-transform duration-300"
            >
              CHOISIR ARCHITECTE RÉSEAU
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={onClose}
            variant="outline"
            className="px-8 py-2"
          >
            Annuler
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipSelectionModal;