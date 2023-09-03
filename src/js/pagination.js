import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

export function renderPagination(cocktailArr) {
  refs.paginationNumberBtnsContainer.innerHTML = '';

  // ============ vars sec ================
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

  // ================= pagination buttons =================

  refs.leftPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.rightPagBtn[0].addEventListener('click', onPaginationBtnClick);
  refs.paginationNumberBtnsContainer.addEventListener(
    'click',
    onPaginationBtnClick
  );

  refs.leftPagBtn[0].setAttribute('disabled', '');
  refs.leftPagBtn[0].classList.add('pagination-button-disabled');

  for (let i = 1; i <= totalPagesNum; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    pageBtn.setAttribute('data-action', i);
    pageBtn.classList.add('pagination-button-item');
    pageBtn.addEventListener('click', onPaginationBtnClick);
    pageBtns.push(pageBtn);
  }

  moreBtn.addEventListener('click', () => {
    if (moreBtnIndex < 4) {
      moreBtnIndex = 4;
    }
    if (moreBtnIndex > totalPagesNum - 2) {
      moreBtnIndex = totalPagesNum - 3;
    }
    moreBtn.setAttribute('data-action', moreBtnIndex);
    onPaginationBtnClick;
    moreBtnIndex += 1;

    console.log(moreBtn.getAttribute('data-action'));
  });

  switch (isMobile()) {
    case true:
      {
        console.log('is mobile');
        start = pageBtns.slice(0, 2);
        finish = pageBtns.slice(pageBtns.length - 2, pageBtns.length);

        if (pageBtns.length > 4) {
          // moreBtn = document.createElement('button');
          // moreBtn.textContent = '...';
          // moreBtn.classList.add('pagination-button-item');
          moreBtn.classList.remove('is-hidden');
          moreBtn.setAttribute('data-action', '5');
          console.log(moreBtn.getAttribute('data-action'));
        }

        moreBtn.classList.remove('is-hidden');
        refs.paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
      }
      break;

    case false: {
      console.log('is not mobile');
      console.log(pageBtns);
      start = pageBtns.slice(0, 3);
      finish = pageBtns.slice(pageBtns.length - 3, pageBtns.length);

      if (pageBtns.length > 3) {
        // moreBtn = document.createElement('button');
        // moreBtn.textContent = '...';
        // moreBtn.classList.add('pagination-button-item');
        moreBtn.classList.remove('is-hidden');
        moreBtn.setAttribute('data-action', '4');
        console.log(moreBtn.getAttribute('data-action'));
      }

      refs.paginationNumberBtnsContainer.append(...start, moreBtn, ...finish);
      break;
    }
  }

  // ==================== on pagination click func ============
  function onPaginationBtnClick(evt) {
    //   ============== scroll on top of gallery ============
    // const toSearch = document.getElementById('search');
    // toSearch.scrollIntoView({ behavior: 'smooth' }, true);

    let btnValue = evt.target.dataset.action;

    refs.mainCocktailsGallery.innerHTML = '';

    if (refs.mainCocktailsText.textContent !== 'Searching results') {
      refs.mainCocktailsText.textContent = 'Searching results';
    }

    if (btnValue === 'leftPag') {
      currentPageIndex -= 1;
      if (currentPageIndex < 0) {
        currentPageIndex = 0;
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);

      moreBtn.setAttribute('data-action', moreBtnIndex);
      moreBtnIndex -= 1;
    }

    if (btnValue === 'rightPag') {
      currentPageIndex += 1;
      if (currentPageIndex === totalPagesNum - 1) {
        // console.log(currentPageIndex);
        // console.log(totalPagesNum);
      }
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      moreBtn.setAttribute('data-action', moreBtnIndex);
      moreBtnIndex += 1;
    }

    if (!isNaN(Number(btnValue))) {
      currentPageIndex = Number(btnValue - 1);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      moreBtnIndex = currentPageIndex + 1;
    }

    if (currentPageIndex === 0) {
      refs.leftPagBtn[0].setAttribute('disabled', '');
      refs.leftPagBtn[0].classList.add('pagination-button-disabled');
    } else {
      refs.leftPagBtn[0].removeAttribute('disabled');
      refs.leftPagBtn[0].classList.remove('pagination-button-disabled');
    }
    if (currentPageIndex === totalPagesNum - 1) {
      refs.rightPagBtn[0].setAttribute('disabled', '');
      refs.rightPagBtn[0].classList.add('pagination-button-disabled');
    } else {
      refs.rightPagBtn[0].removeAttribute('disabled');
      refs.rightPagBtn[0].classList.remove('pagination-button-disabled');
    }
  }
}
