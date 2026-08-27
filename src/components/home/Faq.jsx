import { useState, useMemo } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const MiniAnimatedBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animDuration: Math.random() * 10 + 15,
      animDelay: Math.random() * 15,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0A1A70] to-[#040C38] z-0 pointer-events-none rounded-[inherit]">
      {/* Base gentle pulse */}
      <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_50%_50%,rgba(14,29,107,0.95)_0%,transparent_70%)] placements-bg-layer" style={{ animation: 'bgPulse 10s ease-in-out infinite alternate' }} />
      
      {/* Fast moving deep blue glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#1428A0] opacity-60 blur-[45px] bottom-[-80px] left-[-40px] mix-blend-screen placements-bg-layer" style={{ animation: 'floatBlob2 15s cubic-bezier(0.4,0,0.2,1) infinite reverse' }} />
      
      {/* Mouse Interaction Glow */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.2)_0%,transparent_60%)] pointer-events-none mix-blend-screen opacity-0 group-hover/faqcard:opacity-100 transition-opacity duration-500 placements-bg-layer"
        style={{
          transform: 'translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%))'
        }}
      />
      
      {/* Ambient Particles */}
      <div className="absolute inset-0">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute bg-white rounded-full opacity-30 shadow-[0_0_8px_rgba(255,255,255,0.8)] placements-bg-layer"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `floatParticle ${p.animDuration}s linear infinite`,
              animationDelay: `-${p.animDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient noise for premium texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

const faqs = [
  {
    q: "Why choose Catalyst as your commerce institute?",
    a: "Catalyst combines expert faculty, flexible online and offline classes, structured guidance and 100% placement support across CMA USA, CMA India and ACCA."
  },
  {
    q: "What courses are offered at Catalyst?",
    a: "We offer CMA USA, CMA India, ACCA, CS, CA and integrated B.Com programmes across our campuses."
  },
  {
    q: "Is Catalyst available online and offline?",
    a: "Yes, all programmes are available both online and offline across our campuses in Kerala."
  },
  {
    q: "How can I book a free career counselling session?",
    a: 'Use the "Book a Free Career Counselling Now" button anywhere on this page, or reach us directly on our contact number.'
  },
  {
    q: "What placement support does Catalyst provide?",
    a: "We offer 100% placement support, including interview preparation, resume building and direct connections with our hiring partners once you complete your programme."
  },
  {
    q: "Are scholarships or fee instalments available?",
    a: "Yes, we offer merit-based scholarships and flexible instalment plans. Talk to our counselling team to find the option that best fits your situation."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--blue-200)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-[95%] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-25 items-start">

          {/* Left panel */}
          <ScrollReveal delay={0}>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Got Questions?</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--blue-900)' }}>
                Frequently asked <span className="blue-text">questions</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'var(--slate-600)' }}>
                Everything you need to know about Catalyst Education — from courses and campuses to fees and placement support.
              </p>

              {/* Dark CTA card */}
              <div 
              className="relative p-10 md:p-12 text-white h-full overflow-hidden shadow-2xl shadow-blue-900/10 bg-[#0A1A70] group/faqcard rounded-[16px] border border-[rgba(20,40,160,0.2)] mt-10"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <MiniAnimatedBackground />
                <div className="relative z-10">
                  <p className="text-white font-display font-bold text-lg leading-snug">Still have questions?</p>
                  <p className="text-blue-200/80 text-sm mt-2 mb-5">Talk to our team — we're happy to help you choose the right course.</p>
                  <a href="#contact" className="group inline-flex items-center gap-2 bg-white text-[var(--blue-900)] font-bold text-sm px-5 py-2.5 rounded-[8px] hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                    Book Free Counselling
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal delay={150 + idx * 100} key={idx}>
                  <div
                    className={`rounded-[8px] border transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'border-[var(--blue-400)] bg-white shadow-[0_8px_30px_rgba(20,40,160,0.08)]' : 'border-[var(--blue-100)] bg-white hover:border-[var(--blue-300)] hover:shadow-sm'}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <div className="flex items-center gap-4 px-6 py-5">
                      {/* Number badge */}
                      <span className={`flex-shrink-0 w-8 h-8 rounded-[6px] flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 ${isOpen ? 'bg-[var(--blue-700)] text-white' : 'bg-[var(--blue-50)] text-[var(--blue-600)]'}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`flex-grow font-display font-semibold text-[15px] transition-colors duration-200 ${isOpen ? 'text-[var(--blue-700)]' : 'text-[var(--blue-900)]'}`}>
                        {faq.q}
                      </span>
                      {/* Chevron */}
                      <svg
                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        width={18} height={18} viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--blue-600)' : 'var(--slate-400)'}
                        strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>

                    {/* Answer panel */}
                    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-6 pb-5 pl-[4.5rem]">
                        <p className="text-[14px] leading-relaxed" style={{ color: 'var(--slate-600)' }}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

