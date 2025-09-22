import React from "react";
import HeroBanner from "../components/HeroBanner";
import CategoriesSection from "../components/CategoriesSection"; 
import PromoBanner from "../components/PromoBanner"; 

import prodImg1 from "../assets/heel.jpg";
import prodImg2 from "../assets/diamond-heel.jpg";
import prodImg3 from "../assets/blush-shoe.jpg";
import prodImg4 from "../assets/white-trainer.jpg";
import prodImg5 from "../assets/navy-shoe.jpg";
import prodImg6 from "../assets/navy-trainer.jpg";
import prodImg7 from "../assets/pink-sandal.jpg";
import prodImg8 from "../assets/blush-shoe.jpg";

// Define the product data
const productData = [
  { name: "Product Name 1", price: "$50.00", img: prodImg1 },
  { name: "Product Name 2", price: "$75.00", img: prodImg2 },
  { name: "Product Name 3", price: "$120.00", img: prodImg3 },
  { name: "Product Name 4", price: "$90.00", img: prodImg4 },
   { name: "Product Name 5", price: "$50.00", img: prodImg5 },
  { name: "Product Name 6", price: "$75.00", img: prodImg6 },
  { name: "Product Name 7", price: "$120.00", img: prodImg7 },
  { name: "Product Name 8", price: "$90.00", img: prodImg8 },
];

export default function Home() {
  return (
    <div className="font-libre">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Overview Section */}
      <section className="max-w-2xl mx-auto text-center text-slategray mt-10 p-6">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          Explore our curated selection of high-quality shoes for every
          occasion. From durable athletic shoes designed for peak performance
          to stylish casual sneakers and elegant dress shoes, we offer a diverse
          range of footwear to suit your needs. Our user-friendly interface
          makes it easy to browse our collection and find the perfect pair,
          while detailed product descriptions and high-quality images ensure you
          make an informed decision. Join our community of style and discover
          your next favorite shoe!
        </p>
      </section>

      {/* Categories Section */}
      <CategoriesSection />

      {/* New & Trending Section */}
      <section className="container mx-auto p-4">
        <h3 className="text-4xl font-semibold  mt-8 mb-4 text-center">New & Trending</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
          {productData.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white p-4 text-center hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img
                src={prod.img}
                alt={prod.name}
                className="mx-auto rounded-lg mb-2"
              />
              <h4 className="font-semibold text-md">{prod.name}</h4>
              <p className="text-gray-500 font-semibold text-sm">
                MRP: {prod.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition-colors">
            View all
          </button>
        </div>
      </section>

      {/* Promo Banner */}
      <PromoBanner />
    </div>
  );
}
