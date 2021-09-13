import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), stylelintPlugin()],
});
