import React from 'react';

const ChatButton = () => {
  return (
    <button
      className="fixed bottom-5 right-5 w-20 h-20 rounded-full cursor-pointer z-[999999] transition-all duration-300 ease-out flex items-center justify-center hover:scale-150 hover:rotate-6"
      style={{
        backgroundColor: '#FF8B00',
        boxShadow: '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)',
        backgroundImage: 'url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)',
        backgroundSize: '64px 64px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onMouseEnter={(e) => {
        // Garder l'image en superposition du gradient
        e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #ff6b35, #f7931e, #ff8500), url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)';
        e.currentTarget.style.backgroundSize = '100%, 64px 64px';
        e.currentTarget.style.backgroundRepeat = 'no-repeat, no-repeat';
        e.currentTarget.style.backgroundPosition = 'center, center';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 139, 0, 0.4), 0 12px 40px rgba(255, 107, 53, 0.6)';
      }}
      onMouseLeave={(e) => {
        // Remettre l'état normal avec l'image
        e.currentTarget.style.backgroundImage = 'url(/lovable-uploads/5817d468-330a-4484-82c1-8f805fced65b.png)';
        e.currentTarget.style.backgroundSize = '64px 64px';
        e.currentTarget.style.backgroundRepeat = 'no-repeat';
        e.currentTarget.style.backgroundPosition = 'center';
        e.currentTarget.style.boxShadow = '0 0 0 2px #FF8B00, 0 4px 12px rgba(255, 139, 0, 0.3)';
      }}
    />
  );
};

export default ChatButton;