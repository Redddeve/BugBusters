import { refs } from './refs.js';

refs.toggleListButtonUp.addEventListener('click', favToggleMenu);

refs.toggleListButtonDown.addEventListener('click', favToggleMenu);

refs.favLink.addEventListener('click', favToggleMenu);

function showTheFavList() {
  refs.favList.classList.toggle('open-fav-list');
  refs.favList.classList.toggle('closed-fav-list');
}

function favToggleMenu() {
  refs.toggleListButtonDown.classList.toggle('is-hidden-fav');
  refs.toggleListButtonUp.classList.toggle('is-hidden-fav');

  showTheFavList();
}
