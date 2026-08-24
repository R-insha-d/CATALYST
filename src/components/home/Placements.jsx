import { useRef, useState, useEffect, useCallback } from 'react';
import { useMotionValue, motion } from 'framer-motion';

import ScrollReveal from '../ui/ScrollReveal';
import { AnimatedCourseBackground } from './Courses';

import diyaImg from '../../assets/placement-img/placement-DIYA.webp';
import althafImg from '../../assets/placement-img/placement ALTHAF ALI-01.webp';
import shamilImg from '../../assets/placement-img/placement SHAMIL-01.webp';
import abhijithImg from '../../assets/placement-img/placement-ABHIJITH.webp';
import ameerImg from '../../assets/placement-img/placement-AMEER-ALI.webp';
import shibiliImg from '../../assets/placement-img/placement-SHIBILI.webp';
import shahalImg from '../../assets/placement-img/SHAHAL-SANEEL-03.02-1.webp';

export default function Placements() {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState([]);

  const trackRef = useRef(null);

  const placementData = [
    {
      id: 1,
      name: 'Diya Sajeevan',
      role: 'CMA Articleship Trainee',
      company: 'Suresh Babu & Co, Kannur',
      img: diyaImg,
    },
    {
      id: 2,
      name: 'Althaf Ali',
      role: 'Accountant',
      company: 'BST Industries, Calicut',
      img: althafImg,
    },
    {
      id: 3,
      name: 'Muhammed Shamil',
      role: 'Billing cum Accountant',
      company: 'KMT Tiles, Manjeri',
      img: shamilImg,
    },
    {
      id: 4,
      name: 'Abhijith P A',
      role: 'Accountant',
      company: 'E Green Associates',
      img: abhijithImg,
    },
    {
      id: 5,
      name: 'Ameer Ali',
      role: 'Accountant',
      company: 'Skybook Global Cyberpark',
      img: ameerImg,
    },
    {
      id: 6,
      name: 'Mohammed Shibili',
      role: 'Accountant Assistant',
      company: 'JP Associate, Kannur',
      img: shibiliImg,
    },
    {
      id: 7,
      name: 'Shahal Saneel',
      role: 'Associate Accounts Executive',
      company: 'Malabar Gold & Diamonds, Hyderabad',
      img: shahalImg,
    }
  ];

  const totalOriginal = placementData.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);

  // Tripled array for seamless infinite looping
  const extendedPlacements = [...placementData, ...placementData, ...placementData];

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

    // Timeout to catch post-hydration layout shifts
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

  // Autoplay Effect (3 seconds - slightly faster for placements)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
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

  // Ensure safe fallback if offsets are not yet computed (350px card + 32px gap)
  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 382);

  return (
    <section 
      id="stories" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-20 lg:py-18 overflow-hidden select-none"
    >
      <AnimatedCourseBackground mouseX={mouseX} mouseY={mouseY} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <ScrollReveal type="heading" delay={0}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Our successful <span className="text-[#00e5ff]">placements</span></h2>
          </ScrollReveal>
          <ScrollReveal type="subtitle" delay={150}>
            <p className="mt-4 text-blue-100 opacity-90">As a commerce institute with 100% placement support, our students have secured roles in reputed MNCs and top companies.</p>
          </ScrollReveal>
        </div>
      </div>

      {/* Interactive Infinite Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04, // Faster stagger
              delayChildren: 0 
            }
          }
        }}
        className="relative w-full max-w-[1194px] mx-auto pb-14 px-6 lg:px-10  z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          className="overflow-hidden pb-8 lg:pt-4 cursor-grab active:cursor-grabbing"
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
            {extendedPlacements.map((placement, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.98 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { 
                      type: "spring",
                      bounce: 0,       
                      duration: 0.4    
                    } 
                  }
                }}
                className="shrink-0"
                style={{ perspective: 1000 }}
              >
                <div
                  className="w-[85vw] sm:w-[350px] rounded-lg bg-white border border-[var(--line)] overflow-hidden hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                >
                  <div className="aspect-[4/5] relative bg-[var(--blue-50)]">
                    <img
                      src={placement.img}
                      alt={placement.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                      draggable="false"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Progress Dots */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
          {placementData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - getRealIndex();
                if (diff !== 0) {
                  setIsTransitioning(true);
                  setCurrentIndex(prev => prev + diff);
                }
              }}
              aria-label={`Go to placement ${i + 1}`}
              className={`h-2 rounded-full bg-white transition-all duration-300 cursor-pointer ${getRealIndex() === i ? 'w-8 opacity-100' : 'w-2 opacity-30'}`}
            ></button>
          ))}
        </div>
      </motion.div>

      <ScrollReveal delay={200}>
        <div className="text-center mt-16 relative z-10">
          <a href="#contact" className="focus-ring inline-flex rounded-lg px-8 py-4 text-sm font-semibold text-[var(--blue-900)] bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 hover:bg-gray-50">Enquire Now</a>
        </div>
      </ScrollReveal>
    </section>
  );
}
