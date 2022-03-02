// Import rollup plugins
import { copy } from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import summary from 'rollup-plugin-summary';
import replace from '@rollup/plugin-replace';
import minifyHTML from 'rollup-plugin-minify-html-literals';

// Check environment
const ENV = process.env.NODE_ENV || 'dev';

export default {
  plugins: [
    replace({
      preventAssignment: true,
      'environment.dev': `environment.${ENV}`,
    }),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
    // Optional: copy any static assets to build directory
    copy({
      patterns: ['assets/**/*', 'index.html'],
    }),
  ],
  input: './src/wordler-app.js',
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};
