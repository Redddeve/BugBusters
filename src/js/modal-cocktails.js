console.log("1");

const refs = {
    bodyEl: document.body,
    closeModalBtn: document.querySelector(".cocktail-modal-x-btn"),
    backdropCocktailEl: document.querySelector(".backdrop-cocktail"),
    moreBtn: document.querySelector(".text-violet"), //future load mor btn //
}

refs.moreBtn.addEventListener("click", showCocktailModal)
refs.closeModalBtn.addEventListener("click", closeCocktailModal)

// refs.backdropCocktailEl.addEventListener("click", closeCocktailModal)
// function toggleModal() {
//   refs.backdropCocktailEl.classList.toggle("is-hidden");
// }

function showCocktailModal() {
    getCocktail(id).then(data => markupCocktail(data));

    refs.backdropCocktailEl.classList.remove("is-hidden")
}

function closeCocktailModal() {
    refs.backdropCocktailEl.classList.add("is-hidden")

}

// ==========================================================

const cocktailsModal = document.querySelector(".cocktail-modal")
const image = document.querySelector(".cocktail-modal-img")
const header = document.querySelector(".cocktail-modal-header")
const ingredList = document.querySelector(".modal-ingredients-list")
const instr = document.querySelector(".modal-instractions")
const toFavoriteBtn = document.querySelector(".add-to-fav-btn")
const removeFavoriteBtn = document.querySelector(".remove-from-fav-btn")
const id ="639b6de9ff77d221f190c51e" //will take from load mor btn //

// 639b6de9ff77d221f190c51e

async function getCocktail (id) {
    const response = await fetch(`https://drinkify-backend.p.goit.global/api/v1/cocktails/lookup/?id=${id}`)
    const responseJson = await response.json();
    console.log(responseJson[0]);
    return responseJson[0];
}

// getCocktail(id).then(data => markupCocktail(data));

function markupCocktail ({drink, drinkThumb, instructions, ingredients, _id}) {
    const markupList = ingredients.map(ing=>`
    <li class="ingredients-list-item">
    <a class="ingredients-link" href="#">${ing.title}</a>
    </li>`).join("");
    console.log(markupList);
    image.src = drinkThumb
    header.textContent = drink
    ingredList.innerHTML = markupList
    instr.textContent = instructions
    // toFavoriteBtn.setAttribute("id", `${_id}`)
    toFavoriteBtn.dataset.id = _id
    removeFavoriteBtn.dataset.id = _id
}

{/* <button type="button" class="learn-more-btn" data-id="${cocktailID}">learn more</button> */}





// ============to ingredients==========================


// ingredList.addEventListener("click", onIngredClick)


// function onIngredClick (event) {
    
//    const ingredName = event.target.textContent
//     console.log(ingredName);
//     // getCocktail(ingredName).then(data => markupIngredient(data));
//     getIngredient(ingredName)

// }

//     async function getIngredient (ingredName) {
//     const response = await fetch(`https://drinkify-backend.p.goit.global/api/v1/ingredients/search/?s=${ingredName}`)
//     const responseJson = await response.json();
//     console.log(responseJson[0]);
//     return responseJson[0];
// }