# neo-ui-icons

A collection of Neo UI SVG icons for modern web applications. This package provides React and Vue components, as well as raw SVG files for maximum flexibility.

## Features

- 🎨 **20 Beautiful Icons** - Carefully crafted Neo UI themed icons
- ⚛️ **React Components** - Ready-to-use React components with TypeScript support
- 🟢 **Vue Components** - Vue 3 components with Composition API
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

### Dynamic Icon Component

The `Icon` component accepts an additional `name` prop:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `IconName` | `true` | Name of the icon to render |

### TypeScript Types

```tsx
import type { IconName, IconProps } from 'neo-ui-icons/react';

// IconName is a union type of all available icon names
const iconName: IconName = 'BinaryCode'; // ✅ Valid
const invalidName: IconName = 'InvalidIcon'; // ❌ Type error

// IconProps includes all standard SVG props plus size and color
const props: IconProps = {
  size: 24,
  color: '#333',
  onClick: () => console.log('clicked'),
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
```

```tsx
<BinaryCode className="neo-icon" size={32} />
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

### 1.0.0
- Initial release
- 20 Neo UI themed icons
- React and Vue components
- TypeScript support
- Multiple build formats 