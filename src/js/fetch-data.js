import axios from 'axios';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/';
const RANDOM_ENDPOINT = `cocktails/?r=`;
const COCKT_SEARCH_NAME = `cocktails/search/?s=`;
const COCKT_LOOKUP_ID = `cocktails/lookup/?id=`;

export async function fetchRandomCocktails(num) {
  const response = await fetch(`${BASE_URL}${RANDOM_ENDPOINT}${num}`);
  const responseJson = await response.json();
  return lookupMultipleCocktails(responseJson);
}

export async function fetchCocktailByName(query) {
  return await axios
    .get(`${BASE_URL}${COCKT_SEARCH_NAME}${query}`)
    .then(res => {
      console.log(res);
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    });
}
// export async function fetchCocktailByName(query) {  //* Fetch method
//   return await fetch(`${BASE_URL}cocktails/search/?s=${query}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   });
// }

async function lookupMultipleCocktails(arr) {
  const getByID = arr.map(async data => {
    const res = await fetch(`${BASE_URL}${COCKT_LOOKUP_ID}${data._id}`);
    return res.json();
  });

  const cockts = await Promise.all(getByID);
  return cockts.map(data => data[0]);
}


// ===================modals===============
export async function getCocktail(id) {
  try {
      const response = await fetch(
    `https://drinkify-backend.p.goit.global/api/v1/cocktails/lookup/?id=${id}`
  );
  const responseJson = await response.json();
  return responseJson[0];
  } catch (error) {
    console.log(error);
  }

}

export async function getIngredient(ingredName) {
  try {
    const response = await fetch(
      `https://drinkify-backend.p.goit.global/api/v1/ingredients/search/?s=${ingredName}`
    );
    const responseJson = await response.json();
    const result = responseJson.find(ing => ing.title === ingredName)
      console.log(result);
      return result
  } catch (error) {
    console.log(error);
  }
}

// ===================modals===============

