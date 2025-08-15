import { Button } from "@/components/ui/button";

const HeroCTA = () => {
  return (
    <div className="flex justify-center mt-8 sm:mt-12">
      <Button 
        size="lg"
        className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        ADHÉRER
      </Button>
    </div>
  );
};

export default HeroCTA;