import React, { useState } from 'react';

const ChatButton = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [landbotReady, setLandbotReady] = useState(false);

  // Charger le script Landbot au montage du composant
  React.useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
      script.setAttribute('SameSite', 'None; Secure');
      document.head.appendChild(script);
    }
  }, []);

  // Nettoyage complet quand le composant se démonte
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      // Nettoyer tous les éléments Landbot
      const landbotElements = document.querySelectorAll('[class*="Landbot"], [class*="sc-"]');
      landbotElements.forEach(el => el.remove());
    };
  }, []);

  const handleClick = () => {
    if (isInitializing || landbotReady) return;
    
    setIsInitializing(true);
    document.body.style.overflow = 'hidden';
    
    // Initialiser Landbot seulement quand on clique
    const initLandbot = () => {
      if ((window as any).Landbot) {
        try {
          const landbot = new (window as any).Landbot.Popup({
            configUrl: 'https://storage.googleapis.com/landbot.pro/v3/H-2624889-3OOHST8FZXKRYDFL/index.json',
          });
          
          // Ouvrir le popup après un délai
          setTimeout(() => {
            landbot.open();
            setLandbotReady(true);
            setIsInitializing(false);
          }, 500);
          
        } catch (error) {
          console.error('Erreur Landbot:', error);
          handleClose();
        }
      } else {
        setTimeout(initLandbot, 200);
      }
    };

    initLandbot();
  };

  const handleClose = () => {
    setIsInitializing(false);
    setLandbotReady(false);
    document.body.style.overflow = 'unset';
    
    // Nettoyer les éléments Landbot
    setTimeout(() => {
      const landbotElements = document.querySelectorAll('[class*="Landbot"], [class*="sc-"]');
      landbotElements.forEach(el => el.remove());
    }, 100);
  };

  // Gestion de la touche Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (isInitializing || landbotReady)) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isInitializing, landbotReady]);

  return (
    <>
      {/* Bouton flottant avec votre design actuel */}
      <button
        onClick={handleClick}
        disabled={isInitializing}
        className="fixed bottom-5 right-5 w-20 h-20 p-2 bg-[#FF8B00] rounded-full cursor-pointer z-[999999] transition-all duration-300 ease-out shadow-[0_0_0_2px_#FF8B00,_0_4px_12px_rgba(255,139,0,0.3)] flex items-center justify-center hover:scale-150 hover:rotate-6 hover:bg-gradient-to-br hover:from-[#ff6b35] hover:via-[#f7931e] hover:to-[#ff8500] hover:shadow-[0_8px_32px_rgba(255,139,0,0.4),_0_12px_40px_rgba(255,107,53,0.6)] disabled:opacity-70"
      >
        <div 
          className="w-16 h-16 bg-cover bg-no-repeat bg-center rounded-full"
          style={{
            backgroundImage: 'url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)'
          }}
        />
      </button>

      {/* Overlay seulement quand Landbot est prêt */}
      {landbotReady && (
        <div className="fixed inset-0 bg-black/5 z-[999998]">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-[1000000] w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ChatButton;