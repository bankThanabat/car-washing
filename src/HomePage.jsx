import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/bg2.jpg')]  bg-no-repeat bg-cover h-screen flex items-end">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <p className="text-5xl text-white font-semibold">
            Your Pride & Joy is Our Passion
          </p>
          <p className="text-gray-400 lin-clamp-2 w-[40vw] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            architecto itaque perspiciatis Tenetur architecto itaque
          </p>
          <div className="flex gap-5  bg-gradient-to-t from-black via-black to-transparent bg-opacity-20 w-full justify-center pb-5">
            <Button text={"View our Services"} />
            <Button text={"View our Services"} />
          </div>
        </div>
      </div>
      <div className="bg-black h-screen flex flex-col gap-10 items-center justify-center">
        <p className="text-white text-2xl bg-gradient-to-r from-white/20 to-transparent transform flex">
            <div className="bg-red-500 w-[5px] rotate-6"></div>
          Common<span className="text-gray-400">Services</span>
        </p>
        <div className="flex gap-5">
          <Card url={"/card1.jpg"} title={"Paint"} label={"Correction"} />
          <Card url={"/card2.jpg"} title={"Ceramic"} label={"Protection"} />
          <Card url={"/card3.jpg"} title={"Interior"} label={"Detailing"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
