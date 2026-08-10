import logoImg from '../../assets/logo/logo2.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--blue-900)] to-[#060d3a] text-[#a0a6cc] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-[1.5fr_1fr_1.5fr_1fr] md:grid-cols-2 gap-x-12 gap-y-16">

        {/* Column 1: Brand & HQ */}
        <div className="flex flex-col gap-6">
          <a href="/"><img src={logoImg} alt="Catalyst Education" className="h-11 w-auto object-contain self-start hover:scale-105 transition-transform duration-300 cursor-pointer" /></a>
          <p className="text-[15px] leading-relaxed text-[#c3c8eb]">
            India's leading commerce platform,built<br />to shape a better future.
          </p>
          <div className="bg-white/5 rounded-[8px] p-6 border border-white/10 mt-2">
            <h5 className="text-white font-bold text-lg mb-2">Head Quarters</h5>
            <p className="text-[14px] leading-relaxed text-[#a0a6cc]">
              Happy Tower, Bypass Junction,<br />Mankave, Kozhikode, Kerala 673007
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white/80 hover:text-white"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.78 2.78 0 00-1.94 1.94C1 8.14 1 12 1 12s0 3.86.48 5.58a2.78 2.78 0 001.94 1.94C5.12 20 12 20 12 20s6.88 0 8.6-.48a2.78 2.78 0 001.94-1.94C23 15.86 23 12 23 12s0-3.86-.46-5.58zM9.54 15.19V8.81L15.12 12l-5.58 3.19z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transition-all duration-300">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-[17px] mb-7 border-b-2 border-blue-500 inline-block pb-1">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Blog & Insights', 'Campus Gallery', 'Contact Support'].map((link, i) => (
              <li key={i}>
                <a href="#" className="group flex items-center gap-2.5 hover:text-white hover:translate-x-1.5 transition-all duration-300 text-[14px]">
                  <span className="text-blue-500/80 font-bold text-lg leading-none mt-[-2px]">›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Courses */}
        <div>
          <h4 className="text-white font-bold text-[17px] mb-7 border-b-2 border-blue-500 inline-block pb-1">Our Courses</h4>
          <ul className="space-y-4">
            {['CMA USA', 'CMA India', 'ACCA', 'Chartered Accountant', 'Company Secretary', 'Enrolled Agent'].map((link, i) => (
              <li key={i}>
                <a href="#" className="group flex items-center gap-2.5 hover:text-white hover:translate-x-1.5 transition-all duration-300 text-[14px]">
                  <span className="text-blue-500/80 font-bold text-lg leading-none mt-[-2px]">›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Campuses */}
        <div>
          <h4 className="text-white font-bold text-[17px] mb-7 border-b-2 border-blue-500 inline-block pb-1">Campuses</h4>
          <ul className="flex flex-col">
            {['Calicut', 'Vadakara', 'Kannur', 'Manjeri', 'Kottakkal', 'Perinthalmanna', 'Thrissur', 'Kochi', 'Edappal'].map((campus, i) => (
              <li key={i} className="border-b border-white/5 last:border-0 py-3.5 first:pt-0">
                <a href="#" className="flex items-center justify-between hover:text-white hover:translate-x-1.5 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <svg className="w-[15px] h-[15px] text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="font-semibold text-white group-hover:text-blue-300 text-[14px]">{campus}</span>
                  </div>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-black/20 py-6 text-center text-[13px] text-[#a0a6cc] border-t border-white/5">
        © 2026 Catalyst Hub. All Rights Reserved. <span className="mx-3 text-white/10">|</span> <a href="https://techbrein.com/" className="hover:text-blue-400 hover:underline transition-all duration-300">Developed by TechBrein</a>
      </div>
    </footer>
  );
}
