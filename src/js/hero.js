import { refs } from './refs.js';

if (window.innerWidth >= 768) {
  setTimeout(renderButtonsHero, 0);
} else {
  setTimeout(renderSelectHero, 0);
}

// ====================== MOBILE ========================

async function renderSelectHero() {
  // цикл для додавання у select букв A - Z по Unicode
  for (let i = 65; i <= 90; i++) {
    await templateSelectHero(i);
  }

  // цикл для додавання у select цифр 1 - 9 по Unicode
  for (let i = 49; i <= 57; i++) {
    await templateSelectHero(i);
  }

  // додавання у select цифри 0 по Unicode
  await templateSelectHero(48);
}

function templateSelectHero(i) {
  return new Promise(resolve => {
    const letter = String.fromCharCode(i);
    const option = document.createElement('option');
    option.text = letter;
    option.value = letter;
    refs.select.appendChild(option);
    resolve();
  });
}

// ================== TABLET & DESKTOP ====================

async function renderButtonsHero() {
  // цикл для додавання у select букв букв A - Z по Unicode
  for (let i = 65; i <= 90; i++) {
    await templateButtonsHero(i);
  }

  // цикл для додавання у container цифр 1 - 9 по Unicode
  for (let i = 49; i <= 57; i++) {
    await templateButtonsHero(i);
  }

  // додавання у container цифри 0 по Unicode
  await templateButtonsHero(48);
}

function templateButtonsHero(i) {
  return new Promise(resolve => {
    // створюємо кнопку
    const button = document.createElement('button');
    // задаємо текст для кнопки - букву алфавіту/цифру
    button.textContent = String.fromCharCode(i);
    // додаємо кнопку до контейнера
    refs.container.appendChild(button);
    button.classList.add('hero-select-btn');
    button.setAttribute('type', 'button');
    resolve();
  });
}

//==========================================================
