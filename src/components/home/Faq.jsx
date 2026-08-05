import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

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
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--blue-200)] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

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
              <div className="relative mt-10 overflow-hidden rounded-[16px] bg-gradient-to-br from-[var(--blue-900)] to-[#0A1A70] p-7 border border-[var(--blue-800)]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-30 pointer-events-none"></div>
                <p className="text-white font-display font-bold text-lg leading-snug">Still have questions?</p>
                <p className="text-blue-200/80 text-sm mt-2 mb-5">Talk to our team — we're happy to help you choose the right course.</p>
                <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[var(--blue-900)] font-bold text-sm px-5 py-2.5 rounded-[8px] hover:bg-blue-50 transition-colors duration-200">
                  Book Free Counselling
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
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

