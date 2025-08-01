import React from 'react';
import { MotionComponentProps } from './types';

export interface WhiteRabbitHoppingProps extends Omit<MotionComponentProps, 'rotate'> {
  /** Height of the hop in pixels */
  hopHeight?: number;
  /** Whether to add a slight rotation during hop */
  rotate?: boolean;
}

export const WhiteRabbitHopping: React.FC<WhiteRabbitHoppingProps> = ({
  duration = 1.5,
  delay = 0,
  loop = true,
  className = '',
  size = 24,
  color = '#ffffff',
  hopHeight = 8,
  rotate = true,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
  ...svgProps
}) => {
  const animationName = `white-rabbit-hop-${Math.random().toString(36).substr(2, 9)}`;
  
  const styles = `
    @keyframes ${animationName} {
      0% { 
        transform: translateY(0px) ${rotate ? 'rotate(0deg)' : ''};
      }
      20% { 
        transform: translateY(-${hopHeight * 0.3}px) ${rotate ? 'rotate(-2deg)' : ''};
      }
      40% { 
        transform: translateY(-${hopHeight}px) ${rotate ? 'rotate(-1deg)' : ''};
      }
      60% { 
        transform: translateY(-${hopHeight * 0.7}px) ${rotate ? 'rotate(0deg)' : ''};
      }
      80% { 
        transform: translateY(-${hopHeight * 0.2}px) ${rotate ? 'rotate(1deg)' : ''};
      }
      100% { 
        transform: translateY(0px) ${rotate ? 'rotate(0deg)' : ''};
      }
    }
    
    .${animationName} {
      transform-origin: center;
      animation: ${animationName} ${duration}s ${easing} ${delay}s ${loop ? 'infinite' : '1'} forwards;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <svg
        {...svgProps}
        className={`${animationName} ${className}`}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          ...svgProps.style,
        }}
      >
        {/* Ear - always neon mint green */}
        <line x1="18" y1="3" x2="18" y2="7" stroke="#00FF85" strokeWidth="2"/>
        
        {/* Rest of rabbit - uses the color prop (default white) */}
        <path d="M13 16C13.5795 15.9992 14.1467 16.1663 14.6333 16.481C15.1198 16.7958 15.5048 17.2446 15.7417 17.7735C15.9787 18.3023 16.0573 18.8884 15.9683 19.461C15.8793 20.0336 15.6263 20.5681 15.24 21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 12H18.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 21H10C8.93913 21 7.92172 20.5786 7.17157 19.8285C6.42143 19.0783 6 18.0609 6 17C6 15.1435 6.7375 13.363 8.05025 12.0503C9.36301 10.7375 11.1435 10 13 10H13.2L9.6 6.40004C9.41615 6.21619 9.27031 5.99793 9.17081 5.75772C9.07131 5.5175 9.0201 5.26004 9.0201 5.00004C9.0201 4.47494 9.2287 3.97134 9.6 3.60004C9.9713 3.22874 10.4749 3.02014 11 3.02014C11.26 3.02014 11.5175 3.07135 11.7577 3.17085C11.9979 3.27035 12.2161 3.41619 12.4 3.60004L15.8 7.00004H16C19.3 7.00004 22 9.70004 22 13V14C22 14.5305 21.7893 15.0392 21.4142 15.4143C21.0391 15.7893 20.5304 16 20 16H19C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8.54V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2C17.4696 2 16.9609 2.21071 16.5858 2.58579C16.2107 2.96086 16 3.46957 16 4V7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.6119 12.524C7.3307 12.0263 6.91318 11.6193 6.40849 11.351C5.90379 11.0826 5.33293 10.964 4.76311 11.0091C4.19329 11.0543 3.64822 11.2613 3.19207 11.6057C2.73592 11.9502 2.38767 12.4178 2.18834 12.9536C1.989 13.4893 1.94686 14.0708 2.06688 14.6297C2.1869 15.1885 2.46409 15.7015 2.86581 16.1081C3.26753 16.5148 3.77706 16.7982 4.33443 16.925C4.89179 17.0518 5.47378 17.0168 6.0119 16.8239" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  );
}; 