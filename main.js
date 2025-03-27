import { initRouter } from './router.js';

if (location.pathname === '/index.html') {
  history.replaceState(null, null, '/');
}

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
});
