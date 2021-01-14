const {join} = require('path');
const vue = require('@vitejs/plugin-vue');
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  root: join(process.cwd(), './src/renderer'),
  // alias: {
  //   '/@/': join(process.cwd(), './src/renderer') + '/',
  // },
  plugins: [vue()],
  build: {
    // polyfillDynamicImport: false,
    base: '',
    outDir:  './dist',
    assetsDir: '.',
  },
};

