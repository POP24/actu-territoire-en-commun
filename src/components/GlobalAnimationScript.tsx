import { useEffect } from 'react';

const GlobalAnimationScript = () => {
  useEffect(() => {
    console.log('🚀 ANIMATIONS: Initialisation...');
    
    // Force un refresh du DOM
    setTimeout(() => {
      console.log('🔧 ANIMATIONS: Configuration des observers...');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('🎯 VISIBLE:', entry.target.classList.toString().substring(0, 50));
              entry.target.classList.add('in-view');
              
              // Force un repaint
              (entry.target as HTMLElement).style.willChange = 'transform, opacity';
              setTimeout(() => {
                (entry.target as HTMLElement).style.willChange = 'auto';
              }, 1000);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -20px 0px'
        }
      );

      // Trouver tous les éléments à animer
      const elements = document.querySelectorAll(`
        .animate-on-scroll,
        .animate-on-scroll-left,
        .animate-on-scroll-right,
        .animate-on-scroll-scale
      `);

      console.log('📊 ÉLÉMENTS TROUVÉS:', elements.length);

      elements.forEach((el, index) => {
        observer.observe(el);
        console.log(`📍 Observer ${index + 1}: ${el.className.substring(0, 30)}...`);
      });

      // Forcer l'animation immédiate des éléments dans le viewport
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          console.log('🚀 FORCE ANIMATION:', el.className.substring(0, 30));
          el.classList.add('in-view');
        }
      });

    }, 100);

  }, []);

  return null; // Ce composant ne rend rien
};

export default GlobalAnimationScript;