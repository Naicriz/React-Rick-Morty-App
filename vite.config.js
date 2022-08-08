import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Naicriz.github.io/React-Rick-Morty-App/',
  plugins: [react()]
})
