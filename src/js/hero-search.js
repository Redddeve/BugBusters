import axios from 'axios';
import { refs } from './refs.js';
import { renderPagination } from './pagination.js';
import {
  cocktailMainCardRender,
  cocktailMainCardNotFoundTemplate,
} from './cocktail-fav-card-render.js';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/?f=';

let page = 1;

async function fetchCocktailByFirstLetter(query) {
  const url = `${BASE_URL}${END_POINT}${query}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    cocktailMainCardNotFoundTemplate();
    // throw new Error('Error', error.message);
  }
}

//===================== TABLET & DESKTOP ===========================

refs.container.addEventListener('click', onHeroBtnSearchClick);

function onHeroBtnSearchClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'BUTTON' && e.target.nodeName !== 'OPTION') {
    return;
  }
  page = 1;
  const query = e.target.innerText;

  refs.mainCocktailsGallery.innerHTML = '';

  refs.paginationContainer.classList.add('is-hidden');

  fetchCocktailByFirstLetter(query)
    .then(data => {
      renderPagination(data);
      if (window.innerWidth >= 1280 && data.length >= 9) {
        refs.paginationContainer.classList.remove('is-hidden');
      }
      if (window.innerWidth >= 768 && data.length >= 8) {
        refs.paginationContainer.classList.remove('is-hidden');
      }
    })
    .catch(error => console.log('Error', error));
}

//========================= MOBILE ================================

refs.select.addEventListener('change', onSelectOptionClick);

function onSelectOptionClick(event) {
  event.preventDefault();
  page = 1;
  const query = event.target.value;

  refs.mainCocktailsGallery.innerHTML = '';

  refs.paginationContainer.classList.add('is-hidden');

  fetchCocktailByFirstLetter(query)
    .then(data => {
      if (window.innerWidth <= 767 && data.length >= 8) {
        refs.paginationContainer.classList.remove('is-hidden');
      }

      renderPagination(data);
    })
    .catch(error => console.log('Error', error));
}
