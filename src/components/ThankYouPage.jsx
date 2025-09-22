import React from 'react';

const ThankYouPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          {/* SVG for the checkmark icon */}
          <svg
            className="w-24 h-24 text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold text-gray-800">Thank you for your ordering</h2>
        <p className="mt-2 text-gray-600">We've received your order and it will ship in 5-7 business days.</p>
        <p className="mt-1 text-gray-600 font-medium">Your order number is: <span className="font-bold">#BH280006</span></p>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-400 rounded-md font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            View Order
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition-colors"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
