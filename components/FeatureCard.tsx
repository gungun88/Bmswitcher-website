import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass: string;
  illustration: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon, colorClass, illustration }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-arco hover:shadow-arco-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-100 group flex flex-col items-center text-center h-full">
      {/* Header with Icon */}
      <div className="w-full flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <div className="h-2 w-12 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
      </div>

      {/* Illustration Area */}
      <div className="w-full h-32 bg-gray-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:border-blue-50 transition-colors relative">
         {illustration}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-arco-primary transition-colors">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;