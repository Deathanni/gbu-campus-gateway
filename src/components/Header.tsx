import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, FileSignature, Microscope, University, Briefcase, Users, Phone, User, CreditCard, Info, Camera, Megaphone, ChevronRight } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
  const schoolsAndDepartments = {
    "School of Engineering & Technology": ["Computer Science & Engineering", "Artificial Intelligence", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering"],
    "School of Management": ["MBA Programs", "Executive Programs", "Research Programs"],
    "School of Law": ["LLB Programs", "LLM Programs", "Legal Research"],
    "School of Applied Sciences": ["Physics", "Chemistry", "Mathematics", "Statistics"],
    "School of Languages": ["English Studies", "Hindi Studies", "Foreign Languages"],
    "School of Humanities & Social Sciences": ["Psychology", "Political Science", "Sociology"],
    "School of Education": ["B.Ed Programs", "M.Ed Programs", "Teacher Training"],
    "School of Buddhist Studies & Civilization": ["Buddhist Philosophy", "Buddhist Literature", "Cultural Studies"],
    "School of Biotechnology": ["Biotechnology Programs", "Bioinformatics", "Research Programs"]
  };
  

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
  return <header className="w-full">
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
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img alt="GBU Logo" src="/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png" className="h-12 w-25 mr-3" />
              <div>
                
                
              </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {aboutUsItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      Academics
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] bg-white">
                      {academicsItems.map(item => <DropdownMenuItem key={item.title}>
                          <a href={item.href} className="w-full">{item.title}</a>
                        </DropdownMenuItem>)}
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <span>Schools & Departments</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-[300px] bg-white">
                          {Object.entries(schoolsAndDepartments).map(([school, departments]) => <DropdownMenuSub key={school}>
                              <DropdownMenuSubTrigger>
                                <span className="text-sm">{school}</span>
                              </DropdownMenuSubTrigger>
                              <DropdownMenuSubContent className="w-[250px] bg-white">
                                {departments.map(dept => <DropdownMenuItem key={dept}>
                                    <a href="#" className="w-full text-sm">{dept}</a>
                                  </DropdownMenuItem>)}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>)}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <FileSignature className="h-4 w-4 mr-1" />
                    Admissions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {admissionsItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <Microscope className="h-4 w-4 mr-1" />
                    Research
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {researchItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <University className="h-4 w-4 mr-1" />
                    Campus Life
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {campusLifeItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <Camera className="h-4 w-4 mr-1" />
                    Announcements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {announcementsItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Placements
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {placementsItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gbu-blue font-medium transition-colors text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    Alumni
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4 bg-white">
                      {alumniItems.map(item => <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a className={cn("block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")} href={item.href}>
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>)}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <Input placeholder="Search..." className="border-0 bg-transparent focus:ring-0 w-64" />
                  <Search className="h-5 w-5 text-gray-500 ml-2" />
                </div> : <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)} className="text-gbu-blue hover:text-gbu-green">
                  <Search className="h-5 w-5" />
                </Button>}
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;