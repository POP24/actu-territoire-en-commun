import { Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Left: Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://twitter.com/lasuitedumonde" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="hidden sm:inline">@lasuitedumonde</span>
            </a>
            
            <a 
              href="https://discord.gg/lasuitedumonde" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </div>
          
          {/* Right: Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Main CTA Button */}
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-lg">
              ADHÉRER
            </Button>
            
            {/* Smaller Investment Button */}
            <a 
              href="https://www.lasuitedumonde.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-brand hover:bg-orange-dark text-white font-semibold px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <span>🏠</span>
              <span className="hidden sm:inline">IMMOBILIER</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;