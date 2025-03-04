import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			cssModules: true,
		}
	},
	build: {
		cssMinify: 'lightningcss'
	}
});
