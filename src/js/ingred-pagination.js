import { refs } from './refs.js';
import { renderFavIng } from './fav-ingredients.js';

export function renderIngPagination(ingArr) {
  refs.paginationContainer.innerHTML = `<button
          class="left-pag-btn pagination-button-item"
          type="button"
          id="left-pag-btn"
          data-action="leftPag"
        >
            <svg class="page-left-icon-container page-left-icon pagination-svg" id="left-pag-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-action="leftPag">
            <g clip-path="url(#clip0_12857_1332)">
            <path d="M10.9087 12.5L16 17.5558L14.5456 19L8 12.5L14.5456 6L16 7.44422L10.9087 12.5Z" />
            </g>
        </svg>
        </button>
        <div class="number-buttons-container"></div>
        <button
          class="right-pag-btn pagination-button-item"
          type="button"
          id="right-pag-btn"
          data-action="rightPag"
        >
            <svg class="page-right-icon-container page-left-icon pagination-svg" id="right-pag-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" data-action="rightPag">
            <g clip-path="url(#clip0_12857_1351)">
            <path d="M15.2735 14.5833L9.33366 20.4817L11.0304 22.1667L18.667 14.5833L11.0304 7L9.33366 8.68492L15.2735 14.5833Z" />
            </g>
    </svg>
        </button>`;

  const paginationNumberBtnsContainer = document.querySelector(
    '.number-buttons-container'
  );
  const leftPagBtn = document.getElementById('left-pag-btn');
  const rightPagBtn = document.getElementById('right-pag-btn');
  paginationNumberBtnsContainer.innerHTML = '';
  let cardsPerPage = 6;

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

  let totalIngCount = ingArr.length;

  if (totalIngCount <= cardsPerPage) {
    refs.paginationContainer.classList.add('is-hidden');
  } else refs.paginationContainer.classList.remove('is-hidden');

  let totalPagesNum = Math.ceil(totalIngCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(ingArr, cardsPerPage);

  arrowCheck(leftPagBtn, rightPagBtn);

  function createPagesArr(arr, cardsPerPageNum) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNum === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }
  renderFavIng(sortedCardsArr[0]);

  const onPaginationBtnClick = evt => {
    let btnValue = evt.target.dataset.action;
    refs.ingredientsGallery.innerHTML = '';
    switch (btnValue) {
      case 'leftPag':
        {
          pageBtns[currentPageIndex].classList.remove(
            'pagination-button-item-active'
          );
          currentPageIndex -= 1;
          if (currentPageIndex < 0) {
            currentPageIndex = 0;
          }
          pageBtns[currentPageIndex].classList.add(
            'pagination-button-item-active'
          );
          renderFavIng(sortedCardsArr[currentPageIndex]);
        }
        break;

      case 'rightPag':
        {
          pageBtns[currentPageIndex].classList.remove(
            'pagination-button-item-active'
          );
          currentPageIndex += 1;
          pageBtns[currentPageIndex].classList.add(
            'pagination-button-item-active'
          );
          renderFavIng(sortedCardsArr[currentPageIndex]);
        }
        break;
    }

    if (!isNaN(Number(btnValue))) {
      pageBtns.forEach(item =>
        item.classList.remove('pagination-button-item-active')
      );
      currentPageIndex = Number(btnValue - 1);
      pageBtns[currentPageIndex].classList.add('pagination-button-item-active');
      renderFavIng(sortedCardsArr[currentPageIndex]);
    }
    arrowCheck(leftPagBtn, rightPagBtn);
  };

  leftPagBtn.addEventListener('click', onPaginationBtnClick);
  rightPagBtn.addEventListener('click', onPaginationBtnClick);

  for (let i = 1; i <= totalPagesNum; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.setAttribute('data-action', i);
    pageBtn.classList.add('pagination-button-item');
    pageBtn.addEventListener('click', onPaginationBtnClick);
    pageBtns.push(pageBtn);
  }
  pageBtns[0].classList.add('pagination-button-item-active');
  switch (isMobile()) {
    case true:
      {
        if (pageBtns.length <= 4) {
          paginationNumberBtnsContainer.append(...pageBtns);
        } else {
          start = pageBtns.slice(0, 3);
          finish = pageBtns.slice(pageBtns.length - 1, pageBtns.length);

          const moreBtn = document.createElement('button');
          moreBtn.textContent = '...';
          moreBtn.classList.add('pagination-button-item');

          paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
        }
      }
      break;

    case false: {
      if (pageBtns.length <= 7) {
        paginationNumberBtnsContainer.append(...pageBtns);
      } else {
        start = pageBtns.slice(0, 3);
        finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);

        const moreBtn = document.createElement('button');
        moreBtn.textContent = '...';
        moreBtn.setAttribute('disabled', '');
        moreBtn.classList.add('pagination-button-item');

        paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
        break;
      }
    }
  }

  function arrowCheck(leftPagBtn, rightPagBtn) {
    if (currentPageIndex === 0) {
      // refs.leftPagBtn[0].setAttribute('disabled', '');
      leftPagBtn.classList.add('is-hidden');
    } else {
      // refs.leftPagBtn[0].removeAttribute('disabled');
      leftPagBtn.classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      // refs.rightPagBtn[0].setAttribute('disabled', '');
      rightPagBtn.classList.add('is-hidden');
    } else {
      // refs.rightPagBtn[0].removeAttribute('disabled');
      rightPagBtn.classList.remove('is-hidden');
    }
  }
}
