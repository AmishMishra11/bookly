import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" p-6 bg-night text-white hidden md:flex justify-around flex-col">
      <div className="flex justify-around flex-1">
        <div className="">
          <h3 className="font-semibold text-lg hover:border-b-2 border-primary ">
            Navigation
          </h3>

          <ul className="px-4 py-2">
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/">
                Home
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/account">
                Profile
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/Products">
                Products
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/Cart">
                Cart
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/Wishlist">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="font-semibold text-lg hover:border-b-2 border-primary ">
            Orders
          </h3>

          <ul className="footer-help-list px-4 py-2">
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/">
                My Orders
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/">
                Track Order
              </Link>
            </li>
            <li className="my-4 hover:border-b-2 border-primary cursor-pointer">
              <Link className="border-radius-S" to="/">
                Return
              </Link>
            </li>
          </ul>

          <div className="footer-credit">
            <h4>© Credits</h4>
            <p>Bookly</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
