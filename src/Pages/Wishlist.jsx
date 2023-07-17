import React from "react";

import Cards from "../Components/Cards";
import Empty from "../assets/empty.png";
import { useSelector } from "react-redux/es/exports";

function AuthWishlist() {
  const { myWishlist } = useSelector((store) => store.product);

  return (
    <div className="">
      <h1 className="text-center p-4 font-bold text-2xl w-full">
        My Wishlist ({myWishlist.length})
      </h1>

      {myWishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center p-4 font-bold text-2xl w-full">
            Wishlist is Empty
          </h1>

          <img className="p-8" src={Empty} alt="Empty Wishlist" />
        </div>
      ) : (
        <main>
          <div className="flex justify-center items-center flex-wrap">
            {myWishlist.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default AuthWishlist;
