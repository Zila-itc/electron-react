import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'yarn',
  plugins: ['@liangskyli/umijs-plugin-electron'],
  electron: {
    routerMode: 'memory',
  },
});
