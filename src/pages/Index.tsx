
import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Marquee from '@/components/Marquee';
import QuickAccess from '@/components/QuickAccess';
import AboutGBU from '@/components/AboutGBU';
import Statistics from '@/components/Statistics';
import Leadership from '@/components/Leadership';
import NewsNotices from '@/components/NewsNotices';
import Gallery from '@/components/Gallery';
import TabbedSection from '@/components/TabbedSection';
import CampusLife from '@/components/CampusLife';
import VirtualTour from '@/components/VirtualTour';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Marquee />
      <QuickAccess />
      <AboutGBU />
      <Statistics />
      <Leadership />
      <NewsNotices />
      <Gallery />
      <TabbedSection />
      <CampusLife />
      <VirtualTour />
      <Footer />
    </div>
  );
};

export default Index;
