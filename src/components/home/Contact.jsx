import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[var(--blue-50)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal delay={0}>
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}>Get in touch — take the first step today</h2>
            <p className="mt-4" style={{ color: 'var(--slate-600)' }}>Connect with our team for clear guidance on commerce and accounting programmes.</p>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <ScrollReveal delay={150}>
            <div className="relative rounded-lg p-10 lg:p-12 text-white h-full overflow-hidden shadow-2xl shadow-blue-900/10 bg-gradient-to-br from-[var(--blue-700)] to-[#0A1A7D]">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-400 opacity-20 blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-300 opacity-15 blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <p className="eyebrow !text-blue-200 !bg-white/10 !border-white/20 mb-4">Quick Contact</p>
                <h3 className="font-display font-bold text-3xl sm:text-4xl mb-4 leading-tight">How can we help?</h3>
                <p className="text-[15px] text-blue-50/80 leading-relaxed max-w-sm mb-12">Our team is available to answer your questions, schedule counselling, and share course details.</p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mb-1">Call Us</p>
                      <p className="font-semibold text-lg tracking-wide">+91 98874 46874</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4zM22 6l-10 7L2 6" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mb-1">Email Us</p>
                      <p className="font-semibold text-[17px] tracking-wide">hello@catalystedu.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm">
                      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx={12} cy={12} r={10} /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mb-1">Working Hours</p>
                      <p className="font-semibold text-[17px] tracking-wide">Mon – Sat, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <form className="rounded-lg bg-white border border-[var(--line)] p-8 lg:p-12 grid sm:grid-cols-2 gap-x-6 gap-y-7 shadow-[0_15px_40px_-15px_rgba(20,40,160,0.1)] h-full">
              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-[var(--slate-600)] uppercase tracking-wider mb-2.5 block">Your Name</label>
                <input type="text" placeholder="Full name" className="w-full rounded-lg border border-gray-200 bg-[#F8FAFC] px-4 py-3.5 text-[15px] focus:bg-white focus:border-[var(--blue-500)] focus:ring-4 focus:ring-[var(--blue-500)]/10 transition-all outline-none" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs font-bold text-[var(--slate-600)] uppercase tracking-wider mb-2.5 block">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full rounded-lg border border-gray-200 bg-[#F8FAFC] px-4 py-3.5 text-[15px] focus:bg-white focus:border-[var(--blue-500)] focus:ring-4 focus:ring-[var(--blue-500)]/10 transition-all outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-[var(--slate-600)] uppercase tracking-wider mb-2.5 block">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-gray-200 bg-[#F8FAFC] px-4 py-3.5 text-[15px] focus:bg-white focus:border-[var(--blue-500)] focus:ring-4 focus:ring-[var(--blue-500)]/10 transition-all outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-[var(--slate-600)] uppercase tracking-wider mb-2.5 block">Your Message</label>
                <textarea rows={4} placeholder="Type your query here..." className="w-full rounded-lg border border-gray-200 bg-[#F8FAFC] px-4 py-3.5 text-[15px] focus:bg-white focus:border-[var(--blue-500)] focus:ring-4 focus:ring-[var(--blue-500)]/10 transition-all outline-none resize-y min-h-[120px]" defaultValue={""} />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg px-9 py-4 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(20,40,160,0.25)] hover:shadow-[0_10px_25px_rgba(20,40,160,0.35)] hover:-translate-y-0.5 transition-all duration-300 bg-[var(--blue-700)] hover:bg-[var(--blue-900)]">
                  Send Enquiry
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
