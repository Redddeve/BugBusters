import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

export function renderPagination(cocktailArr) {
  let cardsPerPage;

  if (window.innerWidth >= 1280) {
    cardsPerPage = 9;
  } else {
    cardsPerPage = 8;
  }

  let totalCocktailCount = cocktailArr.length;

  if (totalCocktailCount <= cardsPerPage) {
    refs.paginationContainer.classList.add('is-hidden');
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  function createPagesArr(arr, cardsPerPageNun) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNun === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  //   let sortedCardsArr = [];
  //   let currentPageArr = [];
  //   let currentElemIndex = 0;

  //   for (let count = 0; count < totalPagesNum; count++) {
  //     for (let cardNum = 0; cardNum < cardsPerPage; cardNum++) {
  //       if (cocktailArr[currentElemIndex]) {
  //         currentPageArr.push(cocktailArr[currentElemIndex]);
  //         currentElemIndex++;
  //       }
  //     }
  //     sortedCardsArr.push(currentPageArr);
  //     currentPageArr = [];
  //   }

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
    }
  }
}
