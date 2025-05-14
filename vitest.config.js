/// <reference types="vitest/config" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.spec.ts'],
    coverage: {
      reporter: ['lcov', 'cobertura'],
      exclude: [
        '**/.idea/**',
        '**/.github/**',
        '**/dist/**',
        '**/coverage/**',
        '**/node_modules/**',
        '**/test/**',
        '*.config.js',
        '**/*.spec.ts',
        '**/*.module.ts',
        'eslint.config.mjs',
        'src/main.ts'
      ],
      provider: 'v8',
      all: true
    },
  }
});