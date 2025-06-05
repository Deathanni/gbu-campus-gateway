
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Statistics = () => {
  const [counters, setCounters] = useState({
    students: 0,
    programs: 0,
    faculty: 0,
    campus: 0,
    placements: 0
  });

  const targetValues = {
    students: 8000,
    programs: 120,
    faculty: 400,
    campus: 511,
    placements: 95
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    const intervals = Object.keys(targetValues).map(key => {
      const targetValue = targetValues[key as keyof typeof targetValues];
      const stepValue = targetValue / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    // Clear all intervals after the animation duration
    const clearAllIntervals = setTimeout(() => {
      intervals.forEach(interval => clearInterval(interval));
    }, duration);

    return () => {
      intervals.forEach(interval => clearInterval(interval));
      clearTimeout(clearAllIntervals);
    };
  }, []);

  const statistics = [{
    value: counters.students,
    label: "Students",
    suffix: "+",
  }, {
    value: counters.programs,
    label: "Programs",
    suffix: "+",
  }, {
    value: counters.faculty,
    label: "Faculty Members",
    suffix: "+",
  }, {
    value: counters.campus,
    label: "Acres Campus",
    suffix: "",
  }, {
    value: counters.placements,
    label: "Placement Rate",
    suffix: "%",
  }];

  return (
    <section className="py-16 gradient-gbu text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">GBU at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statistics.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
