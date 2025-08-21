import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Logo = () => {
  const navigate = useNavigate();
  const [currentSite, setCurrentSite] = useState<"sdm" | "immobilier">("sdm");
  const [showSwitcher, setShowSwitcher] = useState(false);
  
  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const switchSite = (site: "sdm" | "immobilier") => {
    if (site === "immobilier") {
      window.open("https://www.lasuitedumonde.com", "_blank");
    } else {
      setCurrentSite(site);
      setShowSwitcher(false);
      goToHome();
    }
  };

  const currentGenette = currentSite === "sdm" 
    ? "/lovable-uploads/973e07ed-dcc4-4462-85a3-93d96128d424.png"
    : "/lovable-uploads/f428c001-2a4a-4dab-a05d-5560037b5e58.png";

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 group relative">
      {/* Logo genette avec switcher */}
      <div className="relative">
        <button 
          onClick={() => setShowSwitcher(!showSwitcher)}
          className="transition-transform duration-200 group-hover:scale-110 relative"
        >
          <img 
            src={currentGenette}
            alt="Genette Logo" 
            className="h-8 sm:h-12 md:h-14 rounded-lg shadow-sm" 
          />
          <ChevronDown className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full p-0.5 shadow-sm" />
        </button>

        {/* Site Switcher Dropdown */}
        {showSwitcher && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-[200px]">
            <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Nos Sites
            </div>
            <button
              onClick={() => switchSite("sdm")}
              className={`w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 transition-colors ${
                currentSite === "sdm" ? "bg-blue-50 text-blue-700" : "text-gray-700"
              }`}
            >
              <img 
                src="/lovable-uploads/973e07ed-dcc4-4462-85a3-93d96128d424.png"
                alt="SDM DAO" 
                className="w-6 h-6 rounded mr-3"
              />
              <div>
                <div className="font-medium">SDM DAO</div>
                <div className="text-xs text-gray-500">Communes Imaginées</div>
              </div>
            </button>
            <button
              onClick={() => switchSite("immobilier")}
              className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 transition-colors text-gray-700"
            >
              <img 
                src="/lovable-uploads/f428c001-2a4a-4dab-a05d-5560037b5e58.png"
                alt="La Suite du Monde" 
                className="w-6 h-6 rounded mr-3"
              />
              <div>
                <div className="font-medium">La Suite du Monde</div>
                <div className="text-xs text-gray-500">Immobilier</div>
              </div>
            </button>
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

      {/* Click outside to close */}
      {showSwitcher && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowSwitcher(false)}
        />
      )}
    </div>
  );
};

export default Logo;