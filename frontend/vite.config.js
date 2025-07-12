import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy:{
  //     '/api':{
  //       target: 'https://solid-space-capybara-x54rr7jrgw9gh4jw-5555.app.github.dev',
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
