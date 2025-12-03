import React from 'react';
import { Shuffle } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', iconSize = 20, textSize = 'text-xl' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none group ${className}`}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-arco-primary to-blue-400 text-white shadow-lg shadow-blue-500/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30 overflow-hidden">
         {/* Subtle internal shine effect */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         
         <Shuffle size={iconSize} strokeWidth={2.5} className="transition-transform duration-500 group-hover:rotate-180" />
      </div>
      <span className={`${textSize} font-bold text-gray-900 tracking-tight font-sans`}>
        Bm<span className="text-arco-primary">Switcher</span>
      </span>
    </div>
  );
};

export default Logo;