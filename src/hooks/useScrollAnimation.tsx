import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  staggerDelay?: number;
}

export const useScrollAnimation = (
  className: string = 'in-view',
  options: UseScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 100
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Ajouter un délai pour l'effet stagger si plusieurs éléments
            setTimeout(() => {
              entry.target.classList.add(className);
            }, index * staggerDelay);
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove(className);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [className, threshold, rootMargin, triggerOnce, staggerDelay]);

  return elementRef;
};

// Hook spécialisé pour animer plusieurs éléments avec effet cascade
export const useScrollAnimationMultiple = (
  selector: string,
  className: string = 'in-view',
  options: UseScrollAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 100
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = Array.from(elements).indexOf(element);
            
            // Effet cascade avec délai progressif
            setTimeout(() => {
              element.classList.add(className);
            }, index * staggerDelay);
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove(className);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [selector, className, threshold, rootMargin, triggerOnce, staggerDelay]);

  return containerRef;
};

// Hook pour animations au survol
export const useHoverAnimation = (animationClass: string) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      element.classList.add(animationClass);
    };

    const handleMouseLeave = () => {
      element.classList.remove(animationClass);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animationClass]);

  return elementRef;
};

// Hook pour animations séquentielles
export const useSequentialAnimation = (
  elements: string[],
  baseDelay: number = 200
) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    elements.forEach((selector, index) => {
      const element = container.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.classList.add('animate-fade-in-up');
        }, index * baseDelay);
      }
    });
  }, [elements, baseDelay]);

  return containerRef;
};