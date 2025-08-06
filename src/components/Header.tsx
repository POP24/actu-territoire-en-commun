import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" alt="Les Communes Logo" className="w-16 h-16 rounded-lg" />
            <span className="text-xl font-bold text-foreground">Les Communes</span>
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