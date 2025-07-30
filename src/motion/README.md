# Neo UI Motion Components

This directory contains animated versions of the Neo UI icons that can be easily integrated into front-end applications.

## Available Motion Components

### MatrixCube Animations
- **MatrixCubeRotating**: Rotates the cube continuously
- **MatrixCubePulsing**: Scales the cube up and down with a breathing effect
- **MatrixCubeFloating**: Makes the cube float up and down with gentle motion

### Other Animated Icons
- **NeoLensScanning**: Simulates a scanning beam effect with glow
- **WhiteRabbitHopping**: Creates a bouncing hop animation
- **ThinkingAgentPulsing**: Pulsing effect with optional glow for thinking/processing states
- **CodeAgentTyping**: Typing animation with cursor blink effect
- **BinaryCodeFlashing**: Binary data processing with glow effect

## Usage

### Basic Usage
```tsx
import { MatrixCubeRotating } from 'neo-ui-icons/motion';

function MyComponent() {
  return (
    <div>
      <MatrixCubeRotating size={48} color="#00ff00" />
    </div>
  );
}
```

### Customizing Animation
```tsx
import { MatrixCubePulsing } from 'neo-ui-icons/motion';

function MyComponent() {
  return (
    <div>
      <MatrixCubePulsing 
        size={32}
        duration={3}
        scaleFactor={1.3}
        fade={true}
        color="#ff6b6b"
      />
    </div>
  );
}
```

### Multiple Animations
```tsx
import { 
  MatrixCubeRotating, 
  CodeAgentTyping, 
  BinaryCodeFlashing 
} from 'neo-ui-icons/motion';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <MatrixCubeRotating size={64} duration={4} />
      <CodeAgentTyping size={48} cursorColor="#00ff00" />
      <BinaryCodeFlashing size={32} glowColor="#00ff85" />
    </div>
  );
}
```

## Component Props

All motion components extend the base `MotionComponentProps` interface:

### Common Props
- `duration?: number` - Animation duration in seconds (default varies by component)
- `delay?: number` - Delay before animation starts in seconds (default: 0)
- `loop?: boolean` - Whether animation should loop infinitely (default: true)
- `className?: string` - Custom CSS class name
- `size?: number | string` - Size of the icon (default: 24)
- `color?: string` - Color of the icon (default: 'currentColor')
- `easing?: string` - Animation easing function (default: varies by component)

### Component-Specific Props

#### MatrixCubeRotating
- `rotationSpeed?: number` - Rotation speed in degrees per second
- `direction?: 'clockwise' | 'counterclockwise'` - Rotation direction

#### MatrixCubePulsing
- `scaleFactor?: number` - Scale factor for the pulse (default: 1.2)
- `fade?: boolean` - Whether to fade opacity during pulse

#### MatrixCubeFloating
- `floatDistance?: number` - Distance to float up and down in pixels (default: 10)
- `rotate?: boolean` - Whether to add slight rotation during float

#### NeoLensScanning
- `beamEffect?: boolean` - Whether to add scanning beam effect (default: true)
- `beamColor?: string` - Color of the scanning beam (default: '#00ff00')

#### CodeAgentTyping
- `cursorBlink?: boolean` - Whether to add cursor blink effect (default: true)
- `cursorColor?: string` - Color of the cursor (default: '#00ff00')

#### BinaryCodeFlashing
- `glow?: boolean` - Whether to add glow effect (default: true)
- `glowColor?: string` - Color of the glow effect (default: '#00ff85')

#### WhiteRabbitHopping
- `hopHeight?: number` - Height of the hop in pixels (default: 15)
- `rotate?: boolean` - Whether to add rotation during hop (default: true)

#### ThinkingAgentPulsing
- `glow?: boolean` - Whether to add glow effect (default: true)
- `glowColor?: string` - Color of the glow effect (default: '#4a90e2')

## Examples

### Loading State
```tsx
function LoadingIndicator() {
  return (
    <div className="loading">
      <MatrixCubeRotating size={40} duration={3} />
      <span>Loading...</span>
    </div>
  );
}
```

### Processing State
```tsx
function ProcessingIndicator() {
  return (
    <div className="processing">
      <ThinkingAgentPulsing 
        size={32} 
        glowColor="#ff6b6b"
        duration={2}
      />
      <span>Processing...</span>
    </div>
  );
}
```

### Coding Effect
```tsx
function CodingIndicator() {
  return (
    <div className="coding">
      <CodeAgentTyping 
        size={48} 
        cursorColor="#00ff00"
        duration={1.5}
      />
      <span>Coding...</span>
    </div>
  );
}
```

### Playful Animation
```tsx
function PlayfulElement() {
  return (
    <div className="playful">
      <WhiteRabbitHopping 
        size={28} 
        hopHeight={25}
        duration={2}
      />
    </div>
  );
}
```

## CSS Customization

You can further customize the animations by adding your own CSS:

```css
/* Custom animation override */
.my-custom-animation {
  animation-duration: 2s !important;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
}

/* Pause animation on hover */
.motion-icon:hover {
  animation-play-state: paused;
}
```

## Performance Considerations

- Each motion component generates unique CSS animations to avoid conflicts
- Animations use CSS transforms for optimal performance
- Consider using `will-change: transform` for elements that will animate frequently
- For many instances, consider using CSS custom properties for better performance

## Browser Support

These components use modern CSS animations and are supported in:
- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+

For older browsers, consider providing fallback static icons. 