import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCocktailByName } from './fetch-data.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';
import { refs } from './refs';
import { renderPagination } from './pagination.js';

// if (window.innerWidth >= 1280) {
//   const maxHits = 9;
// } else {
//   const maxHits = 8;
// }

let page = 1;
// let maxPage = 1;
let query = '';

refs.headerForm.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();

  page = 1;
  query = e.currentTarget.elements.searchQuery.value.trim(); //* Берет текст с инпута
  if (query === '') {
    //* Сбрасывает сабмит при пустой строчке
    e.target.reset();
    return;
  }
  try {
    const responseArr = await fetchCocktailByName(query); //* Массив обьектов, в темплейте делаем деструктуризацию
    refs.mainCocktailsGallery.innerHTML = '';
    // cocktailMainCardRender(responseArr);
    refs.paginationContainer.classList.remove('is-hidden');
    renderPagination(responseArr);
  } catch (err) {
    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error(err);
  } finally {
    e.target.reset();
  }
}

/* function renderCocktailCards(arr) {
  //* Как примерно должен выглядеть рендер
  const markup = arr.map(hit => templateCocktailCards(hit)).join('');
  refs.mainCocktailsGallery.insertAdjacentHTML('beforeend', markup);
} */
