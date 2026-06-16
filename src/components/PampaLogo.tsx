import React from "react";

interface PampaLogoProps {
  className?: string; // Additional classes for sizing/spacing
  showText?: boolean;  // Whether to show the "PampaLearn AI" text alongside the emblem
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const PampaLogo: React.FC<PampaLogoProps> = ({
  className = "",
  showText = true,
  size = "md",
}) => {
  // Dimensions map based on size parameter
  const dimensions = {
    xs: { svg: "h-7 w-7", textClass: "text-[15px]" },
    sm: { svg: "h-9 w-9", textClass: "text-lg" },
    md: { svg: "h-11 w-11", textClass: "text-xl" },
    lg: { svg: "h-16 w-16", textClass: "text-3xl" },
    xl: { svg: "h-24 w-24", textClass: "text-4xl" },
  };

  const currentSize = dimensions[size];

  return (
    <div className={`inline-flex items-center ${size === "xs" ? "gap-1.5" : "gap-3"} ${className}`}>
      {/* Premium Minimalists Emblem SVG: Book + AI Concept */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.svg} shrink-0 transition-all duration-300 hover:scale-105`}
      >
        {/* Soft Ambient Background Glow */}
        <circle cx="100" cy="100" r="85" fill="url(#pampa-logo-glow)" className="opacity-40 animate-pulse" />

        {/* Outer Circular tech-circuit border */}
        <circle
          cx="100"
          cy="100"
          r="78"
          stroke="url(#pampa-border-grad)"
          strokeWidth="3.5"
          strokeDasharray="14 10 34 12"
          className="animate-[spin_40s_linear_infinite]"
        />

        {/* AI Sparks & Nodes at the top */}
        <g id="ai-nodes" className="transition-all duration-300">
          {/* Central AI Sparkle (4-pointed star) */}
          <path
            d="M100 42 C100 58, 100 58, 116 58 C100 58, 100 58, 100 74 C100 58, 100 58, 84 58 C100 58, 100 58, 100 42 Z"
            fill="#F59E0B"
            className="animate-pulse"
          />
          
          {/* Secondary AI sparkle */}
          <path
            d="M142 62 C142 70, 142 70, 150 70 C142 70, 142 70, 142 78 C142 70, 142 70, 134 70 C142 70, 142 70, 142 62 Z"
            fill="#22C55E"
            className="opacity-90"
          />

          {/* Interconnected Network Circuit lines linking to the book */}
          <path
            d="M 100,58 L 100,90"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 3 shrink"
          />
          <path
            d="M 142,70 L 126,95"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 58,70 L 74,95"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Connecting digital nodes (circles) */}
          <circle cx="100" cy="58" r="4.5" fill="#F59E0B" />
          <circle cx="142" cy="70" r="3.5" fill="#22C55E" />
          <circle cx="58" cy="70" r="3.5" fill="#22C55E" />
        </g>

        {/* Sleek open book, glowing pages */}
        <g id="open-book">
          {/* Left Page Base */}
          <path
            d="M 100,154 C 84,136 50,132 36,116 L 36,156 C 50,166 84,166 100,182 Z"
            fill="url(#pampa-left-page)"
            stroke="#0F3D2E"
            strokeWidth="1"
          />
          {/* Left Page Top Curve */}
          <path
            d="M 100,98 C 84,116 50,112 36,96 L 36,136 C 50,146 84,146 100,162 Z"
            fill="url(#pampa-left-page)"
            stroke="#22C55E"
            strokeWidth="1.5"
          />

          {/* Right Page Base */}
          <path
            d="M 100,154 C 116,136 150,132 164,116 L 164,156 C 150,166 116,166 100,182 Z"
            fill="url(#pampa-right-page)"
            stroke="#0F3D2E"
            strokeWidth="1"
          />
          {/* Right Page Top Curve */}
          <path
            d="M 100,98 C 116,116 150,112 164,96 L 164,136 C 150,146 116,146 100,162 Z"
            fill="url(#pampa-right-page)"
            stroke="#22C55E"
            strokeWidth="1.5"
          />

          {/* Central spine of the book */}
          <path
            d="M 100,98 L 100,168"
            stroke="#22C55E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          
          {/* Floating digital pulses inside the book */}
          <circle cx="70" cy="120" r="2.5" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="130" cy="135" r="2.5" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '4s' }} />
        </g>

        {/* Definition gradients */}
        <defs>
          <radialGradient id="pampa-logo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F3D2E" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#22C55E" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#070F0D" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="pampa-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="55%" stopColor="#0F3D2E" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="pampa-left-page" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0F3D2E" />
            <stop offset="50%" stopColor="#142F25" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>

          <linearGradient id="pampa-right-page" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F3D2E" />
            <stop offset="50%" stopColor="#142F25" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Styled Brand Lettering */}
      {showText && (
        <div className="text-left select-none flex flex-col justify-center pl-1 font-sans">
          <h1 className={`${currentSize.textClass} font-black tracking-tight flex items-center leading-none text-slate-900 dark:text-white`}>
            <span className="text-[#0F3D2E] dark:text-white">Pampa</span>
            <span className="text-[#22C55E] dark:text-pampa-bright">Learn</span>
            <span className="text-[#F59E0B] dark:text-pampa-gold ml-1">AI</span>
          </h1>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide mt-0.5 hidden sm:block">
            Cursos premium y biblioteca gratuita
          </span>
        </div>
      )}
    </div>
  );
};
