import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const Check = ({ label }) => {
  return (
    <div className="flex gap-5 items-center justify-center  rounded-full px-2 py-1 ">
      <BsCheck2Circle className="text-red-500 text-xl" />
      <p className="text-white">{label}</p>
    </div>
  );
};

export default Check;
