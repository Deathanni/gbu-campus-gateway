
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VirtualTour = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">GBU in 360°</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Take a virtual tour of our beautiful campus and explore our state-of-the-art facilities 
          from the comfort of your home.
        </p>
        
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-96 bg-gradient-to-br from-gbu-green/20 to-gbu-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop&crop=center" 
                alt="Campus Virtual Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Explore GBU Campus</h3>
                  <p className="text-lg mb-6 text-gray-200">360° Virtual Campus Tour</p>
                  <Button className="bg-gbu-orange hover:bg-gbu-light-orange text-white px-8 py-3 text-lg">
                    Start Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl mb-4">🏢</div>
              <h4 className="font-bold text-lg mb-2">Academic Buildings</h4>
              <p className="text-gray-600">Modern classrooms and lecture halls</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-bold text-lg mb-2">Student Hostels</h4>
              <p className="text-gray-600">Comfortable accommodation facilities</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl mb-4">🏃</div>
              <h4 className="font-bold text-lg mb-2">Sports Complex</h4>
              <p className="text-gray-600">World-class recreational facilities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
