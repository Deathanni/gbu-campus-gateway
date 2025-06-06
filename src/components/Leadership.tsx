import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading centered with no underline */}
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Visionary Leadership
        </h2>

        {/* Two cards in one row on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Chancellor */}
          <Card className="flex flex-col lg:flex-row items-center p-6 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Chancellor" 
              className="w-full lg:w-1/3 h-auto rounded-t lg:rounded-l lg:rounded-tr-none object-cover"
            />
            <CardContent className="lg:w-2/3 p-6 text-left">
              <h3 className="text-xl font-bold text-blue-800">Yogi Adityanath</h3>
              <p className="text-gray-500 font-semibold mb-2">Hon'ble Chancellor</p>
              <p className="text-gray-700">
                "A visionary leader guiding GBU with focus on holistic development and academic excellence."
              </p>
            </CardContent>
          </Card>

          {/* Vice Chancellor */}
          <Card className="flex flex-col lg:flex-row items-center p-6 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
              alt="Vice Chancellor" 
              className="w-full lg:w-1/3 h-auto rounded-t lg:rounded-l lg:rounded-tr-none object-cover"
            />
            <CardContent className="lg:w-2/3 p-6 text-left">
              <h3 className="text-xl font-bold text-blue-800">Dr. Rana P. Singh</h3>
              <p className="text-gray-500 font-semibold mb-2">Hon'ble Vice-Chancellor</p>
              <p className="text-gray-700">
                "Over 20+ years of academic leadership. Key research areas: Stem Cells, Tumor Biology, Dosha balance, Microgravity biology."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
