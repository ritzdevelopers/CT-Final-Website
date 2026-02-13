
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Lenis from '@studio-freight/lenis';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
  smoothTouch: false
});
(window as any).lenis = lenis;
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
