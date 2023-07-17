import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function Sidebar() {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#9333EA" : "",
  });

  return (
    <ul className="flex justify-between border-t-2 border-primary md:hidden  w-full bg-light  sticky bottom-0  md:top-16">
      <li className="p-4 md:p-6 ">
        <NavLink
          style={getActiveStyle}
          to="/"
          end
          className="inline-flex items-center  "
        >
          <AiFillHome />
          <i className="fa-solid fa-house"></i>
        </NavLink>
      </li>
      <li className="p-4 md:p-6 ">
        <NavLink
          style={getActiveStyle}
          to="/products"
          end
          className="inline-flex items-center  "
        >
          <BiSolidBookAlt />
        </NavLink>
      </li>
      <li className="p-4 md:p-6 ">
        <NavLink
          style={getActiveStyle}
          to="/account"
          end
          className="inline-flex items-center  "
        >
          <MdAccountCircle />
        </NavLink>
      </li>
      <li className="p-4 md:p-6 ">
        <NavLink
          style={getActiveStyle}
          to="/cart"
          end
          className="inline-flex items-center  "
        >
          <FaCartShopping />
        </NavLink>
      </li>
      <li className="p-4 md:p-6 ">
        <NavLink
          style={getActiveStyle}
          to="/wishlist"
          end
          className="inline-flex items-center  "
        >
          <AiFillHeart />
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
