import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // created the default server port to make the connection from client to the api
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
