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
  treeShaking: true,
  external: [                  // Exclude native modules and tricky dependencies
    'fs', 'path', 'os', 'crypto', 'http', 'https', 'zlib', 'stream',
    '@nestjs/microservices',   // Mark optional NestJS dependencies as external
    '@nestjs/websockets',      // Add other optional dependencies here
    'class-validator',         // If needed, mark other tricky dependencies as external
    'class-transformer',
  ],
  resolveExtensions: ['.ts', '.js'] // Resolve TypeScript and JavaScript files
}).catch(() => process.exit(1));