import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/" className="transition-transform hover:scale-105">
        <img 
          src="/lovable-uploads/78e2c716-3ddd-4f91-a2d2-ac34b20dad6f.png" 
          alt="Logo" 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg shadow-sm" 
        />
      </Link>
      <div className="flex flex-col">
        <Link to="/" className="transition-transform hover:scale-105">
          <img 
            src="/lovable-uploads/c46d5cc1-ebb1-4b65-bce3-cb7de3d3223a.png" 
            alt="La Suite du Monde" 
            className="h-6 sm:h-9" 
          />
        </Link>
        <span className="text-sm sm:text-base font-bold text-blue-600 tracking-wider">
          COMMUNE IMAGINÉE
        </span>
      </div>
    </div>
  );
};

export default Logo;