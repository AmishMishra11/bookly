import React from "react";

import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux/es/exports";

import {
  addToWishlist,
  removeFromCart,
  increaseQuantityFromCart,
  decreaseQuantityFromCart,
} from "../Redux/Features/productSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const { myWishlist } = useSelector((store) => store.product);

  const { Title, Price, imageURL, id, Discount_, Quantity } = item;

  return (
    <div className="p-2">
      <div className="border-2 border-primary rounded-lg h-[20rem] w-[19rem] md:w-[25rem] lg:h-[23rem] lg:w-[36rem] flex justify-between items-center ">
        <div className="flex justify-between items-center w-full p-3">
          <img
            className=" h-[14rem] w-[12rem]  md:h-[17rem] md:w-[15rem]  lg:h-[20rem] md-[22rem] border-2 border-black rounded-md"
            alt="Cart Item"
            src={imageURL}
          />
          <div className="flex flex-col items-stretch justify-around px-4 py-2">
            <h2 className="text-xl font-bold">{Title}</h2>
            <h3 className="text-lg font-semibold">
              ₹{Price - Discount_}{" "}
              <span className="text-sm line-through"> ₹{Price}</span>
            </h3>
            <h3 className=" text-gray-400">₹{Discount_} off</h3>

            <div className=" flex items-center justify-start">
              <div className="flex flex-col md:flex-row items-center justify-center">
                <p>Quantity :</p>

                <div className="flex items-center justify-between">
                  <button
                    className="m-1 md:m-2 border-2 rounded-full border-black px-1  md:px-2  bg-yellow-200  "
                    onClick={
                      Quantity > 1
                        ? () => dispatch(decreaseQuantityFromCart(id))
                        : () => dispatch(removeFromCart(id))
                    }
                  >
                    -
                  </button>

                  <div className="m-1 p-2  md:mx-2 md:px-2 text-center border-2  border-black rounded-md">
                    {Quantity}
                  </div>
                  <button
                    className="m-1 md:m-2 border-2 rounded-full border-black px-1  md:px-2  bg-yellow-200  "
                    onClick={() => dispatch(increaseQuantityFromCart(id))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="m-1 md:m-2 lg:md-4">
              <button
                className="py-0 md:py-2py-0 md:py-2 w-full  bg-primary text-white cursor-pointer rounded hover:opacity-70"
                onClick={
                  myWishlist.length === 0
                    ? () => dispatch(addToWishlist(item))
                    : () =>
                        myWishlist.find((product) => product.id === id)
                          ? toast.warning("Already in Wishlist")
                          : dispatch(addToWishlist(item))
                }
              >
                Move to Wishlist
              </button>
            </div>

            <div className="m-1 md:m-2 lg:md-4">
              <button
                className="px-4 py-0 md:py-2 w-full text-primary bg-light cursor-pointer rounded hover:opacity-70 border-2  border-primary"
                onClick={() => dispatch(removeFromCart(id))}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
