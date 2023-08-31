const refs = {
  cardContainer: document.querySelector('.cocktail-cards-container'),
  cardItem: document.querySelector('#cocktail-card-item'),
};

const cocktailGetArr = [
  {
    _id: '639b6de9ff77d221f190c51e',
    drink: 'Affair',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167139/cocktails-v1/drinks/Affair.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c520',
    drink: 'Avalon',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Avalon.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c51d',
    drink: 'A. J.',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/A.%20J..jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c522',
    drink: 'Addison',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Addison.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52f',
    drink: 'Allegheny',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Allegheny.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c518',
    drink: 'ABC',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/ABC.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c521',
    drink: 'Abilene',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Abilene.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c51c',
    drink: 'AT&T',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689160625/cocktails-v1/drinks/at-t.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52a',
    drink: 'After sex',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/After_sex.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c526',
    drink: 'Applecar',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Applecar.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52e',
    drink: 'Algonquin',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Algonquin.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c525',
    drink: 'Affinity',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Affinity.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c527',
    drink: 'Aviation',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Aviation.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52b',
    drink: 'Afterglow',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Afterglow.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52c',
    drink: 'Afternoon',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Afternoon.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c517',
    drink: 'A1',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167139/cocktails-v1/drinks/A1.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c519',
    drink: 'Ace',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Ace.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c51b',
    drink: 'Adam',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167143/cocktails-v1/drinks/Adam.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c51f',
    drink: 'Apello',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c524',
    drink: 'Acapulco',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Acapulco.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c52d',
    drink: 'Alexander',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Alexander.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c528',
    drink: 'Adam Bomb',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Adam_Bomb.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c529',
    drink: 'Addington',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Addington.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c51a',
    drink: 'ACID',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/ACID.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
  {
    _id: '639b6de9ff77d221f190c523',
    drink: 'Almeria',
    drinkThumb:
      'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Almeria.jpg',
    ingredients: [
      {
        title: 'Strawberry schnapps',
        measure: '2 oz ',
      },
      {
        title: 'Orange juice',
        measure: '2 oz ',
      },
      {
        title: 'Cranberry juice',
        measure: '2 oz ',
      },
      {
        title: 'Club soda',
      },
    ],
    instructions:
      'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
    desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
  },
];

function cocktailMainCardRender(cocktailArr) {
  const allCardsMarkup = cocktailArr
    .map(el => {
      return cocktailMainCardTemplate(el.drinkThumb, el.drink, el.desc);
    })
    .join('');
  refs.cardContainer.insertAdjacentHTML('beforeend', allCardsMarkup);
}

function cocktailMainCardTemplate(cocktailImg, cocktailName, cocktailDesc) {
  const markup = `<div class="cocktail-card-main" id="cocktail-card-item">
        <img class="cocktail-card-img" src="${cocktailImg}" alt="${cocktailName}" width="" height="" />
        <h3 class="card-cocktail-name">${cocktailName}</h3>
        <p class="card-cocktail-desc">${cocktailDesc}</p>
        <div class="buttons-container">
        <button type="button" class="learn-more-btn">learn more</button>
        <button type="button" class="delete-btn">
        <svg class="card-cocktail-delete-icon" width="24" height="24" stroke='red'>
        <use href="./img/svg/icons.svg#trash-icon"></use>
        </svg>
        </button>
        </div>
      </div>`;
  return markup;
}

function cocktailModalCardRender(cocktailArr) {
  const allCardsMarkup = cocktailArr
    .map(el => {
      return cocktailModalCardTemplate(
        el.drinkThumb,
        el.drink,
        el.instructions,
        el.ingredients
      );
    })
    .join('');
  refs.cardContainer.insertAdjacentHTML('beforeend', allCardsMarkup);
}

function cocktailModalCardTemplate(
  cocktailImg,
  cocktailName,
  cocktailIngredients,
  cocktailInstructions
) {
  const markup = `<div class="backdrop">
  <div class="cocktail-modal">
    <button type="button" class="cocktail-modal-x-btn">
      <svg class="cocktail-modal-btn-icon" width="22" height="22">
        <use href="./img/svg/icons.svg#x-icon"></use>
      </svg>
    </button>
    <div class="wrapper1">
      <img class="cocktail-modal-img" src="${cocktailImg}" alt="#cocktail-name" />
      <div class="wrapper2">
        <h3 class="cocktail-header">${cocktailName}</h3>
        <h3 class="modal-header modal-header-ingredients">Ingredients:</h3>
        <p class="modal-header-ingredients-subtitle">Per cocktail</p>
        <ul class="modal-ingredients-list">
          <li class="ingredients-list-item">
            <a class="ingredients-link" href="#">Ice</a>
          </li>
          <li class="ingredients-list-item">
            <a class="ingredients-link" href="#">1 ounce gin</a>
          </li>
          <li class="ingredients-list-item">
            <a class="ingredients-link" href="#">1 ounce Campari</a>
          </li>
          <li class="ingredients-list-item">
            <a class="ingredients-link" href="#">1 ounce sweet vermouth</a>
          </li>
          <li class="ingredients-list-item">
            <a class="ingredients-link" href="#">Garnish: orange peel</a>
          </li>
        </ul>
      </div>
    </div>
    <h3 class="modal-header modal-header-instractions">Instractions:</h3>
    <p class="modal-instractions">
      ${cocktailInstructions}
    </p>
    <button type="button" class="modal-to-favorite-btn">add to favorite</button>
  </div>
</div>`;
  console.log();
  return markup;
}

cocktailMainCardRender(cocktailGetArr);
// cocktailModalCardRender(cocktailGetArr);
