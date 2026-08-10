import { useRef, useState, useEffect, useCallback } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import mentor1 from '../../assets/Mentor/1.png';
import mentor2 from '../../assets/Mentor/2.png';
import mentor3 from '../../assets/Mentor/3.png';
import mentor4 from '../../assets/Mentor/4.png';

export default function Faculty() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState([]);

  const trackRef = useRef(null);

  const mentorsData = [
    { id: 1, name: 'Ismail', role: 'CMA US FACULTY', image: mentor1 },
    { id: 2, name: 'Yasar Abdulla', role: 'CMA US FACULTY', image: mentor2 },
    { id: 3, name: 'Zamnad', role: 'CMA US FACULTY', image: mentor3 },
    { id: 4, name: 'Mujeeb Rahman', role: 'CMA, MCOM', image: mentor4 }
  ];

  const totalOriginal = mentorsData.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);

  // Tripled array for seamless infinite looping
  const extendedMentors = [...mentorsData, ...mentorsData, ...mentorsData];

  useEffect(() => {
    const updateOffsets = () => {
      if (trackRef.current) {
        const offsets = Array.from(trackRef.current.children).map(child => child.offsetLeft);
        setSlideOffsets(offsets);
      }
    };

    updateOffsets();

    window.addEventListener('resize', updateOffsets);
    const observer = new ResizeObserver(updateOffsets);
    if (trackRef.current) observer.observe(trackRef.current);

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

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3500); // 3.5s for mentors
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Seamless jump
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex >= totalOriginal * 2) {
        setCurrentIndex(currentIndex - totalOriginal);
      } else if (currentIndex <= 0) {
        setCurrentIndex(currentIndex + totalOriginal);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalOriginal]);

  // Drag logic
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

  // Safe fallback if offsets are not yet computed (380px card + 32px gap)
  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 412);

  return (
    <section
      className="py-16 md:py-20 lg:py-10 bg-[var(--blue-50)] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <ScrollReveal type="badge" delay={0}>
            <p className="eyebrow mb-3">Mentors</p>
          </ScrollReveal>
          <ScrollReveal type="heading" delay={150}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>Meet our <span className="blue-text">expert faculty</span></h2>
          </ScrollReveal>
          <ScrollReveal type="subtitle" delay={300}>
            <p className="mt-4" style={{ color: 'var(--slate-600)' }}>Our faculty is the strength behind the leading professional commerce institute in India.</p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={300}>
        <div
          className="relative w-full max-w-[1330px] overflow-hidden mx-auto pb-14 px-6 lg:px-15 lg:pt-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div
            className="overflow-hidden pb-10 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              ref={trackRef}
              className="flex gap-6 lg:gap-8 w-max relative lg:pt-3"
              style={{
                transform: `translateX(calc(-${targetOffset}px + ${dragOffset}px))`,
                transition: isDragging || !isTransitioning ? 'none' : 'transform 600ms ease-in-out'
              }}
            >
              {extendedMentors.map((mentor, idx) => (
                <ScrollReveal
                  key={idx}
                  type="card"
                  delay={(idx % mentorsData.length) * 150}
                  className="shrink-0 self-stretch flex"
                >
                  <div
                    className="w-[85vw] sm:w-[380px] flex-1 relative bg-white/90 backdrop-blur-sm rounded-lg p-6 pb-6 flex flex-col items-center overflow-hidden border border-[#1428A0]/15  hover:shadow-[0_20px_50px_rgba(20,40,160,0.12)] transition-all duration-500 hover:-translate-y-2 group"
                    style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                  >
                    {/* Background Decor */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#EAF2FF_0%,transparent_60%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-[#345DFF]/20 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1428A0]/5 to-transparent"></div>

                    {/* Image Container */}
                    <div className="relative z-10 w-full h-[180px] flex items-end justify-center mb-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="object-contain h-full drop-shadow-[0_15px_25px_rgba(20,40,160,0.15)] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 origin-bottom"
                        draggable="false"
                      />
                    </div>

                    {/* Name & Badge */}
                    <div className="mt-2 flex items-center justify-center gap-1.5 relative z-10">
                      <h3 className="font-display text-[26px] sm:text-[28px] font-bold text-[#111827] tracking-tight">{mentor.name}</h3>
                      <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#345DFF] blur-md opacity-40 rounded-full group-hover:opacity-60 transition-opacity duration-300"></div>
                        <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.52 1.34c.83-.9 2.13-.9 2.96 0l1.75 1.9c.3.32.73.49 1.16.45l2.61-.26c1.23-.12 2.21.86 2.09 2.09l-.26 2.61c-.04.43.13.86.45 1.16l1.9 1.75c.9.83.9 2.13 0 2.96l-1.9 1.75c-.32.3-.49.73-.45 1.16l.26 2.61c.12 1.23-.86 2.21-2.09 2.09l-2.61-.26c-.43-.04-.86.13-1.16.45l-1.75 1.9c-.83.9-2.13.9-2.96 0l-1.75-1.9c-.3-.32-.73-.49-1.16-.45l-2.61.26c-1.23.12-2.21-.86-2.09-2.09l.26-2.61c.04-.43-.13-.86-.45-1.16l-1.9-1.75c-.9-.83-.9-2.13 0-2.96l1.9-1.75c.32-.3.49-.73.45-1.16l-.26-2.61c-.12-1.23.86-2.21 2.09-2.09l2.61.26c.43.04.86-.13 1.16-.45l1.75-1.9z" fill="#345DFF" />
                          <path d="M10.22 15.65l-3.32-3.31 1.41-1.42 1.91 1.91 5.37-5.37 1.41 1.42-6.78 6.77z" fill="white" />
                        </svg>
                      </div>
                    </div>

                    {/* Role */}
                    <p className="text-[12px] font-bold text-[#6b7280] uppercase tracking-widest mt-2 relative z-10">{mentor.role}</p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-4 mt-5 w-full relative z-10">
                      <a href="#" className="w-10 h-10 rounded-full bg-[#EAF2FF] text-[#1428A0] flex items-center justify-center transition-all duration-300 hover:scale-[1.08] hover:bg-[#1428A0] hover:text-white hover:shadow-[0_4px_15px_rgba(20,40,160,0.3)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-[#EAF2FF] text-[#1428A0] flex items-center justify-center transition-all duration-300 hover:scale-[1.08] hover:bg-[#1428A0] hover:text-white hover:shadow-[0_4px_15px_rgba(20,40,160,0.3)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-[#EAF2FF] text-[#1428A0] flex items-center justify-center transition-all duration-300 hover:scale-[1.08] hover:bg-[#1428A0] hover:text-white hover:shadow-[0_4px_15px_rgba(20,40,160,0.3)]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      </a>
                    </div>

                    {/* Connect Button */}
                    <button className="group/btn w-full mt-6 bg-gradient-to-r from-[#1428A0] to-[#345DFF] hover:from-[#345DFF] hover:to-[#5578FF] text-white py-3.5 px-6 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all duration-300 relative z-10 shadow-[0_6px_20px_rgba(20,40,160,0.25)] hover:shadow-[0_8px_25px_rgba(20,40,160,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
                      Connect
                      <svg className="transition-transform duration-300 group-hover/btn:translate-x-1.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Custom Progress Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
            {mentorsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const diff = i - getRealIndex();
                  if (diff !== 0) {
                    setIsTransitioning(true);
                    setCurrentIndex(prev => prev + diff);
                  }
                }}
                aria-label={`Go to mentor ${i + 1}`}
                className={`h-2 rounded-full bg-[var(--blue-700)] transition-all duration-300 cursor-pointer ${getRealIndex() === i ? 'w-8 opacity-100' : 'w-2 opacity-30'}`}
              ></button>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
