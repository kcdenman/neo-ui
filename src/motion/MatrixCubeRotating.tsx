import React from 'react';
import { MatrixCube } from '../index';
import { MotionComponentProps } from './types';

export interface MatrixCubeRotatingProps extends MotionComponentProps {
  /** Rotation speed in degrees per second */
  rotationSpeed?: number;
  /** Rotation direction: 'clockwise' or 'counterclockwise' */
  direction?: 'clockwise' | 'counterclockwise';
}

export const MatrixCubeRotating: React.FC<MatrixCubeRotatingProps> = ({
  duration = 5,
  delay = 0,
  loop = true,
  className = '',
  size = 24,
  color = '#00FF85',
  rotationSpeed = 72, // 72 degrees per second = 5 seconds for full rotation
  direction = 'clockwise',
  ...svgProps
}) => {
  const animationName = `matrix-cube-rotate-${Math.random().toString(36).substr(2, 9)}`;
  const rotationDirection = direction === 'counterclockwise' ? -360 : 360;
  
  const styles = `
    @keyframes ${animationName} {
      from { 
        transform: rotate(0deg); 
      }
      to { 
        transform: rotate(${rotationDirection}deg); 
      }
    }
    
    .${animationName} {
      transform-origin: center;
      animation: ${animationName} ${duration}s linear ${delay}s ${loop ? 'infinite' : '1'} forwards;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <MatrixCube
        {...svgProps}
        className={`${animationName} ${className}`}
        width={size}
        height={size}
        style={{
          ...svgProps.style,
          color: color,
        }}
      />
    </>
  );
}; 