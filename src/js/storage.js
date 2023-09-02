import onShowModal from './modal-cocktails';
import onIngredClick from './modal-ingredients';
import { refs } from './refs';

const favCock = document.querySelector('.gallery-for-fav');
const newSaveButton = document.querySelector('.saveButton');
const newDeleteButton = document.querySelector('.deleteButtonn');
const doDelete = document.querySelector('.to-delete');

// localStorage.clear()

let arrayFavorite = [];

function pushToFav() {
  let localFavoritesString = localStorage.getItem('favorites');
  if (JSON.parse(localFavoritesString).includes(dataSet)) {
    return;
  } else {
    arrayFavorite.push(dataSet);
    console.log(arrayFavorite);
  }
}

function savedFav() {
  localStorage.setItem('favorites', JSON.stringify(arrayFavorite));
}

function getFavLocal() {
  let localFavoritesString = localStorage.getItem('favorites');
  if (localFavoritesString !== null) {
    arrayFavorite = JSON.parse(localFavoritesString);
    displayCocktails();
  }
}
getFavLocal();

// const gallaryFav = document.querySelector('.father-for-fav')
const divEvent = document.querySelector('.for-event');
const gallery = document.querySelector('.gallery');

// главная
gallery.addEventListener('click', event => {
  if (
    //* onClick add fav
    (event.target.nodeName === 'BUTTON' && event.target.nodeName === 'SVG') ||
    event.target.closest('.saveButton')
  ) {
    dataSet = event.target.closest('.saveButton').dataset.id;
    console.log(event.target);
    console.log(event.target.className);
    addNewCocktail();
  }
  if (
    //* onClick remove fav
    (event.target.nodeName === 'BUTTON' && event.target.nodeName === 'SVG') ||
    event.target.closest('.deleteButtonn')
  ) {
    console.log(event.target);
    dataSet = event.target.closest('.deleteButtonn').dataset.id;
    deleteFromFavorite();
    deleteMurkup();
  }

  // if (
  //     event.target.nodeName === 'BUTTON' &&
  //     event.target.closest('.learn-more-btn')
  // ) {
  //     console.log(event.target)

  //     dataSet = event.target.closest('.learn-more-btn').dataset.id

  //     showCocktailModal()

  // }
});

const test = document.querySelector('.cocktail-modal');

test.addEventListener('click', event => {
  if (
    //* onClick add fav
    (event.target.nodeName === 'BUTTON' && event.target.nodeName === 'SVG') ||
    event.target.closest('.add-to-fav-btn')
  ) {
    dataSet = event.target.closest('.add-to-fav-btn').dataset.id;
    console.log(event.target);
    console.log(event.target.className);
    addNewCocktail();
  }
  if (
    //* onClick remove fav
    (event.target.nodeName === 'BUTTON' && event.target.nodeName === 'SVG') ||
    event.target.closest('.remove-from-fav-btn')
  ) {
    // console.log(event.target)
    dataSet = event.target.closest('.remove-from-fav-btn').dataset.id;
    deleteFromFavorite();
    deleteMurkup();
  }
});

const test2 = document.querySelector('.modal-ingredients-list');
console.log(test2);

async function addNewCocktail() {
  await pushToFav();
  await savedFav();
}

function deleteFromFavorite() {
  if (arrayFavorite.includes(dataSet)) {
    const dataSetIndex = arrayFavorite.indexOf(dataSet);
    arrayFavorite.splice(dataSetIndex, 1);
    // console.log(dataSetIndex);
    savedFav();
  }
}

/** ========================= Fetch and Markup ========================= */

