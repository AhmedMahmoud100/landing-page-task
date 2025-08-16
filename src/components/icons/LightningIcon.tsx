import React from 'react';

interface LightningIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const LightningIcon: React.FC<LightningIconProps> = ({ 
  className = "h-6 w-6 text-white", 
  width = 24, 
  height = 24 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      width={width}
      height={height}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M13 10V3L4 14h7v7l9-11h-7z" 
      />
    </svg>
  );
};

export default LightningIcon;