import communityGathering from "/lovable-uploads/0a3e519a-7871-4f9d-9d79-393c652214ee.png";
import heroPortrait from "/lovable-uploads/53182d9e-f20d-4927-8092-8aefbc7458f6.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
        
        {/* Border effect */}
        <div className="absolute -inset-1 rounded-xl opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"></div>
          <div className="absolute inset-1 bg-background rounded-xl"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-8 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute -top-4 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/4 -left-6 w-1 h-1 bg-accent rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 -right-6 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute -bottom-4 left-1/3 w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Main image container */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
          <img 
            src={communityGathering} 
            alt="Rassemblement communautaire"
            className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
          />
          
          <img 
            src={heroPortrait} 
            alt="Portrait mystique"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl z-10 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/10 to-secondary/20 rounded-xl z-20 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;