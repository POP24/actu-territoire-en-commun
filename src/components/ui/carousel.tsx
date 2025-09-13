import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: any;
  plugins?: any[];
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-4", className)} {...props} />
  )
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-w-0 flex-[0_0_100%]", className)} {...props} />
  )
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = ({ className, ...props }: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" className={className} {...props} aria-label="Previous">
    ‹
  </Button>
);

const CarouselNext = ({ className, ...props }: React.ComponentProps<typeof Button>) => (
  <Button variant="outline" className={className} {...props} aria-label="Next">
    ›
  </Button>
);

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
