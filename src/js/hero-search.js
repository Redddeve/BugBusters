import axios from 'axios';
import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1';
const END_POINT = '/cocktails/search/?f=';

let page = 1;

refs.container.addEventListener('click', onHeroBtnSearchClick);

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

function onHeroBtnSearchClick(event) {
  event.preventDefault();
  page = 1;
  const query = event.target.innerText;

  refs.mainCocktailsGallery.innerHTML = '';

  fetchCocktailByFirstLetter(query)
    .then(data => {
      console.log(data);
      cocktailMainCardRender(data);
    })
    .catch(error => console.log('Error', error));
}

//==========================================================
