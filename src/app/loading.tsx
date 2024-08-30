'use client'
import React from 'react';


interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'large', 
  color = 'text-blue-500' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
         <p className="absolute text-white text-2xl font-[your-font-here] -bottom-20 tracking-wider">Loading...</p>
      <div className={`animate-spin rounded-full border-t-2 border-b-2 ${color} ${sizeClasses[size]}`}></div>
    </div>
  );
};


export default LoadingSpinner;