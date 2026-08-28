import { useCallback, useEffect, useRef, useState, memo, cloneElement } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';

import abinavImg from '../../assets/banner-placed-img/abinav-NGkC8sgd.webp';
import afeefImg from '../../assets/banner-placed-img/afeef-Cf91BKIL.webp';
import ajnaImg from '../../assets/banner-placed-img/ajna-OThMqp0B.webp';
import musthafaImg from '../../assets/banner-placed-img/musthafa-CV3DXxZ-.webp';
import nidhaImg from '../../assets/banner-placed-img/nidha-apYWzof4.webp';
import nasmaImg from '../../assets/banner-placed-img/nasma-DUS84Z8f.webp';
import nishadImg from '../../assets/banner-placed-img/nishad-DknYHOMT.webp';
import samImg from '../../assets/banner-placed-img/sam-qWJmaWWB.webp';
import shabeehaImg from '../../assets/banner-placed-img/shabeeha-DTTRJdOv.webp';
import dilfaImg from '../../assets/banner-placed-img/dilfa-DqmQOTrP.webp';
import naajiyaImg from '../../assets/banner-placed-img/naajiya-CaVqfUB6.webp';
import jaseerImg from '../../assets/banner-placed-img/jaseer-CrcNYsE0.webp';
import rinshadImg from '../../assets/banner-placed-img/rinshad-D56J0_zc.webp';

// Reuses the project's existing placed-student portrait photos as the tile
// pool for the mosaic below, recycled across many more tiles than there are
// unique images.
const PORTRAIT_POOL = [
  abinavImg, afeefImg, ajnaImg, musthafaImg, nidhaImg, nasmaImg, nishadImg,
  samImg, shabeehaImg, dilfaImg, naajiyaImg, jaseerImg, rinshadImg,
];

const TOTAL_TILES = 160;

// Global flip cadence: every TICK_MS a random batch of tiles flips. Tuned
// so most of the wall visibly cycles over time, while still never flipping
// everything in one synchronized beat.
const TICK_MS = { min: 900, max: 2200 };
const TICK_MS_MOBILE = { min: 1400, max: 3200 };
const MAX_SIMULTANEOUS = 7;
const MAX_SIMULTANEOUS_MOBILE = 3;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickDifferentIndex(poolLength, excludeIndex) {
  if (poolLength <= 1) return 0;
  let idx;
  do {
    idx = randomInt(0, poolLength - 1);
  } while (idx === excludeIndex);
  return idx;
}

function buildInitialTiles() {
  const tiles = [];
  for (let i = 0; i < TOTAL_TILES; i++) {
    const imgA = randomInt(0, PORTRAIT_POOL.length - 1);
    const imgB = pickDifferentIndex(PORTRAIT_POOL.length, imgA);
    tiles.push({ id: i, imgA, imgB, rotationStep: 0 });
  }
  return tiles;
}

/**
 * A single mosaic cell. Holds two faces (front/back); whichever face is
 * currently hidden gets its image swapped before the tile is asked to spin,
 * so the flip never reveals a "pop" — only a smooth 3D turn into a new face.
 */
