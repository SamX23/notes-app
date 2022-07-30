const findById = (array, id) => {
  for (const item of array) {
    if (item.id === id) return item;
  }
  return null;
};

export default findById;