async function getArrayOfCocktail(array) {
  //          if (array === []) {
  //     return
  // }
  const response = await fetch(
    `https://drinkify-backend.p.goit.global/api/v1/cocktails/lookup/?ids=${array}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
}

async function displayCocktails() {
  try {
    const data = await getArrayOfCocktail(arrayFavorite);
    refs.containerNotFoundFavCocktails.classList.add('is-hidden');
    console.log(data);
    data.forEach(element => {
      markup(element);
    });
  } catch (error) {
    refs.containerNotFoundFavCocktails.classList.remove('is-hidden');
    console.error('Error:', error);
  }
}

function markup({ drinkThumb, drink, instructions, _id }) {
  const markup = `<li class="to-delete"><div class="cocktail-card-main" id="cocktail-card-item">
        <img class="cocktail-card-img" src="${drinkThumb}" alt="${drink}" width="" height="" />
        <h3 class="card-cocktail-name">${drink}</h3>
        <p class="card-cocktail-desc">${instructions}</p>
        <div class="buttons-container">
        <button type="button" class="learn-more-btn" data-id="${_id}">learn more</button>
        <button type="button" class="delete-btn card-cocktail-delete-icon-use deleteButtonn" data-id="${_id}">
    <svg class="card-cocktail-delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M11 4.5V3.9C11 3.05992 11 2.63988 10.8365 2.31901C10.6927 2.03677 10.4632 1.8073 10.181 1.66349C9.86012 1.5 9.44008 1.5 8.6 1.5H7.4C6.55992 1.5 6.13988 1.5 5.81901 1.66349C5.53677 1.8073 5.3073 2.03677 5.16349 2.31901C5 2.63988 5 3.05992 5 3.9V4.5M6.5 8.625V12.375M9.5 8.625V12.375M1.25 4.5H14.75M13.25 4.5V12.9C13.25 14.1601 13.25 14.7902 13.0048 15.2715C12.789 15.6948 12.4448 16.039 12.0215 16.2548C11.5402 16.5 10.9101 16.5 9.65 16.5H6.35C5.08988 16.5 4.45982 16.5 3.97852 16.2548C3.55516 16.039 3.21095 15.6948 2.99524 15.2715C2.75 14.7902 2.75 14.1601 2.75 12.9V4.5" stroke="#FDFDFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
        </div>
      </div></li>`;

  favCock.insertAdjacentHTML('afterbegin', markup);
}

// // /** ========================= Удалить ========================= */

function deleteMurkup() {
  favCock.innerHTML = '';
  // favCock.removeChild(doDelete)
  // doDelete.remove();
  displayCocktails();
}

// function disable() {
//     saveBtn.disabled = true;
//     removeFavButton.disabled = false;
// }

// function enable() {
//     saveBtn.disabled = false;
//     removeFavButton.disabled = true;
// }

// newSaveButton.addEventListener('click', async () => {
//     await pushToFav();
//     await savedFav();
//     displayCocktails()
// });
// newDeleteButton.addEventListener('click',deleteFromFavorite)

// console.log(event.target.className);
// const targetButton = event.target;
//     if (targetButton.classList.contains('saveButton')) {
//             dataSet = targetButton.dataset.id;
//         addNewCocktail();
// } else if (targetButton.classList.contains('deleteButtonn')) {
//               dataSet = targetButton.dataset.id;
//         deleteFromFavorite();
//     }

// // /** ========================= Альтернативные функции для роботы с LocalStorage ========================= */

// export function saveToStorage(key, value) {
//   let setValue;
//   try {
//     if (getFromStorage(key)) {
//       if (getFromStorage(key).includes(value)) {
//         console.log('already added');
//         return;
//       } else {
//         console.log('adding');
//         setValue = [...getFromStorage(key), value];
//       }
//     } else {
//       setValue = [value];
//     }
//     localStorage.setItem(key, JSON.stringify(setValue));
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// export function getFromStorage(key) {
//   try {
//     return localStorage.getItem(key) === null
//       ? []
//       : JSON.parse(localStorage.getItem(key));
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function deleteFromStorage(key, value) {
//   try {
//     const getIndex = getFromStorage(key).indexOf(value);
//     getFromStorage(key).splice(getIndex, 1);
//     localStorage.setItem(key, JSON.stringify(getFromStorage(key)));
//   } catch (error) {
//     console.error(error.message);
//   }
//   return;
// }
