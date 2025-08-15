import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Users, Target, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

const CampagneSection = () => {
  const [progress, setProgress] = useState(67);
  const currentAmount = 670000;
  const targetAmount = 1000000;

  const tiers = [
    {
      id: 1,
      title: "SOUTIEN",
      amount: 25,
      description: "Accès newsletter + Suivi du projet",
      icon: <Users className="w-6 h-6" />,
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
      contributors: 1247,
      available: true
    },
    {
      id: 2,
      title: "CONTRIBUTEUR",
      amount: 100,
      description: "Accès plateforme + Participation gouvernance",
      icon: <Target className="w-6 h-6" />,
      color: "bg-gradient-territorial",
      hoverColor: "hover:opacity-90",
      contributors: 523,
      available: true
    },
    {
      id: 3,
      title: "ARCHITECTE",
      amount: 500,
      description: "Tous les avantages + Formation + Mentorat",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-gradient-national",
      hoverColor: "hover:opacity-90",
      contributors: 87,
      available: true,
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
              CAMPAGNE EN COURS
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Rejoignez le mouvement pour créer un réseau de communes autonomes et durables
            </p>
            
            {/* Progress Section */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-foreground">Objectif de la campagne</span>
                  <span className="text-2xl font-black text-primary">{progress}%</span>
                </div>
                <Progress value={progress} className="h-4 mb-4" />
                <div className="flex justify-between text-base text-muted-foreground">
                  <span className="font-semibold">{currentAmount.toLocaleString()}€ collectés</span>
                  <span>Objectif: {targetAmount.toLocaleString()}€</span>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold">Fin de campagne :</span> 31 Mars 2025
                </div>
              </div>
            </div>
          </div>

          {/* Tiers Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier) => (
              <div 
                key={tier.id} 
                className={`relative bg-card rounded-2xl p-8 shadow-elegant border border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      POPULAIRE
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${tier.color} text-white rounded-full mb-6`}>
                    {tier.icon}
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground mb-2">
                    {tier.title}
                  </h3>
                  
                  <div className="text-4xl font-black text-primary mb-2">
                    {tier.amount}€
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                  
                  <div className="text-center mb-6">
                    <span className="text-xs text-muted-foreground">
                      {tier.contributors} contributeurs
                    </span>
                  </div>
                  
                  <Button 
                    className={`w-full ${tier.color} ${tier.hoverColor} text-white font-bold py-3 rounded-xl transition-all duration-300`}
                    disabled={!tier.available}
                  >
                    {tier.available ? 'CONTRIBUER' : 'BIENTÔT DISPONIBLE'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-black text-primary mb-1">1,857</div>
                  <div className="text-sm text-muted-foreground">Contributeurs</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-primary mb-1">42</div>
                  <div className="text-sm text-muted-foreground">Jours restants</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Territoires prêts</div>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mt-6 text-sm">
              Paiement sécurisé • Remboursement garanti si objectif non atteint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampagneSection;