
import React from 'react';
import { Home, Wifi, ParkingSquare, Shield, Hotel, Dumbbell, Activity, Droplet } from 'lucide-react';

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="bg-prakruthi-lightGray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Facilities</h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="facility-item">
            <Home className="facility-icon" />
            <span><span className="highlight2">2-bedroom A/C</span>, hall, dining, kitchen, and 3 washrooms.</span>
          </div>
          
          <div className="facility-item">
            <Dumbbell className="facility-icon" />
            <span>Children's <span className="highlight2">play area</span>.</span>
          </div>
          
          <div className="facility-item">
            <Activity className="facility-icon" />
            <span>Outdoor <span className="highlight2">badminton court</span> & lawn.</span>
          </div>
          
          <div className="facility-item">
            <Droplet className="facility-icon" />
            <span>Paid <span className="highlight2">swimming pool</span> & indoor/outdoor games available.</span>
          </div>
          
          <div className="facility-item">
            <Hotel className="facility-icon" />
            <span>Nearby <span className="highlight2">3-star hotel</span>.</span>
          </div>
          
          <div className="facility-item">
            <Shield className="facility-icon" />
            <span><span className="highlight2">24/7 security</span>.</span>
          </div>
          
          <div className="facility-item">
            <Wifi className="facility-icon" />
            <span>Free parking & <span className="highlight2">Wi-Fi</span>.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
