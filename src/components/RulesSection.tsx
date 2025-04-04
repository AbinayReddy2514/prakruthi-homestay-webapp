
import React from 'react';
import { ClipboardCheck, Clock, AlertTriangle, Ban, ToggleLeft, Trash2, Volume2, Flame, Bed } from 'lucide-react';

const RulesSection = () => {
  return (
    <section id="rules" className="bg-prakruthi-lightGray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Terms and Conditions</h2>
        
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li className="flex items-start gap-3">
            <ClipboardCheck className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span><span className="highlight4">ID proofs</span> are required for all guests at check-in.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Clock className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please respect <span className="highlight4">check-in time 11.30 a.m and check-out time 10:00 a.m</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-prakruthi-darkRed flex-shrink-0 mt-1" />
            <span>Any material <span className="highlight">damage</span> by the guest will be <span className="highlight4">charged</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Ban className="h-6 w-6 text-prakruthi-darkRed flex-shrink-0 mt-1" />
            <span>No parties or events are allowed without <span className="highlight4">prior permission</span>.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <ToggleLeft className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please <span className="highlight4">switch off</span> all the electricity points when not in use.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Trash2 className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please keep the room <span className="highlight2">clean, tidy</span> and <span className="highlight2">hygienic.</span></span>
          </li>
          
          <li className="flex items-start gap-3">
            <Volume2 className="h-6 w-6 text-prakruthi-darkRed flex-shrink-0 mt-1" />
            <span>Please <span className="highlight">do not</span> make any noise pollution.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <ClipboardCheck className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please keep the items back after <span className="highlight4">usage.</span></span>
          </li>
          
          <li className="flex items-start gap-3">
            <Bed className="h-6 w-6 text-prakruthi-darkRed flex-shrink-0 mt-1" />
            <span>Please <span className="highlight">do not</span> eat on the bed and keep the couch clean.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Trash2 className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please dispose your garbage in the <span className="highlight2">trash cans</span> provided.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <Flame className="h-6 w-6 text-prakruthi-darkRed flex-shrink-0 mt-1" />
            <span>No <span className="highlight">illegal</span> activities are allowed.</span>
          </li>
          
          <li className="flex items-start gap-3">
            <ClipboardCheck className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
            <span>Please <span className="highlight4">respect</span> the property, the neighbours and security at all times.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RulesSection;
