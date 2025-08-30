import React, { useEffect, useRef } from 'react';

const ChatButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Ajouter un attribut pour identifier le bouton
    button.setAttribute('data-chat-button', 'true');

    const handleMouseEnter = () => {
      button.style.background = 'linear-gradient(135deg, #ff6b35, #f7931e, #ff8500)';
      button.style.boxShadow = '0 8px 32px rgba(255, 139, 0, 0.4), 0 12px 40px rgba(255, 107, 53, 0.6)';
    };

    const handleMouseLeave = () => {
      button.style.background = '#FF8B00';
      button.style.boxShadow = '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="fixed bottom-5 right-5 w-20 h-20 rounded-full cursor-pointer z-[999999] transition-all duration-300 ease-out flex items-center justify-center hover:scale-150 hover:rotate-6"
      style={{
        backgroundColor: '#FF8B00',
        boxShadow: '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)',
      }}
    >
      <img 
        src="/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png" 
        alt="Chat" 
        className="w-16 h-16 pointer-events-none"
        style={{ objectFit: 'contain' }}
      />
    </button>
  );
};

export default ChatButton;