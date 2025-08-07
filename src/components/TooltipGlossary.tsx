import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const TERM_INFO: Record<string, string> = {
  DAO: "Organisation Autonome Décentralisée : structure où les décisions sont prises collectivement par vote, sans PDG ni hiérarchie",
  Architecte:
    "Membre fondateur qui co-construit et co-gouverne le réseau",
  Focalisateur:
    "Coordinateur territorial temporaire qui active et structure un territoire pendant 12-18 mois",
  "Crédits d'usage": "Droits de séjour dans les lieux du réseau (1 crédit = 1 nuit)",
  "Statut Fondateur":
    "Avantages exclusifs : x2 crédits annuels, vote prioritaire, badge NFT transférable",
  "Trésorerie commune":
    "Fonds collectifs gérés démocratiquement par vote blockchain",
  "Gouvernance locale":
    "Chaque territoire garde son autonomie décisionnelle tout en bénéficiant du réseau",
  NFT: "Certificat numérique de membre (transférable)"
};

export function TT({ term, children, className }: { term: keyof typeof TERM_INFO; children?: ReactNode; className?: string }) {
  const label = children ?? term;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={cn("cursor-help underline decoration-dotted underline-offset-4", className)}>{label}</span>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs text-xs leading-relaxed">
          <p>{TERM_INFO[term]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
