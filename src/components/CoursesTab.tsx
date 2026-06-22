import React, { useEffect, useState } from "react";
import { Course, UserProfile } from "../types";
import { initialCourses } from "../data";
import { GraduationCap, Database, Sparkles, AlertCircle } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { motion } from "motion/react";
import { FAQSection } from "./FAQSection";

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

  const COURSE_ORDER: string[] = [
    // 1. Belleza, Masajes & Estética (Beauty, Massages & Aesthetics)
    "peluqueria-estilismo",
    "unas-manicuria",
    "microblading-cejas",
    "automaquillaje-completo",
    "masoterapia-masajes",
    "tattoo-master",

    // 2. Oficios Técnicos, Reparaciones & Carpintería (Technical Trades, Repair & Carpentry)
    "carpinteria-profesional",
    "muebles-palets",
    "aire-acondicionado",
    "reparacion-tv",

    // 3. Confección y Diseño Textil (Sewing & Textile Design)
    "corte-confeccion-n1",
    "corte-confeccion-n2",
    "corte-confeccion-n3",

    // 4. Mecánica (Mechanics)
    "mecanica-motos",

    // 5. Idiomas (Languages)
    "ingles-desde-cero",
    "frances-desde-cero",
    "portugues-principiantes",

    // 6. Negocios, Marketing, Mascotas y Otros (Business, Pets & Other pursuits)
    "instagram-masterclass",
    "facebook-ads-2025",
    "virtual-dj-basics",
    "adiestramiento-canino",
    "astrologia-profesional"
  ];

  const getCourseIndex = (id: string) => {
    const idx = COURSE_ORDER.indexOf(id);
    return idx === -1 ? 999 : idx;
  };

  const filteredCourses = courses
    .filter((course) => {
      return matchCategory(course.category, selectedCategory);
    })
    .sort((a, b) => getCourseIndex(a.id) - getCourseIndex(b.id));

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in">
      {/* 2. HERO BANNER - Compact, sleek & premium with custom visual background */}
      <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 text-left shadow-2xl font-sans">
        {/* Background Image with elegant overlay gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-75 pointer-events-none transition-opacity duration-300" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-24 w-24 bg-emerald-500/10 blur-[70px] pointer-events-none" />

        <div className="relative max-w-2xl space-y-2.5 md:space-y-3 z-10 p-0 sm:p-6 sm:rounded-2xl sm:bg-black/60 sm:backdrop-blur-md sm:border sm:border-white/10 sm:shadow-xl">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-emerald-400 border border-emerald-500/10 transition-colors">
            <GraduationCap className="h-3.5 w-3.5" /> Programas Técnicos Certificados
          </span>
          
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white tracking-tight leading-snug font-black font-sans">
            Aprendé habilidades reales para <span className="text-emerald-400 font-extrabold">trabajar y generar ingresos</span>
          </h1>
          <p className="hidden sm:block text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
            Adquiere capacitación especializada en oficios modernos, herramientas digitales e idiomas. 
            Potencia tus habilidades prácticas con metodologías orientadas al trabajo y el desarrollo independiente.
          </p>
        </div>
      </div>

      {/* 3. BARRA DE FILTRADO (Categorías Inferiores) */}
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Catálogo de Especializaciones
          </h3>
        </div>

        {/* Modern clean horizontal list styled as minimal underline tabs */}
        <div className="flex border-b border-slate-100 dark:border-slate-800/80 overflow-x-auto gap-6 md:gap-8 scrollbar-none pb-px">
          {(["TODOS", "OFICIOS", "MARKETING DIGITAL / VENTAS", "MÚSICA / DJING", "MECÁNICA", "IDIOMAS"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative pb-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "text-emerald-600 dark:text-emerald-400 font-bold"
                  : "text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {cat === "TODOS" ? "Todos" : cat}
              {selectedCategory === cat && (
                <motion.div
                  layoutId="active-category-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 dark:bg-emerald-450 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 4. CONEXIÓN DINÁMICA A FIREBASE (Firestore - Grid View) */}
      {loading ? (
        /* Aesthetic premium skeletons if loading */
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="rounded-2xl border border-slate-100 dark:border-pampa-dark-border/80 bg-white dark:bg-pampa-dark-card p-5 space-y-4 animate-pulse">
              <div className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-100 dark:bg-slate-800" />
              <div className="h-3 w-1/2 rounded bg-slate-100 dark:bg-slate-800" />
              <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-pampa-dark-border/40">
                <div className="h-4 w-12 rounded bg-slate-100 dark:bg-slate-800" />
                <div className="h-8 w-20 rounded-xl bg-slate-100 dark:bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-slate-200 dark:border-pampa-dark-border bg-white dark:bg-pampa-dark-card/50 space-y-4 shadow-sm">
          <AlertCircle className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 animate-pulse" />
          <p className="text-slate-500 dark:text-slate-400 font-medium">No se encontraron programas disponibles bajo la categoría seleccionada.</p>
          <button
            onClick={() => setSelectedCategory("TODOS")}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-450 hover:underline uppercase tracking-wider"
          >
            Reestablecer Filtros
          </button>
        </div>
      ) : (
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 gap-4 -mx-4 px-4 scrollbar-none md:mx-0 md:px-0 md:grid md:gap-6 lg:grid-cols-5 md:pb-0">
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

      {/* Structured responsive FAQ accordion section */}
      <FAQSection />
    </div>
  );
};
