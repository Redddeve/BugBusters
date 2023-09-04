import { fetchRandomCocktails } from './fetch-data.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';
import { arrayFavorite } from './storage.js';
import { refs } from './refs.js';

const onLoad = async () => {
  if (window.innerWidth >= 1280) {
    let data = await fetchRandomCocktails(9);
    cocktailMainCardRender(data);
  } else {
    let data = await fetchRandomCocktails(8);
    cocktailMainCardRender(data);
  }
  refs.paginationContainer.classList.add('is-hidden');
  localStorage.setItem('favorites', JSON.stringify(arrayFavorite));
};

onLoad();
