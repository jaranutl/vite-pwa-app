import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',


    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'demo-app',
      short_name: 'my-app',
      start_url: '/',
      display: 'standalone',
      description: 'for education',
      lang: 'en',
      theme_color: '#ffffff',
      icons: [
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: 'pwa-512x512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: { cacheName: 'images', expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 } }
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/api/'),
            handler: 'NetworkFirst',
            options: { cacheName: 'api', networkTimeoutSeconds: 3 }
          }
        ]
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  }),
  tailwindcss(),],
})