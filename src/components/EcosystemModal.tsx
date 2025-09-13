import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';

interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EcosystemModal: React.FC<EcosystemModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-black/90 border-cyan-400/20 text-cyan-100 p-0">
        <div className="max-h-[90vh] sm:max-h-[80vh] overflow-auto">
          <div className="p-4 sm:p-6">{/* ... keep existing code (modal content) */}
            <h2 className="text-lg sm:text-xl font-bold text-cyan-300 mb-4 sm:mb-6 text-center">ÉCOSYSTÈME DES COMMUNS</h2>
            <p className="text-center text-cyan-200 mb-6 sm:mb-8 text-sm">Les réseaux qui tissent l'autonomie territoriale</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Terres & Agriculture */}
              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4">🌾 Terres & Agriculture</h4>
                <ul className="text-cyan-100 space-y-1 sm:space-y-2 text-sm">
                  <li>• Terre de Liens</li>
                  <li>• Ouvre Ta Ferme</li>
                  <li>• CIVAM</li>
                  <li>• Fermes d'Avenir</li>
                </ul>
              </div>
              
              {/* Outils Libres */}
              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4">💻 Outils Libres</h4>
                <ul className="text-cyan-100 space-y-1 sm:space-y-2 text-sm">
                  <li>• Cagette.net</li>
                  <li>• Decidim</li>
                  <li>• Framasoft</li>
                  <li>• Open Food France</li>
                </ul>
              </div>
              
              {/* Financement */}
              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4">💰 Financement</h4>
                <ul className="text-cyan-100 space-y-1 sm:space-y-2 text-sm">
                  <li>• Le Milliard</li>
                  <li>• BlueBees</li>
                  <li>• Zeste</li>
                </ul>
              </div>
              
              {/* Réseaux */}
              <div className="bg-black/50 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4">🤝 Réseaux</h4>
                <ul className="text-cyan-100 space-y-1 sm:space-y-2 text-sm">
                  <li>• France Tiers-Lieux</li>
                  <li>• Coopcycle</li>
                  <li>• Mobicoop</li>
                  <li>• Colibris</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="px-6 sm:px-8 py-2 sm:py-3 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50 font-semibold text-sm sm:text-base"
              >
                SE LISTER COMME PARTENAIRE
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EcosystemModal;