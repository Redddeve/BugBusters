import './header.js'; //TODO Все что ниже нужно кинуть в отдельный файл
import { Notify } from 'notiflix';
import { refs } from './refs';
import { fetchIngredient } from './fetch-data';
import { removeFromLS } from './local-storage-operations';
import markupIngredient from './markup-ingredient';
import { renderIngPagination } from './ingred-pagination.js';

export const renderFavIng = ids => {
  refs.ingredientsGallery.innerHTML = '';
  refs.containerNotFoundFavIng.classList.add('is-hidden');
  if (!ids || ids.length === 0) {
    refs.containerNotFoundFavIng.classList.remove('is-hidden');
  }
  ids.forEach(async id => {
    const response = await fetchIngredient(id);
    if (!response[0]) return;
    const data = response[0];
    refs.ingredientsGallery.innerHTML += `
        <li class="fav-ingredient-card">
        <h3 class="fav-ingred-header">${data.title}</h3>
        <p class="is-alcoholic">${
          data.alcohol === 'Yes' ? 'Alcoholic' : 'Non-Alcoholic'
        }</p>
        <p class="fav-ingred-desc">
        ${data.description}
        </p>
        <div class="fav-ingred-btns">
          <button type="button" class="fav-ingred-learn-more-btn learn-more-btn" data-id="${id}" data-role="learn-more">
            LEARN MORE
          </button>
          <button
            type="button"
            class="delete-btn fav-ingred-delete-btn"
            data-id="${id}"
            data-role="delete"
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
      </li>
    `;
  });
};

renderIngPagination(JSON.parse(localStorage.getItem('ingredients')));

const deleteFromFavIng = id => {
  removeFromLS('ingredients', id);
  renderIngPagination(JSON.parse(localStorage.getItem('ingredients')));
};

const openIngredModal = async e => {
  const ingredId = e.target.dataset.id;
  try {
    const response = await fetchIngredient(ingredId);
    if (!response[0]) return;
    const data = response[0];
    markupIngredient(data);
    refs.backdropIngred.classList.remove('is-hidden');
    let removeFromFavBtn = document.querySelector('.remove-from-fav-ing-btn');
    removeFromFavBtn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      deleteFromFavIng(id);
      refs.backdropIngred.classList.add('is-hidden');
    });
  } catch (err) {
    Notify.failure('Oops, something went wrong!', {
      clickToClose: true,
    });
    console.error(err);
  }
};

refs.ingredientsGallery.addEventListener('click', e => {
  if (e.target.dataset.role === 'delete' || e.target.closest('.delete-btn')) {
    deleteFromFavIng(e.target.dataset.id);
  }
  if (e.target.dataset.role === 'learn-more') {
    openIngredModal(e);
  }
});

refs.backdropIngred.addEventListener('click', closeIngredModal);

function closeIngredModal(e) {
  if (
    e.target !== e.currentTarget &&
    e.target.closest('.ingred-modal-x-btn') !== refs.closeModalBtn
  ) {
    return;
  }
  refs.backdropIngred.classList.add('is-hidden');
  renderFavIng();
}
