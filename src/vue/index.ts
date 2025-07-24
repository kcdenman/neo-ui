import { defineComponent, h } from 'vue';

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
export interface IconProps {
  size?: number | string;
  color?: string;
  class?: string;
  style?: Record<string, any>;
}

// Helper function to create icon component
const createIconComponent = (SvgComponent: any) => {
  return defineComponent({
    name: 'Icon',
    props: {
      size: {
        type: [Number, String],
        default: 24,
      },
      color: {
        type: String,
        default: undefined,
      },
      class: {
        type: String,
        default: undefined,
      },
      style: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      return () => h(SvgComponent, {
        width: props.size,
        height: props.size,
        fill: props.color,
        class: props.class,
        style: props.style,
      });
    },
  });
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
export const iconComponents: Record<IconName, ReturnType<typeof defineComponent>> = {
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
export const Icon = defineComponent({
  name: 'DynamicIcon',
  props: {
    name: {
      type: String as () => IconName,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: undefined,
    },
    class: {
      type: String,
      default: undefined,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () => {
      const IconComponent = iconComponents[props.name];
      return IconComponent ? h(IconComponent, {
        size: props.size,
        color: props.color,
        class: props.class,
        style: props.style,
      }) : null;
    };
  },
}); 