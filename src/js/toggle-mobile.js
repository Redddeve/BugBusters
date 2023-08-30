const toggleListButtonUp = document.querySelector('.button-for-favorite-up')
const toggleListButtonDown = document.querySelector('.button-for-favorite-down')
const favList = document.querySelector('.fav-open-list')

// import {refs} from "./refs.js";

toggleListButtonUp.addEventListener('click', () => {
    toggleListButtonUp.classList.toggle('is-hidden-fav');
   toggleListButtonDown.classList.toggle('is-hidden-fav');    
});

toggleListButtonDown.addEventListener('click', () => {
    toggleListButtonDown.classList.toggle('is-hidden-fav');
    toggleListButtonUp.classList.toggle('is-hidden-fav');

});

// const showTheFavList = () => {

// }