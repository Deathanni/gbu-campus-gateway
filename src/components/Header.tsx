
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Secondary Navbar */}
      <div className="bg-gradient-to-r from-gbu-green to-gbu-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Tenders</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Recruitments</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Booking</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">RTI</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Sitemap</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Online Fee Payment</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Student Portal</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Employee Login</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Directory</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navbar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=80&h=80&fit=crop&crop=center" 
                alt="GBU Logo" 
                className="h-16 w-16 rounded-full mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold gradient-text">Gautam Buddha University</h1>
                <p className="text-sm text-gray-600">Greater Noida, Uttar Pradesh</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Academics</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Research</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Campus Life</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Announcements</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Placements</a>
              <a href="#" className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">Alumni</a>
            </nav>

            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <Input 
                    placeholder="Search..." 
                    className="border-0 bg-transparent focus:ring-0 w-64"
                  />
                  <Search className="h-5 w-5 text-gray-500 ml-2" />
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gbu-blue hover:text-gbu-green"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
