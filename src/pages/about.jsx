import React from "react";
import banner5 from "../assets/banner6.jpg";
import banner7 from "../assets/banner7.jpg";

const About = () => {
  return (
    <div className="relative p-4 md:p-8 bg-white text-gray-800 font-serif">

      {/* About StepUp */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">About StepUp</h2>
      <p className="max-w-3xl mx-auto text-center mb-12 text-sm md:text-base">
        StepUp is India’s largest sports and athleisure footwear brand. Incorporated in 2006, StepUp Activewear is one of the leading players in organized sports & casual footwear sector in India. Since 2016, the flagship brand "StepUp", has been the largest sports and athleisure footwear brand in India, in both volume and value terms. The company's products are available via an expansive Pan-India network of over 15,000 geo-tagged multi-brand retail stores, 35+ company-owned exclusive outlets, large format stores such as Walmart, Vishal Retail and Reliance Smart among others and all the leading e-commerce portals.
      </p>

      {/* Our Mission */}
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Our Mission</h2>
      <p className="max-w-3xl mx-auto text-center mb-12 text-sm md:text-base">
        At StepUp we craft shoes with care for everyone - men, women and kids, with an equal attention to detail, letting each shoe speak for itself. The world-class quality, trendy designs and affordable prices have captured the imagination of millions of people, across the country - making StepUp, an aspirational brand especially for young adults, everyday performers and fashionistas.
      </p>

      {/* Half-Circle + Image (Desktop only) */}
      <div className="hidden md:block absolute right-0 top-0 w-72 h-96 overflow-hidden">
        <div className="absolute right-0 top-20 w-64 h-64 bg-[#2F4F4F] rounded-l-full"></div>
        <div className="absolute right-0 top-0 w-64 h-80 rounded-l-full overflow-hidden">
          <img
            src={banner7}
            alt="StepUp Shoes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Circular Image (Always visible) */}
      <div className="flex justify-center mb-12 mt-8">
        <img
          src={banner5}
          alt="StepUp Shoes"
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-gray-300"
        />
      </div>

      {/* Three Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-2 md:px-0">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3">Simplicity In Design</h3>
          <p className="text-gray-600 text-sm md:text-base">
            No flashy logos, No senseless details. Just the world’s most comfortable shoes, made naturally and designed practically. It’s that simple.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3">Confidence in Comfort</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Trying is believing. Give our shoes a shot for 30 days, and if you're not walking on cloud nine, we’ll take them back – no questions asked.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-3">Made from Nature</h3>
          <p className="text-gray-600 text-sm md:text-base">
            The footwear industry often overlooks mother Nature’s materials in favor of cheaper, synthetic alternatives. We think it’s time to change that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
