import trustedImg from '../../assets/trusted.png';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-8 lg:py-20 bg-[var(--blue-50)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal delay={0}>
          <div className="relative">
            <div className="rounded-md overflow-hidden aspect-[4/3] bg-[var(--blue-50)]">
              <img src={trustedImg} alt="Catalyst Classroom" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-md shadow-xl px-5 py-4 hidden sm:block border border-[var(--line)] animate-float-slow">
              <p className="font-mono-data text-2xl font-semibold" style={{ color: 'var(--blue-900)' }}>12+ Yrs</p>
              <p className="text-xs" style={{ color: 'var(--slate-600)' }}>Training commerce leaders</p>
            </div>
          </div>
        </ScrollReveal>
        <div>
          <ScrollReveal delay={150}>
            <p className="eyebrow mb-3">Why Catalyst</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--blue-900)' }}>
              Trusted as a leading commerce professional course institute in India
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <p className="mt-5 leading-relaxed" style={{ color: 'var(--slate-600)' }}>
              Being India's leading commerce professional course institute in Kerala, Catalyst
              Education is not just a place to study — it's where your commerce career journey
              truly begins, with faculty and infrastructure built for outcomes, not just credentials.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--slate-600)' }}>
              We know how confusing career planning can feel at first. That's why we break down
              every step, keep you informed, and pair every learner with dedicated mentors, career
              counsellors and structured, industry-led training all the way through.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={750}>
            <a href="#courses" className="group mt-8 inline-flex items-center gap-2 focus-ring rounded-md px-7 py-3.5 text-sm font-semibold text-white bg-[var(--blue-700)] hover:bg-[var(--blue-900)] shadow-[0_8px_20px_rgba(20,40,160,0.2)] hover:shadow-[0_12px_28px_rgba(20,40,160,0.35)] hover:-translate-y-0.5 transition-all duration-300">Apply Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
