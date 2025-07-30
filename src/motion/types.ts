import React from 'react';

export interface MotionComponentProps extends React.SVGProps<SVGSVGElement> {
  /** Duration of the animation in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Whether the animation should loop infinitely */
  loop?: boolean;
  /** Custom CSS class name */
  className?: string;
  /** Size of the icon (width and height) */
  size?: number | string;
  /** Color of the icon */
  color?: string;
  /** Animation easing function */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface KeyframeAnimation {
  [key: string]: string | number;
}

export interface AnimationConfig {
  keyframes: KeyframeAnimation[];
  duration: number;
  delay?: number;
  easing?: string;
  iterationCount?: number | 'infinite';
} 