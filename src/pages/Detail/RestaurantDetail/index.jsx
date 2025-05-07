import React, { useEffect, useState } from "react";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";

const RestaurantDetail = () => {
  //Url'deki id değerine eriş
  const { id } = useParams();

  //State kurulumu
  const [restaurant, setRestaurant] = useState(null);
  const [isError, setIsError] = useState(null);

  //Api isteği at
  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => {
        setIsError(err.message);
      });
  }, []);

  return (
    <>
      {isError ? (
        <h1>Hataaa...</h1>
      ) : (
        <div className="flex gap-5">
          {/* image */}
          <img
            className="w-[150px] h-[150px] rounded-md"
            src={restaurant?.photo}
            alt="restaurant-img"
          />

          {/* onfo */}
          <div className="flex flex-col justify-between">
            {/* min price && deliceriy time */}
            <div className="flex gap-4 text-red-500">
              <p className="flex items-center gap-2">
                <FaArrowDown />
                <span className="text-gray-500">
                  Min {restaurant?.minPrice}₺
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaClock />
                <span className="text-gray-500">
                  min {restaurant?.estimatedDelivery} dk
                </span>
              </p>
            </div>
            {/* Restaurant name */}
            <h1 className="text-2xl md:text-3xl font-semibold">
              {restaurant?.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-red-500" />
              <span className="text-gray-700">{restaurant?.rating}</span>
              <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition duration-300 cursor-pointer">
                Yorumları Gör
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
