export const refs = {
  // ========================= Header =========================
  headerForm: document.querySelector('.search-form'),
  toggleListButtonUp: document.querySelector('.button-for-favorite-up'),
  toggleListButtonDown: document.querySelector('.button-for-favorite-down'),
  favList: document.querySelector('.fav-open-list'),
  favLink: document.querySelector('.fav-link-button'),
  favBtn: document.querySelector('.header-fav-toggle p'),
  favArrowD: document.querySelector('.fav-arrow__down'),
  favArrowU: document.querySelector('.fav-arrow__up'),
  favBlock: document.querySelector('.fav-block'),
  closeButton: document.querySelector('.menu-button'),
  mobileMenu: document.querySelector('#mobile-menu'),
  openBurgerButton: document.querySelector('.menu-toggle'),
  // ========================= Hero =========================
  select: document.getElementById('heroSelect'),
  container: document.querySelector('.hero-select-items'),
  // ========================= Search =========================
  mainCocktailsText: document.querySelector('.search-section .change'),
  heroBtnSearch: document.querySelector('.hero-select-button'),
  mainCocktailsGallery: document.querySelector('.search-section .gallery'),
  cardContainer: document.querySelector('.cocktail-cards-container'),
  cardItem: document.querySelector('#cocktail-card-item'),
  containerNotFound: document.querySelector('.not-found-info-container'),
  // =============modals==============
  cocktailMarkup: document.querySelector('.cocktail-markup'),
  closeCocktailModalBtn: document.querySelector('.cocktail-modal-x-btn'),
  backdropCocktailEl: document.querySelector('.backdrop-cocktail'),
  gallery: document.querySelector('.gallery'),
  cocktailsModal: document.querySelector('.cocktail-modal'),
  image: document.querySelector('.cocktail-modal-img'),
  header: document.querySelector('.cocktail-modal-header'),
  ingredList: document.querySelector('.modal-ingredients-list'),
  instr: document.querySelector('.modal-instractions'),
  toFavoriteBtn: document.querySelector('.add-to-fav-btn'),
  removeFavoriteBtn: document.querySelector('.remove-from-fav-btn'),

  ingredList: document.querySelector('.modal-ingredients-list'),
  ingreModalInner: document.querySelector('.ingred-modal-inner'),
  closeModalBtn: document.querySelector('.ingred-modal-x-btn'),
  backdropIngred: document.querySelector('.backdrop-ingred'),
  // =============modals==============
ingredientsGallery: document.querySelector('.ingredients-gallery'),
  //=================== pagination=============
  paginationContainer: document.querySelector('.pagination-buttons-container'),
  leftPagBtn: document.querySelectorAll("[data-action='leftPag']"),
  rightPagBtn: document.querySelectorAll("[data-action='rightPag']"),
  paginationNumberBtnsContainer: document.querySelector(
    '.number-buttons-container'
  ),
};
