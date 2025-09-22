import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from '../assets/logo.jpg';
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext'; // Import useCart

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  // Calculate total quantity of items
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <nav className="bg-[#2F4F4F] text-white p-4 flex justify-between items-center relative">
      {/* Logo + Search */}
      <div className="flex items-center space-x-4">
        <img
          src={logoImage}
          alt="StepUp Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2"
        />

        {/* Search bar hidden on mobile */}
        <div className="relative hidden md:block">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA0A0]"
          />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
        {["/", "/about", "/contact", "/login"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-[#FFA0A0]" : "text-white hover:text-[#FFA0A0]"
            }
          >
            {path === "/" ? "Home" : path.slice(1).replace("-", " ").toUpperCase()}
          </NavLink>
        ))}

      <NavLink
  to="/cart"
  className={({ isActive }) =>
    (isActive ? "text-[#FFA0A0]" : "text-white hover:text-[#FFA0A0]") +
    " flex items-center space-x-1 relative"
  }
>
  <span>Cart</span>
  
  <div className="relative">
    <ShoppingCartIcon className="w-6 h-6" />
    {totalCartItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {totalCartItems}
      </span>
    )}
  </div>
</NavLink>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-6 h-6"/> : <Bars3Icon className="w-6 h-6"/>}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#2F4F4F] flex flex-col items-center py-4 space-y-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {["/", "/about", "/contact", "/login"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            onClick={() => setIsOpen(false)} // close menu on click
            className={({ isActive }) =>
              isActive ? "text-[#FFA0A0] text-lg" : "text-white hover:text-[#FFA0A0] text-lg"
            }
          >
            {path === "/" ? "Home" : path.slice(1).replace("-", " ").toUpperCase()}
          </NavLink>
        ))}

      <NavLink
  to="/cart"
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    (isActive ? "text-[#FFA0A0]" : "text-white hover:text-[#FFA0A0]") +
    " flex items-center space-x-1 text-lg"
  }
>
  <span>Cart</span>

  <div className="relative">
    <ShoppingCartIcon className="w-5 h-5" />
    {totalCartItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {totalCartItems}
      </span>
    )}
  </div>
</NavLink>

      </div>
    </nav>
  );
}
