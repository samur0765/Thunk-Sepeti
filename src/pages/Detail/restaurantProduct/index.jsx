import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import { FaFire } from "react-icons/fa";
import Card from "./Card";

const ResturantProducts = () => {
  //Url'deki id değerine eriş
  const { id } = useParams();

  //State oluştur
  const [restaurant, setRestaurant] = useState([]);
  const [isError, setIsError] = useState(null);

  //Id'si bilinen restaurantın ürünleri için api isteği at
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => setIsError(err.message));
  }, []);
  return (
    <>
      {isError ? (
        <h1>Hatta</h1>
      ) : restaurant.length == 0 ? (
        <h1>Restorant servis dışı</h1>
      ) : (
        <div>
          <div>
            <h2 className="text-2xl flex items-center gap-2 font-bold">
              <FaFire className="text-red-500" />
              Popüler
            </h2>
            <p className="text-gray-600 ">
              Restoranın en çok tercih edilen ürünleri.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 mt-6">
            {restaurant.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ResturantProducts;
