import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VirtualTour = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">GBU in 360°</h2>
        
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
          <CardContent className="p-0 relative">
            <div 
              className="aspect-video bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&crop=center')`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">Virtual Campus Tour</h3>
                  <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto drop-shadow">
                    Experience our beautiful campus from anywhere in the world. Take an immersive journey through our state-of-the-art facilities and stunning architecture.
                  </p>
                  <Button 
                    className="bg-white text-gbu-blue hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    🎥 Start Virtual Tour
                  </Button>
                </div>
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
