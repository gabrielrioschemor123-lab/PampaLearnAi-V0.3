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
      {/* 2. HERO BANNER (Card Central Principal) Pampa-themed */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] bg-gradient-to-br from-pampa-deep via-[#0A1A15] to-[#041410] border border-pampa-bright/25 p-4 md:p-14 text-left shadow-2xl shadow-black/60 font-sans">
        <div className="absolute top-0 right-0 h-48 w-48 md:h-64 md:w-64 bg-pampa-bright/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-36 w-36 md:h-48 md:w-48 bg-pampa-gold/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl space-y-1.5 md:space-y-6">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-pampa-bright/10 px-3 py-1 text-[10px] md:px-4 md:py-1.5 md:text-xs font-bold text-pampa-bright border border-pampa-bright/20">
            <GraduationCap className="h-4 w-4" /> 🎓 Programas Técnicos Certificados
          </span>
          
          <h1 className="text-lg md:text-5xl text-white tracking-tight leading-tight uppercase font-extrabold">
            <span className="md:hidden">Programas y Cursos</span>
            <span className="hidden md:inline">
              Desarrolla Competencias <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pampa-bright via-[#4ade80] to-pampa-gold animate-pulse font-extrabold">
                Técnicas y Profesionales
              </span>
            </span>
          </h1>
          <p className="hidden sm:block text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed font-medium">
            Adquiere capacitación especializada en oficios modernos, herramientas digitales e idiomas. 
            Potencia tus habilidades prácticas con metodologías orientadas al trabajo y el desarrollo independiente.
          </p>
        </div>
      </div>

      {/* 2.5 BANNER "PASO TOTAL VIP" (Glow Banner) */}
      {!hasTotalAccess && (
        <div 
          id="vip-glow-banner"
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#091512] border-2 border-pampa-gold/40 p-4 md:p-8 shadow-[0_0_20px_rgba(245,158,11,0.08)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 transition-all duration-300 hover:border-pampa-gold/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pampa-deep/10 via-pampa-gold/5 to-transparent pointer-events-none" />
          <div className="relative space-y-2 text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pampa-gold/15 border border-pampa-gold/30 px-2.5 py-0.5 text-[9px] md:px-3.5 md:py-1 md:text-[10px] font-extrabold text-pampa-gold uppercase tracking-widest leading-none">
              ★ OPORTUNIDAD VITALICIA
            </span>
            <div className="text-xs md:text-sm font-semibold text-slate-200">
              <span className="text-white font-extrabold text-pampa-bright">¡Acceso Total Pampeano Vitalicio!</span> Libera TODOS los cuentos actuales y futuros (Mecánica, Idiomas, DJ, Marketing) por un solo pago de <span className="font-mono font-bold text-white bg-pampa-gold/25 px-1.5 py-0.5 rounded border border-pampa-gold/30">$4.999 ARS</span>.
            </div>
          </div>
          <button
            onClick={onOpenTotalAccessPaywall}
            id="btn-activate-total-access"
            className="relative shrink-0 overflow-hidden rounded-xl bg-pampa-gold hover:bg-[#d97706] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 px-4 md:px-6 py-2.5 md:py-4 text-[10px] md:text-xs font-black text-[#040D0A] uppercase tracking-wider shadow-lg shadow-pampa-gold/25 flex items-center gap-2 cursor-pointer w-full md:w-auto justify-center"
          >
            Activar Pase Completo
          </button>
        </div>
      )}

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
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => {
            const owned = isCourseOwned(course.id);
            return (
              <CourseCard
                key={course.id}
                course={course}
                isOwned={owned}
                onOpenPaywall={onOpenPaywall}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
