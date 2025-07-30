import React from 'react';
import {
  MatrixCubeRotating,
  WhiteRabbitHopping,
  BinaryCodeFlashing,
} from './index';

export const MotionDemo: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Neo UI Motion Components Demo
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* MatrixCube Rotating */}
        <div style={{ 
          background: '#2a2a2a', 
          padding: '2rem', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3>MatrixCube Rotating</h3>
          <div style={{ margin: '1rem 0' }}>
            <MatrixCubeRotating size={64} color="#00FF85" />
          </div>
          <p>Continuous rotation with customizable speed and direction</p>
          <div style={{ marginTop: '1rem' }}>
            <MatrixCubeRotating 
              size={32} 
              color="#ff6b6b" 
              direction="counterclockwise"
              duration={3}
            />
          </div>
        </div>







        {/* BinaryCode Flashing */}
        <div style={{ 
          background: '#2a2a2a', 
          padding: '2rem', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3>BinaryCode Flashing</h3>
          <div style={{ margin: '1rem 0' }}>
            <BinaryCodeFlashing size={64} color="#00FF85" />
          </div>
          <p>Binary data processing with glow effect</p>
          <div style={{ marginTop: '1rem' }}>
            <BinaryCodeFlashing 
              size={32} 
              color="#00FF85" 
              glowColor="#00FF85"
              duration={1.5}
            />
          </div>
        </div>

        {/* WhiteRabbit Hopping */}
        <div style={{ 
          background: '#2a2a2a', 
          padding: '2rem', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3>WhiteRabbit Hopping</h3>
          <div style={{ margin: '1rem 0' }}>
            <WhiteRabbitHopping size={64} color="#ffffff" />
          </div>
          <p>Playful bouncing animation with rotation</p>
          <div style={{ marginTop: '1rem' }}>
            <WhiteRabbitHopping 
              size={32} 
              color="#ffffff" 
              hopHeight={20}
              duration={2}
            />
          </div>
        </div>



      </div>

      {/* Usage Examples Section */}
      <div style={{ 
        marginTop: '4rem',
        background: '#2a2a2a',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '1200px',
        margin: '4rem auto 0'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Usage Examples
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          
          <div style={{ 
            background: '#3a3a3a', 
            padding: '1.5rem', 
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem'
            }}>
              <MatrixCubeRotating size={32} color="#00FF85" />
              <span>Loading data...</span>
            </div>
          </div>

          <div style={{ 
            background: '#3a3a3a', 
            padding: '1.5rem', 
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem'
            }}>
              <BinaryCodeFlashing size={32} color="#00FF85" />
              <span>Loading the matrix...</span>
            </div>
          </div>

          <div style={{ 
            background: '#3a3a3a', 
            padding: '1.5rem', 
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem'
            }}>
              <WhiteRabbitHopping size={32} color="#ffffff" />
              <span>Finalizing your job...</span>
            </div>
          </div>

        </div>
      </div>

      {/* Code Examples */}
      <div style={{ 
        marginTop: '4rem',
        background: '#2a2a2a',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '1200px',
        margin: '4rem auto 0'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Code Examples
        </h2>
        
        <div style={{ 
          background: '#1a1a1a', 
          padding: '1.5rem', 
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '14px',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#00FF85' }}>
{`// Basic usage
import { MatrixCubeRotating } from 'neo-ui-icons/motion';

<MatrixCubeRotating size={48} color="#00FF85" />

// Customized animation
<MatrixCubeRotating 
  size={32}
  duration={3}
  direction="counterclockwise"
  color="#ff6b6b"
/>

// Multiple animations
<div className="loading-container">
  <MatrixCubeRotating size={64} duration={4} />
  <ThinkingAgentPulsing size={48} glowColor="#00FF85" />
  <WhiteRabbitHopping size={32} hopHeight={20} />
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}; 