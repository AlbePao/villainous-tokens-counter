import { VitePWAOptions } from 'vite-plugin-pwa';

// you can copy the base structure of manifest object.
export const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'villains/*.webp', 'splash_screens/*.png'],
  manifest: {
    name: 'Villainous Tokens',
    short_name: 'Villainous Tokens',
    description: 'Token counter for VIllainous board game series',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#0a0a0a',
    background_color: '#171717',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};
