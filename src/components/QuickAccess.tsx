
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const QuickAccess = () => {
  const quickAccessItems = [
    {
      title: "Schools",
      icon: "🏫",
      description: "Explore our academic schools",
      color: "bg-gbu-green"
    },
    {
      title: "Fees",
      icon: "💳",
      description: "Fee structure and payment",
      color: "bg-gbu-blue"
    },
    {
      title: "Placements",
      icon: "🎯",
      description: "Career opportunities",
      color: "bg-gbu-orange"
    },
    {
      title: "Courses Offered",
      icon: "📚",
      description: "Academic programs",
      color: "bg-gbu-green"
    },
    {
      title: "Infrastructure",
      icon: "🏗️",
      description: "Campus facilities",
      color: "bg-gbu-blue"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {quickAccessItems.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
