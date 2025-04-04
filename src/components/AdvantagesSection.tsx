
import React from 'react';
import { MapPin, Navigation, Building, Briefcase, School, Clock, Plane, Train } from 'lucide-react';

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="bg-white animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Location Advantages</h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="facility-item">
            <Navigation className="facility-icon" />
            <span>Adjacent to <span className="highlight4">ORR of Hyderabad</span> exit no 7 on Karimnagar highway.</span>
          </div>
          
          <div className="facility-item">
            <MapPin className="facility-icon" />
            <span>1 km from <span className="highlight4">Shamirpet Lake</span> with a beautiful lake view.</span>
          </div>
          
          <div className="facility-item">
            <School className="facility-icon" />
            <span>Near prestigious institutions: <span className="highlight4">BITS Pilani Hyderabad</span> & <span className="highlight4">NALSAR University</span>.</span>
          </div>
          
          <div className="facility-item">
            <Briefcase className="facility-icon" />
            <span>10 km from <span className="highlight4">Genome Valley</span>, world-famous vaccine centers.</span>
          </div>
          
          <div className="facility-item">
            <Building className="facility-icon" />
            <span>Close to <span className="highlight4">ICICI Knowledge Park</span>.</span>
          </div>
          
          <div className="facility-item">
            <MapPin className="facility-icon" />
            <span>20 km from <span className="highlight4">Saraswati Temple, Wargal</span>.</span>
          </div>
          
          <div className="facility-item">
            <Plane className="facility-icon" />
            <span>45 min traffic-free travel to <span className="highlight4">Rajiv Gandhi International Airport</span>.</span>
          </div>
          
          <div className="facility-item">
            <Train className="facility-icon" />
            <span>20 km from <span className="highlight4">Secunderabad Railway Station</span>.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
