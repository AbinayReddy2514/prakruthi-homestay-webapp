
import React from 'react';
import { AlertTriangle, Clock, ShieldAlert, UserCheck, Trash2, VolumeX, Sofa, Ban, Heart } from 'lucide-react';

const RulesSection = () => {
  return (
    <section id="rules" className="bg-prakruthi-gray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Terms and Conditions</h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="rule-item">
            <UserCheck className="rule-icon" />
            <span><span className="highlight4">ID proofs</span> are required for all guests at check-in.</span>
          </div>
          
          <div className="rule-item">
            <Clock className="rule-icon" />
            <span>Please respect <span className="highlight4">check-in time 11:30 a.m and check-out time 10:00 a.m</span>.</span>
          </div>
          
          <div className="rule-item">
            <AlertTriangle className="rule-icon" />
            <span>Any material <span className="highlight">damage</span> by the guest will be <span className="highlight4">charged</span>.</span>
          </div>
          
          <div className="rule-item">
            <ShieldAlert className="rule-icon" />
            <span>No parties or events are allowed without <span className="highlight4">prior permission</span>.</span>
          </div>
          
          <div className="rule-item">
            <AlertTriangle className="rule-icon" />
            <span>Please <span className="highlight4">switch off</span> all the electricity points when not in use.</span>
          </div>
          
          <div className="rule-item">
            <Trash2 className="rule-icon" />
            <span>Please keep the room <span className="highlight2">clean, tidy</span> and <span className="highlight2">hygienic.</span></span>
          </div>
          
          <div className="rule-item">
            <VolumeX className="rule-icon" />
            <span>Please <span className="highlight">do not</span> make any noise pollution.</span>
          </div>
          
          <div className="rule-item">
            <AlertTriangle className="rule-icon" />
            <span>Please keep the items back after <span className="highlight4">usage.</span></span>
          </div>
          
          <div className="rule-item">
            <Sofa className="rule-icon" />
            <span>Please <span className="highlight">do not</span> eat on the bed and keep the couch clean.</span>
          </div>
          
          <div className="rule-item">
            <Trash2 className="rule-icon" />
            <span>Please dispose your garbage in the <span className="highlight2">trash cans</span> provided.</span>
          </div>
          
          <div className="rule-item">
            <Ban className="rule-icon" />
            <span>No <span className="highlight">illegal</span> activities are allowed.</span>
          </div>
          
          <div className="rule-item">
            <Heart className="rule-icon" />
            <span>Please <span className="highlight4">respect</span> the property, the neighbours and security at all times.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
