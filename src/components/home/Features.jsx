import ScrollReveal from '../ui/ScrollReveal';

export default function Features() {
  const features = [
    {
      title: "Expert Faculty Pool",
      desc: "500+ practitioner-educators bringing real industry experience into the classroom.",
      icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: "100% Placement Support",
      desc: "Dedicated placement cell working with top firms across finance and accounting.",
      icon: <path d="M20 6L9 17l-5-5" />,
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: "Integrated B.Com Options",
      desc: "Combine your degree with professional courses for a stronger, faster career path.",
      icon: <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5zm4 2v5c3 3 9 3 12 0v-5" />,
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: "Industry-Standard Projects",
      desc: "Applied case studies and live projects that mirror real workplace scenarios.",
      icon: <path d="M3 3v18h18M7 15l4-4 4 4 5-6" />,
      gradient: 'from-[var(--blue-700)] to-[var(--blue-900)]',
    },
    {
      title: "Advanced Infrastructure",
      desc: "Modern, tech-enabled campuses designed for focused, distraction-free learning.",
      icon: <path d="M4 4h16v16H4zM4 9h16M9 4v16" />,
      gradient: 'from-blue-500 to-blue-800',
    },
    {
      title: "Affordable Fee Options",
      desc: "Flexible instalments and scholarships so cost never blocks the right career choice.",
      icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
      gradient: 'from-indigo-600 to-blue-700',
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--blue-200)] rounded-full opacity-20 blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--blue-300)] rounded-full opacity-15 blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p className="eyebrow mb-3">The Catalyst Standard</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>Why Catalyst is a <span className="blue-text">top-rated</span> commerce institute</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--slate-600)' }}>We create an environment where students grow into confident, career-ready professionals — with strong support at every stage.</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {features.map((feat, idx) => (
            <ScrollReveal delay={150 + idx * 100} key={idx} className="h-full">
              <div className="h-full group relative rounded-[8px] border border-white bg-white p-8 hover:border-[var(--blue-100)] hover:shadow-[0_20px_50px_rgba(20,40,160,0.1)] hover:-translate-y-2 transition-all duration-400 ease-out cursor-pointer overflow-hidden flex flex-col">

                {/* Top accent bar on hover */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>

                {/* Corner glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feat.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none`}></div>

                {/* Number + Icon row */}
                <div className="flex items-center gap-4 mb-7">
                  <div className={`w-12 h-12 rounded-[8px] bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-400 flex-shrink-0`}>
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      {feat.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[var(--blue-300)] group-hover:text-[var(--blue-500)] transition-colors duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h4 className="font-display font-bold text-[18px] text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300 relative z-10">{feat.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10 flex-grow">{feat.desc}</p>

                {/* Learn more arrow */}
                <div className="mt-6 flex items-center gap-1.5 text-[var(--blue-600)] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-[13px] font-semibold">Learn more</span>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="text-center mt-16">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-[8px] px-8 py-4 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(20,40,160,0.25)] hover:shadow-[0_14px_30px_rgba(20,40,160,0.4)] hover:-translate-y-0.5 transition-all duration-300 bg-[var(--blue-700)] hover:bg-[var(--blue-900)]">
              Book a Free Career Counselling Now
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
