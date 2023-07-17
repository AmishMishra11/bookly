import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";

import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setFilterSearch } from "../Redux/Features/filterSlice";
import { userLogout } from "../Redux/Features/authSlice";

function Navigation() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.clear();
    navigate("/");
  };

  const { isAuth } = useSelector((store) => store.auth);
  const { myWishlist, myCart } = useSelector((store) => store.product);

  return (
    <div className="sticky top-0 p-0 z-20 ">
      <nav className="">
        <header className="bg-night  w-full py-2 px-3 lg:py-4 lg:px-6  flex items-center  justify-between">
          <div className="">
            <Link className="" to="/">
              <h2 className="text-primary m-0 text-2xl font-bold">Bookly</h2>
            </Link>
          </div>

          <div className=" flex p-2  lg:p-4 basis-1/2">
            <input
              className="rounded-[3rem] p-1 lg:p-[10px] grow"
              type="text"
              value={searchText}
              placeholder="What are you looking for"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-primary rounded-full p-3"
              onClick={() => {
                dispatch(setFilterSearch(searchText));
                setSearchText("");
                navigate("/products");
              }}
            >
              <AiOutlineSearch />
            </button>
          </div>

          <ul className="p-0 lg:p-4 flex items-center justify-between">
            <div className=" hidden  md:block  px-2 py-1  lg:px-4 lg:py-2 ">
              <div className="relative">
                <li className="px-2 py-1  lg:px-4 lg:py-2">
                  <div className="wishlist-container">
                    <div
                      className="wishlist bg-primary px-4 py-2 rounded-md hover:opacity-60 hover:cursor-pointer "
                      onClick={() => navigate("/wishlist")}
                    >
                      <AiFillHeart />
                    </div>
                    {isAuth && (
                      <p className="absolute top-[-7px] lg:top-0 right-1  text-xs py-1 px-2 bg-white text-black rounded-full">
                        {myWishlist.length}
                      </p>
                    )}
                  </div>
                </li>
              </div>
            </div>

            <div className=" hidden  md:block  px-2 py-1  lg:px-4 lg:py-2 ">
              <div className="relative">
                <li className="px-2 py-1  lg:px-4 lg:py-2">
                  <div className="wishlist-container">
                    <div
                      className="wishlist bg-primary px-4 py-2 rounded-md hover:opacity-60 hover:cursor-pointer"
                      onClick={() => navigate("/cart")}
                    >
                      <FaCartShopping />
                    </div>
                    {isAuth && (
                      <p className="absolute top-[-7px] lg:top-0 right-1  text-xs py-1 px-2 bg-white text-black rounded-full">
                        {myCart.length}
                      </p>
                    )}
                  </div>
                </li>
              </div>
            </div>

            <li className="px-2 py-1  lg:px-4 lg:py-2 hover:opacity-60 hover:cursor-pointer">
              {isAuth ? (
                <div
                  className="bg-primary  px-2 py-1  lg:px-4 lg:py-2 rounded-md"
                  onClick={() => handleLogout()}
                >
                  Logout
                </div>
              ) : (
                <div
                  className="bg-primary  px-2 py-1  lg:px-4 lg:py-2 rounded-md"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              )}
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default Navigation;
