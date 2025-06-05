import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  GraduationCap, 
  FileSignature, 
  Microscope, 
  University, 
  Briefcase, 
  Users, 
  Phone, 
  User, 
  CreditCard, 
  Info,
  Camera,
  Megaphone
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const aboutUsItems = [
    { title: "Vision & Mission", href: "#" },
    { title: "Chancellor's Message", href: "#" },
    { title: "Vice-Chancellor's Message", href: "#" },
    { title: "Governance & Committees", href: "#" },
    { title: "GBU Strategic Perspective", href: "#" },
    { title: "Policies, Statutes & RTI", href: "#" },
    { title: "Mandatory Disclosures", href: "#" },
    { title: "Media Coverage", href: "#" },
  ];

  const academicsItems = [
    { title: "Academic Calendar & Regulations", href: "#" },
    { title: "News, Events and Gallery", href: "#" },
    { title: "CBCS Curriculum Framework", href: "#" },
    { title: "Schools & Departments", href: "#" },
    { title: "Faculty Directory", href: "#" },
    { title: "Centers of Excellence", href: "#" },
    { title: "International Collaboration", href: "#" },
    { title: "Reports & Publications", href: "#" },
  ];

  const admissionsItems = [
    { title: "Admission Process", href: "#" },
    { title: "Courses Offered (UG | PG | PhD)", href: "#" },
    { title: "Eligibility & Reservation", href: "#" },
    { title: "Fee Structure & Prospectus", href: "#" },
    { title: "International Admissions", href: "#" },
  ];

  const researchItems = [
    { title: "Research Highlights & Achievements", href: "#" },
    { title: "Research Centers & Labs", href: "#" },
    { title: "Publications & Patents", href: "#" },
    { title: "Innovation & Incubation", href: "#" },
    { title: "StartUP", href: "#" },
    { title: "Funded Projects", href: "#" },
    { title: "IPR Cell", href: "#" },
  ];

  const campusLifeItems = [
    { title: "Virtual Tour", href: "#" },
    { title: "Student Clubs & Councils", href: "#" },
    { title: "NSS and NCC", href: "#" },
    { title: "Hostel, Mess, and Dining", href: "#" },
    { title: "Sports & Cultural Activities", href: "#" },
    { title: "Meditation Center", href: "#" },
    { title: "Health & Wellness", href: "#" },
  ];

  const announcementsItems = [
    { title: "News & Notifications", href: "#" },
    { title: "Events Calendar", href: "#" },
    { title: "Photo Gallery", href: "#" },
    { title: "Media Coverage", href: "#" },
    { title: "Student Achievements", href: "#" },
    { title: "Faculty & Research Highlights", href: "#" },
  ];

  const placementsItems = [
    { title: "Placement Brochure", href: "#" },
    { title: "Campus Recruiters", href: "#" },
    { title: "Placement Statistics", href: "#" },
    { title: "Internship Programmes", href: "#" },
    { title: "Training & Career Services", href: "#" },
  ];

  const alumniItems = [
    { title: "Alumni Network", href: "#" },
    { title: "Registration & Directory", href: "#" },
    { title: "Alumni Talks", href: "#" },
    { title: "Events & Reunions", href: "#" },
  ];

  return (
    <header className="w-full">
      {/* Secondary Navbar */}
      <div className="bg-gradient-to-r from-gbu-green to-gbu-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Tenders
              </a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
                <Megaphone className="h-3 w-3" />
                Recruitments
              </a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Booking</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
                <Info className="h-3 w-3" />
                RTI
              </a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Sitemap</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Online Fee Payment
              </a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
                <User className="h-3 w-3" />
                Student Portal
              </a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Employee Login</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors">Directory</a>
              <a href="#" className="hover:text-gbu-light-orange transition-colors flex items-center gap-1">
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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <Users className="h-4 w-4 mr-1" />
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {aboutUsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Academics
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {academicsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <FileSignature className="h-4 w-4 mr-1" />
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {admissionsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <Microscope className="h-4 w-4 mr-1" />
                    Research
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {researchItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <University className="h-4 w-4 mr-1" />
                    Campus Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {campusLifeItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <Camera className="h-4 w-4 mr-1" />
                    Announcements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {announcementsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Placements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {placementsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors">
                    <Users className="h-4 w-4 mr-1" />
                    Alumni
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {alumniItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
