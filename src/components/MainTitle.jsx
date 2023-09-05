import React from "react";

const MainTitle = ({ title, label }) => {
  return (
    <p className="text-white text-2xl bg-gradient-to-r from-white/20 to-transparent transform flex gap-2">
      <div
        className="bg-red-500 w-[5px]"
        style={{
          transform: "skewX(-10deg)",
        }}
      ></div>
      <p>
        {title}
        <span className="text-gray-400">{label}</span>
      </p>
    </p>
  );
};

export default MainTitle;
