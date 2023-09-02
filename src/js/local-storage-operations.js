export const addToLS = (type, id) => {
  if (!localStorage.getItem(type)) localStorage.setItem(type, id);
  const arrayOfIds = localStorage.getItem(type);
  if (!arrayOfIds.includes(id)) {
    arrayOfIds.push(id);
    localStorage.setItem(type, JSON.stringify(arrayOfIds));
  } else return;
};

export const removeFromLS = (type, id) => {
  const arrayOfIds = JSON.parse(localStorage.getItem(type));
  const idIndex = arrayOfIds.findIndex(item => item === id);
  arrayOfIds.splice(idIndex, 1);
  localStorage.setItem(type, JSON.stringify(arrayOfIds));
};
