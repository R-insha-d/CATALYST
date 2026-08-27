import { useRef, useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { CourseBackground } from './Courses';

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
      className="relative overflow-hidden py-20 lg:py-25 sm:py-24 text-left border-y border-[rgba(20,40,160,0.2)]"
    >
      <CourseBackground />

      <div className="relative z-10 max-w-[100%] px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          <div className="max-w-3xl">
            <ScrollReveal type="badge" direction="scale" delay={0}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(58,120,255,0.2)] mb-6 text-[11px] font-bold tracking-[0.25em] text-[#9ED5FF] uppercase relative group">
                <span className="absolute inset-0 rounded-full border border-[#3A78FF]/30 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none"></span>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></svg>
                Our Platform
              </div>
            </ScrollReveal>

            <ScrollReveal type="heading" direction="scale" delay={150}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6 tracking-tight">
                A platform built for your <span className="text-[#00e5ff]">future</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal type="subtitle" direction="scale" delay={300}>
              <p className="text-base sm:text-lg leading-relaxed text-blue-100 mb-5 max-w-3xl opacity-90">
                At Catalyst Education, learning is shaped by strong faculty guidance so every student
                graduates confident from day one. Our effective coaching across ACCA, CMA, CS, CA and
                more combines structured guidance with real conceptual clarity.
              </p>
            </ScrollReveal>

            <ScrollReveal type="subtitle" direction="scale" delay={450}>
              <p className="text-base sm:text-lg leading-relaxed text-blue-100/70 mb-10 max-w-3xl">
                Students also work on industry-standard projects to strengthen their portfolio and
                improve recruiter outcomes, all backed by flexible online and offline classes.
              </p>
            </ScrollReveal>

            <ScrollReveal type="button" direction="scale" delay={600}>
              <a href="#contact" className="group inline-flex items-center justify-center gap-2.5 focus-ring rounded-xl px-8 py-4 text-base font-bold text-[#0A1A70] bg-[#f8fafc] shadow-[0_8px_10px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:bg-white transition-all duration-500 ease-out">
                Book a Free Career Counselling Now
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Right side: real programmes pulled from the site's own course list
              (Header.jsx / Courses.jsx) — certifications plus two short-term skill
              programmes, rather than a stat or CTA that would compete with the
              button on the left. */}
          <ScrollReveal type="subtitle" direction="scale" delay={750} className="hidden lg:block max-w-lg shrink-0">
            <div className="border-l-2 border-[#3A78FF]/40 pl-8">
              <p className="text-sm font-bold tracking-[0.2em] text-[#9ED5FF] uppercase mb-6">Programmes Covered</p>
              <div className="grid grid-cols-2 gap-3">
                {['ACCA', 'CMA USA', 'CMA India', 'CA', 'CS', 'EA', 'Financial Modeling', 'Tally Prime & GST'].map((cert) => (
                  <span
                    key={cert}
                    className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white text-center leading-snug"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
