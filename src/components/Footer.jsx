import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-xs">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-sm font-bold">Swami Vivekananda Institute of Science & Technology</h2>
          <p className="mt-1">AICTE Approved, Affiliated to MAKAUT & WBSCTE, NAAC Accredited</p>
        </div>

        <div>
          <h2 className="text-sm font-bold">Quick Links</h2>
          <ul className="mt-1 space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/academics" className="hover:underline">Academics</a></li>
            <li><a href="/admissions" className="hover:underline">Admissions</a></li>
            <li><a href="/placements" className="hover:underline">Placements</a></li>
            <li><a href="/research" className="hover:underline">Research</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          <div>
            <h2 className="text-sm font-bold">Contact Us</h2>
            <p className="flex items-center mt-1"><FaMapMarkerAlt className="mr-1" /> Dakshin Gobindapur, Sonarpur, Kolkata - 700145, India</p>
            <p className="flex items-center mt-1"><FaPhone className="mr-1" /><a href="tel:+911234567890" className="hover:underline"> +91 9831084446</a></p>
            <p className="flex items-center mt-1"><FaEnvelope className="mr-1" /><a href="mailto:contact@svist.org" className="hover:underline"> contact@svist.org</a></p>
            <div className="flex gap-3 mt-2">
              <FaFacebook className="cursor-pointer hover:text-gray-400" href=""/>
              <FaTwitter className="cursor-pointer hover:text-gray-400" href=""/>
              <FaInstagram className="cursor-pointer hover:text-gray-400" href=""/>
            </div>
          </div>


          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236105.28566089232!2d88.11001259453123!3d22.385887199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026db23b16e15b%3A0xaab4afa96faa99b6!2sSwami%20Vivekananda%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sin!4v1743423258292!5m2!1sen!2sin"
              width="100%" height="120" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>


      <div className="text-center mt-4 border-t border-gray-700 pt-2">
        <p>Website supported by <a href="https://rjrinfinity.com" className="text-yellow-400 hover:underline">R J R Infinity</a></p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Swami Vivekananda Institute of Science & Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
