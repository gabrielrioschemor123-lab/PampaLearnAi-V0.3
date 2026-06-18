import React from "react";
import { Course } from "../types";
import { Sparkles, Play, Megaphone, TrendingUp, Headphones, Wrench, User } from "lucide-react";
import { motion } from "motion/react";

interface CourseCardProps {
  course: Course;
  isOwned: boolean;
  onOpenPaywall: (course: Course) => void;
  onOpenTotalAccessPaywall?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isOwned,
  onOpenPaywall,
  onOpenTotalAccessPaywall,
}) => {
  const handleCardClick = () => {
    // Navigate using dynamic URL hash
    window.location.hash = `#course/${course.id}`;
  };

  const isMetaAds = course.id === "facebook-ads-2025";
  const isDJ = course.id === "virtual-dj-basics";
  const isMotos = course.id === "mecanica-motos";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 shadow-xl cursor-pointer bg-[#0d1527] border-slate-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)] w-[82vw] sm:w-[75vw] md:w-auto shrink-0 snap-start"
      onClick={handleCardClick}
      id={`course-card-${course.id}`}
    >
      {/* Thumbnail with Rounded Corners and Soft Shadow */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800/60">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

        {/* Category Badges Group */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
          <span className="rounded bg-black/85 border border-slate-800/80 px-2.5 py-1 text-[9px] font-extrabold text-slate-300 uppercase tracking-wider backdrop-blur-sm">
            {course.category}
          </span>
          {isMetaAds && (
            <span className="rounded bg-gradient-to-r from-emerald-600 to-emerald-950 border border-emerald-500/40 px-2 py-1 text-[9px] font-extrabold text-white flex items-center gap-1 shadow-md">
              <TrendingUp className="h-3 w-3 text-white" /> +ROI Target
            </span>
          )}
          {isDJ && (
            <span className="rounded bg-gradient-to-r from-emerald-600 to-slate-900 border border-green-500/30 px-2 py-1 text-[9px] font-extrabold text-white flex items-center gap-1 shadow-md">
              <Headphones className="h-3 w-3 text-white" /> +BPM Booth
            </span>
          )}
          {isMotos && (
            <span className="rounded bg-gradient-to-r from-amber-600 to-orange-950 border border-amber-500/30 px-2 py-1 text-[9px] font-extrabold text-white flex items-center gap-1 shadow-md">
              <Wrench className="h-3 w-3 text-white" /> +Garage Tech
            </span>
          )}
        </div>

        {/* Format Badge & Gratuito Label */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5 z-10">
          <span className="flex items-center gap-1 rounded bg-[#091512]/90 border border-green-500/30 px-2.5 py-1 text-[9px] font-extrabold text-green-400 uppercase tracking-widest shadow-sm backdrop-blur-md">
            🎥 CURSO EN VIDEO
          </span>
          <span className="flex items-center gap-1 rounded bg-green-500/10 border border-green-500/40 px-2.5 py-1 text-[8px] font-extrabold text-green-400 uppercase tracking-wider shadow-sm backdrop-blur-md">
            <Sparkles className="h-2.5 w-2.5 text-green-400 animate-pulse" />
            100% Gratis
          </span>
        </div>

        {/* Footer info inside thumbnail */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-1 bg-[#0d1527]/75 px-2 py-1 rounded border border-slate-800 backdrop-blur-xs text-[9px] font-mono">
            <span>{course.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 bg-[#0d1527]/75 px-2 py-1 rounded border border-slate-800 backdrop-blur-xs text-[9px] font-mono">
            <span>{course.total_lessons} Clases</span>
          </div>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="p-6 text-left flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white transition-colors leading-snug flex items-center gap-2 group-hover:text-green-400">
            {isMetaAds && <Megaphone className="h-5 w-5 text-green-400 flex-shrink-0" />}
            {isDJ && <Headphones className="h-5 w-5 text-green-400 flex-shrink-0" />}
            {isMotos && <Wrench className="h-5 w-5 text-amber-500 flex-shrink-0" />}
            {course.title}
          </h3>

          {/* Instructor Block (Jerarquía Visual) */}
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <div className="h-5 w-5 rounded-full bg-slate-800/40 border border-slate-700/50 flex items-center justify-center">
              <User className="h-3 w-3 text-slate-400" />
            </div>
            <span>Tutor: {course.instructor}</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Trigger and Price Block at very bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-800/60 pt-4">
          <div className="text-left">
            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-none">Matrícula</p>
            <p className="text-xs font-bold text-green-400 mt-1">
              Libre / Gratuito
            </p>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all cursor-pointer"
            >
              <Play className="h-3 w-3 fill-current text-green-400" /> Ingresar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
