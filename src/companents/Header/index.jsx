import React from "react";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  //Store'a abone ol
  const { restaurants } = useSelector((store) => store.restaurantReducer);
  const { cart } = useSelector((store) => store.cartReducer);

  //Sepetteki toplam ürün miktarını hesapla
  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="shadow ">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          ThunkSepeti
        </Link>
        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            Yakınınızda {restaurants.length}{" "}
            <IoRestaurant className="text-red-500" />{" "}
            <span className="max-md:hidden">Restorant Var</span>
          </Link>
          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link to="/cart" className="basket-button">
            <BsBasket />
            <span>{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
