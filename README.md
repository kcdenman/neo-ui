# neo-ui-icons

A collection of Neo UI SVG icons and animated motion components for modern web applications. This package provides React and Vue components, as well as raw SVG files for maximum flexibility.

## Features

- 🎨 **20 Beautiful Icons** - Carefully crafted Neo UI themed icons
- ⚛️ **React Components** - Ready-to-use React components with TypeScript support
- 🟢 **Vue Components** - Vue 3 components with Composition API
- 🎬 **Motion Components** - Animated versions of icons with customizable effects
- 📦 **Multiple Formats** - CommonJS, ES Modules, and raw SVG files
- 🔧 **TypeScript Support** - Full TypeScript definitions included
- 🎯 **Tree Shaking** - Only import what you need
- 📱 **Responsive** - Icons scale perfectly at any size

## Installation

```bash
npm install neo-ui-icons
# or
yarn add neo-ui-icons
# or
pnpm add neo-ui-icons
```

## Available Icons

- `BinaryCode` - Binary code representation
- `CodeAgent` - Code development agent
- `EnterDoor` - Entry/exit door
- `FilmAgent` - Film and media agent
- `HealthAgent` - Health and wellness agent
- `MathAgent` - Mathematical operations agent
- `MatrixCube` - Matrix cube visualization
- `MatrixPill` - Matrix pill representation
- `NavAgent` - Navigation agent
- `NeoGlassesBlack` - Neo glasses (black variant)
- `NeoGlassesWhite` - Neo glasses (white variant)
- `NeoLens` - Neo lens visualization
- `ResearchAgent` - Research and analysis agent
- `ScholarAgent` - Academic and learning agent
- `SearchAgent` - Search functionality agent
- `SecurityAgent` - Security and protection agent
- `SupportAgent` - Customer support agent
- `ThinkingAgent` - AI thinking process
- `WhiteRabbit` - White rabbit reference

## Motion Components

- `MatrixCubeRotating` - Continuous rotation with customizable speed and direction
- `BinaryCodeFlashing` - Binary data processing with glow effect
- `WhiteRabbitHopping` - Playful bouncing animation with rotation

## Usage

### React Components

```tsx
import { BinaryCode, CodeAgent, Icon } from 'neo-ui-icons/react';

function App() {
  return (
    <div>
      {/* Individual icon components */}
      <BinaryCode size={24} color="#333" />
      <CodeAgent size={32} color="#007bff" />
      
      {/* Dynamic icon component */}
      <Icon name="ThinkingAgent" size={48} color="#28a745" />
    </div>
  );
}
```

### Vue Components

```vue
<template>
  <div>
    <!-- Individual icon components -->
    <BinaryCode :size="24" color="#333" />
    <CodeAgent :size="32" color="#007bff" />
    
    <!-- Dynamic icon component -->
    <Icon name="ThinkingAgent" :size="48" color="#28a745" />
  </div>
</template>

<script setup lang="ts">
import { BinaryCode, CodeAgent, Icon } from 'neo-ui-icons/vue';
</script>
```

### Motion Components

```tsx
import { 
  MatrixCubeRotating, 
  BinaryCodeFlashing, 
  WhiteRabbitHopping 
} from 'neo-ui-icons/motion';

function LoadingScreen() {
  return (
    <div>
      {/* Basic usage */}
      <MatrixCubeRotating size={48} color="#00FF85" />
      
      {/* Customized animation */}
      <BinaryCodeFlashing 
        size={32} 
        glowColor="#00FF85" 
        duration={2} 
      />
      
      {/* With custom hop height */}
      <WhiteRabbitHopping 
        size={24} 
        hopHeight={10} 
        color="#ffffff" 
      />
    </div>
  );
}
```

### Raw SVG Files

```tsx
import { BinaryCode } from 'neo-ui-icons';

// Use as image source
<img src={BinaryCode} alt="Binary Code" />

// Or import directly
import binaryCodeSvg from 'neo-ui-icons/svg/BinaryCode.svg';
```

### Programmatic Usage

```tsx
import { iconNames, getIconByName, IconName } from 'neo-ui-icons';

// Get all available icon names
console.log(iconNames);

// Get icon by name
const iconPath = getIconByName('BinaryCode');

// Type-safe icon name
const iconName: IconName = 'CodeAgent';
```

## Motion Components API

### MatrixCubeRotating

A continuously rotating matrix cube with customizable speed and direction.

```tsx
<MatrixCubeRotating 
  size={48}
  color="#00FF85"
  duration={5}
  direction="clockwise"
  loop={true}
/>
```

**Props:**
- `size` (number): Width and height in pixels (default: 24)
- `color` (string): Stroke color (default: "#00FF85")
- `duration` (number): Animation duration in seconds (default: 5)
- `direction` ("clockwise" | "counterclockwise"): Rotation direction (default: "clockwise")
- `loop` (boolean): Whether to loop the animation (default: true)

### BinaryCodeFlashing

A binary code icon with flashing/glowing effect.

