import { Button } from "@/components/ui/button";

interface HeroTitleProps {
  className?: string;
}

const HeroTitle = ({ className = "" }: HeroTitleProps) => {
  return (
    <div className={`space-y-4 sm:space-y-6 ${className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
        Le Réseau des{" "}
        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Communes
        </span>
      </h1>
      
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
        Système d'Activation Territoriale
      </h2>
    </div>
  );
};

export default HeroTitle;