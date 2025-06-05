import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/6091f9a4-f7b1-4b7d-a7d1-a9fa681b464b.png" 
                alt="GBU Logo" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-lg font-bold">Gautam Buddha University</h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Gautam Buddha University, Greater Noida, is committed to providing world-class 
              education and fostering innovation for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gbu-light-blue transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-gbu-light-blue transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-gbu-light-blue transition-colors">📷</a>
              <a href="#" className="text-gray-400 hover:text-gbu-light-blue transition-colors">💼</a>
              <a href="#" className="text-gray-400 hover:text-gbu-light-blue transition-colors">📺</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">About GBU</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Academic Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Campus Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Placements</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Important Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Faculty Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Online Fee Payment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Examination</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gbu-light-orange transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-300">
                <span className="font-medium">Address:</span><br />
                Gautam Buddha University<br />
                Greater Noida, Uttar Pradesh<br />
                PIN: 201312
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span> +91-120-234-4000
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email:</span> info@gbu.ac.in
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Subscribe to Newsletter</h5>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none"
                />
                <Button className="bg-gbu-orange hover:bg-gbu-light-orange rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Gautam Buddha University. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
