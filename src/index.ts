import React from 'react';

// Import all SVG icons
import BinaryCodeSvg from './icons/BinaryCode.svg';
import CodeAgentSvg from './icons/CodeAgent.svg';
import EnterDoorSvg from './icons/EnterDoor.svg';
import FilmAgentSvg from './icons/FilmAgent.svg';
import HealthAgentSvg from './icons/HealthAgent.svg';
import MathAgentSvg from './icons/MathAgent.svg';
import MatrixCubeSvg from './icons/MatrixCube.svg';
import MatrixPillSvg from './icons/MatrixPill.svg';
import NavAgentSvg from './icons/NavAgent.svg';
import NeoGlassesBlackSvg from './icons/NeoGlasses_black.svg';
import NeoGlassesWhiteSvg from './icons/NeoGlasses_white.svg';
import NeoLensSvg from './icons/NeoLens.svg';
import ResearchAgentSvg from './icons/ResearchAgent.svg';
import ScholarAgentSvg from './icons/ScholarAgent.svg';
import SearchAgentSvg from './icons/SearchAgent.svg';
import SecurityAgentSvg from './icons/SecurityAgent.svg';
import SupportAgentSvg from './icons/SupportAgent.svg';
import ThinkingAgentSvg from './icons/ThinkingAgent.svg';
import WhiteRabbitSvg from './icons/WhiteRabbit.svg';

// Export all icons as named exports
export const BinaryCode = BinaryCodeSvg;
export const CodeAgent = CodeAgentSvg;
export const EnterDoor = EnterDoorSvg;
export const FilmAgent = FilmAgentSvg;
export const HealthAgent = HealthAgentSvg;
export const MathAgent = MathAgentSvg;
export const MatrixCube = MatrixCubeSvg;
export const MatrixPill = MatrixPillSvg;
export const NavAgent = NavAgentSvg;
export const NeoGlassesBlack = NeoGlassesBlackSvg;
export const NeoGlassesWhite = NeoGlassesWhiteSvg;
export const NeoLens = NeoLensSvg;
export const ResearchAgent = ResearchAgentSvg;
export const ScholarAgent = ScholarAgentSvg;
export const SearchAgent = SearchAgentSvg;
export const SecurityAgent = SecurityAgentSvg;
export const SupportAgent = SupportAgentSvg;
export const ThinkingAgent = ThinkingAgentSvg;
export const WhiteRabbit = WhiteRabbitSvg;

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

// Utility function to get icon by name
export const getIconByName = (name: IconName): React.ComponentType<React.SVGProps<SVGSVGElement>> => {
  const iconMap: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    BinaryCode: BinaryCodeSvg,
    CodeAgent: CodeAgentSvg,
    EnterDoor: EnterDoorSvg,
    FilmAgent: FilmAgentSvg,
    HealthAgent: HealthAgentSvg,
    MathAgent: MathAgentSvg,
    MatrixCube: MatrixCubeSvg,
    MatrixPill: MatrixPillSvg,
    NavAgent: NavAgentSvg,
    NeoGlassesBlack: NeoGlassesBlackSvg,
    NeoGlassesWhite: NeoGlassesWhiteSvg,
    NeoLens: NeoLensSvg,
    ResearchAgent: ResearchAgentSvg,
    ScholarAgent: ScholarAgentSvg,
    SearchAgent: SearchAgentSvg,
    SecurityAgent: SecurityAgentSvg,
    SupportAgent: SupportAgentSvg,
    ThinkingAgent: ThinkingAgentSvg,
    WhiteRabbit: WhiteRabbitSvg,
  };
  
  return iconMap[name];
}; 