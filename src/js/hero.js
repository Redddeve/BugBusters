// ====================== MOBILE ========================

const select = document.getElementById('heroSelect');

// цикл для додавання у select букв англ. алф. від A до Z по Unicode
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const option = document.createElement('option');
  option.text = letter;
  option.value = letter;
  select.appendChild(option);
}

// цикл для додавання у select цифр від 1 до 9 по Unicode
for (let i = 49; i <= 57; i++) {
  const letter = String.fromCharCode(i);
  const option = document.createElement('option');
  option.text = letter;
  option.value = letter;
  select.appendChild(option);
}

// додавання у select цифри 0 по Unicode
const letter = String.fromCharCode(48);
const option = document.createElement('option');
option.text = letter;
option.value = letter;
select.appendChild(option);

// ================== TABLET & DESKTOP ====================

const container = document.querySelector('.hero-select-items');

// цикл для додавання у select букв англ. алф. від A до Z по Unicode
for (let i = 65; i <= 90; i++) {
  // створюємо кнопку
  const button = document.createElement('button');

  // задаємо текст для кнопки - букву алфавіту
  button.textContent = String.fromCharCode(i);

  // додаємо кнопку до контейнера
  container.appendChild(button);

  button.classList.add('hero-select-btn');
}

// цикл для додавання у container цифр від 1 до 9 по Unicode
for (let i = 49; i <= 57; i++) {
  const button = document.createElement('button');
  button.textContent = String.fromCharCode(i);
  container.appendChild(button);
  button.classList.add('hero-select-btn');
}

// додавання у select цифри 0 по Unicode
const button = document.createElement('button');
button.textContent = String.fromCharCode(48);
container.appendChild(button);
button.classList.add('hero-select-btn');

//==========================================================
