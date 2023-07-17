import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Comic from "../assets/comics.jpg";
import Novel from "../assets/novel.jpg";
import Manga from "../assets/manga.png";

import Carousel1 from "../assets/1.jpg";
import Carousel2 from "../assets/2.jpg";
import Carousel3 from "../assets/3.jpg";
import Carousel4 from "../assets/4.jpeg";

import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setFilterComic,
  setFilterNovel,
  setFilterManga,
} from "../Redux/Features/filterSlice";

import { Carousel } from "flowbite-react";
import Cards from "../Components/Cards";
import { loadProducts } from "../Services/Products/loadProductsApi";

function Landing() {
  const dispatch = useDispatch();

  const { manga, comic, novel } = useSelector((store) => store.filter);

  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    loadProducts(dispatch);
  }, []);

  return (
    <div>
      <header className="flex bg-primary justify-around items-center">
        <Link
          className=" bg-white hover:opacity-80 m-2 rounded-md "
          to="/products"
        >
          <div
            className="flex items-center justify-center flex-col"
            onClick={() => dispatch(setFilterManga(!manga))}
          >
            <div className="w-20 m-4 rounded-md border-1 border-black ">
              <img alt="Manga" src={Manga} />
            </div>
            <div className="text">Manga</div>
          </div>
        </Link>

        <Link
          className=" bg-white hover:opacity-80 m-2 rounded-md "
          to="/products"
        >
          <div
            className="flex items-center justify-center flex-col"
            onClick={() => dispatch(setFilterComic(!comic))}
          >
            <div className="w-20 m-4 rounded-md  ">
              <img alt="Comic" src={Comic} />
            </div>
            <div className="text">Comic</div>
          </div>
        </Link>

        <Link
          className=" bg-white hover:opacity-80 m-2 rounded-md "
          to="/products"
        >
          <div
            className="flex items-center justify-center flex-col"
            onClick={() => dispatch(setFilterNovel(!novel))}
          >
            <div className="w-20 m-4 rounded-md border-1 border-black ">
              <img alt="Novel" src={Novel} />
            </div>
            <div className="text-center w-full">Novel</div>
          </div>
        </Link>
      </header>

      <Carousel className="w-full h-[20rem] md:h-[24rem] lg:h-[28rem] bg-slate-500">
        <img alt="Carousel" className="h-full" src={Carousel1} />
        <img alt="Carousel" className="h-full" src={Carousel2} />
        <img alt="Carousel" className="h-full" src={Carousel3} />
        <img alt="Carousel" className="h-full" src={Carousel4} />
      </Carousel>

      <div className=" p-2">
        <h1 className="text-center text-2xl font-bold">Popular Products</h1>

        <main>
          <div className="flex flex-wrap items-center justify-center">
            {products
              .filter((item) => item.isPopular === "True")
              .map((item) => (
                <Cards key={item.id} item={item} />
              ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;
