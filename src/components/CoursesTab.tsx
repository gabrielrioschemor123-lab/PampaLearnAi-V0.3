import React, { useEffect, useState } from "react";
import { Course, UserProfile } from "../types";
import { initialCourses } from "../data";
import { GraduationCap, Database, Sparkles, AlertCircle } from "lucide-react";
import { CourseCard } from "./CourseCard";

interface CoursesTabProps {
  userProfile: UserProfile | null;
  onOpenPaywall: (course: Course) => void;
  onOpenTotalAccessPaywall: () => void;
}

export const CoursesTab: React.FC<CoursesTabProps> = ({
  userProfile,
  onOpenPaywall,
  onOpenTotalAccessPaywall,
}) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "TODOS" | "OFICIOS" | "MARKETING DIGITAL / VENTAS" | "MÚSICA / DJING" | "MECÁNICA" | "IDIOMAS"
  >("TODOS");

  const hasTotalAccess = userProfile?.access_total === true || String(userProfile?.access_total) === "true";

  // Removed Firebase data fetching - fully offline responsive catalog
  useEffect(() => {
    setCourses(initialCourses);
    setLoading(false);
  }, []);

  const isCourseOwned = (courseId: string) => {
    if (!userProfile) return false;
    if (hasTotalAccess) return true;
    return userProfile.purchased_courses.includes(courseId);
  };

  // Normalizer matcher to filter courses robustly
  const matchCategory = (courseCategory: string, selected: string) => {
    if (selected === "TODOS") return true;

    const normCourse = (courseCategory || "").toLowerCase().trim();
    const normSelected = selected.toLowerCase().trim();

    if (normCourse === normSelected) return true;

    // Custom normalized groupings based on specifications
    if (normSelected === "marketing digital / ventas") {
      return (
        normCourse.includes("marketing") ||
        normCourse.includes("ventas") ||
        normCourse === "marketing digital / ventas"
      );
    }
    if (normSelected === "música / djing") {
      return (
        normCourse.includes("música") ||
        normCourse.includes("djing") ||
        normCourse.includes("dj") ||
        normCourse === "música / djing"
      );
    }
    if (normSelected === "mecánica") {
      return normCourse.includes("mecánica") || normCourse === "mecanica";
    }
    if (normSelected === "idiomas") {
      return normCourse.includes("idiomas") || normCourse === "idioma";
    }
    if (normSelected === "oficios") {
      return normCourse.includes("oficios");
    }

    return false;
  };

  const filteredCourses = courses.filter((course) => {
    return matchCategory(course.category, selectedCategory);
  });

  return (
    <div className="space-y-6 md:space-y-10 animate-fade-in">
      {/* 2. HERO BANNER (Card Central Principal) Pampa-themed - Compact & Stylized */}
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-pampa-deep/95 via-[#0c1c18] to-[#04120f] border border-pampa-bright/30 p-3.5 md:py-6 md:px-8 text-left shadow-lg shadow-black/50 font-sans">
        <div className="absolute top-0 right-0 h-32 w-32 md:h-48 md:w-48 bg-pampa-bright/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-24 w-24 md:h-36 md:w-36 bg-pampa-gold/5 blur-[70px] pointer-events-none" />

        <div className="relative max-w-3xl space-y-1.5 md:space-y-3.5">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-pampa-bright/10 px-3 py-1 text-[9px] md:px-3 text-xs font-bold text-pampa-bright border border-pampa-bright/20">
            <GraduationCap className="h-3.5 w-3.5" /> 🎓 Programas Técnicos Certificados
          </span>
          
          <h1 className="text-[11px] sm:text-sm md:text-2xl lg:text-[26px] text-white tracking-wide leading-snug uppercase font-extrabold">
            <span>
              Aprendé habilidades reales <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pampa-bright via-[#4ade80] to-pampa-gold font-extrabold animate-pulse">
                para trabajar y generar ingresos
              </span>
            </span>
          </h1>
          <p className="hidden sm:block text-xs md:text-xs lg:text-sm text-slate-400 leading-relaxed font-normal max-w-2xl">
            Adquiere capacitación especializada en oficios modernos, herramientas digitales e idiomas. 
            Potencia tus habilidades prácticas con metodologías orientadas al trabajo y el desarrollo independiente.
          </p>
        </div>
      </div>



      {/* 3. BARRA DE FILTRADO (Categorías Inferiores) */}
      <div className="flex flex-col space-y-2 md:space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-pampa-bright animate-pulse" /> Catálogo de Especializaciones
          </h3>
        </div>

        {/* Responsive horizontal list styled as minimal tab pills */}
        <div className="flex bg-slate-100/80 dark:bg-pampa-dark p-1 md:p-1.5 rounded-xl md:rounded-2xl border border-slate-200/80 dark:border-pampa-dark-border overflow-x-auto gap-1 md:gap-1.5 scrollbar-none shadow-sm">
          {(["TODOS", "OFICIOS", "MARKETING DIGITAL / VENTAS", "MÚSICA / DJING", "MECÁNICA", "IDIOMAS"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap rounded-lg md:rounded-xl px-3.5 md:px-5 py-2 md:py-3 text-[10px] md:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-pampa-bright text-white shadow-lg shadow-pampa-bright/20 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-[#112620]/30"
              }`}
            >
              {cat === "TODOS" ? "Todos" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. CONEXIÓN DINÁMICA A FIREBASE (Firestore - Grid View) */}
      {loading ? (
        /* Aesthetic premium skeletons if loading */
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-3xl border border-gray-950 bg-[#07090e]/80 p-5 space-y-4 animate-pulse">
              <div className="aspect-video w-full rounded-2xl bg-gray-900" />
              <div className="h-4 w-3/4 rounded bg-gray-900" />
              <div className="h-3 w-1/2 rounded bg-gray-900" />
              <div className="flex justify-between pt-4 border-t border-gray-950/40">
                <div className="h-4 w-12 rounded bg-gray-900" />
                <div className="h-8 w-20 rounded-xl bg-gray-900" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="text-center py-24 rounded-[32px] border border-gray-950 bg-[#07090e]/50 space-y-4">
          <AlertCircle className="mx-auto h-12 w-12 text-gray-700 animate-bounce" />
          <p className="text-gray-400 font-bold">No se encontraron programas disponibles bajo la categoría seleccionada.</p>
          <button
            onClick={() => setSelectedCategory("TODOS")}
            className="text-xs font-bold text-neon-lime hover:underline uppercase tracking-wider"
          >
            Reestablecer Filtros
          </button>
        </div>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 gap-5 scrollbar-none md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3 md:pb-0">
          {filteredCourses.map((course) => {
            const owned = isCourseOwned(course.id);
            return (
              <CourseCard
                key={course.id}
                course={course}
                isOwned={owned}
                onOpenPaywall={onOpenPaywall}
                onOpenTotalAccessPaywall={onOpenTotalAccessPaywall}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
