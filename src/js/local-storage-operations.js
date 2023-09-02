export const addToLS = (type, id) => {
  let recoverArr = [id]
  if (!localStorage.getItem(type)) localStorage.setItem(type, JSON.stringify(recoverArr));
  const arrayOfIds = JSON.parse(localStorage.getItem(type));
  if (arrayOfIds.length !== 0) {
    if (!arrayOfIds.includes(id)) {
      arrayOfIds.push(id);
      localStorage.setItem(type, JSON.stringify(arrayOfIds));
    } else return;
  }
};

export const removeFromLS = (type, id) => {
  const arrayOfIds = JSON.parse(localStorage.getItem(type));
  const idIndex = arrayOfIds.findIndex(item => item === id);
  arrayOfIds.splice(idIndex, 1);
  localStorage.setItem(type, JSON.stringify(arrayOfIds));
};
