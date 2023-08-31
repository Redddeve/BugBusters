const ingredList = document.querySelector(".modal-ingredients-list")
const ingreModalInner = document.querySelector(".ingred-modal-inner")
const closeModalBtn = document.querySelector(".ingred-modal-x-btn")
const backdropIngred = document.querySelector(".backdrop-ingred")

ingredList.addEventListener("click", onIngredClick)


function onIngredClick (event) {
    
   const ingredName = event.target.textContent
    console.log(ingredName);
    getIngredient(ingredName).then(data => markupIngredient(data));
    event.target.addEventListener("click", showIngredModal)
}

closeModalBtn.addEventListener("click", closeIngredModal)

function showIngredModal() {
    backdropIngred.classList.remove("is-hidden")
}

function closeIngredModal() {
    backdropIngred.classList.add("is-hidden")
    ingreModalInner.innerHTML = ""
}

async function getIngredient (ingredName) {
    const response = await fetch(`https://drinkify-backend.p.goit.global/api/v1/ingredients/search/?s=${ingredName}`)
    const responseJson = await response.json();
    console.log(responseJson[0]);
    return responseJson[0];
}

function markupIngredient ({abv,country,description,flavour,title,type,_id}) {
    ingreModalInner.innerHTML = `    
    <h3 class="ingred-header">${title}</h3>
    <p class="ingred-type">${type}</p>
    <p class="ingred-desc">${description}</p>

    <ul class="ingred-desc-list">
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Type: </span>${type}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Country of origin: </span>${country}
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Alcohol by volume: </span>${abv} %
        </p>
      </li>
      <li class="desc-item">
        <p class="item-text">
          <span class="item-inner-title">Flavour: </span>${flavour}
        </p>
      </li>
    </ul>
    <button type="button" class="modal-to-favorite-btn add-to-fav-btn" data-id="${_id}">add to favorite</button>
    <button type="button" class="modal-to-favorite-btn remove-from-fav-btn" data-id="${_id}">remove from favorite</button>
     `

    // console.log(abv,country,description,flavour,title,type,_id);

    // ingredHeader.textContent = title
    // ingredType.textContent = type
    // ingredDesc.textContent = description

    // image.src = drinkThumb
    // header.textContent = drink
    // ingredList.innerHTML = markupList
    // instr.textContent = instructions
    // // toFavoriteBtn.setAttribute("id", `${_id}`)
    // toFavoriteBtn.dataset.id = _id
    // removeFavoriteBtn.dataset.id = _id
}

// {abv,country,description,flavour,title,type,_id}

// abv
// : 
// "15"
// alcohol
// : 
// "Yes"
// country
// : 
// "British English"
// description
// : 
// "Schnapps (/ʃnɑːps/ or /ʃnæps/) or schnaps is a type of alcoholic beverage that may take several forms, including distilled fruit brandies, herbal liqueurs, infusions, and \"flavoured liqueurs\" made by adding fruit syrups, spices, or artificial flavourings to neutral grain spirits.\n\nThe English loanword \"schnapps\" is derived from the colloquial German word Schnaps [ʃnaps] (About this sound listen) (plural: Schnäpse) which is used in reference to spirit drinks. The word Schnaps stems from Low German language and is related to the German term \"schnappen\", which refers to the fact that the spirit or liquor drink is usually consumed in a quick slug from a small glass (i.e., a shot glass). In British English, a corresponding term is \"dram\" [of liquor]."
// flavour
// : 
// "English"
// ingredientThumb
// : 
// "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169610/cocktails-v1/ingredient/Strawberry%20schnapps.png"
// thumb-medium
// : 
// "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169610/cocktails-v1/ingredient/Strawberry%20schnapps-Medium.png"
// thumb-small
// : 
// "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169610/cocktails-v1/ingredient/Strawberry%20schnapps-Small.png"
// title
// : 
// "Strawberry schnapps"
// type
// : 
// "Liquor"
// _id
// : 
// "64aebb7f82d96cc69e0eb4a9"