import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RegionProposalDialogProps {
  children: React.ReactNode;
}

const RegionProposalDialog = ({ children }: RegionProposalDialogProps) => {
  const [formData, setFormData] = useState({
    region: '',
    description: '',
    contact: '',
    type: 'camping'
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Proposition envoyée !",
      description: "Nous vous recontacterons bientôt pour étudier votre proposition.",
    });
    
    setIsOpen(false);
    setFormData({ region: '', description: '', contact: '', type: 'camping' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MapPin className="w-5 h-5 text-orange-500" />
            Proposer une région
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="region">Région / Territoire</Label>
            <Input
              id="region"
              placeholder="Ex: Ardèche, Bretagne, etc."
              value={formData.region}
              onChange={(e) => handleInputChange('region', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type de lieu souhaité</Label>
            <select
              id="type"
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              <option value="camping">Camping partagé</option>
              <option value="ferme">Ferme collective</option>
              <option value="habitat">Habitat léger</option>
              <option value="apprentissage">Espace d'apprentissage</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description de votre idée</Label>
            <Textarea
              id="description"
              placeholder="Décrivez votre vision pour ce territoire..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Votre contact</Label>
            <Input
              id="contact"
              type="email"
              placeholder="votre.email@example.com"
              value={formData.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-cta-orange flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Envoyer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegionProposalDialog;