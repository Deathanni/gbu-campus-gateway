
import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-gbu-blue text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-8 text-lg font-medium">
          📢 New admissions open for 2024-25 academic session | 
          🎓 Convocation ceremony scheduled for March 2024 | 
          🔬 Research grant applications deadline extended | 
          📚 Library renovation completed with state-of-the-art facilities | 
          🏆 GBU ranked among top universities in India
        </span>
      </div>
    </div>
  );
};

export default Marquee;
