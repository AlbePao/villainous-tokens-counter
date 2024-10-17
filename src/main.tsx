import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { iosPWASplash } from './ios-pwa-splash.ts';

iosPWASplash('/android-chrome-512x512.png', '#0a0a0a');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
