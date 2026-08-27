import { useState, useEffect } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

// Local images replaced by YouTube thumbnails

const videos = [
  {
    id: 1,
    videoId: 'blqSQNe5a_s',
    title: 'Mastering Accounting Principles',
    category: 'Exam Guidance',
    desc: 'Clear explanations for complex topics to help you build a stronger foundation.',
    image: 'https://img.youtube.com/vi/blqSQNe5a_s/hqdefault.jpg'
  }, {
    id: 2,
    videoId: 'LSWwN3f8mkw',
    title: 'Free CMA / ACCA Learning Session',
    category: 'Commerce Learning',
    desc: 'Learn practical concepts and exam-focused strategies from our expert instructors.',
    image: 'https://img.youtube.com/vi/LSWwN3f8mkw/hqdefault.jpg'
  },

  {
    id: 3,
    videoId: 'W_I-kEFwdFI',
    title: 'Professional Career Pathways',
    category: 'Student Success',
    desc: 'Discover how top students chart their paths to becoming successful professionals.',
    image: 'https://img.youtube.com/vi/W_I-kEFwdFI/hqdefault.jpg'
  },
  {
    id: 4,
    videoId: 'FfsAPpmYwMQ',
    title: 'Advanced Commerce Strategies',
    category: 'Expert Insights',
    desc: 'Deep dive into advanced topics with clear, structured learning materials.',
    image: 'https://img.youtube.com/vi/FfsAPpmYwMQ/hqdefault.jpg'
  }
];

export default function FreeLearning() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const featuredVideo = videos[currentIndex];
  const supportingVideos = videos.filter((_, idx) => idx !== currentIndex);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotation disabled since we now have embedded videos that the user might play

  return (
    <section className="py-20 lg:pb-22 bg-[var(--blue-50)] relative overflow-hidden">

      {/* Editorial Environment Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        {/* Very subtle glow near the featured content */}
        <div className="absolute top-1/4 left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-100/30 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-[95%] mx-auto px-6 lg:px-10 relative z-10">

        {/* 1. Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <ScrollReveal type="badge" delay={0}>
              <p className="eyebrow mb-5">Free Learning</p>
            </ScrollReveal>
            <ScrollReveal type="heading" delay={150}>
              <h2 className="text-[2.5rem] sm:text-4xl lg:text-5xl font-bold font-display leading-[1.1] tracking-tight mb-5 text-[var(--blue-900)]">
                Learn something new.<br />
                <span className="blue-text">Every day.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal type="subtitle" delay={300}>
              <p className="text-[var(--slate-600)] text-lg leading-relaxed max-w-lg">
                Explore practical CMA, ACCA and commerce lessons designed to make complex concepts easier to understand.
              </p>
            </ScrollReveal>
          </div>

          {/* Right side: matches the stat-card pattern used in YouTube.jsx / Faculty.jsx /
              Pathway.jsx — a quick fact plus a direct link to the full library. */}
          <ScrollReveal type="subtitle" delay={450} className="hidden lg:block max-w-md shrink-0">
            <div className="border-l-2 pl-6" style={{ borderColor: 'var(--blue-200)' }}>
              <p className="font-display font-extrabold text-5xl leading-none mb-2" style={{ color: 'var(--blue-900)' }}>
                100+
              </p>
              <p className="text-sm uppercase tracking-[0.15em] font-semibold mb-5" style={{ color: 'var(--slate-600)' }}>
                Free Video Lessons
              </p>
              <p className='text-[var(--slate-600)] mb-3'>Learn anytime with expert-led lessons designed to simplify concepts and strengthen your commerce skills.</p>
              <a
                href="https://youtube.com/@catalysteduhub?si=29Wr2p-sA5epZtry"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300"
                style={{ color: 'var(--blue-600)' }}
              >
                View YouTube Channel
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* 2. Main Featured Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Left Column: Featured Video */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col relative">
            {/* Subtle blue glow directly behind the featured card */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-95 z-0 rounded-[3xl]"></div>

            <ScrollReveal delay={200} direction="up" className="relative z-10 w-full h-full">
              <div
                className="group flex flex-col w-full h-full bg-white rounded-[8px] border border-blue-50/50 shadow-[0_15px_40px_-10px_rgba(20,40,160,0.12)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.2)] transition-all duration-500 overflow-hidden"
              >
                {/* Embedded Video Player */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=0&rel=0`}
                    title={featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Editorial Metadata Block */}
                <div className="p-6 md:p-8 bg-white flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-[8px]">
                      Featured
                    </span>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      {featuredVideo.category}
                      <span className="w-1 h-1 rounded-[8px] bg-slate-300"></span>
                      YouTube
                    </p>
                  </div>
                  <a href={`https://www.youtube.com/watch?v=${featuredVideo.videoId}`} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--blue-900)] mb-3 leading-tight hover:text-blue-600 transition-colors duration-300">
                      {featuredVideo.title}
                    </h3>
                  </a>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
                    {featuredVideo.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Supporting Vertical List */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between">

            <ScrollReveal delay={400} direction="left" className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
                {supportingVideos.map((video, idx) => (
                  <button
                    key={`${video.id}-${idx}`}
                    onClick={() => setCurrentIndex(videos.indexOf(video))}
                    className="group flex flex-col sm:flex-row items-start sm:items-center bg-white border border-slate-100 hover:border-blue-100 rounded-[8px] p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-250 text-left hover:translate-x-1"
                  >
                    {/* Small Thumbnail */}
                    <div className="relative w-full sm:w-[150px] md:w-[180px] shrink-0 aspect-video rounded-[8px] overflow-hidden bg-slate-100 mb-3 sm:mb-0">
                      <img
                        src={video.image}
                        alt={video.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                      {/* Miniature Play Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-[8px] bg-blue-600 text-white flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Minimal Info */}
                    <div className="sm:px-4 flex flex-col justify-center h-full w-full">
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 line-clamp-1">
                        {video.category}
                      </p>
                      <h4 className="font-bold text-[var(--blue-900)] text-sm md:text-base leading-snug group-hover:text-blue-600 transition-colors duration-250 line-clamp-2">
                        {video.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Minimal Editorial Navigation */}
            <ScrollReveal delay={550} direction="up">
              <div className="mt-8 lg:mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="font-mono text-sm tracking-wider font-bold text-slate-400 select-none">
                  <span className="text-[var(--blue-900)] text-base">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                  <span className="mx-1">/</span>
                  {videos.length.toString().padStart(2, '0')}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[var(--blue-900)] hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 active:scale-95 transition-all duration-200"
                    aria-label="Previous video"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[var(--blue-900)] hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 active:scale-95 transition-all duration-200"
                    aria-label="Next video"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
