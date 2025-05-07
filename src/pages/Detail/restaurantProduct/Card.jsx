import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../redux/actionTypes/basketAction";

const Card = ({ item }) => {
  //Ürün sepette var mı kontrol et eğer varsa miktar değerini eriş
  const { cart } = useSelector((store) => store.cartReducer);

  const found = cart.find((product) => product.id === item.id);

  //Dispatcah kurulumu
  const dispatch = useDispatch();

  const handleAdd = () => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addItem(item));
  };
  return (
    <div className="grid grid-cols-[1fr_115px] gap-3  p-3 rounded-lg hover:bg-red-100 cursor-pointer transition duration-300 hover:scale-[1.02] shadow">
      <div>
        <div className="flex flex-col justify-between ">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="my-1.5 text-gray-500">{item.description}</p>
        </div>
        <p className="text-lg font-semibold ">{(item.price * 10).toFixed(2)}</p>
      </div>
      <div className="relative">
        <img
          className="rounded-md object-cover size-full"
          src={item.photo}
          alt="product-img"
        />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center font-bold cursor-pointer"
        >
          {found ? found.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
