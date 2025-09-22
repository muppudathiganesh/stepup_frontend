import React from 'react';

// You would use this component for each list of links
const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-300 text-sm">
      {children}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F]  text-white p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Contact Us Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-4">We'd love to hear from you!</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Landline: XXXXXXXXXX</li>
            <li>WhatsApp: +91XXXXXXXXXX</li>
            <li>Email: stepup@gmail.com</li>
            <li>Address: 2/38, yyyyyyyy Tenkasi, Tamilnadu, India.</li>
          </ul>
        </div>

        {/* Shop Column */}
        <FooterColumn title="Shop">
          <li>New in</li>
          <li>Women</li>
          <li>Men</li>
          <li>Accessories</li>
          <li>Heels</li>
          <li>About us</li>
        </FooterColumn>

        {/* Info Column */}
        <FooterColumn title="Info">
          <li>Search</li>
          <li>Return & Exchange Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Shipping Policy</li>
          <li>Blogs</li>
        </FooterColumn>

        {/* Social Media Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            {/* Replace with actual links and icons */}
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-gray-400 text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter / Stay in Touch Column */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Lets stay in touch !</h3>
          <p className="text-gray-300 text-sm mb-4">
            Sign up for exclusive offers, original stories, events and more.
          </p>
          <form className="space-y-4">
            <input 
              type="email"
              placeholder="Email id"
              className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button 
              type="submit" 
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Bottom bar for the darker background */}
      <div className="mt-12 w-full h-1 bg-gray-900 rounded-full"></div>

    </footer>
  );
}