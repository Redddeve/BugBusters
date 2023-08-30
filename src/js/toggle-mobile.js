const toggleListButtonUp = document.querySelector('.button-for-favorite-up')
const toggleListButtonDown = document.querySelector('.button-for-favorite-down')
const favList = document.querySelector('.fav-open-list')
const favLink = document.querySelector('.fav-link-button')

// import {refs} from "./refs.js";

toggleListButtonUp.addEventListener('click', () => {
    toggleListButtonUp.classList.toggle('is-hidden-fav');
    toggleListButtonDown.classList.toggle('is-hidden-fav');  
   
    showTheFavList()
});

toggleListButtonDown.addEventListener('click', () => {
    toggleListButtonDown.classList.toggle('is-hidden-fav');
    toggleListButtonUp.classList.toggle('is-hidden-fav');

    showTheFavList()
    
});

favLink.addEventListener('click', () => {
    toggleListButtonDown.classList.toggle('is-hidden-fav');
    toggleListButtonUp.classList.toggle('is-hidden-fav');

    showTheFavList()
    
})



const showTheFavList = () => {
    favList.classList.toggle('open-fav-list');
    favList.classList.toggle('closed-fav-list');
    
}