const categoryFunction = (arrOfData, Manga, Comic, Novel) => {
  const filteredData = [];

  if (Manga) {
    const newData = arrOfData.filter((product) => product.Category === "Manga");
    filteredData.push(...newData);
  }

  if (Comic) {
    const newData = arrOfData.filter((product) => product.Category === "Comic");
    filteredData.push(...newData);
  }
  if (Novel) {
    const newData = arrOfData.filter((product) => product.Category === "Novel");
    filteredData.push(...newData);
  }

  if (filteredData.length !== 0) {
    return filteredData;
  }
  return arrOfData;
};

export { categoryFunction };
