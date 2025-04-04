
import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="bg-prakruthi-gray animate-fade-in">
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Welcome to Prakruthi Home Stay, Shamirpet, Hyderabad
        </h1>
        <p className="text-xl mb-8">
          <span className="highlight">Experience a</span> <span className="highlight2">Relaxing Stay</span> <span className="highlight">Surrounded by Nature</span>
        </p>
        
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <video 
            className="w-full h-auto" 
            autoPlay 
            muted 
            loop 
            playsInline
            controls
          >
            <source src="/videos/videoh2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
