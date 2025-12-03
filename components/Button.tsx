import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg";
  
  const variants = {
    primary: "bg-arco-primary hover:bg-arco-primaryHover text-white shadow-arco hover:shadow-arco-hover focus:ring-blue-300 border border-transparent",
    secondary: "bg-blue-50 text-arco-primary hover:bg-blue-100 border border-transparent",
    outline: "bg-transparent border border-gray-300 text-arco-text hover:border-arco-primary hover:text-arco-primary",
    text: "bg-transparent text-arco-text hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;