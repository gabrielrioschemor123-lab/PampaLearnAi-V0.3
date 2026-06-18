import React, { useState } from "react";
import { Course } from "../types";
import { Sparkles, Play, Megaphone, TrendingUp, Headphones, Wrench, ChevronDown, User } from "lucide-react";
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
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const handleCardClick = () => {
    // Navigate using dynamic URL hash
    window.location.hash = `#course/${course.id}`;
  };

  const isMetaAds = course.id === "facebook-ads-2025";
  const isDJ = course.id === "virtual-dj-basics";
  const isMotos = course.id === "mecanica-motos";

  const modules = course.syllabus || [];
  const allLessons = modules.flatMap(mod => mod.lessons || []);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 shadow-xl cursor-pointer bg-[#0d1527] border-slate-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)]"
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
              <TrendingUp className="h-3 w-3 text-green-405" /> +ROI Target
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

        {/* Accordion Toggle Control Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSyllabusOpen(!isSyllabusOpen);
          }}
          className="w-full flex items-center justify-between gap-2 rounded-xl px-4 py-3 mt-4 text-xs font-bold text-slate-300 bg-slate-950/40 hover:bg-slate-950/90 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
        >
          <span>{isSyllabusOpen ? "Ocultar Programa" : "Ver Temario Completo"}</span>
          <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isSyllabusOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Accordion Collapse UX Area */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isSyllabusOpen ? "max-h-[1400px] opacity-100 mt-4 border-t border-slate-800 pt-4" : "max-h-0 opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
            {allLessons.map((lesson, idx) => {
              const title = lesson.title || "";
              const match = title.match(/^(Parte \d+|Clase \d+|Módulo \d+|Parte \d+[:]?|Clase \d+[:]?)\s*:\s*(.*)$/i);
              let partText = `Clase ${lesson.order || idx + 1}`;
              let restText = title;
              
              if (match) {
                partText = match[1];
                restText = match[2];
              }
              
              return (
                <div 
                  key={lesson.id} 
                  className="flex items-center gap-2 rounded-xl bg-slate-950/50 hover:bg-slate-950/80 transition-colors p-2.5 border border-slate-900 text-xs text-slate-300"
                >
                  <span className="text-green-500 text-[10px] shrink-0">▶️</span>
                  <div className="leading-snug text-left">
                    <span className="font-extrabold text-white mr-1.5">{partText}:</span>
                    <span className="text-slate-300">{restText}</span>
                  </div>
                  {lesson.duration && (
                    <span className="ml-auto text-[9px] font-mono text-slate-500 shrink-0">
                      {lesson.duration}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Premium Donation Integration inside Accordion */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col items-center gap-2">
            <p className="text-[10px] text-center text-slate-400 leading-relaxed max-w-xs">
              Este programa se brinda de forma comunitaria. Si te resulta de utilidad, puedes apoyar su sostenibilidad:
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenTotalAccessPaywall) {
                  onOpenTotalAccessPaywall();
                } else {
                  onOpenPaywall(course);
                }
              }}
              className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/20 text-slate-950 font-extrabold text-xs px-6 py-2.5 transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Bancar este curso ☕</span>
            </button>
          </div>
        </div>

        {/* Trigger and Price Block at very bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-800/60 pt-4">
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
