import './header.js';

const favCock = document.querySelector('.test-div')
const addFavButton = document.querySelector('.modal-to-favorite-btn')
const nameOfCocktail = document.querySelector('.cocktail-header')
const removeFavButton = document.querySelector('.modal-to-favorite-btn-remove')


/** ========================= LocalStorage ========================= */


/** ========================= Add new Fav Cocktail ========================= */




async function getFavCocktail (name) {
    const response = await fetch(`https://drinkify-backend.p.goit.global/api/v1/cocktails/search/?s=${name}`)
    const responseJson = await response.json();
    return responseJson[0]._id;
}

let addFav = [] 

async function pushFavCocktail() {
    try {
        const name = nameOfCocktail.textContent;
        const response = await getFavCocktail(name);

        addFav.push(response);

    } catch (error) {
        console.error('Error:', error);
    }
}
     

function saveDataToLocalStorage(dataArray) {

    const myArray = JSON.stringify(dataArray)
    console.log(myArray)
    localStorage.setItem('favoriteCocktails', myArray);
    
}
function pushDataToLocalStorage() {
     saveDataToLocalStorage(addFav);
    console.log('Data saved to localStorage');
}

// При загрузке страницы загрузите данные из localStorage, если они есть
const dataFromStorage = localStorage.getItem('favoriteCocktails');
if (dataFromStorage) {
    addFav = JSON.parse(dataFromStorage);
}

// localStorage.removeItem('favoriteCocktails')

addFavButton.addEventListener('click', async () => {
    await pushFavCocktail();
    await pushDataToLocalStorage();
});

addFavButton.addEventListener('click', displayCocktails)

/** ========================= Добавить в хранилище и забрать из ========================= */

const testIds = localStorage.getItem("favoriteCocktails")
const stringIds = JSON.parse(testIds)
let ids = stringIds || []

console.log(ids);


/** ========================= Fetch and Markup ========================= */


async function getArrayOfCocktail (array) {
    const response = await fetch(`https://drinkify-backend.p.goit.global/api/v1/cocktails/lookup/?ids=${array}`)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const responseJson = await response.json();
    return responseJson;
}

async function displayCocktails() {
    try {
        const data = await getArrayOfCocktail(ids);
        data.forEach(element => {
            markup(element);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


function markup({ glass, category, ingredients }) {
    
    const markup = `
        <p>${glass}</p>
        <p>${category}</p>
        <p>${ingredients[0].title}</p>
        <p>${ingredients[0].measure}</p>
    `;
    console.log(markup)

   return favCock.insertAdjacentHTML("afterbegin", markup)

}



// // /** ========================= Удалить ========================= */

async function findFavCocktail() {
    try {
        const name = nameOfCocktail.textContent;
        const response = await getFavCocktail(name);
        return response;
    } catch (error) {
        console.error('Error:', error); 
    }
}


async function deleteFavCocktail(dataArray, itemToDelete) {
    try {
        const indexToRemove = dataArray.indexOf(itemToDelete);
        
        if (indexToRemove !== -1) {
            // Удаляем элемент из массива
            dataArray.splice(indexToRemove, 1);
            localStorage.setItem('favoriteCocktails', JSON.stringify(dataArray));
            console.log('Элемент удален из массива и обновлен в localStorage');

                favCock.innerHTML = ''; // Очищаем содержимое контейнера перед обновлением
            dataArray.forEach(element => {
                markup(element);
            });
        } else {
            console.log('Элемент не найден в массиве');
        }
    } catch (error) {0
        console.error('Error:', error);
    }
}

async function main() {
    const foundCocktail = await findFavCocktail();
    deleteFavCocktail(addFav, foundCocktail);
}

removeFavButton.addEventListener('click', main)
