import React from "react";
import RestaurantDetail from "./RestaurantDetail";
import ResturantProducts from "./restaurantProduct";

const Detail = () => {
  return (
    <div>
      {/* Detail */}
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      {/* Products */}
      <div className="shadow">
        <div className="container">
          <ResturantProducts />
        </div>
      </div>
    </div>
  );
};

export default Detail;
