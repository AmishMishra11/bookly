import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setFilterComic,
  setFilterNovel,
  setFilterManga,
  setFilterRange,
  setFilterRating,
  setFilterSorting,
  clearFilter,
} from "../Redux/Features/filterSlice";

function Filter() {
  const dispatch = useDispatch();
  const { sorting, manga, comic, novel, rating, range } = useSelector(
    (store) => store.filter
  );

  return (
    <div className="">
      <div className="flex justify-between items-center p-2  ">
        <h3 className="text-xl font-semibold">Filters</h3>

        <div
          className="cursor-pointer text-primary"
          onClick={() => dispatch(clearFilter())}
        >
          Clear
        </div>
      </div>

      <div className="">
        <h3 className="text-xl text-left font-semibold">Price</h3>
        <div className="">
          <div className=" flex items-center justify-between">
            <p>1.5k</p>
            <p>3k</p>
            <p>4.5k</p>
            <p>6k</p>
          </div>

          <div className="">
            <input
              type="range"
              className=" w-full"
              min={1}
              max={4}
              value={range}
              id="range-slider"
              onChange={(e) => {
                dispatch(setFilterRange(e.target.value));
              }}
            />
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-xl text-left font-semibold">Category</h3>

        <div className="  flex lg:flex-col  w-full justify-between  items-start p-2 ">
          <label className="p-2 ">
            <input
              className=""
              type="checkbox"
              checked={manga}
              onChange={() => dispatch(setFilterManga(!manga))}
            />
            <span className="">Manga</span>
          </label>

          <label className="p-2 ">
            <input
              className=""
              type="checkbox"
              checked={comic}
              onChange={() => dispatch(setFilterComic(!comic))}
            />
            <span className="">Comic </span>
          </label>

          <label className="p-2 ">
            <input
              className=""
              type="checkbox"
              checked={novel}
              onChange={() => dispatch(setFilterNovel(!novel))}
            />
            <span className="">Novel </span>
          </label>
        </div>
      </div>

      <div className="">
        <h3 className="text-xl font-semibold text-left">Rating</h3>

        <div className="  flex lg:flex-col  w-full justify-between  items-start p-2 ">
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="rate"
              checked={rating === 5}
              onChange={() => dispatch(setFilterRating(5))}
            />
            <span className=""> 5 Stars </span>
          </label>
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="rate"
              checked={rating === 4}
              onChange={() => dispatch(setFilterRating(4))}
            />
            <span className=""> 4 Stars </span>
          </label>
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="rate"
              checked={rating === 3}
              onChange={() => dispatch(setFilterRating(3))}
            />
            <span className="">3 Stars </span>
          </label>
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="rate"
              checked={rating === 2}
              onChange={() => dispatch(setFilterRating(2))}
            />
            <span className="">2 Stars </span>
          </label>
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="rate"
              checked={rating === 1}
              onChange={() => dispatch(setFilterRating(1))}
            />
            <span className="">1 Stars </span>
          </label>
        </div>
      </div>

      <div className="">
        <h3 className="text-xl text-left font-semibold">Sort by</h3>

        <div className="flex flex-col items-start justify-start">
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="sort"
              checked={sorting === "high"}
              onChange={() => dispatch(setFilterSorting("high"))}
            />
            <span className="">High to Low</span>
          </label>
          <label className="p-2 ">
            <input
              className=""
              type="radio"
              name="sort"
              checked={sorting === "low"}
              onChange={() => dispatch(setFilterSorting("low"))}
            />
            <span className="">Low to High </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
