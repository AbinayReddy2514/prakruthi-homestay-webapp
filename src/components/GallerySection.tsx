
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel = ({ images, title }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <Card className="gallery-carousel">
      <CardContent className="p-0 relative">
        <div className="relative overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out absolute inset-0 ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={image} alt={`${title} View ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 z-20 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="outline" 
          size="icon"
          className="absolute top-1/2 right-2 z-20 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const GallerySection = () => {
  const homeImages = [
    '/images/outlook.jpg',
    '/images/bedroom.jpg',
    '/images/tvroom.jpg'
  ];
  
  const livingImages = [
    '/images/dining.jpg',
    '/images/garden.jpg',
    '/images/bedroom2.jpg'
  ];
  
  const bathroomImages = [
    '/images/living room.jpg',
    '/images/kitchen.jpg',
    '/images/washroom.jpg'
  ];
  
  const exteriorImages = [
    '/images/living2.jpg',
    '/images/entrance.jpg',
    '/images/play area.jpg'
  ];
  
  const amenitiesImages = [
    '/images/swing.jpg',
    '/images/living3.jpg',
    '/images/bedroom3.jpg'
  ];
  
  return (
    <section id="gallery" className="bg-prakruthi-lightGray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        
        <div className="space-y-8">
          <ImageCarousel images={homeImages} title="Home Views" />
          <ImageCarousel images={livingImages} title="Living Spaces" />
          
          <div className="video-container">
            <video className="w-full h-auto" controls>
              <source src="/videos/videoh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <ImageCarousel images={bathroomImages} title="Kitchen and Bathroom" />
          <ImageCarousel images={exteriorImages} title="Exterior" />
          <ImageCarousel images={amenitiesImages} title="Amenities" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
