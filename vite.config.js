import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://react-portfolio-phi-woad.vercel.app/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
