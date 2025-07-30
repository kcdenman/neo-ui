import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import svg from 'rollup-plugin-svg';

// Custom SVG plugin that returns the SVG as a React component
const svgToReact = () => ({
  name: 'svg-to-react',
  transform(code, id) {
    if (id.endsWith('.svg')) {
      const svgContent = code.replace(/"/g, '\\"').replace(/\n/g, '\\n');
      return {
        code: `
          import React from 'react';
          const SvgComponent = (props) => React.createElement('svg', {
            ...props,
            dangerouslySetInnerHTML: { __html: "${svgContent.replace(/<svg[^>]*>/, '').replace(/<\/svg>$/, '')}" }
          });
          export default SvgComponent;
        `,
        map: null
      };
    }
  }
});

const config = [
  // Main library build
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'vue'],
    plugins: [
      resolve(),
      commonjs(),
      svgToReact(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // React components build
  {
    input: 'src/react/index.tsx',
    output: [
      {
        file: 'dist/react/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/react/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react'],
    plugins: [
      resolve(),
      commonjs(),
      svgToReact(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // Vue components build
  {
    input: 'src/vue/index.ts',
    output: [
      {
        file: 'dist/vue/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/vue/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      svgToReact(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // Motion components build
  {
    input: 'src/motion/index.ts',
    output: [
      {
        file: 'dist/motion/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/motion/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react'],
    plugins: [
      resolve(),
      commonjs(),
      svgToReact(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // TypeScript declaration files
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/react/index.tsx',
    output: [{ file: 'dist/react/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/vue/index.ts',
    output: [{ file: 'dist/vue/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/motion/index.ts',
    output: [{ file: 'dist/motion/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

export default config; 