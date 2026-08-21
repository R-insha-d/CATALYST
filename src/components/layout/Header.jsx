import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo/logo1.png';

import { HoveredLink, Menu, MenuItem, ProductItem, TextItem, MegaMenuContent, ColumnLink, ColumnGroup } from "../ui/navbar-menu";

const megaMenuCourses = [
  {
    id: "global",
    name: "Global Certifications",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    sections: [
      {
        title: "ACCOUNTING & FINANCE",
        items: [
          { title: "CMA USA", subtitle: "IMA, United States", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=150&auto=format&fit=crop", href: "/courses/cma-usa" },
          { title: "ACCA", subtitle: "ACCA Global, UK", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=150&auto=format&fit=crop", href: "/courses/acca" }
        ]
      }
    ]
  },
  {
    id: "indian",
    name: "Indian Certifications",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>,
    sections: [
      {
        title: "PROFESSIONAL COURSES",
        items: [
          { title: "CMA India", subtitle: "ICMAI, India", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=150&auto=format&fit=crop", href: "/courses/cma-india" },
          { title: "CA Foundation", subtitle: "ICAI, India", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=150&auto=format&fit=crop", href: "/courses/ca" }
        ]
      }
    ]
  },
  {
    id: "short-term",
    name: "Short Term Courses",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    sections: [
      {
        title: "SKILL DEVELOPMENT",
        items: [
          { title: "Financial Modeling", subtitle: "Practical Training", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&auto=format&fit=crop", href: "/courses/financial-modeling" },
          { title: "Tally Prime & GST", subtitle: "Accounting Software", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=150&auto=format&fit=crop", href: "/courses/tally" }
        ]
      }
    ]
  }
];

const megaMenuBlogs = [
  {
    id: "latest",
    name: "Latest Posts",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    sections: [
      {
        title: "FEATURED READS",
        items: [
          { title: "Why CMA USA?", subtitle: "Accounting Trends", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=150&auto=format&fit=crop", href: "/blog/why-cma-usa" },
          { title: "ACCA vs CMA", subtitle: "Comparisons", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=150&auto=format&fit=crop", href: "/blog/acca-vs-cma" }
        ]
      }
    ]
  },
  {
    id: "career",
    name: "Career Guidance",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    sections: [
      {
        title: "CAREER PATHS",
        items: [
          { title: "Career After Commerce", subtitle: "Finance Careers", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=150&auto=format&fit=crop", href: "/blog/commerce-career" },
          { title: "Big 4 Interview Guide", subtitle: "Interviews", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=150&auto=format&fit=crop", href: "/blog/interview-guide" }
        ]
      }
    ]
  },
  {
    id: "exams",
    name: "Exam Tips",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    sections: [
      {
        title: "STUDY HACKS",
        items: [
          { title: "Exam Preparation Tips", subtitle: "Preparation", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=150&auto=format&fit=crop", href: "/blog/exam-tips" },
          { title: "6 Month CMA Plan", subtitle: "Study Plans", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=150&auto=format&fit=crop", href: "/blog/cma-plan" }
        ]
      }
    ]
  }
];

const megaMenuMore = [
  {
    id: "resources",
    name: "Resources",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    sections: [
      {
        title: "HELP & MEDIA",
        items: [
          { title: "FAQs", subtitle: "Answers to common questions.", image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=150&auto=format&fit=crop", href: "#faq" },
          { title: "Gallery", subtitle: "Photos and videos.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=150&auto=format&fit=crop", href: "#gallery" },
          { title: "Free Resources", subtitle: "Learn at your own pace.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=150&auto=format&fit=crop", href: "#free-learning" },
          { title: "Webinars", subtitle: "Live sessions with experts.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=150&auto=format&fit=crop", href: "#webinars" }
        ]
      }
    ]
  },
  {
    id: "company",
    name: "Company",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
    sections: [
      {
        title: "ABOUT CATALYST",
        items: [
          { title: "About Us", subtitle: "Our story & mission.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=150&auto=format&fit=crop", href: "#about" },
          { title: "Our Faculty", subtitle: "Meet the experts.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=150&auto=format&fit=crop", href: "#faculty" },
          { title: "Careers", subtitle: "Join our team.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=150&auto=format&fit=crop", href: "#careers" }
        ]
      }
    ]
  },
  {
    id: "others",
    name: "Others",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>,
    sections: [
      {
        title: "MORE LINKS",
        items: [
          { title: "Events", subtitle: "Workshops & webinars.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=150&auto=format&fit=crop", href: "#events" },
          { title: "Refer & Earn", subtitle: "Get rewarded.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=150&auto=format&fit=crop", href: "#refer" }
        ]
      }
    ]
  }
];

const MoreCta = (
  <div className="w-[200px] shrink-0 rounded-2xl bg-gradient-to-br from-[var(--blue-900)] to-[var(--blue-700)] p-5 flex flex-col text-white relative overflow-hidden h-full">
    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />
    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-4 relative z-10">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </div>
    <h4 className="font-display font-bold text-lg leading-snug mb-2 relative z-10">
      Need Help Choosing?
    </h4>
    <p className="text-sm text-white/70 leading-relaxed mb-5 relative z-10">
      Talk to our admissions team and find the right course for you.
    </p>
    <a
      href="#contact"
      className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-white text-[var(--blue-900)] text-sm font-semibold hover:bg-slate-100 transition-colors relative z-10"
    >
      Talk to Us
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </a>
  </div>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out flex flex-col items-center ${scrolled ? "lg:pt-2" : ""}`}>

        {/* --- DESKTOP NAVBAR (lg and up) --- */}
        <div
          className={`hidden lg:flex transition-all duration-500 ease-in-out items-center justify-between ${scrolled
            ? "w-[95%] xl:w-[75%] max-w-[1500px] mx-auto rounded-full border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-[72px] px-8 bg-white/80 backdrop-blur-lg"
            : "w-full border-b border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] h-20 px-12 xl:px-16 bg-white/95 backdrop-blur-sm"
            }`}
        >
          <a href="#top" className="flex items-center gap-2 focus-ring rounded shrink-0">
            <img src={logo} alt="Catalyst Education" className="h-[45px] xl:h-[50px] w-auto xl:pl-4" />
          </a>
          <div className={`flex items-center text-sm font-medium z-[100] transition-all duration-500 ease-in-out shrink-0 ${scrolled ? 'gap-4 xl:gap-6' : 'gap-9'}`} style={{ color: 'var(--slate-600)' }}>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Home" href="#home">
                <div className="grid grid-cols-2 gap-6 p-4 text-sm w-[600px]">
                  <TextItem
                    title="Welcome to Catalyst"
                    href="#home"
                    description="India's leading institute for commerce and accounting."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}
                  />
                  <TextItem
                    title="Why Choose Us"
                    href="#features"
                    description="Expert faculty, industry-aligned training and more."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                  />
                  <TextItem
                    title="Placements"
                    href="#placements"
                    description="A placement record built over a decade of excellence."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>}
                  />
                  <TextItem
                    title="Latest Updates"
                    href="#updates"
                    description="News, events, and recent happenings at the campus."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>}
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Courses" href="#courses">
                <MegaMenuContent categories={megaMenuCourses} basePath="/courses" />
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Centers" href="#centers">
                <div className="grid grid-cols-2 gap-6 p-4 text-sm w-[600px]">
                  <TextItem
                    title="Kochi Campus"
                    href="#kochi"
                    description="Our flagship learning center in the heart of Kochi."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                  />
                  <TextItem
                    title="Trivandrum Campus"
                    href="#trivandrum"
                    description="State of the art facilities for commerce students."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                  />
                  <TextItem
                    title="Calicut Campus"
                    href="#calicut"
                    description="Empowering the next generation of accountants."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                  />
                  <TextItem
                    title="Bangalore Campus"
                    href="#bangalore"
                    description="Our newest center for global finance certifications."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                  />
                </div>
              </MenuItem>

              <MenuItem setActive={setActive} active={active} item="Success Stories" href="#stories">
                <div className="grid grid-cols-2 gap-10 p-4 text-sm">
                  <ProductItem
                    title="Student Journeys"
                    href="#case-studies"
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                    description="Read inspiring stories of our students' achievements."
                  />
                  <ProductItem
                    title="Top Performers"
                    href="#performers"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                    description="Meet the highest scorers and global rank holders."
                  />
                  <ProductItem
                    title="Testimonials"
                    href="#testimonials"
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop"
                    description="What our alumni say about their experience."
                  />
                  <ProductItem
                    title="Corporate Placements"
                    href="#corporate"
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                    description="Where our students are working today."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About" href="#about">
                <div className="grid grid-cols-2 gap-6 p-4 text-sm w-[600px]">
                  <TextItem
                    title="Our Story"
                    href="#about-catalyst"
                    description="The journey of creating India's No.1 commerce institute."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>}
                  />
                  <TextItem
                    title="Expert Faculty"
                    href="#faculty"
                    description="Learn from industry veterans and top professionals."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                  />
                  <TextItem
                    title="Awards & Recognition"
                    href="#awards"
                    description="Awarded Best ROCC Centre 2x times."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>}
                  />
                  <TextItem
                    title="Careers"
                    href="#careers"
                    description="Join our team and help shape future careers."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>}
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Blogs" href="#blogs">
                <MegaMenuContent categories={megaMenuBlogs} basePath="/blog" />
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Contact" href="#contact">
                <div className="grid grid-cols-2 gap-6 p-4 text-sm w-[600px]">
                  <TextItem
                    title="General Enquiry"
                    href="#enquiry"
                    description="Have questions? Reach out to our support team."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                  />
                  <TextItem
                    title="Admissions Support"
                    href="#admissions"
                    description="Get help with the enrollment and admission process."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>}
                  />
                  <TextItem
                    title="Request Callback"
                    href="#callback"
                    description="Leave your number and we'll call you right back."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>}
                  />
                  <TextItem
                    title="Visit Campus"
                    href="#locations"
                    description="Find directions to our nearest learning center."
                    icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="More" href="#more">
                <MegaMenuContent categories={megaMenuMore} basePath="#more" viewAllText="View All Resources" cta={MoreCta} />
              </MenuItem>
            </Menu>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blue-50)] hover:bg-[#dbe4fa] transition-all duration-300 border border-transparent hover:border-[var(--blue-100)] focus-ring group cursor-pointer">
              <svg className="text-[var(--blue-700)] group-hover:scale-110 transition-transform duration-300" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span className="text-sm font-semibold text-[var(--blue-900)]">Search</span>
            </button>
            <a href="#contact" className="inline-flex focus-ring rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-[var(--blue-700)] hover:bg-[var(--blue-900)]">Enquire Now</a>
          </div>
        </div>

        {/* --- MOBILE/TABLET NAVBAR (below lg) --- */}
        <div
          className="flex lg:hidden transition-all duration-500 ease-in-out items-center justify-between w-full border-b border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] h-16 md:h-20 px-4 md:px-6 bg-white/95 backdrop-blur-sm"
        >
          <a href="#top" className="flex items-center gap-2 focus-ring rounded shrink-0">
            <img src={logo} alt="Catalyst Education" className="h-[32px] md:h-[40px] w-auto" />
          </a>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--blue-50)] hover:bg-[#dbe4fa] transition-colors focus-ring text-[var(--blue-700)] cursor-pointer">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <button id="mobileMenuBtn" type="button" aria-label="Open menu" aria-expanded={mobileMenuOpen} aria-controls="mobileMenu" className="focus-ring inline-flex items-center justify-center w-11 h-11 rounded-lg border bg-white" style={{ borderColor: 'var(--blue-100)', color: 'var(--blue-700)' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg id="mmIconOpen" className={mobileMenuOpen ? "hidden" : ""} width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              <svg id="mmIconClose" className={!mobileMenuOpen ? "hidden" : ""} width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
        </div>
        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile menu drawer */}
        <div
          className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-white z-[120] lg:hidden shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-[var(--line)]">
            <img src={logo} alt="Catalyst Education" className="h-[32px] w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900 focus-ring"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex flex-col py-6 px-6 gap-1 h-full overflow-y-auto">
            <a href="#home" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#centers" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>Centers</a>
            <a href="#courses" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>Courses</a>
            <a href="#stories" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>Success Stories</a>
            <a href="#contact" className="text-lg font-semibold py-4 border-b border-[var(--line)] text-gray-800 hover:text-[var(--blue-700)] hover:pl-2 transition-all" onClick={() => setMobileMenuOpen(false)}>Contact</a>

            <div className="mt-6 mb-8">
              <a href="#contact" className="flex items-center justify-center w-full focus-ring rounded-lg px-5 py-3.5 text-[20px] font-bold text-white bg-[#102C93] hover:bg-[#0c2275] transition-all" onClick={() => setMobileMenuOpen(false)}>Enquire Now</a>

              <div className="flex justify-center mt-10">
                <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Catalyst Education © 2026</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[999] flex justify-center pt-[12vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[90%] md:w-[75%] max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-max border border-white/20"
            >
              <div className="flex items-center px-6 py-4 border-b border-[var(--line)]">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="text-[var(--blue-700)]"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input
                  type="text"
                  placeholder="Search courses, centers, or blogs..."
                  className="flex-1 px-4 py-2 text-lg outline-none bg-transparent placeholder:text-gray-400 text-[var(--blue-900)]"
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors focus-ring">
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-6 bg-gray-50/80">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</div>
                <div className="flex flex-wrap gap-2">
                  <a href="#courses" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-[var(--blue-700)] hover:border-[var(--blue-200)] transition-colors shadow-sm font-medium">CMA USA</a>
                  <a href="#courses" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-[var(--blue-700)] hover:border-[var(--blue-200)] transition-colors shadow-sm font-medium">ACCA</a>
                  <a href="#centers" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-[var(--blue-700)] hover:border-[var(--blue-200)] transition-colors shadow-sm font-medium">Kochi Campus</a>
                  <a href="#contact" onClick={() => setIsSearchOpen(false)} className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-[var(--blue-700)] hover:border-[var(--blue-200)] transition-colors shadow-sm font-medium">Admissions</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: "\n  .mm-panel{\n    max-height:0;\n    transition:max-height .3s ease;\n  }\n  .mm-panel.mm-open{\n    max-height:520px;\n  }\n" }} />
    </>
  );
}
