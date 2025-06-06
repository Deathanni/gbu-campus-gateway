import React from 'react';

const Gallery = () => {
  const events = [
    {
      title: "Annual Convocation 2024",
      date: "April 25, 2024",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop"
      ]
    },
    {
      title: "Tech Fest 2024",
      date: "March 12, 2024",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
      ]
    },
    {
      title: "Cultural Festival",
      date: "February 20, 2024",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop"
      ]
    }
  ];

  // Flatten all images with their event info
  const allImages = events.flatMap(event =>
    event.images.map((url, idx) => ({
      url,
      title: event.title,
      date: event.date,
      key: `${event.title}-${idx}`
    }))
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Campus Gallery</h2>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-2">
            {allImages.map((img) => (
              <div
                key={img.key}
                className="relative flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-semibold">{img.title}</p>
                  <span className="text-white text-xs">{img.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
