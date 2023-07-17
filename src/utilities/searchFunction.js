const searchFunction = (arrOfData, search) => {
  if (search) {
    return [...arrOfData].filter(
      (product) =>
        product.Title.toLowerCase().includes(search.toLowerCase()) ||
        product.Category.toLowerCase().includes(search.toLowerCase())
    );
  }
  return arrOfData;
};
export { searchFunction };
