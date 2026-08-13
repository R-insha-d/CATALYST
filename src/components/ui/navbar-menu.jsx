import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children, href, align = "center" }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <AnimatePresence>
        {active === item && (
          <motion.div
            layoutId="navbar-hover"
            className="absolute -inset-x-[14px] -inset-y-[6px] bg-gradient-to-tr from-[var(--blue-700)] to-[var(--blue-500)] shadow-md border border-[var(--blue-500)]/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      <motion.a
        href={href || "#"}
        transition={{ duration: 0.3 }}
        className={`relative z-10 cursor-pointer transition-colors duration-200 block ${active === item ? "text-white" : ""
          }`}
      >
        {item}
      </motion.a>
      <AnimatePresence>
        {active === item && children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[32px] pt-[12px] left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.1] shadow-xl">
              <div className="w-max h-full p-4 whitespace-normal">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-center space-x-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div className="mt-1">
        <h4 className="text-base font-semibold mb-1 text-[var(--blue-900)]">
          {title}
        </h4>
        <p className="text-[var(--slate-600)] text-sm max-w-[12rem] leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};

export const TextItem = ({ title, description, href, icon }) => {
  return (
    <a href={href} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
      {icon && (
        <div className="shrink-0 mt-1 flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--blue-50)] text-[var(--blue-700)] group-hover:bg-[var(--blue-700)] group-hover:text-white transition-colors shadow-sm">
          {icon}
        </div>
      )}
      <div className="space-y-1">
        <h4 className="text-base font-semibold text-[var(--blue-900)]">
          {title}
        </h4>
        <p className="text-sm text-[var(--slate-600)] max-w-[14rem] leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const ColumnLink = ({ title, description, href }) => (
  <a href={href} className="block group">
    <div className="font-semibold text-[15px] text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors">
      {title}
    </div>
    <div className="text-sm text-[var(--slate-600)] mt-0.5 max-w-[180px] leading-relaxed">{description}</div>
  </a>
);

export const ColumnGroup = ({ label, children }) => (
  <div className="flex-1 min-w-[170px]">
    <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase pb-3 border-b border-[var(--line)] mb-4">
      {label}
    </div>
    <div className="space-y-5">{children}</div>
  </div>
);

export const MegaMenuContent = ({ categories, basePath = "/courses" }) => {
  const [activeTab, setActiveTab] = useState(categories[0]?.id);
  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <div className="flex w-[850px] bg-white text-sm">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r border-[var(--line)] py-4 flex flex-col h-[420px]">
        <div className="px-6 mb-3 flex items-center gap-2 text-[var(--slate-600)] font-semibold text-[11px] uppercase tracking-wider">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          Categories
        </div>
        <div className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveTab(cat.id)}
              className={`w-full text-left px-4 py-3 rounded-xl flex justify-between items-center transition-all duration-200 ${activeTab === cat.id
                ? "bg-[var(--blue-50)] text-[var(--blue-700)] font-semibold"
                : "hover:bg-gray-50 text-[var(--slate-600)] font-medium"
                }`}
            >
              <span className="flex items-center gap-3">
                {cat.icon && <span className={activeTab === cat.id ? "text-[var(--blue-700)]" : "text-gray-400"}>{cat.icon}</span>}
                {cat.name}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${activeTab === cat.id ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2"}`}><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          ))}
        </div>
        <div className="px-4 mt-auto pt-4 border-t border-[var(--line)]">
          <a href={basePath} className="w-full flex items-center justify-center py-2.5 rounded-lg bg-[var(--blue-700)] text-white text-sm font-semibold hover:bg-[var(--blue-900)] transition-colors focus-ring shadow-sm">
            View All Courses
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-2/3 bg-gray-50/50 p-6 overflow-y-auto h-[420px] custom-scrollbar relative">
        {activeCategory && (
          <div className="animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--line)]">
              <h3 className="text-xl font-bold text-[var(--blue-900)]">{activeCategory.name}</h3>
              <a href={`${basePath}/${activeCategory.id}`} className="text-[var(--blue-700)] text-[13px] font-semibold hover:underline flex items-center gap-1">
                Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>

            <div className="space-y-8">
              {activeCategory.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">{section.title}</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {section.items.map((item, itemIdx) => (
                      <a key={itemIdx} href={item.href} className="group flex items-center gap-4 p-3 bg-white border border-[var(--line)] rounded-xl hover:border-[var(--blue-200)] hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                          {item.image ? (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--blue-700)]"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                          )}
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-[var(--blue-700)] mb-0.5">{item.subtitle}</div>
                          <div className="font-bold text-[var(--blue-900)] group-hover:text-[var(--blue-700)] transition-colors">{item.title}</div>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-200">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--blue-700)]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
