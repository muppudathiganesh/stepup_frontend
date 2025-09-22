// src/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 👉 here you would check API / backend authentication
    // If login is successful:
    navigate("/home");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl w-full flex flex-col items-center">
        {/* Toggle Buttons */}
        <div className="w-full flex justify-center mb-6">
          <button
            onClick={() => setIsLoginView(true)}
            className={`w-1/2 py-2 text-center rounded-l-2xl font-bold transition-colors ${
              isLoginView ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Log in
          </button>
          <button
            onClick={() => setIsLoginView(false)}
            className={`w-1/2 py-2 text-center rounded-r-2xl font-bold transition-colors ${
              !isLoginView ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        {isLoginView ? (
          // Login Form
          <div className="w-full">
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email id"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
              <p className="text-sm text-right text-red-500 hover:underline cursor-pointer">
                Forget Password?
              </p>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors"
              >
                Log In
              </button>
            </form>
          </div>
        ) : (
          // Register Form
          <div className="w-full">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email id"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 rounded" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
