import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

function Account() {
  const { user } = useSelector((store) => store.auth);

  console.log("user", user);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-bold text-2xl text-center p-4">My Account</h1>

      <div className="text-xl font-semibold  my-0 mx-auto w-[60%] ">
        <p>Name: {user.fullName} </p>

        <p>Email: {user.email}</p>
      </div>

      <div className="flex items-center justify-center text-2xl">
        <div
          className="m-5 flex flex-col items-center bg-primary px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <FaCartShopping />
          <div>My Cart</div>
        </div>
        <div
          className="m-5 flex flex-col items-center bg-primary px-4 py-2 rounded-md cursor-pointer "
          onClick={() => navigate("/wishlist")}
        >
          <AiFillHeart />
          <div>My Wishlist</div>
        </div>
      </div>
    </div>
  );
}

export default Account;
