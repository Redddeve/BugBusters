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
    // refs.paginationContainer.classList.add('is-hidden');
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  cocktailMainCardRender(sortedCardsArr[0]);

  refs.paginationNumberBtnsContainer.addEventListener(
    'click',
    onPaginationBtnClick
  );
  refs.leftPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.rightPagBtn[0].addEventListener('click', onPaginationBtnClick);

  let currentPageIndex = 0;

  // ======== func creating array of pages by tab+desk or mob cards per page number =====
  function createPagesArr(arr, cardsPerPageNun) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNun === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  // ========= func creating pagination buttons =================
  function createPaginationBtns(totalDisplay) {
    const btnsSample = ['1', '2'];

    //   const

    // let markup = '';
    // for (let index = startPageNum; index <= totalDisplay; index++) {
    //   markup += `<button
    //   class="page-num-${index + 1} pagination-button-item"
    //   type="button"
    //   data-action="${index + 1}"
    // >
    //   ${index + 1}
    // </button>`;
    // }
    // console.log(markup);
    refs.paginationNumberBtnsContainer.innerHTML = markup;
  }

  // ============== pagination button click func ================
  function onPaginationBtnClick(evt) {
    // evt.preventDefault();

    // const toSearch = document.getElementById('search');
    // toSearch.scrollIntoView({ behavior: 'smooth' }, true);

    let btnValue = evt.target.dataset.action;

    let totalBtnsDisplay = 7;

    refs.mainCocktailsGallery.innerHTML = '';

    if (btnValue === 'leftPag') {
      currentPageIndex -= 1;
      if (currentPageIndex < 0) {
        currentPageIndex = 0;
        refs.rightPagBtn[0].classlist.add('pagination-button-disabled');
        refs.rightPagBtn[0].setAttribute.disabled;
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      //   createPaginationBtns(currentPageIndex, totalBtnsDisplay);
    }

    if (btnValue === 'rightPag') {
      currentPageIndex += 1;
      if (currentPageIndex > totalPagesNum - 1) {
        currentPageIndex = totalPagesNum - 1;
        refs.rightPagBtn[0].classlist.add('pagination-button-disabled');
        refs.rightPagBtn[0].setAttribute.disabled;
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      //   createPaginationBtns(currentPageIndex, totalBtnsDisplay);
    }

    if (!isNaN(Number(btnValue))) {
      currentPageIndex = Number(btnValue - 1);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
    }
  }
}
