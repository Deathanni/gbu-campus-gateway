import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, FileSignature, Microscope, University, Briefcase, Users, Phone, User, CreditCard, Info, Camera, Megaphone, ChevronDown } from 'lucide-react';
// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const aboutUsItems = [{
    title: "Vision & Mission",
    href: "https://gbu-about-us.vercel.app/about/vision-mission"
  }, {
    title: "Chancellor's Message",
    href: "https://gbu-about-us.vercel.app/about/chancellor-message"
  }, {
    title: "Vice-Chancellor's Message",
    href: "https://gbu-about-us.vercel.app/about/vc-message"
  }, {
    title: "Governance & Committees",
    href: "https://gbu-about-us.vercel.app/about/governance"
  }, {
    title: "GBU Strategic Perspective",
    href: "https://gbu-about-us.vercel.app/about/strategic-perspective"
  }, {
    title: "Policies, Statutes & RTI",
    href: "https://gbu-about-us.vercel.app/about/policies"
  }, {
    title: "Mandatory Disclosures",
    href: "https://gbu-about-us.vercel.app/about/disclosures"
  }, {
    title: "Media Coverage",
    href: "https://gbu-about-us.vercel.app/about/disclosures"
  }];

  const academicsItems = [{
    title: "Academic Calendar & Regulations",
    href: "https://buddha-university-portal.lovable.app/academics/calendar"
  }, {
    title: "News, Events and Gallery",
    href: "https://buddha-university-portal.lovable.app/academics/news"
  }, {
    title: "CBCS Curriculum Framework",
    href: "https://buddha-university-portal.lovable.app/academics/cbcs"
  }, {
    title: "Faculty Directory",
    href: "https://buddha-university-portal.lovable.app/academics/faculty"
  }, {
    title: "Centers of Excellence",
    href: "https://buddha-university-portal.lovable.app/academics/centers"
  }, {
    title: "International Collaboration",
    href: "https://buddha-university-portal.lovable.app/academics/collaboration"
  }, {
    title: "Reports & Publications",
    href: "https://buddha-university-portal.lovable.app/academics/reports"
  }];

  const schoolsAndDepartments = [
    {
      title: "School of Engineering",
      href: "https://buddha-university-portal.lovable.app/academics/schools/engineering",
      departments: [
        "Electronical Engineering",
        "Mechanical Engineering",
        "Civil Engineering"
      ],
    },
    {
      title: "School of Management",
      departments: [
        "MBA Programs",
        "BBA Programs",
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/management"
    },
    {
      title: "School of Law",
      departments: [
        "LLB Programs",
        "LLM Programs",
        "Legal Research"
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/law"
    },
    {
      title: "School of Vocational & Applied Sciences",
      departments: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Statistics"
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/vocational"
    },
    {
      title: "School of Humanities & Social Sciences",
      departments: [
        "Psychology",
        "Political Science",
        "Sociology"
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/humanities"
    },
    {
      title: "School of Buddhist Studies & Civilization",
      departments: [
        "Buddhist Philosophy",
        "Buddhist Literature",
        "Cultural Studies"
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/buddhist-studies"
    },
    {
      title: "School of Biotechnology",
      departments: [
        "Biotechnology Programs",
        "Bioinformatics",
        "Research Programs"
      ],
      href: "https://buddha-university-portal.lovable.app/academics/schools/biotechnology"
    }
  ];

  const admissionsItems = [{
    title: "Admission Process",
    href: "https://admissionportal-07.lovable.app/admission-process"
  }, {
    title: "Courses Offered (UG | PG | PhD)",
    href: "https://admissionportal-07.lovable.app/courses-offered"
  }, {
    title: "Eligibility & Reservation",
    href: "https://admissionportal-07.lovable.app/eligibility-reservation"
  }, {
    title: "Fee Structure & Prospectus",
    href: "https://admissionportal-07.lovable.app/fee-structure"
  }, {
    title: "International Admissions",
    href: "https://admissionportal-07.lovable.app/international-admissions"
  }];

  const researchItems = [{
    title: "Research Highlights & Achievements",
    href: "https://campus-research-nexus.lovable.app/research/highlights"
  }, {
    title: "Research Centers & Labs",
    href: "https://campus-research-nexus.lovable.app/research/centers"
  }, {
    title: "Publications & Patents",
    href: "https://campus-research-nexus.lovable.app/research/publications"
  }, {
    title: "Innovation & Incubation",
    href: "https://campus-research-nexus.lovable.app/research/innovations"
  }, {
    title: "StartUP",
    href: "https://campus-research-nexus.lovable.app/research/startup"
  }, {
    title: "Funded Projects & IPR cell",
    href: "https://campus-research-nexus.lovable.app/research/funded-projects"
  }];

  const campusLifeItems = [{
    title: "Virtual Tour",
    href: "https://campus-oasis-portal.lovable.app/campus-life/virtual-tour"
  }, {
    title: "Student Clubs & Councils",
    href: "https://campus-oasis-portal.lovable.app/campus-life/clubs-councils"
  }, {
    title: "NSS and NCC",
    href: "https://campus-oasis-portal.lovable.app/campus-life/nss-ncc"
  }, {
    title: "Hostel, Mess, and Dining",
    href: "https://campus-oasis-portal.lovable.app/campus-life/hostel-dining"
  }, {
    title: "Sports & Cultural Activities",
    href: "http://campus-oasis-portal.lovable.app/campus-life/sports-cultural"
  }, {
    title: "Meditation Center",
    href: "https://campus-oasis-portal.lovable.app/campus-life/meditation"
  }, {
    title: "Health & Wellness",
    href: "https://campus-oasis-portal.lovable.app/campus-life/health-wellness"
  }];

  const announcementsItems = [{
    title: "News & Notifications",
    href: "https://campus-announcements.lovable.app/announcements/news-notifications"
  }, {
    title: "Events Calendar",
    href: "https://campus-announcements.lovable.app/announcements/events-calendar"
  }, {
    title: "Photo Gallery",
    href: "https://campus-announcements.lovable.app/announcements/photo-gallery"
  }, {
    title: "Media Coverage",
    href: "https://campus-announcements.lovable.app/announcements/media-coverage"
  }, {
    title: "Student Achievements",
    href: "https://campus-announcements.lovable.app/announcements/student-achievements"
  }, {
    title: "Faculty & Research Highlights",
    href: "https://campus-announcements.lovable.app/announcements/faculty-research-highlights"
  }];

  const placementsItems = [{
    title: "Placement Brochure",
    href: "https://uni-placement-portal.lovable.app/placement-brochure"
  }, {
    title: "Campus Recruiters",
    href: "https://uni-placement-portal.lovable.app/campus-recruiters"
  }, {
    title: "Placement Statistics",
    href: "https://uni-placement-portal.lovable.app/placement-statistics"
  }, {
    title: "Internship Programmes",
    href: "https://uni-placement-portal.lovable.app/internship-programmes"
  }, {
    title: "Training & Career Services",
    href: "https://uni-placement-portal.lovable.app/training-career-services"
  }];

  const alumniItems = [{
    title: "Alumni Network",
    href: "https://v0-university-alumni-website.vercel.app/alumni/network"
  }, {
    title: "Registration & Directory",
    href: "https://v0-university-alumni-website.vercel.app/alumni/registration"
  }, {
    title: "Alumni Talks",
    href: "https://v0-university-alumni-website.vercel.app/alumni/talks"
  }, {
    title: "Events & Reunions",
    href: "https://v0-university-alumni-website.vercel.app/alumni/events"
  }];

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const DropdownItem = ({ title, icon: Icon, items, hasSubMenu = false, subMenuItems = [] }) => (
    <div 
      className="relative"
      onMouseEnter={() => handleMouseEnter(title)}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm flex items-center px-3 py-2">
        <Icon className="h-4 w-4 mr-2" />
        {title}
        <ChevronDown className="h-3 w-3 ml-1" />
      </button>
      
      {activeDropdown === title && (
        <div className="absolute top-full left-0 mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.title}
              </a>
            ))}
            
            {hasSubMenu && (
              <>
                <hr className="my-2" />
                <div className="relative group">
                  <div className="px-3 py-2 text-sm font-medium text-gray-900 cursor-pointer hover:bg-gray-100 rounded-md">
                    Schools & Departments
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-60">
                    <div className="p-2">
                      {subMenuItems.map((school, schoolIndex) => (
                        <div key={schoolIndex} className="relative group/school">
                          <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md cursor-pointer transition-colors">
                            <span>{school.title}</span>
                            <ChevronDown className="h-3 w-3 transform -rotate-90" />
                          </div>
                          <div className="absolute left-full top-0 ml-1 w-60 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover/school:block z-70">
                            <div className="p-2">
                              <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                Departments
                              </div>
                              {school.departments.map((dept, deptIndex) => (
                                <a
                                  key={deptIndex}
                                  href={school.href}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                >
                                  {dept}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="w-full">
      {/* Secondary Navbar */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Tenders
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Recruitments
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">Booking</a>
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <Info className="h-3 w-3" />
                RTI
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">Sitemap</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Online Fee Payment
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <User className="h-3 w-3" />
                Student Portal
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">Employee Login</a>
              <a href="#" className="hover:text-orange-300 transition-colors">Directory</a>
              <a href="#" className="hover:text-orange-300 transition-colors flex items-center gap-1">
                <Phone className="h-3 w-3" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navbar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                alt="GBU Logo" 
                src="/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png" 
                className="h-12 w-25 mr-3" 
              />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              <DropdownItem
                title="About Us"
                icon={Users}
                items={aboutUsItems}
              />
              
              <DropdownItem
                title="Academics"
                icon={GraduationCap}
                items={academicsItems}
                hasSubMenu={true}
                subMenuItems={schoolsAndDepartments}
              />
              
              <DropdownItem
                title="Admissions"
                icon={FileSignature}
                items={admissionsItems}
              />
              
              <DropdownItem
                title="Research"
                icon={Microscope}
                items={researchItems}
              />
              
              <DropdownItem
                title="Campus Life"
                icon={University}
                items={campusLifeItems}
              />
              
              <DropdownItem
                title="Announcements"
                icon={Camera}
                items={announcementsItems}
              />
              
              <DropdownItem
                title="Placements"
                icon={Briefcase}
                items={placementsItems}
              />
              
              <DropdownItem
                title="Alumni"
                icon={Users}
                items={alumniItems}
              />
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
                  className="text-blue-600 hover:text-green-600"
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