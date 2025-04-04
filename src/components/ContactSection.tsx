
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-prakruthi-gray animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p>Survey No.1222, ORR Circle, Karimnagar Highway Shamirpet, Medchal, Hyderabad, Telangana 500078, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>info@prakruthihomestay.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ExternalLink className="h-6 w-6 text-prakruthi-darkGreen flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <Button 
                      variant="link" 
                      className="p-0 text-prakruthi-purple underline"
                      onClick={() => window.open('https://maps.app.goo.gl/xpVfRgmfD3NzJzvw8', '_blank')}
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-full pt-[56.25%] md:pt-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0375605025894!2d78.55!3d17.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMzJzM2LjAiTiA3OMKwMzMnMzAuMCJF!5e0!3m2!1sen!2sin!4v1617174000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Prakruthi Home Stay Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
