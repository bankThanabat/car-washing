import React, { useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 z-10"
        onClick={prevSlide}
      >
        <BsChevronLeft className="text-gray-600" />
      </button>
      <div className="relative  overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-screen h-[80vh] object-cover transition-transform transform  duration-300"
        />
      </div>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2"
        onClick={nextSlide}
      >
        <BsChevronRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default ImageSlider;
