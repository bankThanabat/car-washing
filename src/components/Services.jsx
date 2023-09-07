import React from "react";

const Services = ({title,label,detail,img}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <img src={img} className="rounded-lg bg-black/50 opacity-[0.7] h-[80px]" />
      <p className="text-white text-2xl text-center">
        {title}
        <span className="text-gray-400">{label}</span>
      </p>
      <p className="text-gray-400 text-sm text-center">{detail}</p>
    </div>
  );
};

export default Services;
