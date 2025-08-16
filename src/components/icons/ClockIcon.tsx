import React from 'react';

interface ClockIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ClockIcon: React.FC<ClockIconProps> = ({ 
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
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );
};

export default ClockIcon;