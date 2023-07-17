const rangeFunction = (arrOfData, range) => {
  const tempProducts = arrOfData.filter((product) => {
    if (+product.Price <= range * 1500) return product;
  });
  return tempProducts;
};

export { rangeFunction };
