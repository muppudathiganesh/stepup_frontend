// src/components/ProductCard.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Import the cart context hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ProductCard = ({ product }) => {
  // Get the addToCart function from the global cart context
  const { addToCart } = useCart();
  // Get the navigate function to redirect the user
  const navigate = useNavigate();

  // This function is called when the button is clicked
  const handleAddToCart = () => {
    // 1. Add the current product to the cart using the context function
    addToCart(product);
    
    // 2. Navigate the user to the cart page
    navigate('/cart');
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < 4 ? 'text-yellow-500' : 'text-gray-300'} />
          ))}
        </div>
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.brand}</p>
        <div className="flex items-baseline mt-1">
          <span className="font-bold text-lg mr-2">₹{product.price}</span>
          <span className="text-gray-400 line-through text-sm">MRP: ₹{product.mrp}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">Color:</span>
          {product.color && (
            <div className={`w-4 h-4 rounded-full border border-gray-300`} style={{ backgroundColor: product.color.toLowerCase() }}></div>
          )}
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="flex-1 py-2 rounded-md border border-gray-400 text-sm hover:bg-gray-100 transition-colors">Buy</button>
          
          {/* Add the onClick event handler to the button */}
          <button 
            onClick={handleAddToCart} 
            className="flex-1 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;