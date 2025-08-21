import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 group">
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={handleLogoClick} 
          className="transition-transform duration-200 group-hover:scale-110"
        >
          <img 
            src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" 
            alt="Logo" 
            className="h-8 sm:h-12 md:h-14 rounded-lg shadow-sm" 
          />
        </button>
        
        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-background/95 backdrop-blur-sm rounded-md shadow-lg p-1 z-50 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <button 
                onClick={goToHome}
                className="p-1 rounded hover:bg-accent/50 transition-colors"
              >
                <img 
                  src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" 
                  alt="SDM DAO" 
                  className="h-5 w-5 rounded" 
                />
              </button>
              <button 
                onClick={() => window.open('https://www.lasuitedumonde.com', '_blank')}
                className="p-1 rounded hover:bg-accent/50 transition-colors"
              >
                <img 
                  src="/lovable-uploads/b128d8a7-0fb3-437b-b29a-1d76f7cca438.png" 
                  alt="La Suite du Monde" 
                  className="h-5 w-5 rounded" 
                />
              </button>
              <button 
                className="p-1 rounded hover:bg-accent/50 transition-colors opacity-50 cursor-not-allowed"
              >
                <img 
                  src="/lovable-uploads/a101e879-52d2-4f3b-8b81-6609abff5b5f.png" 
                  alt="Autre site" 
                  className="h-5 w-5 rounded" 
                />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col transition-transform duration-200 group-hover:scale-105">
        <button onClick={goToHome} className="transition-transform duration-200">
          <img 
            src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" 
            alt="La Suite du Monde" 
            className="h-4 sm:h-6 md:h-9" 
          />
        </button>
        <span className="text-xs sm:text-sm md:text-base font-bold text-blue-700 tracking-wider">
          COMMUNE IMAGINÉE
        </span>
      </div>
    </div>
  );
};

export default Logo;