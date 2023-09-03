export const addToLS = (type, id) => {
  let recoverArr = [id]
  let arrayOfIds = JSON.parse(localStorage.getItem(type));
  console.log(arrayOfIds)
  if (!arrayOfIds || arrayOfIds.length === 0) localStorage.setItem(type, JSON.stringify(recoverArr));
  arrayOfIds = JSON.parse(localStorage.getItem(type));
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
