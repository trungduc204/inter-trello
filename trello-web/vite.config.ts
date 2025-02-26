import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr'; // Import plugin SVGR

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: false, // Quan trọng để có thể dùng { ReactComponent as ... }
    }) // Đảm bảo SVGR được thêm vào plugins
  ],
});
