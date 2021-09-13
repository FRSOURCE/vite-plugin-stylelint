import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), stylelintPlugin()],
});
