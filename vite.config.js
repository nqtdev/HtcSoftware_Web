import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import module path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.zip', '**/*.exe'],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      hooks: path.resolve(__dirname, 'src/hooks/')
    }
  }
})
