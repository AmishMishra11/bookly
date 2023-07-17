import React from "react";
import { toast } from "react-toastify";
import Empty from "../assets/empty.png";

import { useSelector } from "react-redux/es/exports";
import CartCard from "../Components/CartCard";

function Cart() {
  const { myCart } = useSelector((store) => store.product);

  const finalPrice = myCart.reduce(
    (acc, curr) => (acc += curr.Price * curr.Quantity),
    0
  );

  const finalDiscount = myCart.reduce(
    (acc, curr) => (acc += curr.Quantity * curr.Discount_),
    0
  );

  const finalqty = myCart.reduce((acc, curr) => (acc += +curr.Quantity), 0);

  const total = finalPrice - finalDiscount;

  return (
    <div className=" mb-12">
      <h1 className="text-center p-4 font-bold text-2xl w-full">
        My Cart ({myCart.length})
      </h1>

      {myCart.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center p-4 font-bold text-2xl w-full">
            Cart is Empty
          </h1>
          <img className="p-8" src={Empty} alt="Empty Cart" />
        </div>
      ) : (
        <div className=" flex items-start justify-center flex-wrap mb-28">
          {/* <!-- items --> */}

          <div className="flex items-center justify-center flex-col">
            {myCart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          {/* <!-- order --> */}
          <div className="flex flex-col items-stretch justify-between rounded-md border-2 border-primary h-[25rem] w-[20rem] my-4 mx-6 py-4 px-6">
            <h2 className="font-semibold text-lg">Price Details</h2>
            <hr />
            <div className="flex items-center justify-between">
              <p>Price ({finalqty} Items)</p>
              <p>₹{finalPrice}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Discount</p>
              <p>- ₹{finalDiscount}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Delivery Charges</p>
              <p>₹100</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">TOTAL</h3>
              <h3 className="font-semibold text-lg">₹{total + 100}</h3>
            </div>
            <hr />

            <h5 className="font-medium text-base">
              You will save ₹{finalDiscount} on this order
            </h5>

            <div className="button">
              <button
                className="w-full m-0 rounded-md bg-primary px-4 py-2"
                onClick={() => toast.success("Thank you for Shopping")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
