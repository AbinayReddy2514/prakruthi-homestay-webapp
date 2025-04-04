
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
        
        {/* Using a placeholder video since we don't have the actual video */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
            title="Prakruthi Home Stay"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
