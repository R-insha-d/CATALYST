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
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  const trackRef = useRef(null);

  const mentorsData = [
    {
      id: 1,
      name: 'Ismail',
      role: 'CMA US Faculty',
      image: mentor1,
      desc: "Empowering future CMAs with expert guidance, real-world insights & proven exam strategies.",
      students: "10k+",
      exp: "8+"
    },
    {
      id: 2,
      name: 'Yasar Abdulla',
      role: 'CMA US Faculty',
      image: mentor2,
      desc: "Empowering future CMAs with expert guidance, real-world insight & proven exam strategy.",
      students: "12k+",
      exp: "9+"
    },
    {
      id: 3,
      name: 'Zamnad',
      role: 'CMA US Faculty',
      image: mentor3,
      desc: "Empowering future CMAs with expert guidance, real-world insights & proven exam strategies.",
      students: "8k+",
      exp: "7+"
    },
    {
      id: 4,
      name: 'Mujeeb Rahman',
      role: 'CMA, MCOM',
      image: mentor4,
      desc: "Empowering future CMAs with expert guidance, real-world insights & proven exam strategies.",
      students: "15k+",
      exp: "10+"
    }
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

  // Safe fallback if offsets are not yet computed (330px card + 24px gap = 354px stride)
  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 354);

  return (
    <section
      className="py-16 md:py-20 lg:py-16 bg-[#f8faff] relative overflow-hidden select-none"
    >
      {/* Decorative abstract shapes matching Pathway styling */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[var(--blue-250,#dbeafe)] opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[var(--blue-300,#93c5fd)] opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <ScrollReveal type="badge" delay={0}>
            <p className="eyebrow mb-3">Faculty Members</p>
          </ScrollReveal>
          <ScrollReveal type="heading" delay={150}>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--blue-900)' }}>
              Meet our <span className="blue-text">expert faculty</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal type="subtitle" delay={300}>
            <p className="mt-4 text-base" style={{ color: 'var(--slate-600)' }}>Our faculty is the academic strength behind the leading professional commerce institute in India.</p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={300}>
        <div
          className="relative w-full max-w-[1040px] overflow-hidden mx-auto pb-14 px-4 lg:px-0 lg:pt-3 z-10"
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
              className="flex gap-6 w-max relative lg:pt-3"
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
                    className={`w-[85vw] sm:w-[330px] h-[440px] shrink-0 relative rounded-[32px] p-4 pb-5 flex flex-col justify-end border transition-all duration-500 ease-out overflow-hidden ${hoveredCardIdx === idx ? 'bg-[var(--blue-950)] border-[#1428A0]/30' : 'bg-white border-gray-100'}`}
                    style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                    onMouseEnter={() => setHoveredCardIdx(idx)}
                    onMouseLeave={() => setHoveredCardIdx(null)}
                  >
                    {/* Portrait Image Block - absolute, expands behind text container on hover */}
                    <div className={`absolute overflow-hidden transition-all duration-500 ease-out z-0 bg-slate-100 ${hoveredCardIdx === idx ? 'top-0 left-0 right-0 h-full rounded-[32px]' : 'top-4 left-4 right-4 h-[250px] rounded-[20px]'}`}>
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className={`absolute inset-0 w-full h-full object-cover object-[10%_0%] transition-transform duration-500  ${hoveredCardIdx === idx ? 'scale-105' : 'scale-100'}`}
                        draggable="false"
                      />

                      {/* Dark smoky gradient & Backdrop blur overlay - selectively covers from center to bottom on hover */}
                      <div className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-500 ${hoveredCardIdx === idx ? 'top-[50%] bg-gradient-to-t from-[var(--blue-950)] via-[var(--blue-900)]/80 to-transparent opacity-60 backdrop-blur-[2px]' : 'top-0 bg-transparent opacity-0 backdrop-blur-[0px]'}`}></div>
                    </div>

                    {/* Text Content - positioned outside image container to remain stationary at bottom */}
                    <div className="relative z-20 w-full mt-4 mb-4">
                      {/* Name & Badge Row */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-sans text-[20px] font-bold leading-tight transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-white' : 'text-[var(--blue-900)]'}`}>{mentor.name}</h3>

                          {/* Verified badge style toggles white on hover */}
                          <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm ${hoveredCardIdx === idx ? 'bg-white' : 'bg-[var(--blue-600)]'}`}>
                            <svg className={`w-2.5 h-2.5 transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-[var(--blue-900)]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Mentor Role label */}
                      <p className={`text-[9px] font-mono uppercase tracking-widest font-bold mb-2 transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-sky-300' : 'text-[var(--blue-600)]'}`}>{mentor.role}</p>

                      {/* Bio details description */}
                      <p className={`text-[12px] font-light leading-relaxed line-clamp-3 transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-blue-100' : 'text-gray-500'}`}>{mentor.desc}</p>
                    </div>

                    {/* Stats & Connect footer container */}
                    <div className={`pt-3 border-t flex items-center justify-between relative z-20 transition-colors duration-300 ${hoveredCardIdx === idx ? 'border-white/10' : 'border-gray-100'}`}>
                      <div className="flex items-center gap-3.5">
                        {/* Stat 1: Students */}
                        <div className="flex items-center gap-1" title="Students">
                          <svg className={`w-3.5 h-3.5 transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-white' : 'text-[var(--blue-550,#3b82f6)]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className={`text-[12px] font-bold transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-white' : 'text-[var(--blue-900)]/80'}`}>{mentor.students || "12k+"}</span>
                        </div>

                        {/* Stat 2: Experience */}
                        <div className="flex items-center gap-1" title="Experience">
                          <svg className={`w-3.5 h-3.5 transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-white' : 'text-[var(--blue-550,#3b82f6)]'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className={`text-[12px] font-bold transition-colors duration-300 ${hoveredCardIdx === idx ? 'text-white' : 'text-[var(--blue-900)]/80'}`}>{mentor.exp || "9+"}</span>
                        </div>
                      </div>

                      {/* Connect CTA Button */}
                      <button className={`border rounded-full px-4 py-1.5 font-sans font-semibold text-[11px] tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1 hover:scale-105 active:scale-95 ${hoveredCardIdx === idx ? 'bg-white text-[var(--blue-900)] border-white hover:bg-[var(--blue-600)] hover:text-white hover:border-[var(--blue-600)]' : 'bg-white text-[var(--blue-600)] border-[var(--blue-100)] hover:bg-[var(--blue-600)] hover:text-white hover:border-[var(--blue-600)]'}`}>
                        Connect +
                      </button>
                    </div>
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
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${getRealIndex() === i ? 'w-8 bg-[var(--blue-600)] opacity-100' : 'w-2 bg-[var(--blue-250,#dbeafe)] opacity-40'}`}
              ></button>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
