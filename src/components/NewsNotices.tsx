
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    }
  ];

  const events = [
    {
      title: "Annual Cultural Fest",
      date: "April 5-7, 2024",
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
    }
  ];

  const sections = [
    { title: "News", items: newsItems, color: "border-gbu-green" },
    { title: "Notices", items: notices, color: "border-gbu-blue" },
    { title: "Academic Events", items: events, color: "border-gbu-orange" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Latest Updates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className={`border-t-4 ${section.color} hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-1 hover:text-gbu-blue cursor-pointer transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 border-gbu-blue text-gbu-blue hover:bg-gbu-blue hover:text-white">
                  View All {section.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsNotices;
