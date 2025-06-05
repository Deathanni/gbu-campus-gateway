
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VirtualTour = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">GBU in 360°</h2>
        
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="aspect-video bg-gradient-to-br from-gbu-green to-gbu-blue flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Virtual Campus Tour</h3>
                <p className="text-lg mb-6 opacity-90">Experience our beautiful campus from anywhere in the world</p>
                <Button 
                  className="bg-white text-gbu-blue hover:bg-gray-100 font-semibold px-8 py-3"
                  size="lg"
                >
                  Start Virtual Tour
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Take an immersive 360-degree tour of our state-of-the-art facilities, 
            beautiful campus grounds, and modern infrastructure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-gbu-green/10 rounded-full p-4 mb-2 inline-block">
                <span className="text-2xl">🏛️</span>
              </div>
              <span className="text-sm text-gray-600">Academic Buildings</span>
            </div>
            <div className="text-center">
              <div className="bg-gbu-blue/10 rounded-full p-4 mb-2 inline-block">
                <span className="text-2xl">🔬</span>
              </div>
              <span className="text-sm text-gray-600">Research Labs</span>
            </div>
            <div className="text-center">
              <div className="bg-gbu-orange/10 rounded-full p-4 mb-2 inline-block">
                <span className="text-2xl">🏠</span>
              </div>
              <span className="text-sm text-gray-600">Hostels</span>
            </div>
            <div className="text-center">
              <div className="bg-gbu-green/10 rounded-full p-4 mb-2 inline-block">
                <span className="text-2xl">🌳</span>
              </div>
              <span className="text-sm text-gray-600">Green Spaces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
