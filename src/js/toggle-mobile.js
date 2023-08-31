import { refs } from './refs.js';
import throttle from 'lodash.throttle';

refs.toggleListButtonUp.addEventListener('click', throttle(favToggleMenu, 500));
refs.toggleListButtonDown.addEventListener(
  'click',
  throttle(favToggleMenu, 500)
);
refs.favLink.addEventListener('click', throttle(favToggleMenu, 500));

function showTheFavList() {
  refs.favList.classList.toggle('open-fav-list');
  refs.favList.classList.toggle('closed-fav-list');
}

function favToggleMenu() {
  refs.toggleListButtonDown.classList.toggle('is-hidden-fav');
  refs.toggleListButtonUp.classList.toggle('is-hidden-fav');

  showTheFavList();
}
