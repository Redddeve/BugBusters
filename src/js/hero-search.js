import { Notify, Loading } from 'notiflix';
import { refs } from './refs.js';
import { fetchCocktailByFirstLetter } from './fetch-data';
import { renderPagination } from './pagination.js';
import {
  cocktailMainCardRender,
  cocktailMainCardNotFoundTemplate,
} from './cocktail-fav-card-render.js';

let page = 1;

//===================== TABLET & DESKTOP ===========================

refs.container.addEventListener('click', onHeroBtnSearchClick);

async function onHeroBtnSearchClick(e) {
  e.preventDefault();

  if (refs.mainCocktailsText.textContent !== 'Searching results') {
    refs.mainCocktailsText.textContent = 'Searching results';
  }

  if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'OPTION') {
    return;
  }
  page = 1;
  const query = e.target.innerText;

  refs.mainCocktailsGallery.innerHTML = '';

  Loading.standard('Loading...', {
    fontFamily: 'Poppins',
    messageFontSize: '24px',
  });

  try {
    const response = await fetchCocktailByFirstLetter(query);

    renderPagination(response);
    if (window.innerWidth >= 1280 && response.length >= 9) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
    if (window.innerWidth >= 768 && response.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }
  } catch (error) {
    cocktailMainCardNotFoundTemplate();

    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error('Error', error);
  } finally {
    Loading.remove();
  }
}

//========================= MOBILE ================================

refs.select.addEventListener('change', onSelectOptionClick);

async function onSelectOptionClick(event) {
  event.preventDefault();
  page = 1;
  const query = event.target.value;

  if (refs.mainCocktailsText.textContent !== 'Searching results') {
    refs.mainCocktailsText.textContent = 'Searching results';
  }

  refs.paginationContainer.classList.remove('is-hidden');

  refs.mainCocktailsGallery.innerHTML = '';

  refs.paginationContainer.classList.add('is-hidden');

  try {
    Loading.standard('Loading...', {
      fontFamily: 'Poppins',
      messageFontSize: '24px',
    });

    const response = await fetchCocktailByFirstLetter(query);

    if (window.innerWidth <= 767 && response.length >= 8) {
      refs.paginationContainer.classList.remove('is-hidden');
    }

    renderPagination(response);
  } catch (error) {
    cocktailMainCardNotFoundTemplate();

    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error('Error', error);
  } finally {
    Loading.remove();
  }
}
