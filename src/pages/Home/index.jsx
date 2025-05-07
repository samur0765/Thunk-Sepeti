import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5">
        Yakınınızdaki Restorantlar
      </h1>
      {isLoading ? (
        <h1>Yükleniyor..</h1>
      ) : error ? (
        <h1>Hataaaa</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map((item) => (
            <Cart key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
