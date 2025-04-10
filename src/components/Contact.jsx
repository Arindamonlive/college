import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Write to Us</h2>
        <p className="mb-6 text-gray-600">Have questions? Contact us using the form below.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your Message"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-100 rounded-xl p-6 space-y-4 shadow-md">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <div className="flex items-start gap-3">
          <Mail className="text-blue-600" />
          <div>
            <p className="font-medium">info@svist.org</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="text-blue-600" />
          <div>
            <p>Swami Vivekananda Institute of Science & Technology</p>
            <p>Dakshin Gobindapur, Sonarpur</p>
            <p>Kolkata 700 145, India</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="text-blue-600" />
          <div>
            <p>+91 9831084446</p>
            <p>+91 9434360673</p>
            <p>+91 33 2437-9913</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="text-blue-600" />
          <p>10:00 am – 6:00 pm</p>
        </div>

        {/* Social Media */}
        <div>
          <p className="font-medium mb-2">Our social media:</p>
          <div className="flex space-x-4 text-blue-600">
            <a href="#" className="hover:text-blue-800"><Facebook /></a>
            <a href="#" className="hover:text-blue-800"><Twitter /></a>
            <a href="#" className="hover:text-blue-800"><Linkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
