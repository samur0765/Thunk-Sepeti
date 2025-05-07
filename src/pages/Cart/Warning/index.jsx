import React from "react";
import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-32">
      <p>Sepette henüz herhangi bir ürün bulunmuyor</p>

      <Link to="/" className="border p-2 shadow- rounded hover:bg-gray-100">
        Restorantlara Gözat
      </Link>
    </div>
  );
};

export default Warning;
