import React from "react";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {
  updateItem,
  deleteItem,
} from "../../../redux/actionTypes/basketAction";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  //Miktarı arttır
  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  //miktarı azalt / ürünü kaldır
  const handleDelete = () => {
    product.amount > 1
      ? dispatch(updateItem(product.id, product.amount - 1))
      : dispatch(deleteItem(product.id));
  };

  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img
        src={product.photo}
        alt={product.title}
        className="size-[100px] rounded-lg"
      />

      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{product.title}</h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}$</p>

          <div className="flex items-center border text-xl rounded-lg ">
            <button onClick={handleDelete} className="cart-button">
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <p className="min-w-[30px] text-center">{product.amount}</p>
            <button onClick={handleAdd} className="cart-button ">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
