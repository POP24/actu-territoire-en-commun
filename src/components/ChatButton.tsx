import React, { useState, useRef } from 'react';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const landbotRef = useRef<any>(null);

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isOpen) return;
    
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    
    // Attendre que Landbot soit disponible
    const initLandbot = () => {
      if ((window as any).Landbot && !landbotRef.current) {
        try {
          landbotRef.current = new (window as any).Landbot.Popup({
            configUrl: 'https://storage.googleapis.com/landbot.pro/v3/H-2624889-3OOHST8FZXKRYDFL/index.json',
          });
          landbotRef.current.open();
        } catch (error) {
          console.error('Erreur Landbot:', error);
          handleClose();
        }
      } else if (!(window as any).Landbot) {
        setTimeout(initLandbot, 100);
      } else if (landbotRef.current) {
        landbotRef.current.open();
      }
    };

    setTimeout(initLandbot, 200);
  };

  const handleClose = () => {
    if (landbotRef.current) {
      try {
        landbotRef.current.close();
      } catch (error) {
        console.log('Landbot déjà fermé');
      }
    }
    
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    
    // Nettoyer les éléments Landbot du DOM
    setTimeout(() => {
      const landbotElements = document.querySelectorAll('[class*="Landbot"], [class*="sc-"], .LandbotPopup');
      landbotElements.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    }, 100);
  };

  // Gestion de la touche Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Bouton simplifié avec image en background */}
      <button
        onClick={handleClick}
        className="fixed bottom-5 right-5 w-20 h-20 rounded-full cursor-pointer z-[999999] transition-all duration-300 ease-out flex items-center justify-center hover:scale-150 hover:rotate-6"
        style={{
          padding: '8px',
          backgroundColor: '#FF8B00',
          boxShadow: '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)',
          backgroundImage: 'url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)',
          backgroundSize: '64px 64px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e, #ff8500), url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)';
          e.currentTarget.style.backgroundSize = '100%, 64px 64px';
          e.currentTarget.style.backgroundRepeat = 'no-repeat, no-repeat';
          e.currentTarget.style.backgroundPosition = 'center, center';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 139, 0, 0.4), 0 12px 40px rgba(255, 107, 53, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#FF8B00 url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)';
          e.currentTarget.style.backgroundSize = '64px 64px';
          e.currentTarget.style.backgroundRepeat = 'no-repeat';
          e.currentTarget.style.backgroundPosition = 'center';
          e.currentTarget.style.boxShadow = '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)';
        }}
      />

      {/* Overlay et bouton fermer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/5 z-[999998]">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-[1000000] w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors text-lg font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ChatButton;