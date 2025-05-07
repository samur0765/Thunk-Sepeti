import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../companents/Loader";
import { Warning } from "postcss";
import Card from "./Card";
import OrderBox from "./OrderBox";

const Cart = () => {
  //Sepete Abone Ol
  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error.message} />
          ) : cart.length === 0 ? (
            <Warning />
          ) : (
            cart.map((item) => <Card key={item.id} product={item} />)
          )}
        </div>
        <OrderBox cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
