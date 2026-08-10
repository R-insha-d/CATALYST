import { useRef, useState, useEffect, useCallback } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function YouTube() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState([]);

  const trackRef = useRef(null);

  const fullYoutubeData = [
    { id: 1, videoId: 'XlJpz-RDcps' },
    { id: 2, videoId: 'DQwNte00Noc' },
    { id: 3, videoId: 'C5r6694Wz9I' },
    { id: 4, videoId: '9zMhi51v-Mk' }
  ];

  const totalOriginal = fullYoutubeData.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);

  const extendedVideos = [...fullYoutubeData, ...fullYoutubeData, ...fullYoutubeData];

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

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

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

  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const handlePointerDown = (e) => {
    if (e.type.includes('mouse') && e.button !== 0) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    setDragStartX(clientX);
    setIsDragging(true);
    setHasDragged(false);
    setIsTransitioning(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const offset = clientX - dragStartX;
    if (Math.abs(offset) > 5) setHasDragged(true);
    setDragOffset(offset);
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

  const targetOffset = slideOffsets[currentIndex] ?? (currentIndex * 444);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <ScrollReveal type="badge" delay={0}>
            <p className="eyebrow mb-3">Success Stories</p>
          </ScrollReveal>
          <ScrollReveal type="heading" delay={150}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>From Learning to <span className="blue-text">Success</span></h2>
          </ScrollReveal>
          <ScrollReveal type="subtitle" delay={300}>
            <p className="mt-4" style={{ color: 'var(--slate-600)' }}>Discover how our students are building incredible careers with the skills and confidence they gain from our program.</p>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={150}>
        <div
          className="relative w-full max-w-[1400px] mx-auto pb-14 px-6 lg:px-10"
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
              className="flex gap-6 relative w-max"
              style={{
                transform: `translateX(calc(-${targetOffset}px + ${dragOffset}px))`,
                transition: isDragging || !isTransitioning ? 'none' : 'transform 600ms ease-in-out'
              }}
            >
              {extendedVideos.map((video, idx) => (
                <ScrollReveal
                  key={idx}
                  type="card"
                  delay={(idx % fullYoutubeData.length) * 150}
                  className="shrink-0"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[85vw] sm:w-[420px] block rounded-lg overflow-hidden relative aspect-video group border border-[var(--line)] shadow-sm hover:shadow-lg transition-shadow"
                    onClick={(e) => { if (hasDragged) e.preventDefault(); }}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={`Video ${video.id}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" draggable="false" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="var(--blue-700)"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5">
            {fullYoutubeData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const diff = i - getRealIndex();
                  if (diff !== 0) {
                    setIsTransitioning(true);
                    setCurrentIndex(prev => prev + diff);
                  }
                }}
                aria-label={`Go to video ${i + 1}`}
                className={`h-2 rounded-[6px] bg-[var(--blue-700)] transition-all duration-300 cursor-pointer ${getRealIndex() === i ? 'w-8 opacity-100' : 'w-2 opacity-30'}`}
              ></button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="text-center mt-6">
          <a href="https://www.youtube.com/@catalysteducationindia" target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(20,40,160,0.25)] hover:shadow-[0_10px_25px_rgba(20,40,160,0.35)] hover:-translate-y-0.5 transition-all duration-300 bg-[var(--blue-700)] hover:bg-[var(--blue-900)]">Subscribe Now</a>
        </div>
      </ScrollReveal>
    </section>
  );
}
