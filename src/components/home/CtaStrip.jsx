import { useRef, useState, useEffect, useMemo } from 'react';
import bannerImg from '../../assets/event/event.jpg';
import ScrollReveal from '../ui/ScrollReveal';
import { AnimatedCourseBackground } from './Courses';

export const CtaStripBackground = () => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0, nX: 0, nY: 0 });
  const animated = useRef({ x: 0, y: 0, nX: 0, nY: 0, outerX: 0, outerY: 0 });

  const outerGlowRef = useRef(null);
  const innerGlowRef = useRef(null);
  const parallaxBgRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      mouse.current = { x: cx, y: cy, nX: 0, nY: 0 };
      animated.current = { x: cx, y: cy, nX: 0, nY: 0, outerX: cx, outerY: cy };
    }

    const render = () => {
      animated.current.outerX += (mouse.current.x - animated.current.outerX) * 0.04;
      animated.current.outerY += (mouse.current.y - animated.current.outerY) * 0.04;

      animated.current.x += (mouse.current.x - animated.current.x) * 0.12;
      animated.current.y += (mouse.current.y - animated.current.y) * 0.12;

      animated.current.nX += (mouse.current.nX - animated.current.nX) * 0.05;
      animated.current.nY += (mouse.current.nY - animated.current.nY) * 0.05;

      if (outerGlowRef.current) {
        outerGlowRef.current.style.transform = `translate3d(${animated.current.outerX - 400}px, ${animated.current.outerY - 400}px, 0)`;
      }
      if (innerGlowRef.current) {
        innerGlowRef.current.style.transform = `translate3d(${animated.current.x - 150}px, ${animated.current.y - 150}px, 0)`;
      }
      if (parallaxBgRef.current) {
        parallaxBgRef.current.style.transform = `translate3d(${animated.current.nX * -30}px, ${animated.current.nY * -30}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse.current.x = x;
      mouse.current.y = y;
      mouse.current.nX = (x / rect.width) * 2 - 1;
      mouse.current.nY = (y / rect.height) * 2 - 1;
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      mouse.current.nX = 0;
      mouse.current.nY = 0;
    };

    const el = containerRef.current?.parentElement || containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove, { passive: true });
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animDuration: Math.random() * 10 + 12,
      animDelay: Math.random() * 15,
    }));
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#0A1A70] z-0 pointer-events-auto rounded-[inherit]">
      <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_50%_50%,#0E1D6B_0%,#0A1A70_50%,#050814_100%)] placements-bg-layer" style={{ animation: 'bgPulse 45s ease-in-out infinite alternate' }} />

      <div ref={parallaxBgRef} className="absolute inset-0 will-change-transform hidden md:block">
        <div className="absolute w-[70vw] h-[70vw] rounded-full bg-[#1428A0] opacity-35 blur-[120px] top-[-20%] left-[-10%] mix-blend-screen placements-bg-layer" style={{ animation: 'floatBlob1 32s cubic-bezier(0.4,0,0.2,1) infinite' }} />
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-[#00e5ff] opacity-15 blur-[120px] bottom-[-30%] right-[-10%] mix-blend-screen placements-bg-layer" style={{ animation: 'floatBlob2 35s cubic-bezier(0.4,0,0.2,1) infinite reverse' }} />
        <div className="absolute w-[80vw] h-[80vw] rounded-full bg-[#1B3FC4] opacity-20 blur-[150px] top-[30%] left-[20%] mix-blend-screen placements-bg-layer" style={{ animation: 'floatBlob3 38s cubic-bezier(0.4,0,0.2,1) infinite' }} />

        <div className="absolute inset-0 opacity-60 placements-bg-layer" style={{ backgroundImage: 'radial-gradient(at 80% 0%, rgba(20,40,160,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0,229,255,0.15) 0px, transparent 50%)', animation: 'meshFlow 24s ease-in-out infinite alternate' }} />

        <div className="absolute w-[150vw] h-[150vh] top-[-25vh] left-[-25vw] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.035)_0%,transparent_60%)] placements-bg-layer" style={{ animation: 'rotateGlow 18s linear infinite' }} />
      </div>

      {/* Mobile-only lightweight sparkles */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        {particles.slice(0, 15).map(p => (
          <div
            key={`mob-${p.id}`}
            className="absolute"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `floatParticle ${p.animDuration}s ease-in-out infinite`,
              animationDelay: `-${p.animDelay}s`,
            }}
          >
            <div 
              className="bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]"
              style={{
                width: `${p.size * 1.5}px`,
                height: `${p.size * 1.5}px`,
                animation: `samsungStarTwinkle ${p.animDuration * 0.3}s ease-in-out infinite alternate`,
                animationDelay: `-${p.animDelay}s`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="absolute inset-[-100%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.025),transparent)] placements-bg-layer hidden md:block" style={{ animation: 'sweepMotion 18s linear infinite' }} />

      <div
        ref={outerGlowRef}
        className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.12)_0%,transparent_60%)] pointer-events-none transition-opacity duration-700 will-change-transform z-10 placements-bg-layer mix-blend-screen"
        style={{ opacity: isHovering ? 1 : 0 }}
      />

      <div
        ref={innerGlowRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.15)_0%,transparent_60%)] pointer-events-none transition-opacity duration-500 will-change-transform z-10 placements-bg-layer mix-blend-screen"
        style={{ opacity: isHovering ? 1 : 0 }}
      />
    </div>
  );
};

export default function CtaStrip() {
  const sectionRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col justify-center min-h-[60vh] py-24 lg:py-32 overflow-hidden border-y border-[rgba(20,40,160,0.2)]"
    >
      <AnimatedCourseBackground mouseX={mouseX} mouseY={mouseY} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <ScrollReveal delay={0}>
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
              Start your professional journey with confidence
            </h2>
            <p className="mt-6 text-[17px] text-blue-50/80 leading-relaxed font-light">
              We're happy to present our range of professional and academic courses designed to help you move forward with confidence, whatever you're aiming for.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <a href="#courses" className="focus-ring rounded-lg px-8 py-4 text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.25)] hover:-translate-y-2 transition-all duration-500 ease-out bg-white text-[var(--blue-900)] hover:bg-gray-50 flex items-center gap-2">
                View Courses
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <a href="#contact" className="focus-ring rounded-lg px-8 py-4 text-[15px] font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 hover:-translate-y-2 transition-all duration-500 ease-out">
                Call for Guidance
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="relative group">
            {/* Soft glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[24px] opacity-20 blur-2xl group-hover:opacity-40 transition duration-700"></div>

            <div className="relative rounded-2xl aspect-[4/3] lg:aspect-[16/11] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-2 transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-[var(--blue-900)]/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
              <img src={bannerImg} alt="Catalyst Students" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
