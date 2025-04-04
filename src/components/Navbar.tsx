
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="overflow-hidden bg-prakruthi-green relative">
      <Link 
        to="/" 
        className="flex items-center px-4 py-2 bg-prakruthi-darkGreen text-white"
      >
        <span className="font-bold text-xl">Prakruthi Home Stay</span>
      </Link>
      
      <div 
        className={`${isMenuOpen ? 'block' : 'hidden'} bg-prakruthi-lightGreen md:flex md:justify-end md:items-center transition-all duration-300`}
      >
        <a 
          href="#home" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </a>
        <a 
          href="#advantages" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('advantages');
          }}
        >
          Location Advantages
        </a>
        <a 
          href="#facilities" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('facilities');
          }}
        >
          Facilities
        </a>
        <a 
          href="#rules" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('rules');
          }}
        >
          Terms and Conditions
        </a>
        <a 
          href="#gallery" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('gallery');
          }}
        >
          Gallery
        </a>
        <a 
          href="#contact" 
          className="text-black px-4 py-3 block hover:bg-white md:inline-block"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </div>
      
      <button 
        className="absolute top-0 right-0 bg-gray-100 p-4 text-black md:hidden"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

export default Navbar;
