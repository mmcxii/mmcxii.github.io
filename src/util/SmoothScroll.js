const SmoothScroll = require('smooth-scroll');
const scroll = new SmoothScroll('a[href*="#"]', { speed: 500, easing: 'easeOutQuint' });

export { scroll };