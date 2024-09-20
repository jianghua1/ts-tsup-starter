import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    // lib库就直接设置成false
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    dts: true,
  };
});
