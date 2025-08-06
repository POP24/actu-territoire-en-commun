import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" alt="Logo" className="w-16 h-16 rounded-lg" />
            <div className="flex flex-col">
              <img src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" alt="La Suite du Monde" className="h-8" />
              <span className="text-sm font-bold bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent ml-20">COMMUNE IMAGINÉE</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-smooth">Accueil</a>
            <a href="#territoire" className="text-foreground hover:text-primary transition-smooth">Territoires</a>
            <a href="#financement" className="text-foreground hover:text-primary transition-smooth">Financement</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Se connecter
            </Button>
            <Button variant="hero">
              Rejoindre
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;