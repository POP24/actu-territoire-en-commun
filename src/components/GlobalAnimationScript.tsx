import { useEffect } from 'react';

const GlobalAnimationScript = () => {
  useEffect(() => {
    console.log('🎬 GlobalAnimationScript: Starting animation setup...');
    
    // Intersection Observer pour les animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('✨ Animation trigger:', entry.target.className);
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

    console.log('🔍 Found animated elements:', animatedElements.length);
    console.log('📋 Elements:', Array.from(animatedElements).map(el => el.className));

    animatedElements.forEach((el, index) => {
      console.log(`📍 Observing element ${index + 1}:`, el.className);
      observer.observe(el);
    });

    // Stagger automatique pour les éléments avec classe fade-in-stagger
    const staggerElements = document.querySelectorAll('.fade-in-stagger');
    console.log('🎭 Found stagger elements:', staggerElements.length);
    
    staggerElements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
    });

    // Test: Ajouter immédiatement les classes pour voir si elles existent
    const testElement = document.querySelector('.animate-on-scroll');
    if (testElement) {
      console.log('🧪 Testing animation classes on element:', testElement);
      testElement.classList.add('in-view');
    }

    // Nettoyage
    return () => {
      console.log('🧹 Cleaning up animation observers');
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // Ce composant ne rend rien
};

export default GlobalAnimationScript;