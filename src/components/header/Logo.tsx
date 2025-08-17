import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  
  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      <button onClick={goToHome} className="transition-transform hover:scale-105">
        <img 
          src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" 
          alt="Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg shadow-sm" 
        />
      </button>
      <div className="flex flex-col">
        <button onClick={goToHome} className="transition-transform hover:scale-105">
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