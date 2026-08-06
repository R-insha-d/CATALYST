import { useRef, useState, useEffect, useCallback } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { CtaStripBackground } from './CtaStrip';

export default function Courses() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState([]);

  const trackRef = useRef(null);

  const coursesData = [
    {
      id: 1,
      eyebrow: "Global · USA",
      title: "CMA USA",
      desc: "The best CMA USA institute in India. Our courses focus on management accounting, financial strategy and industry-relevant skills.",
      duration: "1 Year",
      eligibility: "+12 Degree",
      highlight: false
    },
    {
      id: 2,
      eyebrow: "Global · UK",
      title: "ACCA",
      desc: "As the best ACCA institute in India, we offer expert faculty, exam-focused training and practical accounting exposure.",
      duration: "3 Years",
      eligibility: "+12 Degree",
      highlight: true
    },
    {
      id: 3,
      eyebrow: "India",
      title: "CMA India",
      desc: "As the CMA India institute of choice, we deliver structured cost & management training with strong placement support.",
      duration: "3 Years",
      eligibility: "+12 Degree",
      highlight: false
    }
  ];

  // Tripled array for seamless infinite looping
  const extendedCourses = [...coursesData, ...coursesData, ...coursesData];
  const totalOriginal = coursesData.length;

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
  }, []);

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
  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 402);

  return (
    <section id="courses" className="relative py-16 md:py-24 lg:py-28 overflow-hidden select-none">
      <CtaStripBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="eyebrow mb-3 !text-blue-200 !bg-white/10 !border-white/20">Our Programmes</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Explore our signature courses</h2>
            <p className="mt-4 text-blue-100 opacity-90">Globally recognised programmes, designed to build real skills and accelerate your commerce career.</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive Infinite Carousel */}
      <ScrollReveal delay={300}>
        <div
          className="relative z-10 w-full max-w-[90%] mx-auto pb-14 px-6 lg:px-10 course-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div
            className="overflow-hidden pb-8 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              ref={trackRef}
              className="flex gap-6 md:gap-8 w-max relative pt-4"
              style={{
                transform: `translateX(calc(-${targetOffset}px + ${dragOffset}px))`,
                transition: isDragging || !isTransitioning ? 'none' : 'transform 600ms ease-in-out'
              }}
            >
              {extendedCourses.map((course, idx) => (
                <ScrollReveal
                  key={idx}
                  delay={(idx % coursesData.length) * 150}
                  className="shrink-0 self-stretch flex h-[450px]"
                >
                  <div
                    className="w-[110vw] sm:w-[400px] flex-1 flex flex-col relative rounded-[8px] p-8 bg-white border border-gray-100  transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                    style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                  >
                    {/* Subtle top gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="inline-flex items-center gap-1.5 self-start rounded-md border border-[var(--blue-100)] bg-[var(--blue-50)]/50 px-2.5 py-1 mb-5 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-[var(--blue-600)]"></span>
                      <span className="text-[10px] font-bold tracking-widest text-[var(--blue-700)] uppercase">{course.eyebrow}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl tracking-tight text-[var(--ink)] group-hover:text-[var(--blue-900)] transition-colors duration-300">{course.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{course.desc}</p>

                    <div className="mt-auto pt-8 flex items-center gap-3">
                      <span className="inline-flex items-center rounded-md bg-[#F3F5FD] px-2.5 py-1 text-xs font-semibold text-[var(--blue-700)] border border-[var(--blue-100)]">{course.duration}</span>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600 border border-gray-100">{course.eligibility}</span>
                    </div>

                    <div className="mt-8 flex items-center gap-3 pt-6 border-t border-gray-100">
                      <a href="#contact" className="focus-ring rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(20,40,160,0.15)] hover:shadow-[0_10px_25px_rgba(20,40,160,0.3)] transition-all duration-300 hover:-translate-y-0.5 bg-[var(--blue-700)] hover:bg-[var(--blue-900)] flex-1 text-center">Apply Now</a>
                      <a href="#" className="inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-semibold text-[var(--blue-700)] bg-white border border-gray-200 hover:border-[var(--blue-200)] hover:bg-[var(--blue-50)] transition-all duration-300 group/btn">
                        <svg className="group-hover/btn:translate-y-0.5 transition-transform duration-300" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 19h16" /></svg>
                        Brochure
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Progress-style pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
            {[0, 1, 2].map((i) => (
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
        </div>
      </ScrollReveal>
    </section>
  );
}