```tsx
<BinaryCodeFlashing 
  size={32}
  color="#00FF85"
  glowColor="#00FF85"
  duration={1.5}
  glow={true}
/>
```

**Props:**
- `size` (number): Width and height in pixels (default: 24)
- `color` (string): Icon color (default: "#00FF85")
- `glowColor` (string): Glow effect color (default: "#00FF85")
- `duration` (number): Animation duration in seconds (default: 1.5)
- `glow` (boolean): Enable glow effect (default: true)

### WhiteRabbitHopping

A white rabbit with gentle hopping animation.

```tsx
<WhiteRabbitHopping 
  size={24}
  color="#ffffff"
  hopHeight={8}
  duration={1.5}
  rotate={true}
/>
```

**Props:**
- `size` (number): Width and height in pixels (default: 24)
- `color` (string): Rabbit body color (ear stays green) (default: "#ffffff")
- `hopHeight` (number): Height of the hop in pixels (default: 8)
- `duration` (number): Animation duration in seconds (default: 1.5)
- `rotate` (boolean): Add slight rotation during hop (default: true)

## Usage Examples

### Loading States

```tsx
import { MatrixCubeRotating, BinaryCodeFlashing } from 'neo-ui-icons/motion';

function LoadingStates() {
  return (
    <div>
      {/* General loading */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <MatrixCubeRotating size={32} color="#00FF85" />
        <span>Loading data...</span>
      </div>
      
      {/* Processing state */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <BinaryCodeFlashing size={32} color="#00FF85" />
        <span>Loading the matrix...</span>
      </div>
      
      {/* Completion state */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <WhiteRabbitHopping size={32} color="#ffffff" />
        <span>Finalizing your job...</span>
      </div>
    </div>
  );
}
```

### Custom Animations

```tsx
// Fast rotation
<MatrixCubeRotating 
  size={64} 
  duration={2} 
  direction="counterclockwise" 
/>

// Intense flashing
<BinaryCodeFlashing 
  size={48} 
  duration={0.8} 
  glowColor="#ff6b6b" 
/>

// High hops
<WhiteRabbitHopping 
  size={32} 
  hopHeight={15} 
  duration={2} 
/>
```

## API Reference

### Icon Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `undefined` | Fill color of the icon |
| `class` | `string` | `undefined` | CSS class name (Vue only) |
| `style` | `object` | `{}` | Inline styles (Vue only) |

Additional SVG props are also supported (e.g., `onClick`, `className`, etc.).

### Motion Component Props

All motion components extend the base icon props and add animation-specific properties:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `duration` | `number` | Varies | Animation duration in seconds |
| `delay` | `number` | `0` | Animation delay in seconds |
| `loop` | `boolean` | `true` | Whether to loop the animation |
| `easing` | `string` | Varies | CSS easing function |
| `className` | `string` | `''` | Additional CSS classes |

### Dynamic Icon Component

The `Icon` component accepts an additional `name` prop:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `IconName` | `true` | Name of the icon to render |

### TypeScript Types

```tsx
import type { IconName, IconProps } from 'neo-ui-icons/react';
import type { 
  MatrixCubeRotatingProps, 
  BinaryCodeFlashingProps, 
  WhiteRabbitHoppingProps 
} from 'neo-ui-icons/motion';

// IconName is a union type of all available icon names
const iconName: IconName = 'BinaryCode'; // ✅ Valid
const invalidName: IconName = 'InvalidIcon'; // ❌ Type error

// Motion component props
const matrixProps: MatrixCubeRotatingProps = {
  size: 48,
  color: '#00FF85',
  duration: 5,
  direction: 'clockwise',
};
```

## Examples

### Styling with CSS

```css
/* Custom styling */
.neo-icon {
  transition: all 0.2s ease;
}

.neo-icon:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Motion component styling */
.motion-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #1a1a1a;
  border-radius: 8px;
}
```

```tsx
<div className="motion-container">
  <MatrixCubeRotating className="neo-icon" size={32} />
  <span>Processing...</span>
</div>
```

### Conditional Rendering

```tsx
import { Icon, iconNames } from 'neo-ui-icons/react';

function IconSelector({ selectedIcon }: { selectedIcon: IconName }) {
  return (
    <div>
      {iconNames.map((name) => (
        <Icon
          key={name}
          name={name}
          size={24}
          color={name === selectedIcon ? '#007bff' : '#666'}
          onClick={() => onIconSelect(name)}
        />
      ))}
    </div>
  );
}
```

### Responsive Icons

```tsx
<BinaryCode 
  size="clamp(16px, 2vw, 32px)" 
  color="currentColor" 
/>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.1.0
- ✨ Added motion components (MatrixCubeRotating, BinaryCodeFlashing, WhiteRabbitHopping)
- 🎨 Improved animation smoothness and realism
- 📚 Enhanced documentation with motion component examples
- 🔧 Updated build configuration for motion components
- 🏷️ Added motion-related keywords for better discoverability

### 1.0.0
- Initial release
- 20 Neo UI themed icons
- React and Vue components
- TypeScript support
- Multiple build formats 