const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

build({
  entryPoints: ['src/main.ts'], // Your app's entry point
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  target: 'node20',
  outdir: 'dist',
  plugins: [nodeExternalsPlugin()], // Automatically handle node_modules
  external: ['reflect-metadata', // Keep this external for NestJS
    'class-validator',  // Mark these as external
    'class-transformer',
    '@nestjs/*',], // Ensure this stays external
}).catch(() => process.exit(1));