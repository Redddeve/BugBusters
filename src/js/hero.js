const select = document.getElementById('heroSelect');
const container = document.querySelector('.hero-select-items');

renderSelectHero();
renderButtonsHero();

// ====================== MOBILE ========================

function renderSelectHero() {
  // цикл для додавання у select букв A - Z по Unicode
  for (let i = 65; i <= 90; i++) {
    templateSelectHero(i);
  }

  // цикл для додавання у select цифр 1 - 9 по Unicode
  for (let i = 49; i <= 57; i++) {
    templateSelectHero(i);
  }

  // додавання у select цифри 0 по Unicode
  templateSelectHero(48);
}

function templateSelectHero(i) {
  const letter = String.fromCharCode(i);
  const option = document.createElement('option');
  option.text = letter;
  option.value = letter;
  select.appendChild(option);
}

// ================== TABLET & DESKTOP ====================

function renderButtonsHero() {
  // цикл для додавання у select букв букв A - Z по Unicode
  for (let i = 65; i <= 90; i++) {
    templateButtonsHero(i);
  }

  // цикл для додавання у container цифр 1 - 9 по Unicode
  for (let i = 49; i <= 57; i++) {
    templateButtonsHero(i);
  }

  // додавання у container цифри 0 по Unicode
  templateButtonsHero(48);
}

function templateButtonsHero(i) {
  // створюємо кнопку
  const button = document.createElement('button');
  // задаємо текст для кнопки - букву алфавіту/цифру
  button.textContent = String.fromCharCode(i);
  // додаємо кнопку до контейнера
  container.appendChild(button);
  button.classList.add('hero-select-btn');
  button.setAttribute('type', 'button');
}

//==========================================================
