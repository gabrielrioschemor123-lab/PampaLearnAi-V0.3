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
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer bg-white dark:bg-pampa-dark-card border-slate-150 dark:border-pampa-dark-border/80 hover:border-slate-300 dark:hover:border-slate-700 w-[275px] xs:w-[305px] sm:w-[340px] md:w-auto shrink-0 snap-start"
      onClick={handleCardClick}
      id={`course-card-${course.id}`}
    >
      {/* Thumbnail with Rounded Corners and Soft Shadow */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-pampa-dark-border/40">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
        
        {/* Category Badges Group */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="rounded bg-black/85 border border-slate-800/80 px-2.5 py-1 text-[9px] font-extrabold text-slate-200 uppercase tracking-wider backdrop-blur-sm shadow-sm">
            {course.category}
          </span>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="p-4 sm:p-5 text-left flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Metadata Row */}
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase font-mono">
            <span className="bg-slate-100 dark:bg-slate-800/60 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] text-[#0d9488] dark:text-[#2dd4bf]">{course.difficulty}</span>
            <span className="text-slate-300 dark:text-slate-800">•</span>
            <span>{course.total_lessons} Clases</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white transition-colors leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
            {course.title}
          </h3>

          {/* Instructor Block (Jerarquía Visual) */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <div className="h-5 w-5 rounded-full bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
              <User className="h-3 w-3 text-slate-550" />
            </div>
            <span className="truncate">Tutor: {course.instructor}</span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Trigger and Price Block at very bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-pampa-dark-border/40 pt-4">
          <div className="text-left">
            <p className="text-[9px] font-mono text-slate-400 dark:text-slate-550 uppercase tracking-widest leading-none">Matrícula</p>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-450 mt-1">
              Gratuito
            </p>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold bg-slate-105 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-700 dark:text-white border border-transparent transition-all cursor-pointer"
            >
              <Play className="h-3 w-3 fill-current text-slate-605 dark:text-slate-300" /> Ingresar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
