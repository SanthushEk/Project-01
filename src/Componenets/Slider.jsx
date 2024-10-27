import React, { useState, useEffect } from "react";
import robotaxi from "../assets/robotaxi.jpg";
import robovan from "../assets/robovan.png";
import teslabot from "../assets/teslabot.jpg";

const slides = [
  {
    title: "Robotaxi",
    image: robotaxi,
    description:
      "Hail your car and use it as long as you need for errands, commuting and more.",
  },
  {
    title: "Robovan",
    image: robovan,
    description:
      "Autonomous transport for groups or goods, from mass transit to construction to food service.",
  },
  {
    title: "Tesla Bot",
    image: teslabot,
    description:
      "Helps you with daily tasks like completing house chores or running errands.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center mb-20 mt-10">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-[1500px] h-[400px] sm:h-[500px] md:h-[700px] object-cover"
        />
      </div>


      <div className="mt-4 text-center md:hidden">
        <h3 className="text-lg font-semibold mb-2 font-Oxanium">{slides[currentSlide].title}</h3>
        <p className="text-gray-600 font-Oxanium">{slides[currentSlide].description}</p>
      </div>


      <div className="flex space-x-2 mt-4 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>


      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`p-4 text-center shadow-md transition-all duration-300 ${
              index === currentSlide ? "bg-gray-100" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div
              className={`w-full h-2 mb-4 ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
            <h3 className="text-xl font-semibold mb-2 font-Oxanium text-left">{slide.title}</h3>
            <p className="text-gray-600 font-Oxanium text-left">{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
