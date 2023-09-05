import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';
import { endsWith } from 'lodash';

export function renderPagination(cocktailArr) {
  refs.paginationNumberBtnsContainer.innerHTML = '';
  let cardsPerPage;
  let maxPageIndex;
  let currentPageIndex = 0;
  let pageBtns = [];
  let start = [];
  let finish = [];
  let current = [];

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

  //!  ======================================= create Pages Array =======================================
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
  maxPageIndex = pageBtns.length - 1;

  const moreBtn = document.createElement('button');
  moreBtn.textContent = '...';
  moreBtn.setAttribute('disabled', '');
  moreBtn.classList.add('pagination-button-item');
  moreBtn.classList.add('pagination-button-more');
  const moreBtn2 = document.createElement('button');
  moreBtn2.textContent = '...';
  moreBtn2.setAttribute('disabled', '');
  moreBtn2.classList.add('pagination-button-item');
  moreBtn2.classList.add('pagination-button-more');

  switch (isMobile()) {
    case true:
      {
        if (pageBtns.length <= 4) {
          refs.paginationNumberBtnsContainer.append(...pageBtns);
        } else {
          start = pageBtns.slice(0, 3);
          finish = pageBtns.slice(pageBtns.length - 1, pageBtns.length);

          refs.paginationNumberBtnsContainer.append(
            ...start,
            moreBtn,
            ...finish
          );
        }
      }
      break;

    case false: {
      if (pageBtns.length <= 7) {
        refs.paginationNumberBtnsContainer.append(...pageBtns);
      } else {
        start = pageBtns.slice(0, 5);
        finish = pageBtns.slice(pageBtns.length - 1, pageBtns.length);

        refs.paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
        break;
      }
    }
  }
  let activeBtn = document.querySelector(
    `button[data-action="${currentPageIndex + 1}"]`
  );

  activeBtn.classList.add('pagination-button-item-active');

  //!  ======================================= on Click function =======================================
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

    // if (refs.mainCocktailsText.textContent !== 'Searching results') {
    //   refs.mainCocktailsText.textContent = 'Searching results';
    // }
    switch (btnValue) {
      case 'leftPag':
        {
          activeBtn.classList.remove('pagination-button-item-active');
          currentPageIndex -= 1;
          if (currentPageIndex < 0) {
            currentPageIndex = 0;
          }
          checkCurrentPageIndex();
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
          checkCurrentPageIndex();
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
      checkCurrentPageIndex();
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      activeBtn = document.querySelector(
        `button[data-action="${currentPageIndex + 1}"]`
      );
      activeBtn.classList.add('pagination-button-item-active');
    }
    arrowCheck();
  }

  //!  ======================================= arrowCheck function =======================================
  function arrowCheck() {
    if (currentPageIndex === 0) {
      refs.leftPagBtn[0]?.classList.add('is-hidden');
    } else {
      refs.leftPagBtn[0]?.classList.remove('is-hidden');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      refs.rightPagBtn[0]?.classList.add('is-hidden');
    } else {
      refs.rightPagBtn[0]?.classList.remove('is-hidden');
    }
  }

  //!  ======================================= check page index then append =======================================
  function checkCurrentPageIndex() {
    try {
      switch (isMobile()) {
        case true:
          {
            if (pageBtns.length <= 4) {
              return;
            } else {
              refs.paginationNumberBtnsContainer.innerHTML = '';
              if (
                3 <= currentPageIndex &&
                currentPageIndex <= maxPageIndex - 3
              ) {
                console.log('mobile mid');
                start = pageBtns[0];
                finish = pageBtns[maxPageIndex];
                current = pageBtns[currentPageIndex];
                refs.paginationNumberBtnsContainer.append(
                  start,
                  moreBtn,
                  current,
                  moreBtn2,
                  finish
                );
                return;
              }
              if (currentPageIndex <= 2) {
                console.log('mobile start');
                start = pageBtns.slice(0, 3);
                finish = pageBtns[maxPageIndex];
                refs.paginationNumberBtnsContainer.append(
                  ...start,
                  moreBtn,
                  finish
                );
                return;
              }
              if (currentPageIndex >= maxPageIndex - 2) {
                console.log('mobile end');
                start = pageBtns[0];
                finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);
                refs.paginationNumberBtnsContainer.append(
                  start,
                  moreBtn,
                  ...finish
                );
                return;
              }
            }
          }
          break;

        case false: {
          if (pageBtns.length <= 7) {
            return;
          } else {
            refs.paginationNumberBtnsContainer.innerHTML = '';
            if (4 <= currentPageIndex && currentPageIndex <= maxPageIndex - 4) {
              console.log('desk mid');
              start = pageBtns[0];
              finish = pageBtns[maxPageIndex];
              current = pageBtns.slice(
                currentPageIndex - 1,
                currentPageIndex + 2
              );
              refs.paginationNumberBtnsContainer.append(
                start,
                moreBtn,
                ...current,
                moreBtn2,
                finish
              );
              return;
            }
            if (currentPageIndex <= 3) {
              console.log('desk start');
              start = pageBtns.slice(0, 5);
              finish = pageBtns[maxPageIndex];
              refs.paginationNumberBtnsContainer.append(
                ...start,
                moreBtn,
                finish
              );
              return;
            }
            if (currentPageIndex >= maxPageIndex - 3) {
              console.log('desk end');
              start = pageBtns[0];
              finish = pageBtns.slice(pageBtns.length - 5, pageBtns.length);
              refs.paginationNumberBtnsContainer.append(
                start,
                moreBtn,
                ...finish
              );
              return;
            }
            break;
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
