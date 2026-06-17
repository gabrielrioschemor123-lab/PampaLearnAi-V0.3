import React from "react";
import { Course } from "../types";
import { Sparkles, Play, Lock, Star, Tag, Megaphone, TrendingUp, Headphones, Wrench } from "lucide-react";
import { motion } from "motion/react";

interface CourseCardProps {
  course: Course;
  isOwned: boolean;
  onOpenPaywall: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isOwned,
  onOpenPaywall,
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
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 shadow-lg cursor-pointer bg-white dark:bg-pampa-dark-card border-slate-200/80 dark:border-pampa-dark-border hover:border-pampa-bright/50 dark:hover:border-pampa-bright/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]`}
      onClick={handleCardClick}
      id={`course-card-${course.id}`}
    >
      {/* Thumbnail with Rounded Corners and Soft Shadow */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-pampa-dark-border">
        <img
          src={course.thumbnail}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge & Publicidad/Growth Custom Badge */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          <span className="rounded bg-black/80 border border-slate-700/60 px-3 py-1 text-[10px] font-bold text-slate-200 uppercase tracking-wider backdrop-blur-sm">
            {course.category}
          </span>
          {isMetaAds && (
            <span className="rounded bg-gradient-to-r from-emerald-600 to-pampa-deep border border-pampa-bright/40 px-2.5 py-1 text-[10px] font-bold text-white flex items-center gap-1 shadow-md">
              <TrendingUp className="h-3 w-3 text-pampa-bright" /> +ROI Target
            </span>
          )}
          {isDJ && (
            <span className="rounded bg-gradient-to-r from-pampa-bright to-emerald-800 border border-pampa-bright/30 px-2.5 py-1 text-[10px] font-bold text-white flex items-center gap-1 shadow-md">
              <Headphones className="h-3 w-3 text-white" /> +BPM Booth
            </span>
          )}
          {isMotos && (
            <span className="rounded bg-gradient-to-r from-pampa-gold to-orange-600 border border-pampa-gold/30 px-2.5 py-1 text-[10px] font-bold text-white flex items-center gap-1 shadow-md">
              <Wrench className="h-3 w-3 text-white" /> +Garage Tech
            </span>
          )}
        </div>

        {/* Gratuito Label */}
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <span className="flex items-center gap-1 rounded bg-pampa-bright/20 border border-pampa-bright/50 px-2.5 py-1 text-[10px] font-extrabold text-pampa-bright uppercase tracking-wider shadow-sm backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-pampa-bright animate-pulse" />
            100% Gratis
          </span>
        </div>

        {/* Footer info inside thumbnail */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-300 font-medium">
          <div className="flex items-center gap-1 bg-[#0d0f14]/65 px-2 py-1 rounded backdrop-blur-xs text-[10px] font-mono">
            <span>Instructor: {course.instructor}</span>
          </div>
          <div className="flex items-center gap-1 bg-[#0d0f14]/65 px-2 py-1 rounded backdrop-blur-xs text-[10px] font-mono">
            <span>{course.difficulty}</span>
          </div>
        </div>
      </div>

    {/* Main Text Content */}
    <div className="p-6 text-left flex-1 flex flex-col justify-between">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors leading-snug flex items-center gap-2 group-hover:text-pampa-bright">
          {isMetaAds && <Megaphone className="h-4 w-4 text-pampa-bright flex-shrink-0" />}
          {isDJ && <Headphones className="h-4 w-4 text-pampa-bright flex-shrink-0" />}
          {isMotos && <Wrench className="h-4 w-4 text-pampa-gold flex-shrink-0" />}
          {course.title}
        </h3>
        <p className="text-xs text-slate-700 dark:text-gray-400 leading-relaxed line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Trigger and Price Block */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 dark:border-pampa-dark-border/60 pt-4">
        <div className="text-left">
          <p className="text-[10px] font-mono text-slate-500 dark:text-gray-500 uppercase tracking-widest leading-none">Matrícula</p>
          <p className="text-xs font-bold text-pampa-bright mt-1">
            Libre / Gratuito
          </p>
        </div>

        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold bg-pampa-deep/10 dark:bg-pampa-deep/20 border border-pampa-bright/30 text-pampa-bright hover:bg-pampa-deep/30 transition-all cursor-pointer"
          >
            <Play className="h-3 w-3 fill-current text-pampa-bright" /> Ingresar
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
