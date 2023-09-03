const { disableBodyScroll, enableBodyScroll } = require('body-scroll-lock');
import { refs } from './refs.js';

export function openMobile() {
  refs.mobileMenu.classList.add('is-open');
  disableBodyScroll(refs.mobileMenu);
}
export function closeMobile() {
  refs.mobileMenu.classList.remove('is-open');
  enableBodyScroll(refs.mobileMenu);
}

// refs.closeButton.addEventListener('click', toggleMobile);
// refs.openBurgerButton.addEventListener('click', toggleMobile);


refs.closeButton.addEventListener('click', closeMobile);
refs.openBurgerButton.addEventListener('click', openMobile);
