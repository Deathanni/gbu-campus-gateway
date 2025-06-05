
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      title: "Annual Convocation 2024",
      photos: 150,
      description: "Graduation ceremony celebrating academic achievements of our students",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop"
      ]
    },
    {
      title: "Tech Fest 2024",
      photos: 200,
      description: "Innovation showcase featuring student projects and industry exhibitions",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
      ]
    },
    {
      title: "Cultural Festival",
      photos: 175,
      description: "Vibrant celebration of arts, music, and cultural diversity",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop"
      ]
    }
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Campus Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the vibrant life at GBU through our photo gallery showcasing memorable moments, 
          events, and the beautiful campus environment.
        </p>
        
        <Card className="max-w-7xl mx-auto overflow-hidden shadow-2xl">
          <CardContent className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Event Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">
                    {events[currentEvent].title}
                  </h3>
                  <div className="flex items-center space-x-6 mb-6">
                    <span className="bg-gradient-to-r from-gbu-green to-gbu-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                      {events[currentEvent].photos} Photos
                    </span>
                    <span className="text-gray-500 font-medium">Latest Event</span>
                  </div>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {events[currentEvent].description}
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={prevEvent} 
                    variant="outline" 
                    className="flex-1 py-3 text-lg border-gbu-blue text-gbu-blue hover:bg-gbu-blue hover:text-white"
                  >
                    Previous Event
                  </Button>
                  <Button 
                    onClick={nextEvent} 
                    className="flex-1 py-3 text-lg bg-gradient-to-r from-gbu-green to-gbu-blue hover:from-gbu-light-green hover:to-gbu-light-blue text-white"
                  >
                    Next Event
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full py-3 text-lg">
                    View All Gallery
                  </Button>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-1 gap-6">
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img 
                    src={events[currentEvent].images[0]} 
                    alt={`${events[currentEvent].title} main`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="font-bold text-lg">Featured Photo</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {events[currentEvent].images.slice(1).map((image, index) => (
                    <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${events[currentEvent].title} ${index + 2}`}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;
