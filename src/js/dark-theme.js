import throttle from 'lodash.throttle';


const toggle = document.querySelector('.input-dark-theme');
// const renderCards = document.querySelector('.cocktail-card-main');
console.log(toggle);
const body = document.body;


const darkThemeFn = () => {
    console.log(toggle);
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('isDarkTheme', isDarkTheme);
};

toggle.addEventListener('click', throttle(darkThemeFn, 500));

const isStoredDarkTheme = localStorage.getItem('isDarkTheme');
if (isStoredDarkTheme === 'true') {
    body.classList.add('dark-theme')
}