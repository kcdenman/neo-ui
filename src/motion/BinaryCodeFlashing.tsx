import React from 'react';
import { MotionComponentProps } from './types';

export interface BinaryCodeFlashingProps extends MotionComponentProps {
  /** Whether to add a glow effect */
  glow?: boolean;
  /** Color of the glow effect */
  glowColor?: string;
}

export const BinaryCodeFlashing: React.FC<BinaryCodeFlashingProps> = ({
  duration = 1.5,
  delay = 0,
  loop = true,
  className = '',
  size = 24,
  color = '#00FF85',
  glow = true,
  glowColor = '#00FF85',
  easing = 'ease-in-out',
  ...svgProps
}) => {
  const animationName = `binary-code-flash-${Math.random().toString(36).substr(2, 9)}`;
  const glowAnimationName = `binary-code-glow-${Math.random().toString(36).substr(2, 9)}`;
  
  const styles = `
    @keyframes ${animationName} {
      0% { 
        transform: scale(1);
        opacity: 1;
      }
      25% { 
        transform: scale(1.05);
        opacity: 0.8;
      }
      50% { 
        transform: scale(1);
        opacity: 1;
      }
      75% { 
        transform: scale(1.05);
        opacity: 0.8;
      }
      100% { 
        transform: scale(1);
        opacity: 1;
      }
    }
    
    ${glow ? `
    @keyframes ${glowAnimationName} {
      0% { 
        filter: drop-shadow(0 0 0.5px ${glowColor}) drop-shadow(0 0 1px ${glowColor});
      }
      50% { 
        filter: drop-shadow(0 0 2px ${glowColor}) drop-shadow(0 0 4px ${glowColor});
      }
      100% { 
        filter: drop-shadow(0 0 0.5px ${glowColor}) drop-shadow(0 0 1px ${glowColor});
      }
    }
    ` : ''}
    
    .${animationName} {
      transform-origin: center;
      animation: ${animationName} ${duration}s ${easing} ${delay}s ${loop ? 'infinite' : '1'} forwards;
      ${glow ? `animation: ${animationName} ${duration}s ${easing} ${delay}s ${loop ? 'infinite' : '1'} forwards, ${glowAnimationName} ${duration}s ${easing} ${delay}s ${loop ? 'infinite' : '1'} forwards;` : ''}
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
        {/* Binary 1s - filled rectangles */}
        <rect x="15" y="15" width="2" height="4" fill={color}/>
        <rect x="7" y="5" width="2" height="4" fill={color}/>
        
        {/* Binary 0s - stroke paths with white fill */}
        <path d="M18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V16Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
        <path d="M10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6V8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
        
        {/* Connecting lines */}
        <path d="M6 20H10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10H18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 14H8V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4H16V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </>
  );
}; 