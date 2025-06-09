import React from 'react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Assets/7.png')`, // use absolute path with leading slash
        }}

      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-gbu-light-orange">Gautam Buddha University</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering minds, shaping futures through excellence  <br/> in education, research, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gbu-green hover:bg-gbu-light-green text-white px-8 py-3 text-lg">
                Explore Programs
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:text-black px-8 py-3 text-lg bg-text-[#21618C] hover:bg-white"
              >
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
