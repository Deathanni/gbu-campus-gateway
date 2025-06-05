
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">University Leadership</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Chancellor */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                  alt="Chancellor" 
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-gbu-orange"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Hon'ble CM Yogi Adityanath</h3>
                <p className="text-gbu-orange font-semibold mb-4">Chancellor</p>
                <blockquote className="text-gray-600 italic leading-relaxed">
                  "Education is the most powerful weapon to change the world. GBU stands committed 
                  to providing world-class education and fostering innovation for a better tomorrow."
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Vice Chancellor */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                  alt="Vice Chancellor" 
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-gbu-blue"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Prof. Dr. Aseem Chauhan</h3>
                <p className="text-gbu-blue font-semibold mb-4">Vice Chancellor</p>
                <blockquote className="text-gray-600 italic leading-relaxed">
                  "At GBU, we believe in nurturing not just academic excellence but also character 
                  and values that make our students responsible global citizens."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
