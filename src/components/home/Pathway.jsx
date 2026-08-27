import ScrollReveal from '../ui/ScrollReveal';

export default function Pathway() {
  return (
    <section className="py-16 md:py-20 lg:py-15 bg-[var(--blue-50)] relative overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[var(--blue-200)] opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[var(--blue-300)] opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-[95%] mx-auto px-6 lg:px-10 relative z-10 lg:h-[855px] ">
        <div className="flex justify-center mb-8">
          <ScrollReveal type="badge" delay={0}>
            <p className="eyebrow">Career Roadmap</p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-14 md:mb-20">
          <div className="text-left max-w-2xl overflow-visible">
            <ScrollReveal type="heading" delay={150}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>Your path to a <span className="blue-text">successful commerce career</span> </h2>
            </ScrollReveal>
            <ScrollReveal type="subtitle" delay={300}>
              <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--slate-600)' }}>With the No.1 commerce &amp; accounting institute in India, here's how the journey unfolds.</p>
            </ScrollReveal>
          </div>

          {/* Right side: a tagline built from the same three cards' own stats below
              (50+ Topics, 20+ Projects), tying straight into this roadmap rather than
              repeating a stat used elsewhere on the page, plus a direct next step. */}
          <ScrollReveal type="subtitle" delay={450} className="hidden lg:block max-w-md shrink-0">
            <div className="border-l-2 pl-6" style={{ borderColor: 'var(--blue-200)' }}>
              <p className="font-display font-bold text-2xl leading-snug" style={{ color: 'var(--blue-900)' }}>
                <span className="blue-text font-extrabold">50+</span> Topics ·{' '}
                <span className="blue-text font-extrabold">20+</span> Projects ·{' '}
                One Career.
              </p>
              <p className='text-sm pt-2' style={{ color: 'var(--slate-600)' }}>Build practical knowledge, gain hands-on experience, and take the next step toward a successful career.</p>
              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
                style={{ color: 'var(--blue-600)' }}
              >
                Start your journey
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10 overflow-visible">

          {/* Card 1 */}
          <ScrollReveal type="card" delay={150}>
            <div className="pathway-card group relative bg-white rounded-[8px] p-8 lg:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--blue-400)] to-[var(--blue-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-[8px] bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner border border-blue-100/50">
                  <span className="font-display text-xl font-bold text-[var(--blue-700)]">01</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--blue-600)] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-[0_8px_20px_rgba(20,40,160,0.25)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Learn</h3>
              <div className="flex-grow flex flex-col">
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors duration-300">A rock-solid foundation in accounting, taxation and financial reporting — taught exactly the way CMA, ACCA and CA examiners test it.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Live doubt-clearing sessions
                  </li>
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Structured revision planners
                  </li>
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Concept-first video library
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between group-hover:border-gray-200 transition-colors duration-300">
                <span className="text-[13px] font-semibold text-gray-400 group-hover:text-gray-500 transition-colors">50+ Topics Covered</span>
                <a href="#courses" className="text-[13px] font-bold text-[var(--blue-600)] flex items-center hover:text-[var(--blue-800)] transition-colors">Explore Curriculum <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 (Staggered Down) */}
          <ScrollReveal type="card" delay={300}>
            <div className="pathway-card group relative bg-white rounded-[8px] p-8 lg:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full md:mt-8 overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--blue-400)] to-[var(--blue-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-[8px] bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner border border-blue-100/50">
                  <span className="font-display text-xl font-bold text-[var(--blue-700)]">02</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--blue-600)] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-[0_8px_20px_rgba(20,40,160,0.25)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Perform</h3>
              <div className="flex-grow flex flex-col">
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Practise with industry-standard projects, real deadlines, and focused mentoring throughout.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Real-world projects
                  </li>
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Deadline-based tasks
                  </li>
                  <li className="flex items-center text-[13px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[var(--blue-500)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Focused mentoring
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between group-hover:border-gray-200 transition-colors duration-300">
                <span className="text-[13px] font-semibold text-gray-400 group-hover:text-gray-500 transition-colors">20+ Practical Projects</span>
                <a href="#courses" className="text-[13px] font-bold text-[var(--blue-600)] flex items-center hover:text-[var(--blue-800)] transition-colors">View Projects <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 (Highlighted & Staggered Down) */}
          <ScrollReveal type="card" delay={450}>
            <div className="pathway-card group relative rounded-[8px] p-8 lg:p-10 text-white shadow-[0_12px_40px_rgba(20,40,160,0.25)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.45)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full md:mt-16 overflow-hidden bg-gradient-to-br from-[var(--blue-900)] to-[var(--blue-800)] border border-[var(--blue-800)]">
              {/* Animated glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-700)] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner">
                    <span className="font-display text-xl font-bold text-white">03</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-900)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Get a Job</h3>
                <div className="flex-grow flex flex-col">
                  <p className="mt-4 text-[15px] leading-relaxed text-blue-100 group-hover:text-white transition-colors duration-300">Start your commerce career with dedicated placement support and mock interview coaching.</p>
                  
                  <div className="mt-6 flex items-center justify-between text-[12.5px] font-semibold text-blue-200 group-hover:text-white transition-colors duration-300 bg-white/5 rounded-lg p-3 border border-white/10 shadow-inner">
                    <span>Resume</span>
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <span>Mock Interview</span>
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    <span>Placement</span>
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full focus-ring rounded-xl px-7 py-4 text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all bg-white text-[var(--blue-900)] group-hover:scale-[1.03] transform duration-300">
                    Start Now
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