const PortraitTile = memo(function PortraitTile({ srcA, srcB, rotationStep, durationMs, reduceMotion }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ perspective: 900 }}>
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${reduceMotion ? 0 : rotationStep * 180}deg)`,
          transition: reduceMotion ? 'none' : `transform ${durationMs}ms cubic-bezier(0.65,0,0.35,1)`,
          willChange: 'transform',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img src={srcA} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" draggable="false" />
        </div>
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={srcB} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" draggable="false" />
        </div>
      </div>
    </div>
  );
});

function PortraitMosaic({ reduceMotion }) {
  const [tiles, setTiles] = useState(buildInitialTiles);
  const [durations] = useState(() =>
    Array.from({ length: TOTAL_TILES }, () => 650 + Math.round(Math.random() * 200))
  );
  const flippingRef = useRef(new Set());
  const unflipTimeoutsRef = useRef([]);
  const tickTimeoutRef = useRef(null);

  const triggerFlip = useCallback((tileIndex) => {
    setTiles((prev) => {
      const tile = prev[tileIndex];
      if (!tile) return prev;
      const showingA = tile.rotationStep % 2 === 0;
      const newPick = pickDifferentIndex(PORTRAIT_POOL.length, showingA ? tile.imgB : tile.imgA);
      const next = prev.slice();
      next[tileIndex] = {
        ...tile,
        imgA: showingA ? tile.imgA : newPick,
        imgB: showingA ? newPick : tile.imgB,
        rotationStep: tile.rotationStep + 1,
      };
      return next;
    });

    flippingRef.current.add(tileIndex);
    const duration = durations[tileIndex];
    const t = setTimeout(() => {
      flippingRef.current.delete(tileIndex);
    }, duration + 60);
    unflipTimeoutsRef.current.push(t);
  }, [durations]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const flippingSet = flippingRef.current;
    const isMobile = () => window.innerWidth < 768;

    const tick = () => {
      const mobile = isMobile();
      const { min, max } = mobile ? TICK_MS_MOBILE : TICK_MS;
      const delay = randomInt(min, max);

      tickTimeoutRef.current = setTimeout(() => {
        const cap = mobile ? MAX_SIMULTANEOUS_MOBILE : MAX_SIMULTANEOUS;
        const count = randomInt(1, cap);
        const candidates = [];
        let guard = 0;
        while (candidates.length < count && guard < count * 10) {
          guard++;
          const idx = randomInt(0, TOTAL_TILES - 1);
          if (!flippingSet.has(idx) && !candidates.includes(idx)) {
            candidates.push(idx);
          }
        }
        candidates.forEach(triggerFlip);
        tick();
      }, delay);
    };

    tick();

    return () => {
      if (tickTimeoutRef.current) clearTimeout(tickTimeoutRef.current);
      unflipTimeoutsRef.current.forEach(clearTimeout);
      unflipTimeoutsRef.current = [];
      flippingSet.clear();
    };
  }, [reduceMotion, triggerFlip]);

  return (
    <div
      className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-[repeat(13,minmax(0,1fr))] gap-[2px] sm:gap-[3px]"
      aria-hidden="true"
    >
      {tiles.map((tile, i) => (
        <div key={tile.id} className="aspect-[3/4]">
          <PortraitTile
            srcA={PORTRAIT_POOL[tile.imgA]}
            srcB={PORTRAIT_POOL[tile.imgB]}
            rotationStep={tile.rotationStep}
            durationMs={durations[i]}
            reduceMotion={reduceMotion}
          />
        </div>
      ))}
    </div>
  );
}

// The foreground content animates in once, as a group, when the section
// enters the viewport — then stays completely stable. The portrait mosaic
// behind it keeps flipping independently for as long as the page is open.
const contentContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const contentItemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const panelContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
};

const panelItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const panelContainerVariantsReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

const panelItemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

// Review-platform ratings, each its own floating white card (CSS float
// animation from index.css, same treatment as the award badge used to have).
const reviewSources = [
  {
    name: 'Google',
    rating: '4.9',
    floatClass: 'animate-float-slow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: 'Trustpilot',
    rating: '4.8',
    floatClass: 'animate-float-delayed',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03z" /></svg>,
  },
  {
    name: 'AmbitionBox',
    rating: '5.0',
    floatClass: 'animate-float-slow',
    style: { animationDelay: '1.2s' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="#1967D2" />
        <path d="M12 6.5l5.2 3v5l-5.2 3-5.2-3v-5l5.2-3z" fill="#ffffff" fillOpacity="0.95" />
      </svg>
    ),
  },
  // Placeholder — swap in the real Justdial rating before launch.
  {
    name: 'Justdial',
    rating: '4.7',
    floatClass: 'animate-float-delayed',
    style: { animationDelay: '0.6s' },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="#E52527" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="sans-serif" fill="#ffffff">J</text>
      </svg>
    ),
  },
];

// Placeholder testimonials (no matching real quotes/consented photos exist
// in the project yet) — swap in verified student quotes before launch.
// Initials-only avatars are used deliberately so no real student photo gets
// attached to text they didn't actually say.
const testimonials = [
  { quote: 'The training, mentorship, and placement support helped me kickstart my career in the right direction.', name: 'Amina Fathima', role: 'Software Engineer at TCS', initials: 'AF' },
  { quote: 'The faculty go beyond the syllabus — real case studies made every concept click before exam day.', name: 'Rahul Menon', role: 'CMA Articleship Trainee', initials: 'RM' },
  { quote: 'From classroom training to campus placement, the support never stopped until I had an offer in hand.', name: 'Fathima Zubair', role: 'Accounts Executive', initials: 'FZ' },
];

// Auto-advancing testimonial carousel with clickable dots. Autoplay is
// skipped under prefers-reduced-motion; the dots stay fully usable either way.
function TestimonialCarousel({ itemVariants }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const active = testimonials[index];

  const slideTransition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

  return (
    <motion.div variants={itemVariants} className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur-md overflow-hidden">
      <Quote size={20} className="text-[#3A78FF]" fill="currentColor" fillOpacity={0.15} />

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={`quote-${index}`}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: -40 }}
            transition={slideTransition}
            className="text-blue-50/90 text-[13px] leading-relaxed mt-2 min-h-[38px]"
          >
            {active.quote}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${index}`}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -40 }}
              transition={slideTransition}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {active.initials}
              </div>
              <div>
                <p className="text-white text-[12.5px] font-bold leading-none">{active.name}</p>
                <p className="text-[#7FD1FF] text-[11px] mt-1">{active.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1.5 shrink-0" role="tablist" aria-label="Student testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === index ? 'w-4 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// "Where Talent Meets Opportunity" panel: a heading + 2x2 stat grid + a
// testimonial card, all on one dark gradient panel that floats over the
// portrait mosaic. Reuses the same blue gradient already used elsewhere in
// this section (the award badge) rather than introducing a new color.
function TalentOpportunityPanel({ itemVariants }) {
  return (
    <div
      className="rounded-3xl shadow-[0_24px_60px_rgba(5,10,40,0.45)] p-6 lg:p-7 backdrop-blur-8xl"
      style={{
          background: 'linear-gradient(160deg, #0b144063 60%, #14286b61 70%, #1b40c46c 100%)',
        }}
    >
     

      <div className="grid grid-cols-2 gap-2.5 mt-6">
        {reviewSources.map((source) => (
          <motion.div
            key={source.name}
            variants={itemVariants}
            style={source.style}
            className={`flex items-center gap-2 rounded-xl bg-white pl-2 pr-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${source.floatClass}`}
          >
            <div className="w-7 h-7 flex items-center justify-center shrink-0">
              {cloneElement(source.icon, { width: 14, height: 14 })}
            </div>
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-[11px] leading-none truncate">{source.name}</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-gray-500 text-[10px] font-semibold leading-none">{source.rating}</span>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" /></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Award badge — blue gradient treatment, distinct from the white review cards above. */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 rounded-2xl pl-3 pr-5 py-3 mt-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        style={{ background: 'linear-gradient(135deg, #0A1A70 0%, #2547E0 100%)' }}
      >
        <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
          <Award width={20} height={20} color="#FFC107" fill="#FFC107" strokeWidth={1.5} />
        </div>
        <p className="font-bold text-white text-[15px] leading-snug whitespace-nowrap">
          Best ROCC Centre 2x times
        </p>
      </motion.div>

      <TestimonialCarousel itemVariants={itemVariants} />
    </div>
  );
}

export default function Hero2() {
  const prefersReducedMotion = useReducedMotion();
  const avatarPool = [abinavImg, nidhaImg, jaseerImg];
  const itemVariants = prefersReducedMotion ? contentItemVariantsReduced : contentItemVariants;
  const panelStagger = prefersReducedMotion ? panelContainerVariantsReduced : panelContainerVariants;
  const panelItemVariant = prefersReducedMotion ? panelItemVariantsReduced : panelItemVariants;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#070E3C] min-h-[560px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-screen"
    >
      <PortraitMosaic reduceMotion={prefersReducedMotion} />

      {/* Blue duotone treatment: preserves photo luminosity, replaces hue/saturation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(160deg, #0B1440 0%, #14286B 45%, #1B3FC4 100%)',
          mixBlendMode: 'color',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: '#050B33', mixBlendMode: 'multiply', opacity: 0.55 }}
      />

      {/* Soft center-left glow so the wall doesn't feel flat */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 28% 45%, rgba(58,120,255,0.28), transparent 60%)' }}
      />

      {/* Stronger legibility darkening behind the copy, fading into the wall on the right.
          The left/content side stays darker than the outer edge so the headline reads
          clearly while the portraits underneath remain recognizable throughout. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,11,42,0.85) 0%, rgba(5,11,42,0.62) 45%, rgba(5,11,42,0.32) 78%, rgba(5,11,42,0.12) 100%)',
        }}
      />

      {/* Bottom vignette blending into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-[#050B33]" />

      {/* Foreground content: animates in once as a staggered group, then stays fixed
          while the portrait mosaic behind it keeps flipping independently. */}
      <div className="relative z-10 max-w-[95%]  mx-auto px-6 lg:px-10 min-h-[560px] sm:min-h-[640px] md:min-h-[720px] lg:min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between py-16 lg:py-24">
        <motion.div
          className="w-full lg:max-w-[55%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentContainerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm text-[11px] font-bold tracking-[0.2em] text-blue-100 uppercase mb-6"
          >
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[#3A78FF]" />   */}
            India's No.1 Commerce & Accounting Institute
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl leading-[1.08] tracking-tight text-white leading-[1.02] tracking-tight mb-6"
            style={{ textShadow: '0 4px 28px rgba(2,6,30,0.45)' }}
          >
            Build A High Performing Commerce Career — 
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#9ED5FF]">
             CMA USA, CMA India & ACCA
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-blue-100/85 text-base sm:text-lg leading-relaxed mb-9 max-w-lg"
          >
            Catalyst guides students across Kerala and India into future-defining professional commerce careers, with expert faculty, industry-aligned training and a placement record built over a decade.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
            <a
              href="#stories"
              className="focus-ring group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-[var(--blue-900)] bg-white shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_34px_rgba(255,255,255,0.28)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Success Stories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Talk to an Expert
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-3">
              {avatarPool.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#0E1D6B]"
                />
              ))}
            </div>
            <p className="text-sm text-blue-100/90">
              <span className="font-bold text-white">4.9★</span> rated by 10,000+ students
            </p>
          </motion.div>

        </motion.div>

        {/* "Where Talent Meets Opportunity" panel — sits to the left of the
            portrait mosaic's remaining visible area, stacked below the headline
            on narrower screens and side-by-side with it from lg up. Normal flex
            flow (not absolutely positioned) so it never overlaps the copy. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={panelStagger}
          className="w-full lg:w-[380px] xl:w-[420px] lg:shrink-0 mt-10 lg:mt-0"
        >
          <TalentOpportunityPanel itemVariants={panelItemVariant} />
        </motion.div>
      </div>
    </section>
  );
}
