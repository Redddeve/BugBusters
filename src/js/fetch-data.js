import axios from 'axios';

const BASE_URL = 'https://drinkify-backend.p.goit.global/api/v1/';
const RANDOM_ENDPOINT = `cocktails/?r=`;
const COCKT_SEARCH_NAME = `cocktails/search/?`;
const COCKT_LOOKUP_ID = `cocktails/lookup/?id=`;
const INGRED_SEARCH_NAME = `ingredients/search/?`;

export async function fetchRandomCocktails(num) {
  const response = await fetch(`${BASE_URL}${RANDOM_ENDPOINT}${num}`);
  const responseJson = await response.json();
  return lookupMultipleCocktails(responseJson);
}

export async function fetchCocktailByName(query) {
  const params = new URLSearchParams({
    s: query,
  });
  return await axios
    .get(`${BASE_URL}${COCKT_SEARCH_NAME}${params}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    });
}

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
  // try {
  return await axios.get(`${BASE_URL}${COCKT_LOOKUP_ID}${id}`).then(res => {
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
    return res.data;
  });
  // const responseJson = await response.json();
  // return responseJson[0];
  // } catch (error) {
  //   console.log(error);
  // }
}

export async function getIngredient(ingredName) {
  const params = new URLSearchParams({
    s: ingredName,
  });
  return await axios
    .get(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    });
  /* try {
    const response = await fetch(`${BASE_URL}${INGRED_SEARCH_NAME}${params}`);
    const responseJson = await response.json();
    console.log(responseJson);
    const result = responseJson.find(ing => ing.title === ingredName);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  } */
}

export const fetchIngredient = async id => {
  const response = await fetch(`${BASE_URL}ingredients/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

// ===================modals===============
