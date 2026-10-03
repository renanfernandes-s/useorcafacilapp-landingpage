import { initScrollAnimations } from './modules/animations.js';
import { initCalculator } from './modules/calculator.js';
import { initDrawer } from './modules/drawer.js';
import { initAnalytics } from './modules/analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  initScrollAnimations();
  initCalculator();
  initDrawer();
});
