import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import ThankYouPage from '../components/ThankYouPage.jsx';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    setShowThankYouPage(true);
  };

  const handleCloseThankYou = () => {
    setShowThankYouPage(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Your Cart
      </h1>
      <hr className="border-gray-300 mb-6" />

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          Your cart is empty. <br />
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:underline mb-4 text-sm sm:text-base"
          >
            <span className="mr-2">&larr;</span> Continue Shopping
          </button>

          {/* Cart Items */}
          <div className="border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
            <p className="text-center text-green-600 font-semibold mb-4 text-sm sm:text-base">
              Free & Fast arriving by Monday. Order within 23 hours, 58 minutes, 50 seconds
            </p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-200 last:border-b-0"
              >
                {/* Product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mb-3 sm:mb-0 sm:mr-4"
                />

                {/* Product details */}
                <div className="flex-grow">
                  <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">MRP ₹{item.mrp}</p>
                </div>

                {/* Quantity + Remove + Price */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
                  <select
                    id={`qty-${item.id}`}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-600 transition"
                    title="Remove item"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 
                        2 0 002 2h8a2 2 0 002-2V6a1 1 
                        0 100-2h-3.382l-.724-1.447A1 1 
                        0 0011 2H9zM7 8a1 1 0 012 
                        0v6a1 1 0 11-2 0V8zm5-1a1 
                        1 0 00-1 1v6a1 1 0 102 
                        0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <span className="font-bold text-sm sm:text-lg">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex justify-between items-center text-base sm:text-lg font-semibold mb-4">
            <span>Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <p className="text-right text-xs sm:text-sm text-gray-500 mb-6">
            Delivery: Free
          </p>

          {/* Checkout button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg sm:text-xl font-bold hover:bg-blue-700 transition-colors"
          >
            Checkout Securely
          </button>

          {/* Express Checkout */}
          <div className="mt-6 text-center">
            <p className="font-semibold mb-3 text-sm sm:text-base">Express Checkout</p>
            <div className="flex flex-col space-y-3">
              <button className="flex items-center justify-center bg-white border border-gray-300 py-3 rounded-md text-gray-800 font-semibold hover:bg-gray-50 text-sm sm:text-base">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png"
                  alt="Google Pay"
                  className="h-5 sm:h-6 mr-2"
                />
                Pay
              </button>
              <button className="flex items-center justify-center bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 text-sm sm:text-base">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                  alt="PayPal"
                  className="h-4 sm:h-5 mr-2"
                />
                PayPal
              </button>
              <button className="flex items-center justify-center bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 text-sm sm:text-base">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/ClearPay_Logo.png/800px-ClearPay_Logo.png"
                  alt="ClearPay"
                  className="h-4 sm:h-5 mr-2"
                />
                ClearPay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Pop-up */}
      {showThankYouPage && <ThankYouPage onClose={handleCloseThankYou} />}
    </div>
  );
};

export default CartPage;
