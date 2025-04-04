
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import HomeSection from '@/components/HomeSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import RulesSection from '@/components/RulesSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Handle scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80, // Adjust for navbar height
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <BookingForm />
        <HomeSection />
        <AdvantagesSection />
        <FacilitiesSection />
        <RulesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
