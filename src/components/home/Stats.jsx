import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { CtaStripBackground } from './CtaStrip';

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo easing function for a smooth slow-down at the end
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(ease * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0a1128] border-none text-white">
      <CtaStripBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
        <ScrollReveal delay={0}>
          <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-8 md:first:border-l-0 md:first:pl-0">
            <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md"><CountUp end={500} /><span className="text-[var(--blue-400)] ml-1">+</span></p>
            <p className="text-[13px] sm:text-sm mt-2 font-semibold text-blue-200/80 uppercase tracking-widest">Expert Faculties</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-8">
            <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md"><CountUp end={25000} /><span className="text-[var(--blue-400)] ml-1">+</span></p>
            <p className="text-[13px] sm:text-sm mt-2 font-semibold text-blue-200/80 uppercase tracking-widest">Students Yearly</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-8">
            <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md"><CountUp end={30} /><span className="text-[var(--blue-400)] ml-1">+</span></p>
            <p className="text-[13px] sm:text-sm mt-2 font-semibold text-blue-200/80 uppercase tracking-widest">Specialised Courses</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={450}>
          <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-8">
            <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md"><CountUp end={100} /><span className="text-[var(--blue-400)] ml-1">%</span></p>
            <p className="text-[13px] sm:text-sm mt-2 font-semibold text-blue-200/80 uppercase tracking-widest">Placement Support</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
