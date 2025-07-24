import React from 'react';

// Import all SVG icons
import BinaryCodeSvg from '../icons/BinaryCode.svg';
import CodeAgentSvg from '../icons/CodeAgent.svg';
import EnterDoorSvg from '../icons/EnterDoor.svg';
import FilmAgentSvg from '../icons/FilmAgent.svg';
import HealthAgentSvg from '../icons/HealthAgent.svg';
import MathAgentSvg from '../icons/MathAgent.svg';
import MatrixCubeSvg from '../icons/MatrixCube.svg';
import MatrixPillSvg from '../icons/MatrixPill.svg';
import NavAgentSvg from '../icons/NavAgent.svg';
import NeoGlassesBlackSvg from '../icons/NeoGlasses_black.svg';
import NeoGlassesWhiteSvg from '../icons/NeoGlasses_white.svg';
import NeoLensSvg from '../icons/NeoLens.svg';
import ResearchAgentSvg from '../icons/ResearchAgent.svg';
import ScholarAgentSvg from '../icons/ScholarAgent.svg';
import SearchAgentSvg from '../icons/SearchAgent.svg';
import SecurityAgentSvg from '../icons/SecurityAgent.svg';
import SupportAgentSvg from '../icons/SupportAgent.svg';
import ThinkingAgentSvg from '../icons/ThinkingAgent.svg';
import WhiteRabbitSvg from '../icons/WhiteRabbit.svg';

// Common props interface for all icon components
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

// Helper function to create icon component
const createIconComponent = (SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) => {
  return React.forwardRef<SVGSVGElement, IconProps>(({ size = 24, color, ...props }, ref) => (
    <SvgComponent
      ref={ref}
      width={size}
      height={size}
      fill={color}
      {...props}
    />
  ));
};

// Create all icon components
export const BinaryCode = createIconComponent(BinaryCodeSvg);
export const CodeAgent = createIconComponent(CodeAgentSvg);
export const EnterDoor = createIconComponent(EnterDoorSvg);
export const FilmAgent = createIconComponent(FilmAgentSvg);
export const HealthAgent = createIconComponent(HealthAgentSvg);
export const MathAgent = createIconComponent(MathAgentSvg);
export const MatrixCube = createIconComponent(MatrixCubeSvg);
export const MatrixPill = createIconComponent(MatrixPillSvg);
export const NavAgent = createIconComponent(NavAgentSvg);
export const NeoGlassesBlack = createIconComponent(NeoGlassesBlackSvg);
export const NeoGlassesWhite = createIconComponent(NeoGlassesWhiteSvg);
export const NeoLens = createIconComponent(NeoLensSvg);
export const ResearchAgent = createIconComponent(ResearchAgentSvg);
export const ScholarAgent = createIconComponent(ScholarAgentSvg);
export const SearchAgent = createIconComponent(SearchAgentSvg);
export const SecurityAgent = createIconComponent(SecurityAgentSvg);
export const SupportAgent = createIconComponent(SupportAgentSvg);
export const ThinkingAgent = createIconComponent(ThinkingAgentSvg);
export const WhiteRabbit = createIconComponent(WhiteRabbitSvg);

// Export icon names for programmatic access
export const iconNames = [
  'BinaryCode',
  'CodeAgent',
  'EnterDoor',
  'FilmAgent',
  'HealthAgent',
  'MathAgent',
  'MatrixCube',
  'MatrixPill',
  'NavAgent',
  'NeoGlassesBlack',
  'NeoGlassesWhite',
  'NeoLens',
  'ResearchAgent',
  'ScholarAgent',
  'SearchAgent',
  'SecurityAgent',
  'SupportAgent',
  'ThinkingAgent',
  'WhiteRabbit',
] as const;

export type IconName = typeof iconNames[number];

// Icon component map for dynamic rendering
export const iconComponents: Record<IconName, React.ComponentType<IconProps>> = {
  BinaryCode,
  CodeAgent,
  EnterDoor,
  FilmAgent,
  HealthAgent,
  MathAgent,
  MatrixCube,
  MatrixPill,
  NavAgent,
  NeoGlassesBlack,
  NeoGlassesWhite,
  NeoLens,
  ResearchAgent,
  ScholarAgent,
  SearchAgent,
  SecurityAgent,
  SupportAgent,
  ThinkingAgent,
  WhiteRabbit,
};

// Dynamic icon component
export const Icon: React.FC<IconProps & { name: IconName }> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];
  return IconComponent ? <IconComponent {...props} /> : null;
}; 