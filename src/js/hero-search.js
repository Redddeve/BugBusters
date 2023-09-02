import axios from 'axios';
import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';
import { renderPagination } from './pagination.js';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/?f=';

let page = 1;

async function fetchCocktailByFirstLetter(query) {
  const url = `${BASE_URL}${END_POINT}${query}`;
  return await axios
    .get(url)
    .then(response => {
      //   console.log(response.data);
      return response.data;
    })
    .catch(error => {
      throw new Error('Error', error.message);
    });
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

  fetchCocktailByFirstLetter(query)
    .then(data => {
      //   console.log(data);
      //   cocktailGetQuantity = data.length;
      //   cocktailMainCardRender(data);
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
  //   console.log(event.target.value);
  event.preventDefault();
  page = 1;
  const query = event.target.value;
  refs.paginationContainer.classList.remove('is-hidden');

  refs.mainCocktailsGallery.innerHTML = '';

  fetchCocktailByFirstLetter(query)
    .then(data => {
      //   console.log(data);

      renderPagination(data);
      if (window.innerWidth >= 768 && data.length >= 8) {
        refs.paginationContainer.classList.remove('is-hidden');
      }
    })
    .catch(error => console.log('Error', error));
}
