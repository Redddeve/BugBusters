import { fetchRandomCocktails } from './fetch-data.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

const onLoad = async () => {
  if (window.innerWidth >= 1280) {
    let data = await fetchRandomCocktails(9);
    cocktailMainCardRender(data);
  } else {
    let data = await fetchRandomCocktails(8);
    cocktailMainCardRender(data);
  }
};

onLoad();
