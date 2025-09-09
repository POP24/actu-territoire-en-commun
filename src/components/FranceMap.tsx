import React from 'react';
import { MapPin } from 'lucide-react';

const FranceMap = () => {
  const regions = [
    { name: 'Dordogne', x: '45%', y: '60%', status: 'active' },
    { name: 'Bretagne', x: '20%', y: '40%', status: 'future' },
    { name: 'Provence', x: '75%', y: '75%', status: 'future' },
    { name: 'Ardèche', x: '55%', y: '65%', status: 'future' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
      <div className="relative w-full h-96 mx-auto max-w-md">
        {/* Simplified France SVG outline */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* France outline */}
          <path
            d="M50 50 L150 50 L160 70 L170 90 L165 120 L170 150 L160 170 L140 180 L100 185 L70 180 L50 170 L40 150 L35 120 L40 90 L45 70 Z"
            fill="rgba(59, 130, 246, 0.1)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
          />
        </svg>

        {/* Region points */}
        {regions.map((region, index) => (
          <div
            key={region.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: region.x, top: region.y }}
          >
            <div
              className={`w-4 h-4 rounded-full shadow-lg animate-pulse ${
                region.status === 'active'
                  ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                  : 'bg-gradient-to-r from-blue-400 to-blue-600'
              }`}
            />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap">
                {region.name}
                <div
                  className={`text-xs ${
                    region.status === 'active' ? 'text-orange-600' : 'text-blue-600'
                  }`}
                >
                  {region.status === 'active' ? 'Actif' : 'À venir'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex justify-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <span className="text-sm font-medium text-gray-700">Lieux actifs</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <span className="text-sm font-medium text-gray-700">Futurs lieux</span>
        </div>
      </div>
    </div>
  );
};

export default FranceMap;