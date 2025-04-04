
import React from 'react';
import { MapPin, Navigation, Building, Car, Train, BookOpen } from 'lucide-react';

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="bg-prakruthi-lightGray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Location Advantages</h2>
        
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Adjacent to <span className="highlight4">ORR of Hyderabad</span> exit no 7 on Karimnagar highway.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>1 km from <span className="highlight4">Shamirpet Lake</span> with a beautiful lake view.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Building className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Near prestigious institutions: <span className="highlight4">BITS Pilani Hyderabad</span> & <span className="highlight4">NALSAR University</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Building className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>10 km from <span className="highlight4">Genome Valley</span>, world-famous vaccine centers.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Building className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Close to <span className="highlight4">ICICI Knowledge Park</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <BookOpen className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>20 km from <span className="highlight4">Saraswati Temple, Wargal</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Car className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>45 min traffic-free travel to <span className="highlight4">Rajiv Gandhi International Airport</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Train className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>20 km from <span className="highlight4">Secunderabad Railway Station</span>.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdvantagesSection;
