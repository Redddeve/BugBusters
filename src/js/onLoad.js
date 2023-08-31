import { fetchRandomCocktails } from './fetch-data.js';

const onLoad = async () => {
  if (window.innerWidth >= 1280) {
    let data = await fetchRandomCocktails(9);
    renderCards(data);
  } else {
    let data = await fetchRandomCocktails(8);
    renderCards(data);
  }
};

onLoad();
