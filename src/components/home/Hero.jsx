import { useState, useEffect } from 'react';
import heroMan1 from '../../assets/banner/1.png';
import heroMan2 from '../../assets/banner/2.png';
import ScrollReveal from '../ui/ScrollReveal';
import { Globe, TrendingUp, Landmark, BookOpen, Calculator, Briefcase, Building2, GraduationCap, ClipboardCheck, PieChart, ChevronRight } from 'lucide-react';

import logoAig from '../../assets/logo-slider/AIG-Logo.png';
import logoAon from '../../assets/logo-slider/aon.jpeg';
import logoAxa from '../../assets/logo-slider/axa.jpeg';
import logoCapgemini from '../../assets/logo-slider/capgemini.jpeg';
import logoCaterpillar from '../../assets/logo-slider/caterpiller.jpeg';
import logoEy from '../../assets/logo-slider/ey.jpeg';
import logoFlextronics from '../../assets/logo-slider/flextronics.jpeg';
import logoJpmorgan from '../../assets/logo-slider/JP.png';
import logoKpmg from '../../assets/logo-slider/KPMG.png';
import logoMaersk from '../../assets/logo-slider/maersk.jpeg';
import logoMetlife from '../../assets/logo-slider/MetLife.png';
import logoPhilips from '../../assets/logo-slider/PHG.png';
import logoTata from '../../assets/logo-slider/TATA.png';
import logoVmware from '../../assets/logo-slider/vmware2.png';

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
    <section id="home" className="relative overflow-hidden bg-[#F3F5FD] dot-grid">
      <div className="max-w-[95%] mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-12 lg:pb-28 relative flex flex-col lg:flex-row gap-16 lg:items-start">
        <div className="min-w-0 flex-1">
          <ScrollReveal type="badge" delay={0}>
            <p className="eyebrow !bg-transparent !border-none !p-0 mb-5">India's No.1 Commerce &amp; Accounting Institute</p>
          </ScrollReveal>

          <ScrollReveal type="heading" delay={150}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.08] tracking-tight" style={{ color: 'var(--blue-900)' }}>
              Build a high-performing commerce career —
              <span className="blue-text">CMA&nbsp;USA, CMA&nbsp;India &amp; ACCA</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal type="subtitle" delay={300}>
            <p className="mt-6 text-base sm:text-lg max-w-3xl leading-relaxed" style={{ color: 'var(--slate-600)' }}>
              Catalyst guides students across Kerala and India into future-defining professional
              commerce careers, with expert faculty, industry-aligned training and a placement
              record built over a decade.
            </p>
          </ScrollReveal>

          <ScrollReveal type="button" delay={700}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#courses" className="inline-block focus-ring rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 hover:-translate-y-2 transition-all duration-500 ease-out bg-[#1428A0] hover:bg-[var(--blue-900)]">Get Started</a>
              <a href="#contact" className="inline-block focus-ring rounded-lg px-7 py-3.5 bg-white text-sm font-semibold border text-[#1428A0] hover:text-[#1428A0] border-[var(--blue-100)] hover:border-[#1428A0]/30 hover:bg-[#1428A0]/5 hover:-translate-y-2 transition-all duration-500 ease-out">Find a Coaching Centre&nbsp;→</a>
            </div>
          </ScrollReveal>


        </div>

        <ScrollReveal type="image" direction="left" delay={300} className="relative mx-auto  w-full max-w-md lg:mx-0 lg:w-[480px] lg:shrink-0 mt-16 lg:mt-[-40px]">

          <div className="relative w-full aspect-square  flex items-center justify-center">
            {/* Light Blue Circle Background */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#ebf3ff] to-[#d6e8ff] rounded-full z-0"></div>

            {/* Back half of the 3D Ring */}
            <svg viewBox="0 0 400 400" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] z-0" style={{ transform: 'rotate(-15deg)' }}>
              <path d="M 40,200 A 160,80 0 0,1 360,200" fill="none" stroke="#d4e4fc" strokeWidth="28" strokeLinecap="round" opacity="0.8" />
            </svg>

            {/* Person Image */}
            <div className="relative z-10 w-full h-full grid items-end justify-center overflow-hidden rounded-full px-6">
              <img
                src={images[0]}
                alt="Expert Faculty"
                className={`col-start-1 row-start-1 w-full object-contain object-bottom h-[130%] drop-shadow-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${currentImage === 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-2'}`}
              />
              <img
                src={images[1]}
                alt="Expert Faculty"
                className={`col-start-1 row-start-1 w-full object-contain object-bottom h-[130%] drop-shadow-xl transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${currentImage === 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-2'}`}
              />
            </div>

            {/* Front half of the 3D Ring */}
            <svg viewBox="0 0 400 400" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] z-20 drop-shadow-[0_20px_20px_rgba(21,94,172,0.4)]" style={{ transform: 'rotate(-15deg)' }}>
              <path d="M 360,200 A 160,80 0 0,1 40,200" fill="none" stroke="#093f7a" strokeWidth="28" strokeLinecap="round" />
              <path d="M 360,200 A 160,80 0 0,1 40,200" fill="none" stroke="#155eac" strokeWidth="24" strokeLinecap="round" />
            </svg>

            {/* Pill 1: Google */}
            <div className="absolute top-16 -left-10 bg-white rounded-full px-5 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center gap-3 animate-float-slow z-30">
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[15px] text-gray-900 leading-none">Google</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[13px] font-semibold text-gray-500">4.9</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" /></svg>
                </div>
              </div>
            </div>

            {/* Pill 2: Trustpilot */}
            <div className="absolute top-1/4 -right-12 bg-white rounded-full px-5 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center gap-3 animate-float-delayed z-30">
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03z" /></svg>
              </div>
              <div>
                <p className="font-bold text-[15px] text-gray-900 leading-none">Trustpilot</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[13px] font-semibold text-gray-500">4.8</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" /></svg>
                </div>
              </div>
            </div>

            {/* Pill 3: AmbitionBox */}
            <div className="absolute bottom-16 -right-6 bg-white rounded-full px-5 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center gap-3 animate-float-slow z-30" style={{ animationDelay: '2s' }}>
              <div className="w-7 h-7 flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#155eac"><path d="M21 7v10l-9 5-9-5V7l9-5 9 5z" fill="#155eac" /><path d="M12 12l4-2.5v5L12 17v-5z" fill="#3377cc" /><path d="M8 9.5l4-2.5 4 2.5v-5L12 2 8 4.5v5z" fill="#3377cc" /></svg>
              </div>
              <div>
                <p className="font-bold text-[15px] text-gray-900 leading-none">AmbitionBox</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[13px] font-semibold text-gray-500">5.0</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" /></svg>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>

      {/* NEW CAREER PATHS SECTION */}
      <div className="w-full mx-auto px-6 lg:px-12 xl:px-16 pb-12 lg:pb-16 relative z-20 mt-8 lg:mt-[-5rem]">
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
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={550}>
          <p className="text-[11px] font-bold tracking-widest text-[#1428A0] uppercase mb-3 mt-8">
            BUILD PRACTICAL SKILLS IN
          </p>
        </ScrollReveal>
        {/* Skills Micro-Row */}
        <ScrollReveal delay={600}>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Calculator size={14} />
                  </div>
                  Accounting
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Financial reporting</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <TrendingUp size={14} />
                  </div>
                  Finance
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Corporate strategy</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Landmark size={14} />
                  </div>
                  Taxation
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Direct & indirect tax</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Briefcase size={14} />
                  </div>
                  Business
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Management skills</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <Building2 size={14} />
                  </div>
                  Banking
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Financial systems</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <BookOpen size={14} />
                  </div>
                  Excel
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Data analysis</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <PieChart size={14} />
                  </div>
                  Analytics
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Business insights</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            <div className="group relative flex flex-1 flex-col items-start justify-center gap-1 px-5 py-5 pb-6 rounded-xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(21,94,172,0.08)] hover:-translate-y-0.5 hover:border-[#1428A0] transition-all cursor-default min-w-[180px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-[13px] font-bold text-gray-800 group-hover:text-[#1428A0] transition-colors">
                  <div className="w-7 h-7 rounded-md bg-[var(--blue-50)] text-[#1428A0] flex items-center justify-center group-hover:bg-[#1428A0] group-hover:text-white transition-all duration-300">
                    <GraduationCap size={14} />
                  </div>
                  Career Skills
                </div>
                <span className="text-[11px] text-[var(--slate-500)] ml-[40px]">Interview prep</span>
              </div>

              <button className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--blue-100)] bg-[var(--blue-50)] text-[#1428A0] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:border-[#1428A0] hover:shadow-md cursor-pointer absolute bottom-3 right-4">
                <span className="text-xs font-semibold pl-1">Explore</span>
                <div className="w-5 h-5 rounded-full bg-[#1428A0] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-1">
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div className="w-full mx-auto px-6 lg:px-2 xl:px-16 pb-12 lg:pb-16 relative z-20">
        <ScrollReveal delay={800}>
          <div className="mt-14">
            <p className="eyebrow !bg-transparent !border-none !p-0 !text-[#1428A0] mb-8">Our Students Placed At</p>
            <div className="logo-slider w-[97%]  mx-auto">
              <div className="logo-track items-center">
                {sliderLogos.map((logo, idx) => (
                  <img key={`logo-1-${idx}`} src={logo} alt="Company Logo" className="h-12 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                ))}
                {sliderLogos.map((logo, idx) => (
                  <img key={`logo-2-${idx}`} src={logo} alt="Company Logo" className="h-12 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={900}>
          <div className="mt-8">
            <div className="award-badge inline-flex items-center gap-4 rounded-lg pl-3 pr-6 py-3">
              <div className="award-badge-icon flex items-center justify-center rounded-lg w-11 h-11 shrink-0">
                <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                  <circle cx={12} cy={8} r="5.5" fill="#FFC93C" stroke="#0E1D6B" strokeWidth={1} />
                  <path d="M9 12.5L7 21l5-2.5L17 21l-2-8.5" fill="#FFC93C" stroke="#0E1D6B" strokeWidth={1} strokeLinejoin="round" />
                  <path d="M9.5 8.2l1.6 1.6 3.2-3.2" stroke="#0E1D6B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-display font-bold text-white text-base sm:text-lg leading-snug">Best ROCC Centre&nbsp;2x&nbsp;times</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}