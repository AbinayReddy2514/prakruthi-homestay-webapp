
import React from 'react';
import { Home, Wifi, ParkingSquare, Shield, Hotel, Dumbbell, Tennis, Droplet } from 'lucide-react';

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="bg-prakruthi-lightGray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Facilities</h2>
        
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li className="flex items-start gap-3">
            <Home className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span><span className="highlight2">2-bedroom A/C</span>, hall, dining, kitchen, and 3 washrooms.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Dumbbell className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Children's <span className="highlight2">play area</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Tennis className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Outdoor <span className="highlight2">badminton court</span> & lawn.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Droplet className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Paid <span className="highlight2">swimming pool</span> & indoor/outdoor games available.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Hotel className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Nearby <span className="highlight2">3-star hotel</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span><span className="highlight2">24/7 security</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Wifi className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Free parking & <span className="highlight2">Wi-Fi</span>.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FacilitiesSection;
