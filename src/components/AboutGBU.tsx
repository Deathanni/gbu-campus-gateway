
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutGBU = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Gautam Buddha University</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established in 2008, Gautam Buddha University stands as a beacon of academic excellence 
              in the National Capital Region. Named after Lord Buddha, the university embodies the 
              principles of knowledge, wisdom, and enlightenment.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With state-of-the-art infrastructure, world-class faculty, and innovative research 
              programs, GBU is committed to nurturing global citizens who can contribute meaningfully 
              to society and the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gbu-green hover:bg-gbu-light-green text-white px-6 py-3">
                Learn More
              </Button>
              <Button variant="outline" className="border-gbu-blue text-gbu-blue hover:bg-gbu-blue hover:text-white px-6 py-3">
                Our Mission
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&crop=center" 
              alt="GBU Campus" 
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gbu-orange text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGBU;
