import { useRef, useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { AnimatedCourseBackground } from './Courses';

export default function Platform() {
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
      className="relative overflow-hidden py-20 lg:py-35 sm:py-24 text-center border-y border-[rgba(20,40,160,0.2)]"
    >
      <AnimatedCourseBackground mouseX={mouseX} mouseY={mouseY} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <ScrollReveal type="heading" direction="scale" delay={0}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6 tracking-tight">
            A platform built for your <span className="text-[#00e5ff]">future</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal type="subtitle" direction="scale" delay={150}>
          <p className="text-base sm:text-lg leading-relaxed text-blue-100 mb-5 max-w-3xl mx-auto opacity-90">
            At Catalyst Education, learning is shaped by strong faculty guidance so every student
            graduates confident from day one. Our effective coaching across ACCA, CMA, CS, CA and
            more combines structured guidance with real conceptual clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal type="subtitle" direction="scale" delay={300}>
          <p className="text-base sm:text-lg leading-relaxed text-blue-100/70 mb-10 max-w-3xl mx-auto">
            Students also work on industry-standard projects to strengthen their portfolio and
            improve recruiter outcomes, all backed by flexible online and offline classes.
          </p>
        </ScrollReveal>

        <ScrollReveal type="button" direction="scale" delay={450}>
          <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 focus-ring rounded-xl px-8 py-4 text-base font-bold text-[#0A1A70] bg-[#f8fafc] shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-white transition-all duration-300">
            Book a Free Career Counselling Now
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
