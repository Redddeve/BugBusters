import { refs } from './refs';

export function cocktailFavCardRender(cocktailArr) {
  const allCardsMarkup = cocktailArr
    .map(el => {
      return cocktailFavCardTemplate(
        el.drinkThumb,
        el.drink,
        el.description,
        el._id
      );
    })
    .join('');
  refs.cardContainer.insertAdjacentHTML('beforeend', allCardsMarkup);
}

function cocktailFavCardTemplate(
  cocktailImg,
  cocktailName,
  cocktailDesc,
  cocktailID
) {
  const markup = `<li class="cocktail-card-main" id="cocktail-card-item">
        <img class="cocktail-card-img" src="${cocktailImg}" alt="${cocktailName}" width="" height="" />
        <h3 class="card-cocktail-name">${cocktailName}</h3>
        <p class="card-cocktail-desc">${cocktailDesc}</p>
        <div class="buttons-container">
        <button type="button" class="learn-more-btn" data-id="${cocktailID}">learn more</button>
        <button type="button" class="delete-btn card-cocktail-delete-icon-use" >
    <svg class="card-cocktail-delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
        </div>
      </li>`;
  return markup;
}

export function cocktailMainCardRender(cocktailArr) {
  refs.containerNotFound.classList.add('is-hidden');
  refs.mainCocktailsText.classList.remove('is-hidden');
  allCardsMarkup = cocktailArr
    .map(el => {
      return cocktailMainCardTemplate(
        el.drinkThumb,
        el.drink,
        el.description,
        el._id
      );
    })
    .join('');

  refs.mainCocktailsGallery.insertAdjacentHTML('beforeend', allCardsMarkup);

  if (allCardsMarkup) {
    refs.containerNotFoundFavCocktails.classList.remove('is-hidden');
  } else {
  }
}

function cocktailMainCardTemplate(
  cocktailImg,
  cocktailName,
  cocktailDesc,
  cocktailID
) {
  const markup = `<li class="cocktail-card-main" id="cocktail-card-item">
                  <img
            class="cocktail-card-img"
            src="${cocktailImg}"
            alt="${cocktailName}"
            width=""
            height=""
          />
          <h3 class="card-cocktail-name">${cocktailName}</h3>
          <p class="card-cocktail-desc">${cocktailDesc}</p>
          <div class="buttons-container">
            <button type="button" class="learn-more-btn" data-id=${cocktailID}>
              learn more
            </button>
            <button
              type="button"
              class="delete-btn card-cocktail-delete-icon-use saveButton"
              data-id="${cocktailID}"
            >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987Z"
    stroke="#FDFDFF"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
            </button>
            <button 
              type="button"
              class="delete-btn card-cocktail-delete-icon-use deleteButtonn"
              data-id="${cocktailID}"
            >
  <svg
    class="card-cocktail-delete-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5"
      stroke="#FDFDFF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>

          </div>
        </div>
      </li>`;
  return markup;
}

export function cocktailMainCardNotFoundTemplate() {
  refs.containerNotFound.classList.remove('is-hidden');
  refs.mainCocktailsText.classList.add('is-hidden');
}
