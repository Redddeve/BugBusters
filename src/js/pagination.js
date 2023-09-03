import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

export function renderPagination(cocktailArr) {
  let cardsPerPage;
  let pageBtns = [];
  let start = [];
  let finish = [];
  let totalCocktailCount = cocktailArr.length;
  let currentPageIndex = 0;

  // ========== more "..." btn sec===========
  const moreBtn = document.createElement('button');
  moreBtn.textContent = '...';
  moreBtn.classList.add('pagination-button-item');
  moreBtn.classList.add('is-hidden');
  let moreBtnIndex = 4;

  // ============== device type detection =========
  function isMobile() {
    if (window.innerWidth >= 768) {
      return false;
    } else {
      return true;
    }
  }

  let currentPageIndex = 0;
  let pageBtns = [];
  let start = [];
  let finish = [];

  function isMobile() {
    if (window.innerWidth >= 768) {
      return false;
    } else {
      return true;
    }
  }
  if (window.innerWidth >= 1280) {
    cardsPerPage = 9;
  } else {
    cardsPerPage = 8;
  }

  // ================== create pages from data sec ====================
  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  if (totalCocktailCount <= cardsPerPage) {
    refs.paginationContainer.classList.add('is-hidden');
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  function createPagesArr(arr, cardsPerPageNun) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNum === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  cocktailMainCardRender(sortedCardsArr[0]);

  refs.paginationNumberBtnsContainer.addEventListener(
    'click',
    onPaginationBtnClick
  );

  refs.leftPagBtn[0].addEventListener('click', onPaginationBtnClick);
  //   refs.leftPagBtn[1].addEventListener('click', onPaginationBtnClick);
  refs.rightPagBtn[0].addEventListener('click', onPaginationBtnClick);
  //   refs.rightPagBtn[1].addEventListener('click', onPaginationBtnClick);

  let currentPageIndex = 0;

  // ==================== on pagination click func ============
  function onPaginationBtnClick(evt) {
    evt.preventDefault();

    const toSearch = document.getElementById('search');
    toSearch.scrollIntoView({ behavior: 'smooth' }, true);

    let btnValue = evt.target.dataset.action;

    refs.mainCocktailsGallery.innerHTML = '';

    // if (evt.target.nodeName !== 'BUTTON') {
    //   return;
    // }

    if (btnValue === 'leftPag') {
      currentPageIndex -= 1;
      if (currentPageIndex < 0) {
        currentPageIndex = 0;
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
    }

    if (btnValue === 'rightPag') {
      currentPageIndex += 1;
      if (currentPageIndex > totalPagesNum - 1) {
        currentPageIndex = totalPagesNum - 1;
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
    }

    if (!isNaN(Number(btnValue))) {
      currentPageIndex = Number(btnValue - 1);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      moreBtnIndex = currentPageIndex + 1;
    }

    if (currentPageIndex === 0) {
      refs.leftPagBtn[0].classList.add('is-hidden');
    } else {
      refs.leftPagBtn[0].classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      refs.rightPagBtn[0].classList.add('is-hidden');
    } else {
      refs.rightPagBtn[0].classList.remove('is-hidden');
    }
    arrowCheck();
  }
  function arrowCheck() {
    if (currentPageIndex === 0) {
      // refs.leftPagBtn[0].setAttribute('disabled', '');
      refs.leftPagBtn[0].classList.add('is-hidden');
    } else {
      // refs.leftPagBtn[0].removeAttribute('disabled');
      refs.leftPagBtn[0].classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      // refs.rightPagBtn[0].setAttribute('disabled', '');
      refs.rightPagBtn[0].classList.add('is-hidden');
    } else {
      // refs.rightPagBtn[0].removeAttribute('disabled');
      refs.rightPagBtn[0].classList.remove('is-hidden');
    }
  }
}
