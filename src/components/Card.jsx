import React from "react";

const Card = ({ url, title, label }) => {
  const cardStyle = {
    backgroundImage: `url(${url})`,
  };
  return (
    <div
      style={cardStyle}
      className={`border-4 border-white flex justify-end items-end  w-[20vw] h-[20vw]  bg-no-repeat bg-cover`}
    >
      <div className="flex justify-center items-center w-full py-4 bg-black/60 border-t-4  border-white h-[20%]">
        <p className="text-white text-2xl">
          {title}
          <span className="text-gray-400">{label}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
