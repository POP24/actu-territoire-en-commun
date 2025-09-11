import { useEffect } from 'react';

const GlobalAnimationScript = () => {
  useEffect(() => {
    // Intersection Observer pour les animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observer tous les éléments avec les classes d'animation
    const animatedElements = document.querySelectorAll(`
      .animate-on-scroll,
      .animate-on-scroll-left,
      .animate-on-scroll-right,
      .animate-on-scroll-scale
    `);

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    // Stagger automatique pour les éléments avec classe fade-in-stagger
    const staggerElements = document.querySelectorAll('.fade-in-stagger');
    staggerElements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
    });

    // Nettoyage
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // Ce composant ne rend rien
};

export default GlobalAnimationScript;