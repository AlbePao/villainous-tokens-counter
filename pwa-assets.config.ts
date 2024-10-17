import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[48, 'favicon.ico']],
      resizeOptions: {
        background: '#171717',
      },
    },
    maskable: {
      sizes: [],
      resizeOptions: {
        width: 512,
        height: 512,
        background: '#171717',
      },
    },
    apple: {
      sizes: [],
      resizeOptions: {
        width: 180,
        height: 180,
        background: '#171717',
      },
    },
  },
  images: ['public/logo.png'],
});
