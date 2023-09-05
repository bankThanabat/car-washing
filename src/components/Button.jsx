import React from "react";
import {BsChevronRight} from 'react-icons/bs'

const Button = ({ text }) => {
  return (
    <div className="py-2 px-4 rounded-full border-[3px] border-red-500 flex gap-5 items-center bg-black/20 text-sm">
      <p className="text-gray-300 font-semibold">{text}</p>
      <div className="px-2 py-1 border-2 border-red-500 rounded-full">
        <BsChevronRight className="text-red-500" />
      </div>
    </div>
  );
};

export default Button;
