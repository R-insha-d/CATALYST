import ScrollReveal from '../ui/ScrollReveal';

export default function Platform() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)] px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[var(--blue-900)] to-[#0A1A70] shadow-[0_20px_50px_rgba(20,40,160,0.15)] px-6 py-16 sm:px-16 sm:py-24 text-center border border-[var(--blue-800)]">
          
          {/* Decorative glowing background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--blue-500)] rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[var(--blue-600)] rounded-full mix-blend-screen filter blur-[140px] opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <ScrollReveal delay={0}>
              <h2 className="font-display font-bold text-3xl sm:text-5xl leading-tight text-white mb-8">
                A platform built for your <span className="text-[var(--blue-400)]">future</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <p className="text-[17px] sm:text-lg leading-relaxed text-blue-100 mb-6">
                At Catalyst Education, learning is shaped by strong faculty guidance so every student
                graduates confident from day one. Our effective coaching across ACCA, CMA, CS, CA and
                more combines structured guidance with real conceptual clarity.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <p className="text-[17px] sm:text-lg leading-relaxed text-blue-100/80 mb-10">
                Students also work on industry-standard projects to strengthen their portfolio and
                improve recruiter outcomes, all backed by flexible online and offline classes.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={450}>
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 focus-ring rounded-xl px-8 py-4 text-base font-bold text-[var(--blue-900)] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:bg-blue-50 transition-all duration-300">
                Book a Free Career Counselling Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
