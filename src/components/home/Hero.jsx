import { useState, useEffect } from 'react';
import heroMan1 from '../../assets/banner/5.webp';
import heroMan2 from '../../assets/banner/2.webp';
import ScrollReveal from '../ui/ScrollReveal';
import { Globe, TrendingUp, Landmark, BookOpen, Calculator, Briefcase, Building2, GraduationCap, ClipboardCheck, PieChart, ChevronRight } from 'lucide-react';

import logoAig from '../../assets/logo-slider/AIG-Logo.webp';
import logoAon from '../../assets/logo-slider/aon.webp';
import logoAxa from '../../assets/logo-slider/axa.webp';
import logoCapgemini from '../../assets/logo-slider/capgemini.webp';
import logoCaterpillar from '../../assets/logo-slider/caterpiller.webp';
import logoEy from '../../assets/logo-slider/ey.webp';
import logoFlextronics from '../../assets/logo-slider/flextronics.webp';
import logoJpmorgan from '../../assets/logo-slider/JP.webp';
import logoKpmg from '../../assets/logo-slider/KPMG.webp';
import logoMaersk from '../../assets/logo-slider/maersk.webp';
import logoMetlife from '../../assets/logo-slider/MetLife.webp';
import logoPhilips from '../../assets/logo-slider/PHG.webp';
import logoTata from '../../assets/logo-slider/TATA.webp';
import logoVmware from '../../assets/logo-slider/vmware2.webp';

const sliderLogos = [
  logoAig, logoAon, logoAxa, logoCapgemini, logoCaterpillar, logoEy, logoFlextronics,
  logoJpmorgan, logoKpmg, logoMaersk, logoMetlife, logoPhilips, logoTata, logoVmware
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroMan1, heroMan2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home2" className="relative overflow-hidden bg-[#F3F5FD]">
      

      {/* NEW CAREER PATHS SECTION */}
      <div className="w-[98%] mx-auto px-6 lg:px-12 xl:px-16 pb-12 lg:pb-1 relative z-20 mt-8 ">
        <ScrollReveal delay={350}>
          <p className="text-[11px] font-bold tracking-widest text-[#1428A0] uppercase mb-4">
            Explore Your Career Path
          </p>
        </ScrollReveal>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollReveal delay={400}>
            <div className="group relative p-4 rounded-xl border border-[var(--blue-100)] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(21,94,172,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-50)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Globe size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1428A0] transition-colors">CMA USA</h3>
                </div>
                <p className="text-xs text-[var(--slate-500)]">Global Management Accounting</p>
              </div>
              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4 z-20">
                <a href="#courses"><span className="text-xs font-semibold pl-1">Explore</span></a>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <div className="group relative p-4 rounded-xl border border-[var(--blue-100)] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(21,94,172,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-50)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <TrendingUp size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1428A0] transition-colors">CMA India</h3>
                </div>
                <p className="text-xs text-[var(--slate-500)]">Cost & Management Accounting</p>
              </div>
              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4 z-20">
                <a href="#courses"><span className="text-xs font-semibold pl-1">Explore</span></a>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="group relative p-4 rounded-xl border border-[var(--blue-100)] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(21,94,172,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-50)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Landmark size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1428A0] transition-colors">ACCA</h3>
                </div>
                <p className="text-xs text-[var(--slate-500)]">Global Accounting Qualification</p>
              </div>
              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4 z-20">
                <a href="#courses"><span className="text-xs font-semibold pl-1">Explore</span></a>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <div className="group relative p-4 rounded-xl border border-[var(--blue-100)] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(21,94,172,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-50)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <BookOpen size={16} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1428A0] transition-colors">Commerce & Accounting</h3>
                </div>
                <p className="text-xs text-[var(--slate-500)]">Strong Foundation for Careers</p>
              </div>
              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4 z-20">
                <a href="#courses"><span className="text-xs font-semibold pl-1">Explore</span></a>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>


      </div>
      <div className="w-full mx-auto px-6 lg:px-2 xl:px-20 pb-12 lg:pb-2 relative z-20">
        <ScrollReveal delay={800}>
          <div className="mt-14">
            <p className="eyebrow !bg-transparent !border-none !p-0 !text-[#1428A0] mb-8">Our Students Placed At</p>
            <div className="logo-slider w-[97%]  mx-auto">
              <div className="logo-track items-center">
                {sliderLogos.map((logo, idx) => (
                  <img key={`logo-1-${idx}`} src={logo} alt="Company Logo" loading="lazy" decoding="async" className="h-12 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                ))}
                {sliderLogos.map((logo, idx) => (
                  <img key={`logo-2-${idx}`} src={logo} alt="Company Logo" loading="lazy" decoding="async" className="h-12 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
       
      </div>
    </section>
  );
}