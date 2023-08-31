import { refs } from './refs.js';
import throttle from 'lodash.throttle';

refs.favBtn.addEventListener('click', throttle(favToggle, 500));
refs.favArrowD.addEventListener('click', throttle(favToggle, 500));
refs.favArrowU.addEventListener('click', throttle(favToggle, 500));
function favToggle() {
  refs.favArrowD.classList.toggle('is-hidden-fav');
  refs.favArrowU.classList.toggle('is-hidden-fav');

  showTheFavBlock();
}

function showTheFavBlock() {
  refs.favBlock.classList.toggle('open-fav-block');
  refs.favBlock.classList.toggle('close-fav-block');
}
