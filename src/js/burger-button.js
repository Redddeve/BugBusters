import { refs } from './refs.js';

function toggleMobile() {
  refs.mobileMenu.classList.toggle('is-open');
}

refs.closeButton.addEventListener('click', toggleMobile);
refs.openBurgerButton.addEventListener('click', toggleMobile);
