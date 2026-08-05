export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4 animate-fade-in">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="bg-[#25D366] hover:bg-[#1DA851] w-[56px] h-[56px] flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <svg className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-300" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </a>
      
      {/* Phone Button */}
      <a 
        href="tel:+919876543210" 
        className="bg-[var(--blue-700)] hover:bg-[var(--blue-900)] w-[56px] h-[56px] flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(20,40,160,0.35)] hover:shadow-[0_12px_25px_rgba(20,40,160,0.45)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
        aria-label="Call Us"
      >
        <svg className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.27a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
