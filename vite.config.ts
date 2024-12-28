/// <reference types="vitest" />
import {UserConfig, defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      target: 'ESNext',
      sourcemap: true,
    },
    root: './',
    test: {
      coverage: {
        include: ['src/**/*.{ts,js}'],
        exclude: [
          'src/*.d.ts',
          '**/config.ts',
          '**/types.ts',
          '**/__mocks__/**',
          '**/__tests__/**',
          'build/**',
          'src/tests/**',
          'src/testGlobals.ts',
        ],
        reporter: ['text', 'html'],
      },
      environment: 'jsdom',
      globals: true,
      globalSetup: 'src/testGlobals.ts',
      include: ['src/**/*.test.ts'],
      setupFiles: 'src/setupTests.ts',
      testTimeout: 15_000,
    },
  } as UserConfig;
});
