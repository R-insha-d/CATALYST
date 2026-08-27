import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

export default function Courses() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState([]);

  const [activeCategory, setActiveCategory] = useState("all");

  const trackRef = useRef(null);

  const categories = [
    { id: "all", name: "All Programmes" },
    { id: "global", name: "Global Certifications" },
    { id: "indian", name: "Indian Certifications" },
    { id: "short-term", name: "Short Term Courses" },
    { id: "corporate", name: "Corporate Training" }
  ];

  const allCoursesData = [
    {
      id: 1,
      category: "global",
      eyebrow: "Global · USA",
      title: "CMA USA",
      desc: "The best CMA USA institute in India. Our courses focus on management accounting, financial strategy and industry-relevant skills.",
      duration: "1 Year",
      eligibility: "+12 Degree",
      highlight: false
    },
    {
      id: 2,
      category: "global",
      eyebrow: "Global · UK",
      title: "ACCA",
      desc: "As the best ACCA institute in India, we offer expert faculty, exam-focused training and practical accounting exposure.",
      duration: "3 Years",
      eligibility: "+12 Degree",
      highlight: true
    },
    {
      id: 3,
      category: "indian",
      eyebrow: "India",
      title: "CMA India",
      desc: "As the CMA India institute of choice, we deliver structured cost & management training with strong placement support.",
      duration: "3 Years",
      eligibility: "+12 Degree",
      highlight: false
    },
    {
      id: 4,
      category: "indian",
      eyebrow: "India",
      title: "CA Foundation",
      desc: "Kickstart your Chartered Accountancy journey with our expert-led CA Foundation classes and comprehensive study materials.",
      duration: "1 Year",
      eligibility: "+12 Degree",
      highlight: false
    },
    {
      id: 5,
      category: "short-term",
      eyebrow: "Skill",
      title: "Financial Modeling",
      desc: "Master Excel, valuation techniques, and build complex financial models from scratch for corporate finance roles.",
      duration: "6 Months",
      eligibility: "Any Degree",
      highlight: false
    },
    {
      id: 6,
      category: "short-term",
      eyebrow: "Skill",
      title: "Tally Prime & GST",
      desc: "Practical hands-on training on Tally Prime, GST filing, and essential accounting principles used in the industry.",
      duration: "3 Months",
      eligibility: "10th/12th",
      highlight: false
    },
    {
      id: 7,
      category: "corporate",
      eyebrow: "Corporate",
      title: "Business Analytics",
      desc: "Comprehensive training in data analysis, reporting, and business intelligence tailored for modern corporate needs.",
      duration: "4 Months",
      eligibility: "Working Professionals",
      highlight: false
    },
    {
      id: 8,
      category: "corporate",
      eyebrow: "Corporate",
      title: "Digital Transformation",
      desc: "Learn to leverage digital technologies to create new or modify existing business processes and customer experiences.",
      duration: "6 Months",
      eligibility: "Working Professionals",
      highlight: false
    },
    {
      id: 9,
      category: "corporate",
      eyebrow: "Corporate",
      title: "Leadership Strategy",
      desc: "Develop core leadership skills to manage teams effectively, drive organizational change, and build a positive workplace culture.",
      duration: "3 Months",
      eligibility: "Managers & Leads",
      highlight: true
    }
  ];

  const filteredCourses = activeCategory === "all"
    ? allCoursesData
    : allCoursesData.filter(c => c.category === activeCategory);

  // Tripled array for seamless infinite looping
  const extendedCourses = [...filteredCourses, ...filteredCourses, ...filteredCourses];
  const totalOriginal = filteredCourses.length;

  useEffect(() => {
    // Reset index when category changes to prevent out-of-bounds errors
    setCurrentIndex(totalOriginal);
    setIsTransitioning(false);
    setDragOffset(0);
  }, [activeCategory, totalOriginal]);

  useEffect(() => {
    const updateOffsets = () => {
      if (trackRef.current) {
        // offsetLeft gives precise sub-pixel distance from the relative flex track
        const offsets = Array.from(trackRef.current.children).map(child => child.offsetLeft);
        setSlideOffsets(offsets);
      }
    };

    updateOffsets();

    // Robust resize handling
    window.addEventListener('resize', updateOffsets);
    const observer = new ResizeObserver(updateOffsets);
    if (trackRef.current) observer.observe(trackRef.current);

    // Timeout to catch post-hydration layout shifts or font loading
    const timeout = setTimeout(updateOffsets, 150);

    return () => {
      window.removeEventListener('resize', updateOffsets);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [activeCategory, totalOriginal]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [isTransitioning]);

  // Autoplay Effect (4 seconds)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Infinite Loop Seamless Jump Effect (600ms transition)
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      // Jump back to the center set if we hit the boundaries
      if (currentIndex >= totalOriginal * 2) {
        setCurrentIndex(currentIndex - totalOriginal);
      } else if (currentIndex <= 0) {
        setCurrentIndex(currentIndex + totalOriginal);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalOriginal]);

  // Drag & Swipe Logic
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    if (e.type.includes('mouse') && e.button !== 0) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    setDragStartX(clientX);
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    setDragOffset(clientX - dragStartX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) nextSlide();
    else if (dragOffset > 50) prevSlide();
    setDragOffset(0);
  };

  const getRealIndex = () => {
    let index = currentIndex % totalOriginal;
    if (index < 0) index += totalOriginal;
    return index;
  };

  // Ensure safe fallback if offsets are not yet computed
  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 392);

  return (
    <section
      id="courses"
      className="relative py-20 md:py-28 lg:py-20 overflow-hidden select-none"
    >
      <CourseBackground />
      <div className="relative z-10 max-w-[95%] mx-auto px-6 lg:px-10">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-20 md:mb-28">
          <div className="relative text-left max-w-3xl">
            {/* Behind-header decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-[#1A4DFF]/15 blur-[100px] rounded-[100%] pointer-events-none -z-10"></div>

            <ScrollReveal type="badge" delay={0}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(58,120,255,0.2)] mb-6 text-[11px] font-bold tracking-[0.25em] text-[#9ED5FF] uppercase relative group">
                <span className="absolute inset-0 rounded-full border border-[#3A78FF]/30 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none"></span>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                Our Programmes
              </div>
            </ScrollReveal>

            <ScrollReveal type="heading" delay={150}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E6F0FF] to-[#3A78FF] leading-[1.15] tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Explore Our Signature Courses
              </h2>
            </ScrollReveal>

            <ScrollReveal type="subtitle" delay={300}>
              <p className="text-lg md:text-xl text-[#B0C4DE] font-light leading-relaxed max-w-2xl">
                Globally recognised programmes, meticulously designed to build real-world skills and accelerate your commerce career to the highest echelons.
              </p>
            </ScrollReveal>
          </div>

          {/* Right side: a real stat pulled from this section's own data, paired with a
              direct next step — gives the visitor something to act on, not just read. */}
          <ScrollReveal type="subtitle" delay={450} className="hidden lg:block max-w-xs shrink-0">
            <div className="border-l-2 border-[#3A78FF]/40 pl-6">
              <p className="font-display font-extrabold text-5xl text-white leading-none mb-2">
                {allCoursesData.length}
              </p>
              <p className="text-sm text-[#B0C4DE] uppercase tracking-[0.15em] font-semibold mb-5">
                Flagship Programmes
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#9ED5FF] hover:text-white transition-colors duration-300"
              >
                Not sure which fits? Talk to an advisor
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="relative z-10 w-full max-w-[98%] mx-auto pb-14 px-6 lg:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-15 ">

          {/* Left Sidebar - Category Menu */}
          <div className="col-span-1 relative z-20">
            <h3 className="text-[#B0C4DE] font-semibold text-sm tracking-wider uppercase mb-3 px-2 lg:block hidden">Categories</h3>
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x w-full">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-5 py-3 lg:py-4 rounded-xl transition-all duration-300 flex items-center justify-between group whitespace-nowrap shrink-0 snap-start ${activeCategory === cat.id
                    ? 'bg-[#3A78FF] text-white shadow-[0_10px_30px_-10px_rgba(58,120,255,0.5)] border border-[#3A78FF]'
                    : 'bg-white/5 text-[#B0C4DE] border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }`}
                >
                  <span className="font-medium text-sm sm:text-base mr-2 lg:mr-0">{cat.name}</span>
                  <svg
                    className={`w-4 h-4 hidden lg:block transition-transform duration-300 ${activeCategory === cat.id ? 'translate-x-1 text-white' : 'text-white/50 group-hover:translate-x-1 group-hover:text-white'}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right Area - Interactive Infinite Carousel */}
          <div className="col-span-1 lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.02,
                    delayChildren: 0.01
                  }
                }
              }}
              className="relative w-full course-carousel-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
            >
              <div
                className="overflow-hidden pt-4 pb-20 px-4 -mx-4 cursor-grab active:cursor-grabbing"
                style={{ touchAction: 'pan-y' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                <div
                  ref={trackRef}
                  className="flex gap-6 md:gap-8 w-max relative"
                  style={{
                    transform: `translateX(calc(-${targetOffset}px + ${dragOffset}px))`,
                    transition: isDragging || !isTransitioning ? 'none' : 'transform 600ms ease-in-out'
                  }}
                >
                  {extendedCourses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.98 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.15
                          }
                        }
                      }}
                      className="shrink-0 self-stretch flex h-[460px]"
                      style={{ perspective: 1000 }}
                    >
                      <div
                        className="w-[85vw] sm:w-[340px] flex-1 flex flex-col relative rounded-[12px] p-8 group overflow-hidden backdrop-blur-[24px] hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-[0_30px_60px_-15px_rgba(26,77,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:border-white/30"
                        style={{
                          pointerEvents: isDragging ? 'none' : 'auto',
                          background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                          border: '1px solid rgba(255,255,255,0.15)',
                          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                        }}
                      >
                        {/* Internal Premium Decorations */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#3A78FF] rounded-[12px] blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay pointer-events-none group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          {/* Country Badge */}
                          <div className="inline-flex items-center gap-2 self-start rounded-[12px] border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 mb-6 shadow-sm group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-[12px] bg-[#3A78FF] opacity-75"></span>
                              <span className="relative inline-flex rounded-[12px] h-2 w-2 bg-[#9ED5FF] shadow-[0_0_8px_#9ED5FF]"></span>
                            </span>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-white uppercase opacity-90">{course.eyebrow}</span>
                          </div>

                          <h3 className="font-display font-bold text-[32px] leading-tight tracking-tight text-white mb-3 drop-shadow-sm group-hover:text-[#E6F0FF] transition-colors duration-300">{course.title}</h3>
                          <p className="text-[14px] leading-[1.6] text-white/70 group-hover:text-white/90 transition-colors duration-300 font-light mb-6">{course.desc}</p>

                          {/* Divider */}
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-auto mb-6"></div>

                          <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className="inline-flex items-center gap-1.5 rounded-[12px] bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 border border-white/10 shadow-sm group-hover:border-[#3A78FF]/40 transition-colors duration-300">
                              <svg className="w-3.5 h-3.5 text-[#9ED5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              {course.duration}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-[12px] bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90 border border-white/10 shadow-sm group-hover:border-[#3A78FF]/40 transition-colors duration-300">
                              <svg className="w-3.5 h-3.5 text-[#9ED5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              {course.eligibility}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <a href="#contact" className="samsung-primary-btn flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-[1.02] group/enroll">
                              Enroll Now
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover/enroll:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white bg-white/5 backdrop-blur-md border border-white/15 hover:border-white/30 hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] group/btn">
                              <svg className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress-style pagination dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
                {Array.from({ length: totalOriginal }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const diff = i - getRealIndex();
                      if (diff !== 0) {
                        setIsTransitioning(true);
                        setCurrentIndex(prev => prev + diff);
                      }
                    }}
                    aria-label={`Go to course ${i + 1}`}
                    className={`h-2 rounded-full bg-white transition-all duration-300 cursor-pointer ${getRealIndex() === i ? 'w-8 opacity-100' : 'w-2 opacity-30'}`}
                  ></button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const CourseBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0D1630] pointer-events-none">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071D63] via-[#0D2FA6] to-[#0D1630] opacity-80 mix-blend-overlay"></div>

      {/* Enterprise structural dot grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] mix-blend-overlay"></div>
    </div>
  );
};
