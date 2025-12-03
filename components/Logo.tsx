import React from 'react';

interface LogoProps {
  className?: string;
  textSize?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', textSize = 'text-xl' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none group ${className}`}>
      <img 
        src="/icons/logo.png" 
        alt="Bmswitcher Logo"
        className="w-10 h-10 rounded-xl shadow-lg shadow-blue-500/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30 object-cover"
        onError={(e) => {
          // Fallback if image is not yet uploaded
          e.currentTarget.style.display = 'none';
          const span = document.createElement('span');
          span.textContent = '🧩';
          span.className = 'text-2xl mr-2';
          e.currentTarget.parentNode?.insertBefore(span, e.currentTarget);
        }}
      />
      
      <span className={`${textSize} font-bold text-gray-900 tracking-tight font-sans`}>
        Bm<span className="text-arco-primary">Switcher</span>
      </span>
    </div>
  );
};

export default Logo;