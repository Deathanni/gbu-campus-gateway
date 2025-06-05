
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
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop"
      ]
    },
    {
      title: "Tech Fest 2024",
      photos: 200,
      description: "Innovation showcase featuring student projects and industry exhibitions",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop"
      ]
    },
    {
      title: "Cultural Festival",
      photos: 175,
      description: "Vibrant celebration of arts, music, and cultural diversity",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&h=200&fit=crop"
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Campus Gallery</h2>
        
        <Card className="max-w-6xl mx-auto overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Event Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {events[currentEvent].title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gbu-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {events[currentEvent].photos} Photos
                    </span>
                    <span className="text-gray-500">Latest Event</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {events[currentEvent].description}
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <Button onClick={prevEvent} variant="outline" className="flex-1">
                    Previous Event
                  </Button>
                  <Button onClick={nextEvent} className="flex-1 bg-gbu-green hover:bg-gbu-light-green">
                    Next Event
                  </Button>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {events[currentEvent].images.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img 
                      src={image} 
                      alt={`${events[currentEvent].title} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;
