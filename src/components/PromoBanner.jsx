import React, { useState, useEffect } from "react";

export default function PromoBanner() {
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    // This function will toggle the color state every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Use Tailwind's `bg-` and `text-` classes with conditional rendering
  const bannerClasses = `
    transition-colors duration-1000 ease-in-out 
    max-w-7xl mx-auto my-12 p-6 rounded-lg text-center shadow-lg 
    flex items-center justify-center space-x-4
    ${isWhite ? "bg-white text-gray-800 border border-gray-300" : "bg-teal-800 text-white"}
  `;

  return (
    <section>
      <div className={bannerClasses}>
        <span className="text-3xl">🎁</span>
        <p className="text-xl font-medium">Get your first order with free gift</p>
        <span className="text-3xl">🎁</span>
        <p className="text-xl font-medium">& 50 % offer</p>
        <span className="text-3xl">🎁</span>
      </div>
    </section>
  );
}