export async function fetchRandomCocktails(num) {
  const response = await fetch(
    `https://drinkify-backend.p.goit.global/api/v1/cocktails/?r=${num}`
  );
  const responseJson = await response.json();
  return responseJson;
}
