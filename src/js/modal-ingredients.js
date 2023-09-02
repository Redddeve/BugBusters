import { every, throttle } from 'lodash';
import { Notify } from 'notiflix';
import { refs } from './refs';
import { getIngredient } from './fetch-data';

refs.ingredList.addEventListener('click', onIngredClick);

async function onIngredClick(e) {
  const ingredName = e.target.textContent;
  if (e.target.classList.contains('ingredients-link')) {
    try {
      const response = await getIngredient(ingredName);
      const result = response.find(ing => ing.title === ingredName);

      markupIngredient(result);
      refs.backdropIngred.classList.remove('is-hidden');
    } catch (err) {
      Notify.failure('Oops, something went wrong!', {
        clickToClose: true,
      });
      console.error(err);
    }
  }
}

refs.backdropIngred.addEventListener('click', closeIngredModal);

function closeIngredModal(e) {
  if (
    e.target !== e.currentTarget &&
    e.target.closest('.ingred-modal-x-btn') !== refs.closeModalBtn
  ) {
    return;
  }
  throttle(cleanIngredMarkup, 100)
  refs.backdropIngred.classList.add('is-hidden');
  }

function cleanIngredMarkup () {refs.ingreModalInner.innerHTML = ''}

function markupIngredient({
  abv,
  country,
  description,
  flavour,
  title,
  type,
  _id,
}) 
{
  if(!abv) abv = 0;
  if(!country) country = "####";
  if(!description) description = "####";
  if(!flavour) flavour = "####";
  if(!type) type = "####";
    
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
