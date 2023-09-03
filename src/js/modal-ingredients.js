import { every, throttle } from 'lodash';
import { Notify } from 'notiflix';
import { refs } from './refs';
import { getIngredient } from './fetch-data';
import { addToLS, removeFromLS } from './local-storage-operations';
import markupIngredient from './markup-ingredient';

refs.ingredList.addEventListener('click', onIngredClick);

async function onIngredClick(e) {
  const ingredName = e.target.textContent;
  if (e.target.classList.contains('ingredients-link')) {
    try {
      const response = await getIngredient(ingredName);
            
      const result = response.find(ing => ing.title.toLocaleLowerCase === ingredName.toLocaleLowerCase);
            
      markupIngredient(result);
      refs.backdropIngred.classList.remove('is-hidden');
      let addBtn = document.querySelector('.add-to-fav-ing-btn');
      let removeBtn = document.querySelector('.remove-from-fav-ing-btn');
      addBtn.addEventListener('click', addIngredientToFav(addBtn, removeBtn, addBtn.dataset.id));
      removeBtn.addEventListener('click', removeIngredientFromFav(addBtn, removeBtn, removeBtn.dataset.id));
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
  throttle(cleanIngredMarkup, 100);
  refs.backdropIngred.classList.add('is-hidden');
}

function cleanIngredMarkup() {
  refs.ingreModalInner.innerHTML = '';
}

const addIngredientToFav = (addBtn, removeBtn, id) => {
  console.log('hyu')
  addToLS('ingredients', id);
  removeBtn.classList.remove('is-hidden');
  addBtn.classList.add('is-hidden');
};

const removeIngredientFromFav = (addBtn, removeBtn, id) => {
  removeFromLS('ingredients', id);
  addBtn.classList.remove('is-hidden');
  removeBtn.classList.add('is-hidden');
};
