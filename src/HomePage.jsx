import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import MainTitle from "./components/MainTitle";
import Check from "./components/Check";
import Comment from "./components/Comment";

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
            <Button text={"Browse our Shop"} />
          </div>
        </div>
      </div>
      <div className="bg-black h-screen flex flex-col gap-10 items-center justify-center">
        <MainTitle title={"Common"} label={"Services"} />
        <div className="flex gap-5">
          <Card url={"/card1.jpg"} title={"Paint"} label={"Correction"} />
          <Card url={"/card2.jpg"} title={"Ceramic"} label={"Protection"} />
          <Card url={"/card3.jpg"} title={"Interior"} label={"Detailing"} />
        </div>
      </div>
      <div className="flex h-[80vh] bg-black p-10 gap-5">
        <img
          src="/cont2.jpg"
          className="object-cover flex items-end w-1/2 backdrop-blur-lg  opacity-75"
        />
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex">
            <MainTitle title={"Interior"} label={"Detailing"} />
          </div>
          <h2 className="text-white text-5xl font-semibold">
            Lorem, ipsum dolor{" "}
          </h2>
          <p className="text-gray-400 line-clamp-4 word-break w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            nesciunt voluptas temporibus illum officiis eaque, voluptates,
            ducimus tenetur vitae deserunt praesentium vel dolorum, harum nihil
            sint animi amet? Blanditiis, modi!
          </p>
          <div className="flex gap-5">
            <Check label={"Leather & Alcantara"} />
            <Check label={"Daily Use Protection"} />
          </div>
          <div className="flex">
            <Button text={"View Services"} />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse h-[80vh] bg-black p-10 gap-5">
        <img
          src="/cont3.jpg"
          className="object-cover flex items-end w-1/2 backdrop-blur-lg  opacity-75"
        />
        <div className="flex flex-col gap-5 justify-center items-end">
          <div className="flex">
            <MainTitle title={"Enginebay"} label={"Cleaning"} />
          </div>
          <h2 className="text-white text-5xl font-semibold">
            Lorem, ipsum dolor{" "}
          </h2>
          <p className="text-gray-400 line-clamp-4 word-break w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            nesciunt voluptas temporibus illum officiis eaque, voluptates,
            ducimus tenetur vitae deserunt praesentium vel dolorum, harum nihil
            sint animi amet? Blanditiis, modi!
          </p>
          <div className="flex gap-5">
            <Check label={"Road Grim Repellency"} />
            <Check label={"Factory Finish Restored"} />
          </div>
          <div className="flex">
            <Button text={"View Services"} />
          </div>
        </div>
      </div>
      <div className="h-[80vh] bg-[url('/bg3.jpg')]  bg-no-repeat bg-cover bg-center py-10">
        <div className="mx-auto text-center">
          <p className="text-4xl font-semibold text-white pb-5">
            Trusted Testimonials
          </p>
          <p className="text-gray-300">
            We strive on customer satisfaction, every customer has had an
            awesome experience with us.
          </p>
        </div>
        <div className="flex gap-5 mt-20 justify-center">
          <Comment
            url={"/bg3.jpg"}
            Name={"Lucky"}
            Lastname={"Tiger"}
            comment={
              "We strive on customer satisfaction, every customer has had an awesome experience with us.We strive on customer satisfaction, every customer has had an awesome experience with us."
            }
          />
          <Comment
            url={"/bg3.jpg"}
            Name={"Lucky"}
            Lastname={"Tiger"}
            comment={
              "We strive on customer satisfaction, every customer has had an awesome experience with us.We strive on customer satisfaction, every customer has had an awesome experience with us."
            }
          />
          <Comment
            url={"/bg3.jpg"}
            Name={"Lucky"}
            Lastname={"Tiger"}
            comment={
              "We strive on customer satisfaction, every customer has had an awesome experience with us.We strive on customer satisfaction, every customer has had an awesome experience with us."
            }
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button text={"All Testimonials"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
