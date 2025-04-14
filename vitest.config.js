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
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/node_modules/**',
        '**/.github/**',
        '*.config.js',
        '**/*.spec.ts'
      ],
      provider: 'v8',
      all: true
    },
  }
});