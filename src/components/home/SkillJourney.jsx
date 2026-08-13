import { motion, useReducedMotion } from 'framer-motion';
import step1 from '../../assets/Skill-j/1.png';
import step2 from '../../assets/Skill-j/2.png';
import step3 from '../../assets/Skill-j/3.png';
import step4 from '../../assets/Skill-j/4.png';

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
    <section className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">

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
              <div className="relative h-[520px] rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(15,23,42,0.18)] overflow-hidden">

                {/* Default layer */}
                <div className="absolute inset-0 flex flex-col transition-opacity duration-300 ease-out group-hover:opacity-0">
                  {/* Image panel */}
                  <div className="relative m-3 mb-0 h-[190px] shrink-0 rounded-[20px] bg-gradient-to-b from-[#EFF4FF] to-[#F8FAFC] flex items-center justify-center overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
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
                <div className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:pointer-events-auto">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1E3A8A] to-[#0F1F4D]">
                    <img
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      className="w-[72%] h-[72%] object-contain transition-transform duration-500 ease-out scale-95 group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs font-bold text-[var(--blue-900)] shadow-sm">
                    {step.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10">
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
