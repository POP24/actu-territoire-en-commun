import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TT } from "@/components/TooltipGlossary";

const tiers = [
  { min: 100, name: "BÂTISSEUR", votes: 1, credits: 10, badge: "Bronze" },
  { min: 500, name: "CONCEPTEUR", votes: 3, credits: 60, badge: "Argent" },
  { min: 1000, name: "ARCHITECTE", votes: 7, credits: 150, badge: "Or" },
  { min: 5000, name: "GRAND ARCHITECTE", votes: 20, credits: 500, badge: "Diamant", extra: "Naming d'un espace" },
];

export default function SubscriptionSection() {
  const [amount, setAmount] = useState<number>(1000);

  const activeTier = useMemo(() => {
    return [...tiers].reverse().find(t => amount >= t.min) || tiers[0];
  }, [amount]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">💎 NIVEAUX D'ARCHITECTURE</h2>
          <p className="text-muted-foreground">Souscription de 100€ à 10 000€ — choisissez votre niveau d'engagement</p>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-card border-border">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-left">
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Montant</div>
                <div className="text-3xl font-extrabold text-foreground">{amount.toLocaleString("fr-FR")}€</div>
                <div className="text-sm text-muted-foreground">Niveau: <span className="font-semibold">{activeTier.name}</span></div>
              </div>

              <div className="flex-1">
                <Slider
                  defaultValue={[amount]}
                  min={100}
                  max={10000}
                  step={100}
                  onValueChange={(v) => setAmount(v[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>100€</span>
                  <span>10 000€</span>
                </div>
              </div>

              <div className="text-left md:text-right">
                <div className="text-xs text-muted-foreground">Avantages</div>
                <ul className="text-sm space-y-1">
                  <li>• {activeTier.votes} voix de gouvernance</li>
                  <li>• {activeTier.credits} <TT term={"Crédits d'usage" as any}>crédits d'usage</TT>/an</li>
                  <li>• Badge {activeTier.badge} <TT term={"NFT" as any}>NFT</TT></li>
                  {activeTier.extra && <li>• {activeTier.extra}</li>}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                DEVENIR ARCHITECTE
              </Button>
              <div className="text-sm text-muted-foreground">Paiement sécurisé • Déductible 66% • <TT term={"NFT" as any}>NFT</TT> immédiat</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
