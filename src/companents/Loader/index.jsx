import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="h-full w-full grid place-items-center my-32">
      <FaSpinner className="animate-spin text-red-500 text-3xl" />
    </div>
  );
};

export default Loader;
