import { refs } from './refs.js';
import { cocktailMainCardRender } from './cocktail-fav-card-render.js';

// const refs = {
//   paginationContainer: document.querySelector('.pagination-buttons-container'),
//

//     fifthBtn: document.querySelector('.page-num-5'),
//     sixthBtn: document.querySelector('.page-num-6'),
//     seventhBtn: document.querySelector('.page-num-7'),
// };

// refs.fifthBtn.classList.add('visually-hidden');
// refs.sixthBtn.classList.add('visually-hidden');
// refs.seventhBtn.classList.add('visually-hidden');

// refs.fifthBtn.classList.remove('visually-hidden');
// refs.sixthBtn.classList.remove('visually-hidden');
// refs.seventhBtn.classList.remove('visually-hidden');

// const cocktailGetArr = [
//   {
//     _id: '639b6de9ff77d221f190c51e',
//     drink: 'Affair',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167139/cocktails-v1/drinks/Affair.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c520',
//     drink: 'Avalon',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Avalon.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c51d',
//     drink: 'A. J.',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/A.%20J..jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c522',
//     drink: 'Addison',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Addison.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52f',
//     drink: 'Allegheny',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Allegheny.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c518',
//     drink: 'ABC',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/ABC.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c521',
//     drink: 'Abilene',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Abilene.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c51c',
//     drink: 'AT&T',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689160625/cocktails-v1/drinks/at-t.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52a',
//     drink: 'After sex',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/After_sex.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c526',
//     drink: 'Applecar',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Applecar.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52e',
//     drink: 'Algonquin',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Algonquin.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c525',
//     drink: 'Affinity',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Affinity.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c527',
//     drink: 'Aviation',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Aviation.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52b',
//     drink: 'Afterglow',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Afterglow.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52c',
//     drink: 'Afternoon',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Afternoon.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c517',
//     drink: 'A1',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167139/cocktails-v1/drinks/A1.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c519',
//     drink: 'Ace',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Ace.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c51b',
//     drink: 'Adam',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167143/cocktails-v1/drinks/Adam.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c51f',
//     drink: 'Apello',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Apello.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c524',
//     drink: 'Acapulco',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Acapulco.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c52d',
//     drink: 'Alexander',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Alexander.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c528',
//     drink: 'Adam Bomb',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Adam_Bomb.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c529',
//     drink: 'Addington',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Addington.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c51a',
//     drink: 'ACID',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/ACID.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
//   {
//     _id: '639b6de9ff77d221f190c523',
//     drink: 'Almeria',
//     drinkThumb:
//       'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167138/cocktails-v1/drinks/Almeria.jpg',
//     ingredients: [
//       {
//         title: 'Strawberry schnapps',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Orange juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Cranberry juice',
//         measure: '2 oz ',
//       },
//       {
//         title: 'Club soda',
//       },
//     ],
//     instructions:
//       'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
//     desc: 'Nulla ex Lorem sint et voluptate tempor ea adipisicing irure ad exercitation dolor. Ea fugiat adipisicing minim magna sint aute. Sunt veniam fugiat incididunt dolore tempor occaecat aliquip aliquip sint esse in esse. Culpa mollit cupidatat labore sint.',
//   },
// ];

export function renderPagination(cocktailArr) {
  let totalCocktailCount = cocktailArr.length;

  if (!totalCocktailCount) {
    return;
  }

  let cardsPerPage = 8;
  if (window.innerWidth >= 1280) {
    cardsPerPage = 9;
  } else {
    cardsPerPage = 8;
  }

  let totalPagesNum = Math.ceil(totalCocktailCount / cardsPerPage);

  const sortedCardsArr = createPagesArr(cocktailArr, cardsPerPage);

  function createPagesArr(arr, cardsPerPageNun) {
    return arr.reduce((result, item, index) => {
      if (index % cardsPerPageNun === 0) {
        result.push([]);
      }
      result[result.length - 1].push(item);
      return result;
    }, []);
  }

  //   let sortedCardsArr = [];
  //   let currentPageArr = [];
  //   let currentElemIndex = 0;

  //   for (let count = 0; count < totalPagesNum; count++) {
  //     for (let cardNum = 0; cardNum < cardsPerPage; cardNum++) {
  //       if (cocktailArr[currentElemIndex]) {
  //         currentPageArr.push(cocktailArr[currentElemIndex]);
  //         currentElemIndex++;
  //       }
  //     }
  //     sortedCardsArr.push(currentPageArr);
  //     currentPageArr = [];
  //   }

  cocktailMainCardRender(sortedCardsArr[0]);

  refs.paginationContainer.addEventListener('click', onPaginationBtnClick);

  const leftPagBtn = document.querySelector('#left-pag-btn');
  const rightPagBtn = document.querySelector('#right-pag-btn');

  function onPaginationBtnClick(evt) {
    evt.preventDefault();

    const toSearch = document.getElementById('search');
    toSearch.scrollIntoView({ behavior: 'smooth' }, true);

    let currentPageIndex = 0;
    let btnValue = evt.target.value;

    refs.mainCocktailsGallery.innerHTML = '';

    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    if (btnValue === 'left') {
      currentPageIndex -= 1;
      if (currentPageIndex < 0) {
        currentPageIndex = 0;
      }
      console.log('currentPageIndex ', currentPageIndex);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
    }

    if (btnValue === 'right') {
      currentPageIndex += 1;
      if (currentPageIndex <= totalPagesNum) {
        console.log('currentPageIndex ', currentPageIndex);
        cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
      }
    }

    if (!isNaN(Number(btnValue - 1))) {
      currentPageIndex = Number(btnValue - 1);
      console.log('currentPageIndex ', currentPageIndex);
      cocktailMainCardRender(sortedCardsArr[currentPageIndex]);
    }

    console.log('btnValue ', btnValue);
    console.log(evt.target);
    // console.log('pageNum ', currentPageIndex);
  }
}

// renderPagiantion(cocktailGetArr);
