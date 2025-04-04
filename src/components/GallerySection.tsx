
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Mock image data - these would be replaced with actual images
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    alt: "Living Room",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Garden",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Bedroom",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Dining Area",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-prakruthi-gray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <Card>
                    <CardContent className="p-0">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-[300px] md:h-[500px] object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {[...images].reverse().map((image) => (
                <CarouselItem key={image.id + 10}>
                  <Card>
                    <CardContent className="p-0">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-[300px] md:h-[500px] object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
            title="Prakruthi Home Stay Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
