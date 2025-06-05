
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const TabbedSection = () => {
  const centersData = [
    {
      title: "Artificial Intelligence Center",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      description: "Cutting-edge research in machine learning, deep learning, and AI applications across various domains."
    },
    {
      title: "Drone Technology Hub",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=250&fit=crop",
      description: "Advanced drone research facility focusing on autonomous systems and aerial robotics."
    },
    {
      title: "Cybersecurity Institute",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      description: "State-of-the-art cybersecurity research and training center for digital security solutions."
    }
  ];

  const labsData = [
    {
      title: "Computer Science Labs",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      description: "Modern computing facilities with latest hardware and software for programming and development."
    },
    {
      title: "Physics Research Lab",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
      description: "Advanced physics laboratory equipped with precision instruments for research and experimentation."
    },
    {
      title: "Chemistry Laboratory",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
      description: "Well-equipped chemistry labs for analytical, organic, and inorganic chemistry research."
    }
  ];

  const infrastructureData = [
    {
      title: "Academic Block",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
      description: "Modern academic buildings with smart classrooms and lecture halls."
    },
    {
      title: "Library Complex",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      description: "Expansive library with digital resources and quiet study spaces."
    },
    {
      title: "Sports Complex",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      description: "Multi-purpose sports facilities including indoor and outdoor venues."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Excellence in Education</h2>
        
        <Tabs defaultValue="centers" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="centers" className="text-lg">Centers of Excellence</TabsTrigger>
            <TabsTrigger value="labs" className="text-lg">Research Labs</TabsTrigger>
            <TabsTrigger value="infrastructure" className="text-lg">Infrastructure</TabsTrigger>
          </TabsList>
          
          <TabsContent value="centers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {centersData.map((center, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={center.image} 
                      alt={center.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{center.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{center.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="labs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {labsData.map((lab, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={lab.image} 
                      alt={lab.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{lab.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{lab.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="infrastructure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructureData.map((infra, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={infra.image} 
                      alt={infra.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{infra.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{infra.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabbedSection;
