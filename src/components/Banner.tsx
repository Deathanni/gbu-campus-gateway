
import React from 'react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=600&fit=crop&crop=center')`
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-gbu-light-orange">Gautam Buddha University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering minds, shaping futures through excellence in education, research, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gbu-green hover:bg-gbu-light-green text-white px-8 py-3 text-lg">
                Explore Programs
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
