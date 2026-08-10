import React from "react";

export function DarkGradientBg({ children, className = "" }) {
  return (
    <div className={`relative w-full bg-[#050933] overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(100% 100% at 0% 0%, rgba(5, 68, 241, 1) 0%, rgb(0, 0, 0) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            WebkitMask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)"
          }}
        >
          {/* Skewed fading blue streaks */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(rgba(81, 0, 255, 1) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)"
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)"
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)"
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(rgba(2, 43, 192, 1) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)"
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "linear-gradient(rgba(0, 44, 176, 1) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 27%, rgba(255, 255, 255, 1) 42%, rgba(255, 255, 255, 1) 48%, rgba(255, 255, 255, 1) 67%, rgba(255, 255, 255, 1) 74%, rgba(255, 255, 255, 1) 82%, rgba(255, 255, 255, 1) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)"
            }}
          />
        </div>
      </div>

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: "149.76px"
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(24, 52, 117, 0.3) 0%, transparent 60%)' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
