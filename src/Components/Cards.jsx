import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { AiFillStar, AiFillHeart } from "react-icons/ai";

import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  increaseQuantityFromCart,
} from "../Redux/Features/productSlice";

const Cards = ({ item }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isAuth } = useSelector((store) => store.auth);
  const { myWishlist, myCart } = useSelector((store) => store.product);

  const { Title, Price, Rating, imageURL, id, Discount_ } = item;

  return (
    <div className="h-[28rem] w-[20rem] px-4 py-2 flex flex-col mx-6 my-4 bg-white border-2 border-primary rounded-lg relative">
      <img
        className=" h-[20rem] border-2 border-black rounded "
        src={imageURL}
        alt="Product"
      />

      {isAuth ? (
        <div
          className="absolute  top-6 right-6"
          onClick={
            myWishlist.length === 0
              ? () => dispatch(addToWishlist(item))
              : () =>
                  myWishlist.find((product) => product.id === id)
                    ? dispatch(removeFromWishlist(id))
                    : dispatch(addToWishlist(item))
          }
        >
          <AiFillHeart
            style={{
              fontSize: "2rem",
              color: myWishlist.find((product) => product.id === id)
                ? "red"
                : "white",
            }}
            className="mt-[-0.5rem] cursor-pointer  text-lg "
          />
        </div>
      ) : (
        <div
          className="absolute  top-6 right-6"
          onClick={() => navigate("/login")}
        >
          <AiFillHeart
            style={{
              fontSize: "2rem",
              color: "white",
            }}
            className="mt-[-0.5rem] cursor-pointer text-lg "
          />
        </div>
      )}

      <h2 className="font-bold text-xl text-start">{Title}</h2>
      <h4 className="flex justify-between items-center px-4">
        <div>
          ₹{Price}{" "}
          <span className="text-sm text-gray-600"> {Discount_} OFF</span>
        </div>
        <div className="flex items-center justify-between">
          {Rating}
          <AiFillStar />
        </div>
      </h4>
      <div className="flex items-center justify-around mt-1">
        {/* -- */}
        {isAuth ? (
          <Link
            to="/cart"
            className="px-4 py-2 bg-primary text-white cursor-pointer rounded hover:opacity-70"
            onClick={
              myCart.length === 0
                ? () => dispatch(addToCart(item))
                : () =>
                    myCart.find((product) => product.id === id)
                      ? dispatch(increaseQuantityFromCart(id))
                      : dispatch(addToCart(item))
            }
          >
            Buy Now
          </Link>
        ) : (
          <div
            className="px-4 py-2 bg-primary text-white cursor-pointer rounded hover:opacity-70"
            onClick={() => navigate("/login")}
          >
            Buy Now
          </div>
        )}
        {/* -- */}

        {isAuth ? (
          myCart.find((product) => product.id === id) ? (
            <div
              className="px-4 py-2 text-primary bg-light cursor-pointer rounded hover:opacity-70 border-2  border-primary"
              onClick={() => navigate("/cart")}
            >
              Go To Cart
            </div>
          ) : (
            <div
              className="px-4 py-2 text-primary bg-light cursor-pointer rounded hover:opacity-70 border-2  border-primary"
              onClick={() => dispatch(addToCart(item))}
            >
              Add To Cart
            </div>
          )
        ) : (
          <div
            className="px-4 py-2 bg-primary text-white cursor-pointer rounded hover:opacity-70"
            onClick={() => navigate("/login")}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
