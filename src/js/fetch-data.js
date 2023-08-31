const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/';

export async function fetchRandomCocktails(num) {
  const response = await fetch(`${BASE_URL}cocktails/?r=${num}`);
  const responseJson = await response.json();
  return responseJson;
}

export async function fetchCocktailByName(query) {
  return await fetch(`${BASE_URL}cocktails/search/?s=${query}`).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
