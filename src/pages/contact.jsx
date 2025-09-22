import React, { useState } from "react";
import axios from "axios";  // Make sure axios is installed
import banner2 from "../assets/banner2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("api/contact/", formData);  // Your Django API endpoint
      alert("Message Sent Successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      
      {/* Header */}
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>

      {/* Info + Image */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="md:w-1/2 text-left">
          <h2 className="font-bold text-xl mb-4">For Online Orders</h2>
          <p>Inquiry/Complaint: 997635725097</p>
          <p>Other Queries: 997635725019</p>
          <p>Timing: 10 AM - 7 PM</p>
          <p>Email: <a href="mailto:customercarestepup.in@gmail.com" className="text-blue-600">customercarestepup.in@gmail.com</a></p>
        </div>

        <div className="md:w-1/2">
          <img src={banner2}alt="Shoes Display" className="rounded-lg shadow-md object-cover w-full h-64"/>
        </div>
      </div>

      {/* Enquiry Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full border border-gray-300 p-2 rounded"/>
        </div>

        <div className="md:flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full border border-gray-300 p-2 rounded"/>
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
              className="w-full border border-gray-300 p-2 rounded"/>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required
            className="w-full border border-gray-300 p-2 rounded h-32"></textarea>
        </div>

        <button type="submit" className="bg-[#2F4F4F] text-white px-6 py-2 rounded hover:bg-gray-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
