import { Notify } from 'notiflix';
import { refs } from './refs';
import { getCocktail } from './fetch-data';
import throttle from 'lodash.throttle';

let id;
refs.gallery.addEventListener('click', throttle(onShowModal, 1000));
refs.backdropCocktailEl.addEventListener('click', closeCocktailModal);

function onShowModal(e) {
  id = e.target.dataset.id;
  if (e.target.dataset.id && e.target.classList.contains('learn-more-btn')) {
    showCocktailModal();
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
}

function markupCocktail({ drink, drinkThumb, instructions, ingredients, _id }) {
  const markupList = ingredients
    .map(
      ingredient => `
    <li class="ingredients-list-item">
    <a class="ingredients-link" href="#">${ingredient.title}</a>
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
