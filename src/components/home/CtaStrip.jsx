import bannerImg from '../../assets/event/event.jpg';
import ScrollReveal from '../ui/ScrollReveal';

export default function CtaStrip() {
  return (
    <section className="relative py-20 lg:py-28 bg-[var(--blue-900)] overflow-hidden">
      {/* Background Deep Glows for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[var(--blue-500)] opacity-30 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <ScrollReveal delay={0}>
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
              Start your professional journey with confidence
            </h2>
            <p className="mt-6 text-[17px] text-blue-50/80 leading-relaxed font-light">
              We're happy to present our range of professional and academic courses designed to help you move forward with confidence, whatever you're aiming for.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <a href="#courses" className="focus-ring rounded-lg px-8 py-4 text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-1 bg-white text-[var(--blue-900)] hover:bg-gray-50 flex items-center gap-2">
                View Courses
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="focus-ring rounded-lg px-8 py-4 text-[15px] font-bold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1">
                Call for Guidance
              </a>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="relative group">
            {/* Soft glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[24px] opacity-20 blur-2xl group-hover:opacity-40 transition duration-700"></div>
            
            <div className="relative rounded-2xl aspect-[4/3] lg:aspect-[16/11] overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-2 transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-[var(--blue-900)]/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
              <img src={bannerImg} alt="Catalyst Students" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
