import React from "react";
import Rating from "./Rating";

const Comment = ({ url, Name, Lastname, comment }) => {
  return (
    <div className="w-[30vw] h-[35vh] border-2 border-white bg-black/50 relative flex flex-col items-center pt-10 pb-4 px-10 justify-end gap-5">
      <img
        src={url}
        className="rounded-full w-[80px] h-[80px] object-center object-fit absolute -top-[40px] border-2 left-[calc(50%-40px)] border-white"
      />
      <p className="text-white text-2xl text-center">
        {Name}
        <span className="text-gray-400">{Lastname}</span>
      </p>
      <p className="text-gray-400 text-sm text-center">{comment}</p>
      <Rating />
    </div>
  );
};

export default Comment;
