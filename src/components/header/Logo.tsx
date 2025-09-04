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
    <div className="flex items-center space-x-2 sm:space-x-4">
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={handleLogoClick} 
          className="transition-transform duration-200 hover:scale-110"
        >
          <img 
            src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" 
            alt="Logo" 
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg shadow-sm" 
          />
        </button>
        
        {showDropdown && (
          <div className="absolute top-full left-[-8px] sm:left-0 mt-2 bg-popover border border-border rounded-lg shadow-xl p-1 z-[9999] animate-fade-in w-14 sm:w-16">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => window.location.href = 'https://test24.lasuitedumonde.com'}
                className="p-1 rounded-md hover:bg-blue-500/20 transition-colors group w-full flex items-center justify-center"
                title="Immobilier"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/fb0f9c64-f0f8-419f-bd77-e9f05ff7a3ae.png" 
                    alt="Immobilier" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              </button>
              <button 
                onClick={() => window.location.href = 'https://boutique.lasuitedumonde.com'}
                className="p-1 rounded-md hover:bg-blue-500/20 transition-colors group w-full flex items-center justify-center"
                title="Boutique"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f616929d-9295-4444-954e-21b6a06cf62b.png" 
                    alt="Boutique" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              </button>
              <button 
                onClick={() => window.location.href = 'https://app.lasuitedumonde.com'}
                className="p-1 rounded-md hover:bg-blue-500/20 transition-colors group w-full flex items-center justify-center"
                title="Investissement"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/6090480e-da46-4622-8b6f-07293e7bcdb8.png" 
                    alt="Investissement" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                  />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center transition-transform duration-200 hover:scale-105">
        <button onClick={goToHome} className="transition-transform duration-200">
          <img 
            src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" 
            alt="La Suite du Monde" 
            className="h-6 sm:h-9 md:h-10" 
          />
        </button>
        <span className="text-xs sm:text-sm md:text-base font-bold text-blue-700 tracking-wider text-center">
          ASSOCIATION
        </span>
      </div>
    </div>
  );
};

export default Logo;