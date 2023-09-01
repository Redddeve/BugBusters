import { every } from 'lodash';
import { Notify } from 'notiflix';
import { refs } from './refs';
import { getIngredient } from './fetch-data';

refs.ingredList.addEventListener('click', onIngredClick);

function onIngredClick(event) {
  const ingredName = event.target.textContent;
  getIngredient(ingredName)
    .then(data => {
      if (!data) {
        throw new Error();
      }
      markupIngredient(data);
      refs.backdropIngred.classList.remove('is-hidden');
    })
    .catch(error => {
      console.log(error);
      // Notify.failure('error on load data');
    });
}

refs.closeModalBtn.addEventListener('click', closeIngredModal);

function closeIngredModal() {
  refs.backdropIngred.classList.add('is-hidden');
  refs.ingreModalInner.innerHTML = '';
}

async function getIngredient(ingredName) {
  try {
    const response = await fetch(
      `https://drinkify-backend.p.goit.global/api/v1/ingredients/search/?s=${ingredName}`
    );
    const responseJson = await response.json();
    return responseJson[0];
  } catch (error) {
    console.log(error);
  }
}

function markupIngredient({
  abv,
  country,
  description,
  flavour,
  title,
  type,
  _id,
}) {
  refs.ingreModalInner.innerHTML = `    
    <h3 class="ingred-header">${title}</h3>
    <p class="ingred-type">${type}</p>
    <p class="ingred-desc">${description}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${type}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${country}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${abv} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${flavour}
        </p>
      </li>
    </ul>
    <button type="button" class="modal-to-favorite-btn add-to-fav-btn" data-id="${_id}">add to favorite</button>
    <button type="button" class="modal-to-favorite-btn remove-from-fav-btn" data-id="${_id}">remove from favorite</button>
     `;
}
