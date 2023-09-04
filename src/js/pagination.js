import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

export function renderPagination(cocktailArr) {
  refs.paginationNumberBtnsContainer.innerHTML = '';
  let cardsPerPage;

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

  let totalCocktailCount = cocktailArr.length;

  if (totalCocktailCount <= cardsPerPage) {
    refs.paginationContainer.classList.add('is-hidden');
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  arrowCheck();

  function createPagesArr(arr, cardsPerPageNum) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNum === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  cocktailMainCardRender(sortedCardsArr[0]);

  refs.leftPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.rightPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.paginationNumberBtnsContainer.addEventListener(
    'click',
    onPaginationBtnClick
  );

  for (let i = 1; i <= totalPagesNum; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.setAttribute('data-action', i);
    pageBtn.classList.add('pagination-button-item');
    pageBtn.addEventListener('click', onPaginationBtnClick);
    pageBtns.push(pageBtn);
  }

  switch (isMobile()) {
    case true:
      {
        if (pageBtns.length <= 4) {
          refs.paginationNumberBtnsContainer.append(...pageBtns);
        } else {
          start = pageBtns.slice(0, 3);
          finish = pageBtns.slice(pageBtns.length - 1, pageBtns.length);

          const moreBtn = document.createElement('button');
          moreBtn.textContent = '...';
          moreBtn.setAttribute('disabled', '');
          moreBtn.setAttribute('data-disable', 'true');
          moreBtn.classList.add('pagination-button-item');

          refs.paginationNumberBtnsContainer.append(
            ...start,
            moreBtn,
            ...finish
          );

          // if (condition) {
          //   start = pageBtns.slice(0, 1)
          //   finish = pageBtns.slice(pageBtns.length - 1, pageBtns.length);
          //   current = currentPageIndex
          //   refs.paginationNumberBtnsContainer.append(...start, moreBtn, current, moreBtn, ...finish);
          // }
        }
      }
      break;

    case false: {
      if (pageBtns.length <= 7) {
        refs.paginationNumberBtnsContainer.append(...pageBtns);
      } else {
        start = pageBtns.slice(0, 3);
        finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);

        const moreBtn = document.createElement('button');
        moreBtn.textContent = '...';
        moreBtn.setAttribute('disabled', '');
        moreBtn.classList.add('pagination-button-item');

        refs.paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
        break;
      }
    }
  }
  let activeBtn = document.querySelector(
    `button[data-action="${currentPageIndex + 1}"]`
  );

  activeBtn.classList.add('pagination-button-item-active');

  function onPaginationBtnClick(evt) {
    const toSearch = document.getElementById('search');
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    const allButtons = refs.paginationNumberBtnsContainer.querySelector(
      '.pagination-button-item-active'
    );
    toSearch.scrollIntoView({ behavior: 'smooth' }, true);

    let btnValue = evt.target.dataset.action;

    refs.mainCocktailsGallery.innerHTML = '';

    if (refs.mainCocktailsText.textContent !== 'Searching results') {
      refs.mainCocktailsText.textContent = 'Searching results';
    }
    switch (btnValue) {
      case 'leftPag':
        {
          currentPageIndex -= 1;
          if (currentPageIndex < 0) {
            currentPageIndex = 0;
          }
          activeBtn.classList.remove('pagination-button-item-active');
          cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
          activeBtn = document.querySelector(
            `button[data-action="${currentPageIndex + 1}"]`
          );
          activeBtn.classList.add('pagination-button-item-active');
        }
        break;

      case 'rightPag':
        {
          activeBtn.classList.remove('pagination-button-item-active');
          currentPageIndex += 1;
          cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
          activeBtn = document.querySelector(
            `button[data-action="${currentPageIndex + 1}"]`
          );
          activeBtn.classList.add('pagination-button-item-active');
        }
        break;
    }

    if (!isNaN(Number(btnValue))) {
      activeBtn.classList.remove('pagination-button-item-active');
      currentPageIndex = Number(btnValue - 1);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      activeBtn = document.querySelector(
        `button[data-action="${currentPageIndex + 1}"]`
      );
      activeBtn.classList.add('pagination-button-item-active');
    }
    arrowCheck();
  }

  function arrowCheck() {
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
  }
}
