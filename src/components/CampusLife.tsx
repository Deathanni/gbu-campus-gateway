import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CampusLife = () => {
  const campusHighlights = [
    {
      category: "Student Life",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      quote: "GBU has given me opportunities to grow both academically and personally. The diverse community here is amazing!",
      author: "Priya Sharma, B.Tech CSE"
    },
    {
      category: "Sports & Recreation",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      quote: "The sports facilities at GBU are world-class. Being part of the cricket team has been an incredible journey.",
      author: "Rahul Kumar, M.Sc Physics"
    },
    {
      category: "Cultural Activities",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      quote: "The cultural festivals here bring out the best in everyone. It's a celebration of diversity and talent.",
      author: "Ananya Gupta, MBA"
    },
    {
      category: "Hostel Life",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      quote: "Living on campus has been an enriching experience. The friendships I've made here will last a lifetime.",
      author: "Vikash Yadav, B.Com"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Campus Life at GBU</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Experience a vibrant campus life filled with learning, growth, and unforgettable memories. 
          Our diverse community of students creates an environment where everyone can thrive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campusHighlights.map((highlight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={highlight.image} 
                  alt={highlight.category}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gbu-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {highlight.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <blockquote className="text-gray-700 italic text-lg mb-4 leading-relaxed">
                  "{highlight.quote}"
                </blockquote>
                <cite className="text-gbu-blue font-semibold">— {highlight.author}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
