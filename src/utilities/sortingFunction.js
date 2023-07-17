const sortingFunction = (arrOfData, sorting) => {
  if (sorting === "high") {
    return [...arrOfData].sort((a, b) => b.Price - a.Price);
  }
  if (sorting === "low") {
    return [...arrOfData].sort((a, b) => a.Price - b.Price);
  }
  return arrOfData;
};

export { sortingFunction };
