import { useEffect, useState } from 'react';

const TestAnimation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Test d'animation simple
    setTimeout(() => {
      console.log('🧪 TEST: Animation simple déclenchée');
      setVisible(true);
    }, 500);
  }, []);

  return (
    <div 
      className={`
        fixed bottom-4 right-4 z-[9999] 
        w-16 h-16 bg-red-500 rounded-full 
        flex items-center justify-center
        text-white font-bold text-lg
        transition-all duration-1000 ease-out
        ${visible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-50 translate-y-8'
        }
      `}
    >
      ✨
    </div>
  );
};

export default TestAnimation;