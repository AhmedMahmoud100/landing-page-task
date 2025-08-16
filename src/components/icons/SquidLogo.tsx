import React from 'react';

interface SquidLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const SquidLogo: React.FC<SquidLogoProps> = ({ 
  className = "text-white", 
  width = 24, 
  height = 24 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <path 
        d="M16 16C16 17.1046 14.2091 18 12 18C9.79086 18 8 17.1046 8 16" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
    </svg>
  );
};

export default SquidLogo;