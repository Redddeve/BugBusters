import { Notify, Loading } from 'notiflix';
import { fetchCocktailByName } from './fetch-data.js';
import { renderPagination } from './pagination.js';
import { cocktailMainCardNotFoundTemplate } from './cocktail-fav-card-render.js';
import { refs } from './refs';
import { closeMobile } from './burger-button.js';
let page = 1;
// let maxPage = 1;
let query = '';

refs.headerForm.addEventListener('submit', onSearchSubmit);
refs.searchMobile.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(e) {
  e.preventDefault();

  page = 1;
  query = e.currentTarget.elements.searchQuery.value.trim();
  if (query === '') {
    //* Сбрасывает сабмит при пустой строчке
    e.target.reset();
    return;
  }

  if (refs.mainCocktailsText.textContent !== 'Searching results') {
    refs.mainCocktailsText.textContent = 'Searching results';
  }
  try {
    Loading.standard('Loading...', {
      fontFamily: 'Poppins',
      messageFontSize: '24px',
    });

    const responseArr = await fetchCocktailByName(query); //* Массив обьектов, в темплейте делаем деструктуризацию
    refs.mainCocktailsGallery.innerHTML = '';
    renderPagination(responseArr);
    if (window.innerWidth >= 1280 && responseArr.length >= 9) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    if (window.innerWidth >= 768 && responseArr.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
  } catch (err) {
    refs.paginationContainer.classList.add('is-hidden');
    cocktailMainCardNotFoundTemplate();
    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error(err);
  } finally {
    Loading.remove();
    e.target.reset();
    const toSearch = document.getElementById('search');
    toSearch.scrollIntoView({ behavior: 'smooth' }, true);
    closeMobile();
  }
}
