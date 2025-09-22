import React from "react";
import { Link } from "react-router-dom";

export default function SecondaryNavbar() {
  return (
    <section className="bg-white text-slategray py-4 px-4 md:px-0">

      {/* StepUp.in Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">StepUp.in</h1>

      {/* Horizontal Line */}
      <hr className="w-32 md:w-150 mx-auto border-black mb-2 md:mb-4"/>

      {/* Navigation Links: Women | Men | Kids | Brands | Offers */}
      <nav className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-12 text-lg md:text-xl font-semibold mb-2 md:mb-4 overflow-x-auto">
        <Link to="/product/women" className="hover:text-[#FFA0A0] whitespace-nowrap">Women</Link>
        <Link to="/product/men" className="hover:text-[#FFA0A0] whitespace-nowrap">Men</Link>
        <Link to="/product/kids" className="hover:text-[#FFA0A0] whitespace-nowrap">Kids</Link>
        <Link to="/brands" className="hover:text-[#FFA0A0] whitespace-nowrap">Brands</Link>
        <Link to="/offers" className="hover:text-[#FFA0A0] whitespace-nowrap">Offers</Link>
      </nav>

      {/* Another Horizontal Line */}
      <hr className="w-32 md:w-150 mx-auto border-black"/>

    </section>
  );
}
