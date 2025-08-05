import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-lg font-medium mb-4 text-white/80 tracking-wide uppercase">
            Un Réseau d'Avenir
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Le Réseau des
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Communes
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white/90">
            Système d'Activation Territoriale
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Nous fédérons <strong>10 000 pionniers</strong> pour lever <strong>1 million d'euros</strong>.
            <br />
            Cet argent finance des activateurs territoriaux qui créent des communes autonomes.
          </p>
          
          <Button variant="cta" size="lg" className="text-lg px-12 py-4">
            Rejoindre le Mouvement
          </Button>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;