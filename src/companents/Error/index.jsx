import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <div className="bg-red-100 my-32 p-10 rounded-md text-lg text-center">
        <p className="font-semibol mt-5">Üzgünüz bir hata oluştu</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
