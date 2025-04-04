
import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-prakruthi-darkGreen text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Prakruthi Home Stay</h3>
            <p className="mb-4">Experience a relaxing stay surrounded by nature in Shamirpet, Hyderabad.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-gray-300">Location Advantages</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-gray-300">Facilities</a>
              </li>
              <li>
                <a href="#rules" className="hover:text-gray-300">Terms and Conditions</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gray-300">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@prakruthihomestay.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Prakruthi Home Stay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
