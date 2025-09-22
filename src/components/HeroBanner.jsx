import React, { useState, useEffect } from "react";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner4.jpg";
import banner4 from "../assets/banner3.jpg";
import banner5 from "../assets/banner6.jpg";

export default function HeroSection() {
  const slides = [
    {
      image: banner2,
      title: "StepUp Your Style with Best Shoes!",
      subtitle: "High-quality shoes for men, women, and kids. Explore now!",
      button: "Shop Now",
      textPosition: "left"
    },
    {
      image: banner3,
      title: "Trendy Sneakers for Everyday Wear",
      subtitle: "Comfortable and stylish sneakers for all ages.",
      button: "Shop Sneakers",
      textPosition: "right"
    },
    {
      image: banner4,
      title: "Elegant Formal Shoes",
      subtitle: "Perfect for office and parties, make a statement!",
      button: "Shop Formal",
      textPosition: "left"
    },
    {
      image: banner5,
      title: "Kids Shoes Collection",
      subtitle: "Fun, colorful, and durable shoes for kids.",
      button: "Shop Kids",
      textPosition: "right"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-4/5 mx-auto relative h-64 sm:h-72 md:h-96 overflow-hidden font-libre rounded">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay Text Div */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-4 sm:p-6 rounded md:rounded-lg w-10/12 sm:w-2/3 md:w-1/3 ${
              slide.textPosition === "left" ? "left-2 sm:left-4 md:left-8" : "right-2 sm:right-4 md:right-8"
            }`}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base mb-2 sm:mb-4">{slide.subtitle}</p>
            <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-300 text-sm sm:text-base">
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? "bg-[#FFA0A0] scale-125" : "bg-black"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
