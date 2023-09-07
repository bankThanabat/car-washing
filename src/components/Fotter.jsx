import React from "react";
import Menu from "./Menu";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Fotter = () => {
  const menu1 = {
    title: "Services",
    allMenu: [
      {
        name: "Paint Correction",
      },
      {
        name: "Ceramic Coating",
      },
      {
        name: "Vehicle Wrapping",
      },
      {
        name: "Window Tinting",
      },
      {
        name: "Interior Veleting",
      },
      {
        name: "Engine Bay Cleaning",
      },
    ],
  };
  const menu2 = {
    title: "Shop",
    allMenu: [
      {
        name: "Shampoos",
      },
      {
        name: "Polishes",
      },
      {
        name: "Waxes",
      },
      {
        name: "Quick Detailers",
      },
      {
        name: "Sealant & Glazes",
      },
      {
        name: "Accessories",
      },
    ],
  };
  return (
    <div className="flex gap-16 py-16 justify-center bg-black">
      <div className="flex flex-col w-[250px]">
        <img src="/logo.png" className="w-[150px]" />
        <p className="text-white text-sm">
          Professional vehicle paint correction centre and car cleaning
          accessories store.
        </p>
      </div>
      <Menu menu={menu1} />
      <Menu menu={menu2} />
      <div className="flex flex-col gap-2">
        <p className="text-white text-lg">Contact</p>
        <div className="flex gap-4">
          <div className="w-[30px] h-[30px] border-2 border-red-500 rounded-full text-white flex items-center justify-center">
            <BsFacebook />
          </div>
          <div className="w-[30px] h-[30px] border-2 border-red-500 rounded-full text-white flex items-center justify-center">
            <BsInstagram />
          </div>
          <div className="w-[30px] h-[30px] border-2 border-red-500 rounded-full text-white flex items-center justify-center">
            <BsTwitter />
          </div>
        </div>
        <div>
          <p className="text-white text-sm">Call Us</p>
          <p className="text-gray-400 text-sm">06-xxxx-xxxx</p>;
        </div>
        <div>
          <p className="text-white text-sm">Email Us</p>
          <p className="text-gray-400 text-sm">xxxx@mail.com</p>;
        </div>
      </div>
    </div>
  );
};

export default Fotter;
