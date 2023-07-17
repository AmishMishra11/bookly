import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";

import Filter from "../Components/Filter";

import { useSelector, useDispatch } from "react-redux/es/exports";

import { categoryFunction } from "../utilities/categoryFunction";
import { rangeFunction } from "../utilities/rangeFunction";
import { ratingFunction } from "../utilities/ratingFunction";
import { searchFunction } from "../utilities/searchFunction";
import { sortingFunction } from "../utilities/sortingFunction";

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);

  const { search, sorting, manga, comic, novel, rating, range } = useSelector(
    (store) => store.filter
  );

  const { products } = useSelector((store) => store.product);

  const newData0 = searchFunction(products, search);
  const newData1 = rangeFunction(newData0, range);
  const newData2 = categoryFunction(newData1, manga, comic, novel);
  const newData3 = ratingFunction(newData2, rating);
  const newData4 = sortingFunction(newData3, sorting);

  return (
    <div className="flex flex-col lg:flex-row items-start">
      {products.length > 0 && (
        <aside className="hidden lg:flex flex-col justify-start items-stretch gap-8 sticky top-[8rem] w-full max-w-[15rem] h-[calc(100vh-8rem)] px-2 py-4 bg-gray-700 text-white ">
          <Filter products={products} />
        </aside>
      )}

      {showFilters && (
        <aside className="w-full lg:hidden flex-c items-center justify-center p-4 bg-gray-700 ">
          <Filter products={products} />
          <div className="flex items-center justify-center">
            <button
              className=" w-20 bg-primary px-4 py-2 lg:hidden rounded-md m-2"
              onClick={() => setShowFilters((val) => !val)}
            >
              Apply
            </button>
          </div>
        </aside>
      )}

      <main className="flex flex-col w-full">
        {products.length > 0 ? (
          <div className="filters-top flex items-center justify-around">
            <h1 className="text-2xl font-bold"> Products {newData4.length}</h1>{" "}
            <button
              className=" w-20 bg-primary px-4 py-2 lg:hidden rounded-md m-2"
              onClick={() => setShowFilters((val) => !val)}
            >
              Filters
            </button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}

        <div className="flex flex-wrap items-center justify-center">
          {products.length > 0 &&
            [...newData4].map((item) => <Cards key={item.id} item={item} />)}
        </div>
      </main>
    </div>
  );
};

export default Products;
