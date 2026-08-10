import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

export default function SkillJourney() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = prefersReducedMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  } : {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.8
      }
    }
  };

  const Icon1 = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );

  const Icon2 = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );

  const Icon3 = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );

  const Icon4 = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l4.5 4.5m0 0l-4.5 4.5M16.5 12H7.5m13.5 0c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
    </svg>
  );

  const IconContainer = ({ children }) => (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#EFF4F9] shadow-[0_8px_16px_rgba(30,58,138,0.04),inset_0_1px_2px_rgba(255,255,255,1)] border border-white flex items-center justify-center text-[#1E3A8A] mb-8 relative z-10 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(30,58,138,0.12),inset_0_1px_2px_rgba(255,255,255,1)] group-hover:text-blue-600">
      {children}
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-[100px]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}

          >
            <span className="eyebrow mb-3 uppercase">
              Skill Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--blue-900)' }}
          >
            Your Journey from Learning to <span className="blue-text">
              <br />Career Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-base sm:text-lg" style={{ color: 'var(--slate-600)' }}
          >
            Learn practical skills, build real projects, and take confident steps toward your career goals.
          </motion.p>
        </div>

        {/* Minimal Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Card 1: Large (Left) */}
          <motion.div variants={cardVariants} className="md:col-span-7 group">
            <div className="h-full bg-white hover:bg-slate-50/50 rounded-[24px] lg:rounded-[8px] p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-start">

              {/* Concentric Circles Decor */}
              <div className="absolute top-0 right-0 h-full w-[60%] overflow-hidden pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <div className="absolute top-[50%] right-[0%] -translate-y-1/2 translate-x-[40%] w-[120%] aspect-square border-[1.5px] border-slate-100 rounded-full"></div>
                <div className="absolute top-[50%] right-[0%] -translate-y-1/2 translate-x-[30%] w-[90%] aspect-square border-[1.5px] border-slate-100 rounded-full"></div>
                <div className="absolute top-[50%] right-[0%] -translate-y-1/2 translate-x-[20%] w-[60%] aspect-square border-[1.5px] border-slate-100 rounded-full"></div>
              </div>

              {/* Dot Grid Decor */}
              <div className="absolute right-8 bottom-8 w-24 h-24 bg-[radial-gradient(circle,#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none transition-all duration-700 ease-out group-hover:scale-[1.15] group-hover:opacity-60"></div>

              <div className="relative z-10">
                <IconContainer><Icon1 /></IconContainer>
                <h3 className="font-display font-bold text-3xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Learn with Purpose</h3>
                <div className="w-8 group-hover:w-16 transition-all duration-300 ease-out h-[3px] bg-blue-600 rounded-full my-5"></div>
                <p className="text-[17px] text-slate-500 leading-relaxed max-w-sm">Structured learning paths designed around practical skills and real-world development.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Small (Right) */}
          <motion.div variants={cardVariants} className="md:col-span-5 group">
            <div className="h-full bg-white hover:bg-slate-50/50 rounded-[24px] lg:rounded-[8px] p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-start">

              {/* Dot Grid Decor */}
              <div className="absolute right-8 top-8 w-24 h-24 bg-[radial-gradient(circle,#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none transition-all duration-700 ease-out group-hover:scale-[1.15] group-hover:opacity-60"></div>

              <div className="relative z-10">
                <IconContainer><Icon2 /></IconContainer>
                <h3 className="font-display font-bold text-3xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Build Real Projects</h3>
                <div className="w-8 group-hover:w-16 transition-all duration-300 ease-out h-[3px] bg-blue-600 rounded-full my-5"></div>
                <p className="text-[17px] text-slate-500 leading-relaxed max-w-sm">Turn what you learn into meaningful projects that strengthen your portfolio.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Small (Left) */}
          <motion.div variants={cardVariants} className="md:col-span-4 group">
            <div className="h-full bg-white hover:bg-slate-50/50 rounded-[24px] lg:rounded-[8px] p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-start">

              {/* Dot Grid Decor */}
              <div className="absolute left-8 bottom-8 w-24 h-24 bg-[radial-gradient(circle,#cbd5e1_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-40 pointer-events-none transition-all duration-700 ease-out group-hover:scale-[1.15] group-hover:opacity-60"></div>

              <div className="relative z-10">
                <IconContainer><Icon3 /></IconContainer>
                <h3 className="font-display font-bold text-3xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Develop Industry Skills</h3>
                <div className="w-8 group-hover:w-16 transition-all duration-300 ease-out h-[3px] bg-blue-600 rounded-full my-5"></div>
                <p className="text-[16px] text-slate-500 leading-relaxed">Practice modern tools, technologies, and workflows used in real development environments.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Large (Right) */}
          <motion.div variants={cardVariants} className="md:col-span-8 group">
            <div className="h-full bg-white hover:bg-slate-50/50 rounded-[24px] lg:rounded-[8px] p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-start">

              {/* Path and Flag Decor */}
              <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden rounded-br-[32px] transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-x-1 group-hover:-translate-y-1">
                <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-[90%] h-full object-cover object-right-bottom">
                  <path d="M0 250 C100 200 200 120 320 100 C340 96 350 92 350 85" stroke="#F1F5F9" strokeWidth="50" strokeLinecap="round" />
                  <g transform="translate(340, 45)">
                    <path d="M0 45 L0 0" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0 2 L22 8 L0 14 Z" fill="#2563EB" />
                    <rect x="-6" y="43" width="12" height="4" rx="2" fill="#2563EB" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10">
                <IconContainer><Icon4 /></IconContainer>
                <h3 className="font-display font-bold text-3xl text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors duration-300">Move Toward Your Goals</h3>
                <div className="w-8 group-hover:w-16 transition-all duration-300 ease-out h-[3px] bg-blue-600 rounded-full my-5"></div>
                <p className="text-[17px] text-slate-500 leading-relaxed max-w-sm">Build confidence and skills that help you take the next step in your career.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
