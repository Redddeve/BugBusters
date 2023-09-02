export const addToLS = (type, id) => {
  const arrayOfIds = JSON.parse(localStorage.getItem(type));
  arrayOfIds.push(id);
  localStorage.setItem(type, JSON.stringify(arrayOfIds));
};

export const removeFromLS = (type, id) => {
  const arrayOfIds = JSON.parse(localStorage.getItem(type));
  console.log(arrayOfIds);
  const idIndex = arrayOfIds.findIndex(item => item === id);
  arrayOfIds.splice(idIndex, 1);
  localStorage.setItem(type, JSON.stringify(arrayOfIds));
};
