const ToolsSection = () => {
  return (
    <section id="activation" className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-5 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 sm:left-20 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-card rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">ACTIVE TON</span>{" "}
            <span className="text-foreground">TERRITOIRE</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            Du Focalisateur à l'Autonomie Locale
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;