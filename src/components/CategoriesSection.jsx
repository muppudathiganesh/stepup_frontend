import React from "react";
import { Link } from "react-router-dom"; 
import mensImage from "../assets/mens.png";
import womensImage from "../assets/womens.png";
import kidsImage from "../assets/kids.png";

const categories = [
  { name: "Mens", image: mensImage, link: "/product/mens" },
  { name: "Womens", image: womensImage, link: "/product/women" },
  { name: "Kids", image: kidsImage, link: "/product/kids" },
];

export default function CategoriesSection() {
  return (
    <section className="my-12 p-6">
      <h2 className="text-3xl text-center font-bold text-slategray mb-8">
        What are you looking for?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="flex flex-col items-center w-full max-w-xs group"
          >
            <div className="w-full h-80 overflow-hidden rounded-lg shadow-md transition-transform transform group-hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700 group-hover:text-[#FFA0A0]">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
