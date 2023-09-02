// console.log("1");
import { Notify } from 'notiflix';
import { refs } from './refs';
import { getCocktail } from './fetch-data';
import { throttle } from 'lodash';

let id;
refs.gallery.addEventListener('click', onShowModal);
refs.closeCocktailModalBtn.addEventListener('click', closeCocktailModal);

function onShowModal(e) {
  console.log(e.target);
  id = e.target.dataset.id;
  if (e.target.dataset.id && e.target.classList.contains('learn-more-btn')) {
    showCocktailModal();
  }
}

function showCocktailModal(event) {
  // console.log(id);
  getCocktail(id).then(data => {
    markupCocktail(data);
  });
  refs.backdropCocktailEl.classList.remove('is-hidden');
}

function closeCocktailModal() {
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
