const favBtn = document.querySelector('.header-fav-toggle p');
// const favArrow = document.querySelector('.fav-arrow');
import { refs } from './refs.js';

refs.favBtn.addEventListener('click', favToggle);
refs.favArrowD.addEventListener('click', favToggle);
refs.favArrowU.addEventListener('click', favToggle);
function favToggle() {
  refs.favArrowD.classList.toggle('is-hidden-fav');
  refs.favArrowU.classList.toggle('is-hidden-fav');

  showTheFavBlock();
}

function showTheFavBlock() {
  refs.favBlock.classList.toggle('open-fav-block');
  refs.favBlock.classList.toggle('close-fav-block');
}
