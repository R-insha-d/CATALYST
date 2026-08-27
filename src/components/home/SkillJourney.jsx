import { motion, useReducedMotion } from 'framer-motion';
import step1 from '../../assets/Skill-j/1.webp';
import step2 from '../../assets/Skill-j/2.webp';
import step3 from '../../assets/Skill-j/3.webp';
import step4 from '../../assets/Skill-j/4.webp';

const TagIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>
);

const steps = [
  {
    image: step1,
    number: '01',
    title: 'Learn with Purpose',
    subtitle: 'Structured Learning',
    meta1: 'Step 01',
    meta2: 'Self-paced',
    description: 'Structured learning paths designed around practical skills and real-world development.'
  },
  {
    image: step2,
    number: '02',
    title: 'Build Real Projects',
    subtitle: 'Hands-on Practice',
    meta1: 'Step 02',
    meta2: 'Portfolio-ready',
    description: 'Turn what you learn into meaningful projects that strengthen your portfolio.'
  },
  {
    image: step3,
    number: '03',
    title: 'Develop Industry Skills',
    subtitle: 'Modern Tech Stack',
    meta1: 'Step 03',
    meta2: 'Industry tools',
    description: 'Practice modern tools, technologies, and workflows used in real development environments.'
  },
  {
    image: step4,
    number: '04',
    title: 'Move Toward Your Goals',
    subtitle: 'Career Growth',
    meta1: 'Step 04',
    meta2: 'Career-ready',
    description: 'Build confidence and skills that help you take the next step in your career.'
  }
];

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

  return (
    <section className="py-24 lg:pt-15 bg-[#F8FAFC] overflow-hidden relative z-10">
      <div className="w-[90%] mx-auto px-6 lg:px-0 relative">

        {/* Section Eyebrow */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="eyebrow uppercase">
              Skill Journey
            </span>
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-16 lg:mb-[100px]">
          <div className="text-left max-w-2xl flex flex-col justify-center py-2">
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
              className="mt-4 text-base sm:text-lg max-w-[90%]" style={{ color: 'var(--slate-600)' }}
            >
              Embark on a structured path designed to transform ambitious learners into industry-ready professionals. By mastering practical skills, building an impressive portfolio of real-world projects, and leveraging modern technologies, you'll take confident, actionable steps toward achieving your long-term career goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-8 sm:gap-12"
            >
              <div>
                <div className="font-display text-3xl font-bold text-[var(--blue-900)]">93%</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Placement Rate</div>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="font-display text-3xl font-bold text-[var(--blue-900)]">4.9/5</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Average Rating</div>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div>
                <div className="font-display text-3xl font-bold text-[var(--blue-900)]">50+</div>
                <div className="text-sm text-slate-500 font-medium mt-1">Hiring Partners</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col justify-center py-2"
          >
            <h3 className="font-display font-bold text-xl leading-tight text-[var(--blue-900)]">
              Accelerated Productivity
            </h3>
            <p className="text-sm text-slate-400 mt-1">A Proven 4-Step Process</p>
            <p className="text-sm text-slate-500 leading-relaxed mt-3">
              Master the four phases of your career journey. From purposeful learning and hands-on projects, to industry skill development and career growth, we guide you every step of the way.
            </p>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="leading-relaxed">Follow structured learning paths from foundational concepts to advanced techniques.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="leading-relaxed">Build practical projects that simulate real industry environments and challenges.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="leading-relaxed">Master the modern frameworks and technologies that top employers actively demand.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="leading-relaxed">Create a standout professional portfolio with impactful projects to showcase your expertise.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="leading-relaxed">Receive continuous career guidance, resume reviews, and targeted interview prep.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="px-6 py-2.5 rounded-full bg-[var(--blue-900)] text-white text-sm font-semibold transition-all duration-300 hover:bg-blue-800 shadow-[0_4px_12px_rgba(30,58,138,0.2)] hover:shadow-[0_6px_16px_rgba(30,58,138,0.3)] hover:-translate-y-0.5">
                Explore Curriculum
              </button>
            </div>
          </motion.div>
        </div>

        {/* Journey Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={cardVariants} className="group">
              <div className="relative h-[520px] rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(15,23,42,0.18)] overflow-hidden">

                {/* Default layer */}
                <div className="absolute inset-0 flex flex-col transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-[0.98]">
                  {/* Image panel */}
                  <div className="relative m-3 mb-0 h-[190px] shrink-0 rounded-[20px] bg-gradient-to-b from-[#EFF4FF] to-[#F8FAFC] flex items-center justify-center overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      className="w-[68%] h-[68%] object-contain"
                    />
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs font-bold text-[var(--blue-900)] shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pt-4 pb-6 min-h-0">
                    <h3 className="font-display font-bold text-xl leading-tight text-[var(--blue-900)] min-h-[3.5rem]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{step.subtitle}</p>

                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <TagIcon />
                        {step.meta1}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon />
                        {step.meta2}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed mt-3 line-clamp-2">
                      {step.description}
                    </p>

                    <button className="mt-auto w-full py-3 rounded-full bg-[var(--blue-900)] text-white text-sm font-semibold transition-colors duration-300 hover:bg-blue-800">
                      Explore Step
                    </button>
                  </div>
                </div>

                {/* Hover layer: full-bleed image with overlaid content */}
                <div className="absolute inset-0 scale-[1.04] opacity-0 pointer-events-none transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1E3A8A] to-[#0F1F4D]">
                    <img
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-[72%] h-[72%] object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] scale-95 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs font-bold text-[var(--blue-900)] shadow-sm">
                    {step.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10 translate-y-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                    <h3 className="font-display font-bold text-xl text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{step.subtitle}</p>

                    <div className="flex items-center gap-4 mt-4 text-sm text-white/90">
                      <span className="inline-flex items-center gap-1.5">
                        <TagIcon />
                        {step.meta1}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <ClockIcon />
                        {step.meta2}
                      </span>
                    </div>

                    <button className="mt-5 w-full py-3 rounded-full bg-white text-[var(--blue-900)] text-sm font-semibold transition-colors duration-300 hover:bg-slate-100">
                      Explore Step
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
