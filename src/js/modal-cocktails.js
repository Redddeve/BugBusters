import { Notify } from 'notiflix';
import { refs } from './refs';
import { getCocktail } from './fetch-data';
import throttle from 'lodash.throttle';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

let id;
refs.gallery.addEventListener('click', throttle(onShowModal, 1000));
refs.backdropCocktailEl.addEventListener('click', closeCocktailModal);

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const targetElement = refs.backdropCocktailEl;
// disableBodyScroll(targetElement);
// enableBodyScroll(targetElement);

function onShowModal(e) {
  
  id = e.target.dataset.id;
  if (e.target.dataset.id && e.target.classList.contains('learn-more-btn')) {
    showCocktailModal();
    disableBodyScroll(targetElement);
  }
}

 async function showCocktailModal(event) {
  try {
    const response = await getCocktail(id);
    // .then(data => {
    console.log(response[0]);
    markupCocktail(response[0]);
    // });
    refs.backdropCocktailEl.classList.remove('is-hidden');
  } catch (err) {
    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error(err);
  }
}

function closeCocktailModal(e) {
  if (
    e.target !== e.currentTarget &&
    e.target.closest('.cocktail-modal-x-btn') !== refs.closeCocktailModalBtn
  ) {
    return;
  }
  refs.backdropCocktailEl.classList.add('is-hidden');
  refs.image.src = '#';
  refs.header.textContent = '#';
  refs.ingredList.innerHTML = '';
  refs.instr.textContent = '';
  refs.toFavoriteBtn.dataset.id = '';
  refs.removeFavoriteBtn.dataset.id = '';
  enableBodyScroll(targetElement);

}

function markupCocktail({ drink, drinkThumb, instructions, ingredients, _id }) {
  const markupList = ingredients
    .map(
      ingredient => `
    <li class="ingredients-list-item">
    <a class="ingredients-link" href="#cocktail-modal">${ingredient.title}</a>
    </li>`
    )
    .join('');

  refs.image.src = drinkThumb;
  refs.header.textContent = drink;
  refs.ingredList.innerHTML = markupList;
  refs.instr.textContent = instructions;
  refs.toFavoriteBtn.dataset.id = _id;
  refs.removeFavoriteBtn.dataset.id = _id;
}
