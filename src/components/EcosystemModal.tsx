import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EcosystemModal: React.FC<EcosystemModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-black/90 border-cyan-400/20 text-cyan-100">
        <ScrollArea className="max-h-[80vh]">
          <div className="p-6">
            <h2 className="text-xl font-bold text-cyan-300 mb-6 text-center">ÉCOSYSTÈME DES COMMUNS</h2>
            <p className="text-center text-cyan-200 mb-8">Les réseaux qui tissent l'autonomie territoriale</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Terres & Agriculture */}
              <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-lg mb-4">🌾 Terres & Agriculture</h4>
                <ul className="text-cyan-100 space-y-2">
                  <li>• Terre de Liens</li>
                  <li>• Ouvre Ta Ferme</li>
                  <li>• CIVAM</li>
                  <li>• Fermes d'Avenir</li>
                </ul>
              </div>
              
              {/* Outils Libres */}
              <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-lg mb-4">💻 Outils Libres</h4>
                <ul className="text-cyan-100 space-y-2">
                  <li>• Cagette.net</li>
                  <li>• Decidim</li>
                  <li>• Framasoft</li>
                  <li>• Open Food France</li>
                </ul>
              </div>
              
              {/* Financement */}
              <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-lg mb-4">💰 Financement</h4>
                <ul className="text-cyan-100 space-y-2">
                  <li>• Le Milliard</li>
                  <li>• BlueBees</li>
                  <li>• Zeste</li>
                </ul>
              </div>
              
              {/* Réseaux */}
              <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/30">
                <h4 className="text-cyan-300 font-semibold text-lg mb-4">🤝 Réseaux</h4>
                <ul className="text-cyan-100 space-y-2">
                  <li>• France Tiers-Lieux</li>
                  <li>• Coopcycle</li>
                  <li>• Mobicoop</li>
                  <li>• Colibris</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="px-8 py-3 bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/50 font-semibold text-base"
              >
                SE LISTER COMME PARTENAIRE
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EcosystemModal;