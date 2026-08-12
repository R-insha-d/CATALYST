import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollReveal from '../ui/ScrollReveal';
import { DarkGradientBg } from '../ui/ElegantDarkPattern';

// Custom sub-component for the interactive 3D parallax card
function PremiumCourseCard({ feat, idx }) {
  const cardRef = useRef(null);

  // Motion values for pointer tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for parallax
  const mouseXSpring = useSpring(x, { stiffness: 70, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 70, damping: 25 });

  // Map pointer position to rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-3.5, 3.5]);

  // Map pointer for inner light reflection
  const lightX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const lightY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalize coordinates from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal type="card" delay={150 + idx * 100} className="h-[460px] perspective-1000 ">
      <div className="h-full hover:-translate-y-2 transition-all duration-500 ease-out">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="h-full group relative samsung-glass-card !rounded-[12px] p-8 cursor-pointer flex flex-col z-10"
        >
          {/* Pointer-following reflection glow */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1px]"
            style={{
              background: useTransform(
                () => `radial-gradient(circle at ${lightX.get()}% ${lightY.get()}%, rgba(36, 91, 149, 0.06) 0%, transparent 60%)`
              )
            }}
          />

          {/* Outer subtle glow on hover */}
          <div className="absolute -inset-1 rounded-[10px] bg-gradient-to-r from-[#1F5BFF] to-[#9ED5FF] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
            {/* Top Row: Badge & Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F5BFF]/30 to-[#0036D9]/10 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 backdrop-blur-md">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#9ED5FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  {feat.icon}
                </svg>
              </div>
              <div className="samsung-badge px-4 py-1.5 flex items-center gap-2 text-white text-xs font-semibold tracking-wider group-hover:-translate-y-1 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FB6FF] animate-pulse"></span>
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>

            <h4 className="font-display font-bold text-2xl text-white mb-3 tracking-tight group-hover:text-[#9ED5FF] transition-colors duration-300">
              {feat.title}
            </h4>
            <p className="text-[15px] leading-relaxed text-[#B0C4DE] font-light flex-grow">
              {feat.desc}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="samsung-primary-btn w-full py-3.5 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-300 group-hover:scale-[1.02]">
                Enroll Now
              </button>
              <button className="samsung-secondary-btn w-full py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide">
                View Syllabus
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function Features() {
  const features = [
    {
      title: "Expert Faculty Pool",
      desc: "500+ practitioner-educators bringing real industry experience into the classroom.",
      icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    },
    {
      title: "100% Placement Support",
      desc: "Dedicated placement cell working with top firms across finance and accounting.",
      icon: <path d="M20 6L9 17l-5-5" />
    },
    {
      title: "Integrated B.Com Options",
      desc: "Combine your degree with professional courses for a stronger, faster career path.",
      icon: <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5zm4 2v5c3 3 9 3 12 0v-5" />
    },
    {
      title: "Industry-Standard Projects",
      desc: "Applied case studies and live projects that mirror real workplace scenarios.",
      icon: <path d="M3 3v18h18M7 15l4-4 4 4 5-6" />
    },
    {
      title: "Advanced Infrastructure",
      desc: "Modern, tech-enabled campuses designed for focused, distraction-free learning.",
      icon: <path d="M4 4h16v16H4zM4 9h16M9 4v16" />
    },
    {
      title: "Affordable Fee Options",
      desc: "Flexible instalments and scholarships so cost never blocks the right career choice.",
      icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    }
  ];

  return (
    <DarkGradientBg className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal type="badge" delay={0}>
            <div className="samsung-badge rounded-[8px] inline-flex mb-6 text-[#9ED5FF] px-5 py-2 text-sm font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(31,91,255,0.3)]" style={{ borderRadius: "8px" }}>
              Next-Gen Education
            </div>
          </ScrollReveal>
          <ScrollReveal type="heading" delay={150}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight tracking-tight">
              Experience the Future of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FB6FF] to-[#ffffff]">Commerce Training</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal type="subtitle" delay={300}>
            <p className="text-lg text-[#B0C4DE] font-light leading-relaxed max-w-xl mx-auto">
              Immerse yourself in a premium learning ecosystem designed to accelerate your career trajectory with cutting-edge tools and elite mentorship.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative mt-8 px-0 md:px-12 lg:px-20">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.features-nav-prev',
              nextEl: '.features-nav-next',
            }}
            className="features-swiper "
          >
            {features.map((feat, idx) => (
              <SwiperSlide key={idx} className="h-full py-4">
                <PremiumCourseCard feat={feat} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons Positioned Safely Outside Cards */}
          <div className="features-nav-prev swiper-nav-btn absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex">
            <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </div>
          <div className="features-nav-next swiper-nav-btn absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex">
            <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          </div>
        </div>
      </div>
    </DarkGradientBg>
  );
}
