import React from 'react';

const NewsNotices = () => {
  const newsItems = [
    {
      title: "GBU Receives Excellence Award",
      date: "March 15, 2024",
      excerpt: "University recognized for outstanding contribution to education..."
    },
    {
      title: "New Research Center Inaugurated",
      date: "March 10, 2024",
      excerpt: "State-of-the-art AI research center opens with advanced facilities..."
    },
    {
      title: "International Conference on Technology",
      date: "March 5, 2024",
      excerpt: "Leading experts gather to discuss emerging technologies..."
    },
    {
      title: "New Student Exchange Program",
      date: "March 2, 2024",
      excerpt: "MoU signed with foreign universities for student mobility..."
    }
  ];

  const notices = [
    {
      title: "Admission Notice 2024-25",
      date: "March 20, 2024",
      excerpt: "Applications open for undergraduate and postgraduate programs..."
    },
    {
      title: "Examination Schedule Released",
      date: "March 18, 2024",
      excerpt: "End semester examination dates announced for all courses..."
    },
    {
      title: "Holiday Notice",
      date: "March 15, 2024",
      excerpt: "University will remain closed on account of Holi festival..."
    },
    {
      title: "Fee Payment Deadline",
      date: "March 12, 2024",
      excerpt: "Last date for fee submission extended till March 20..."
    }
  ];

  const events = [
    {
      title: "Annual Cultural Fest",
      date: "April 5–7, 2024",
      excerpt: "Three-day cultural extravaganza featuring music, dance, and drama..."
    },
    {
      title: "Tech Symposium 2024",
      date: "April 12, 2024",
      excerpt: "Industry experts share insights on latest technological trends..."
    },
    {
      title: "Career Fair",
      date: "April 20, 2024",
      excerpt: "Leading companies participate in campus recruitment drive..."
    },
    {
      title: "Research Paper Workshop",
      date: "April 25, 2024",
      excerpt: "Hands-on session for academic writing and publishing..."
    }
  ];

  const sections = [
    {
      title: "Latest News",
      items: newsItems,
      gradient: "bg-gradient-to-r from-blue-700 to-green-500"
    },
    {
      title: "Notices",
      items: notices,
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      title: "Academic Events",
      items: events,
      gradient: "bg-gradient-to-r from-green-600 to-blue-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
              style={{ height: '420px' }}
            >
              {/* Header */}
              <div className={`${section.gradient} text-white text-lg font-semibold px-4 py-3`}>
                {section.title}
              </div>

              {/* Scrollable Content Area */}
              <div className="p-4 overflow-y-auto flex-1">
                {section.items.map((item, i) => (
                  <div key={i} className="mb-4 border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-blue-700 hover:underline cursor-pointer">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <p className="text-gray-700 text-sm">{item.excerpt}</p>
                  </div>
                ))}
              </div>

              {/* Footer Link */}
              <div className="bg-gray-100 text-center py-3">
                <a
                  href="#"
                  className="text-blue-700 font-medium hover:underline"
                >
                  View All {section.title.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsNotices;
