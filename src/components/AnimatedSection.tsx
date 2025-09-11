import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true
}) => {
  const animationClasses = {
    'fade-up': 'animate-on-scroll',
    'slide-left': 'animate-on-scroll-left',
    'slide-right': 'animate-on-scroll-right',
    'scale': 'animate-on-scroll-scale',
    'rotate': 'animate-on-scroll'
  };

  const elementRef = useScrollAnimation('in-view', {
    threshold,
    triggerOnce,
    staggerDelay: delay
  }) as React.RefObject<HTMLDivElement>;

  const animationClass = animationClasses[animation];
  const delayClass = delay > 0 ? `stagger-${Math.min(Math.ceil(delay / 100), 8)}` : '';

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;