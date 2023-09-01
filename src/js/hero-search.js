import axios from 'axios';
import { refs } from './refs.js';
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
    // console.log(response.data);
    return response.data;
  } catch (error) {
    const errorMarkup = cocktailMainCardNotFoundTemplate();
    console.log(errorMarkup);
    refs.mainCocktailsGallery.insertAdjacentHTML('beforeend', errorMarkup);
    // throw new Error('Error', error.message);
  }
}

// async function fetchCocktailByFirstLetter(query) {
//     const url = `${BASE_URL}${END_POINT}${query}`;
//     try { }
//     const response = await axios.get(url);
//     const data = await response.data;

//     .then(response => {
//       //   console.log(response.data);
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error('Error', error.message);
//     });
// }

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
      cocktailMainCardRender(data);
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

  refs.mainCocktailsGallery.innerHTML = '';

  fetchCocktailByFirstLetter(query)
    .then(data => {
      //   console.log(data);
      cocktailMainCardRender(data);
    })
    .catch(error => console.log('Error', error));
}
