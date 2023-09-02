const { disableBodyScroll, enableBodyScroll } = require('body-scroll-lock');
import { refs } from './refs.js';

function openMobile() {
  refs.mobileMenu.classList.toggle('is-open');
  disableBodyScroll(refs.mobileMenu);
}
function closeMobile() {
  refs.mobileMenu.classList.toggle('is-open');
  enableBodyScroll(refs.mobileMenu);
}

refs.closeButton.addEventListener('click', closeMobile);
refs.openBurgerButton.addEventListener('click', openMobile);
