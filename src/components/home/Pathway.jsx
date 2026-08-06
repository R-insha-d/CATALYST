import ScrollReveal from '../ui/ScrollReveal';

export default function Pathway() {
  return (
    <section className="py-16 md:py-20 lg:py-1  bg-[var(--blue-50)] relative overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[var(--blue-200)] opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[var(--blue-300)] opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 lg:h-[855px]  ">
        <ScrollReveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20 overflow-visible">
            <p className="eyebrow mb-3">Career Roadmap</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>Your path to a successful commerce career</h2>
            <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--slate-600)' }}>With the No.1 commerce &amp; accounting institute in India, here's how the journey unfolds.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative z-10 overflow-visible">

          {/* Card 1 */}
          <ScrollReveal delay={150}>
            <div className="pathway-card group relative bg-white rounded-[8px] p-8 lg:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--blue-400)] to-[var(--blue-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-16 h-16 rounded-[8px] bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner border border-blue-100/50">
                <span className="font-display text-xl font-bold text-[var(--blue-700)]">01</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--blue-900)] group-hover:text-[var(  --blue-700)] transition-colors duration-300">Learn</h3>
              <p className="mt-4 text-[15px] leading-relaxed flex-grow text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Build strong fundamentals in accounting with expert-led commerce and accounting instruction.</p>
            </div>
          </ScrollReveal>

          {/* Card 2 (Staggered Down) */}
          <ScrollReveal delay={300}>
            <div className="pathway-card group relative bg-white rounded-[8px] p-8 lg:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full md:mt-8 overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--blue-400)] to-[var(--blue-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-16 h-16 rounded-[8px] bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner border border-blue-100/50">
                <span className="font-display text-xl font-bold text-[var(--blue-700)]">02</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Perform</h3>
              <p className="mt-4 text-[15px] leading-relaxed flex-grow text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Practise with industry-standard projects, real deadlines, and focused mentoring throughout.</p>
            </div>
          </ScrollReveal>

          {/* Card 3 (Highlighted & Staggered Down) */}
          <ScrollReveal delay={450}>
            <div className="pathway-card group relative rounded-[8px] p-8 lg:p-10 text-white shadow-[0_12px_40px_rgba(20,40,160,0.25)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.45)] hover:-translate-y-2 transition-all duration-500 ease-out z-10 flex flex-col h-full md:mt-16 overflow-hidden bg-gradient-to-br from-[var(--blue-900)] to-[var(--blue-800)] border border-[var(--blue-800)]">
              {/* Animated glowing background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-700)] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-inner">
                  <span className="font-display text-xl font-bold text-white">03</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Get a Job</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-blue-100 group-hover:text-white transition-colors duration-300 flex-grow">Start your commerce career with dedicated placement support and mock interview coaching.</p>

                <div className="mt-8 pt-4">
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
