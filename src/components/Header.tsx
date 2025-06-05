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
    href: "#"
  }, {
    title: "Chancellor's Message",
    href: "#"
  }, {
    title: "Vice-Chancellor's Message",
    href: "#"
  }, {
    title: "Governance & Committees",
    href: "#"
  }, {
    title: "GBU Strategic Perspective",
    href: "#"
  }, {
    title: "Policies, Statutes & RTI",
    href: "#"
  }, {
    title: "Mandatory Disclosures",
    href: "#"
  }, {
    title: "Media Coverage",
    href: "#"
  }];
  const academicsItems = [{
    title: "Academic Calendar & Regulations",
    href: "#"
  }, {
    title: "News, Events and Gallery",
    href: "#"
  }, {
    title: "CBCS Curriculum Framework",
    href: "#"
  }, {
    title: "Faculty Directory",
    href: "#"
  }, {
    title: "Centers of Excellence",
    href: "#"
  }, {
    title: "International Collaboration",
    href: "#"
  }, {
    title: "Reports & Publications",
    href: "#"
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
    href: "#"
  }, {
    title: "Courses Offered (UG | PG | PhD)",
    href: "#"
  }, {
    title: "Eligibility & Reservation",
    href: "#"
  }, {
    title: "Fee Structure & Prospectus",
    href: "#"
  }, {
    title: "International Admissions",
    href: "#"
  }];
  const researchItems = [{
    title: "Research Highlights & Achievements",
    href: "#"
  }, {
    title: "Research Centers & Labs",
    href: "#"
  }, {
    title: "Publications & Patents",
    href: "#"
  }, {
    title: "Innovation & Incubation",
    href: "#"
  }, {
    title: "StartUP",
    href: "#"
  }, {
    title: "Funded Projects",
    href: "#"
  }, {
    title: "IPR Cell",
    href: "#"
  }];
  const campusLifeItems = [{
    title: "Virtual Tour",
    href: "#"
  }, {
    title: "Student Clubs & Councils",
    href: "#"
  }, {
    title: "NSS and NCC",
    href: "#"
  }, {
    title: "Hostel, Mess, and Dining",
    href: "#"
  }, {
    title: "Sports & Cultural Activities",
    href: "#"
  }, {
    title: "Meditation Center",
    href: "#"
  }, {
    title: "Health & Wellness",
    href: "#"
  }];
  const announcementsItems = [{
    title: "News & Notifications",
    href: "#"
  }, {
    title: "Events Calendar",
    href: "#"
  }, {
    title: "Photo Gallery",
    href: "#"
  }, {
    title: "Media Coverage",
    href: "#"
  }, {
    title: "Student Achievements",
    href: "#"
  }, {
    title: "Faculty & Research Highlights",
    href: "#"
  }];
  const placementsItems = [{
    title: "Placement Brochure",
    href: "#"
  }, {
    title: "Campus Recruiters",
    href: "#"
  }, {
    title: "Placement Statistics",
    href: "#"
  }, {
    title: "Internship Programmes",
    href: "#"
  }, {
    title: "Training & Career Services",
    href: "#"
  }];
  const alumniItems = [{
    title: "Alumni Network",
    href: "#"
  }, {
    title: "Registration & Directory",
    href: "#"
  }, {
    title: "Alumni Talks",
    href: "#"
  }, {
    title: "Events & Reunions",
    href: "#"
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
              <img alt="GBU Logo" className="h-12 w-12 mr-3" src="/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png" />
              <div>
                <h1 className="text-xl font-bold gradient-text">Gautam Buddha University</h1>
                <p className="text-xs text-gray-600">Greater Noida, Uttar Pradesh</p>
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