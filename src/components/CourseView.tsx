import React, { useState } from "react";
import { Course } from "../types";
import { GeminiChat } from "./GeminiChat";
import { 
  ChevronLeft, 
  FileText, 
  Download, 
  Sparkles, 
  Play, 
  Volume2, 
  Layers, 
  Lock, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  User, 
  Cpu
} from "lucide-react";

interface CourseViewProps {
  course: Course;
  isOwned: boolean;
  onBack: () => void;
  onBuy: (courseId: string) => void;
}

export const CourseView: React.FC<CourseViewProps> = ({
  course,
  isOwned,
  onBack,
  onBuy,
}) => {
  const isMotos = course.id === "mecanica-motos";
  const isPortugues = course.id === "portugues-principiantes";
  const isIngles = course.id === "ingles-desde-cero";
  const isFrances = course.id === "frances-desde-cero";

  // Dynamic lesson resolution
  const getInitialVideos = () => {
    if (course.id === "mecanica-motos") {
      return [
        { id: "clase-1", title: "Parte 1: El Corazón Mecánico y Motor", url: "https://drive.google.com/file/d/1Lp7wUgQTC-6nmtr_f3jRVc3aWdEE9oab/view?usp=drive_link" },
        { id: "clase-2", title: "Parte 2: Sistemas Eléctricos y Chasis", url: "https://drive.google.com/file/d/1dhLROci5FfWKXkhPspudSkVdg-8j14Is/view?usp=drive_link" }
      ];
    }
    if (course.id === "frances-desde-cero") {
      return [
        { id: "clase-1", title: "Parte 1: Fonética y Saludos Iniciales", url: "https://drive.google.com/file/d/1y2R-YgEuSJOx1yxAAxIituZHA7-5Cqq6/view?usp=drive_link" },
        { id: "clase-2", title: "Parte 2: Gramática y Estructura", url: "https://drive.google.com/file/d/1lefAkoL_Xfjuow8SydYcsdZcvfid4YqQ/view?usp=drive_link" },
        { id: "clase-3", title: "Parte 3: Conversación y Situaciones Reales", url: "https://drive.google.com/file/d/1GjSC3UNSz7tbRqvmaQa6Uwyi5U1GJh5k/view?usp=drive_link" }
      ];
    }
    if (course.id === "portugues-principiantes") {
      return [
        { id: "clase-1", title: "Parte 1: Pronunciación y Vocabulario Esencial", url: "https://drive.google.com/file/d/15fuymagrM41jhpzOeRmgl7povwdLqw_a/view?usp=drive_link" }
      ];
    }
    if (course.id === "ingles-desde-cero") {
      return [
        { id: "clase-1", title: "Parte 1: Fundamentos y Estructura", url: "https://drive.google.com/file/d/1fGXkoYanCsRkc-mejMkJC5sWU7Fqs_lC/view?usp=drive_link" },
        { id: "clase-2", title: "Parte 2: Conversación y Fluidez", url: "https://drive.google.com/file/d/12KfyrtrlkvnGv2qiuR3s7Dov1kea8mtG/view?usp=drive_link" }
      ];
    }

    const list: any[] = [];
    if (course.syllabus) {
      course.syllabus.forEach(mod => {
        mod.lessons.forEach(l => {
          if (l.type === "video") {
            list.push({
              id: l.id,
              title: l.title,
              url: l.video_drive_url
            });
          }
        });
      });
    }
    return list.length > 0 ? list : [{ id: "clase-1", title: "Clase de Bienvenida", url: course.syllabus?.[0]?.lessons?.[0]?.video_drive_url || "" }];
  };

  const getInitialVideoUrl = () => {
    if (course.id === "instagram-masterclass") return "https://drive.google.com/file/d/1xFUqejFG2NPVlAZejifXLzJb2Cv2B4xA/preview";
    if (course.id === "facebook-ads-2025") return "https://drive.google.com/file/d/1O75hYKIR2JjLP5-02SZCXrFM0-ybGWfe/preview";
    if (course.id === "virtual-dj-basics") return "https://drive.google.com/file/d/1BBKdCtzEPEsPSLwESogmxcgr3Bo-h_IB/preview";
    if (course.id === "mecanica-motos") return "https://drive.google.com/file/d/1Lp7wUgQTC-6nmtr_f3jRVc3aWdEE9oab/preview";
    if (course.id === "frances-desde-cero") return "https://drive.google.com/file/d/1y2R-YgEuSJOx1yxAAxIituZHA7-5Cqq6/preview";
    if (course.id === "portugues-principiantes") return "https://drive.google.com/file/d/15fuymagrM41jhpzOeRmgl7povwdLqw_a/preview";
    if (course.id === "ingles-desde-cero") return "https://drive.google.com/file/d/1fGXkoYanCsRkc-mejMkJC5sWU7Fqs_lC/preview";
    return course.syllabus?.[0]?.lessons?.[0]?.video_drive_url || "";
  };

  const getInitialBrief = () => {
    if (course.id === "instagram-masterclass") return "Usa el poder del algoritmo a tu favor de la mano de un experto en conversión directa por DM. Aprende ganchos magnéticos y flujos de embudos automatizados.";
    if (course.id === "facebook-ads-2025") return "Aprende las estrategias de pauta publicitaria para el 2025. Configuración de campañas, segmentación avanzada con IA de Meta, y optimización de presupuestos para maximizar ventas.";
    if (course.id === "virtual-dj-basics") return "Domina el arte de la mezcla desde cero. Aprende a manejar decks, ecualización básica, beatmatching y efectos esenciales en Virtual DJ.";
    if (course.id === "mecanica-motos") return "Aprende el funcionamiento, desarme, diagnóstico y mantenimiento de motores y sistemas de motocicletas desde cero.";
    if (course.id === "frances-desde-cero") return "Aprende el idioma del amor y los negocios desde las bases. Fonética, gramática esencial y conversación fluida en 3 niveles detallados.";
    if (course.id === "portugues-principiantes") return "Iníciate en el idioma más alegre del mundo. Aprende fonética, saludos, verbos básicos y evita las trampas del portuñol en una sola Masterclass.";
    if (course.id === "ingles-desde-cero") return "El curso definitivo para hablar inglés. Desde los sonidos básicos hasta conversaciones fluidas. Aprende gramática, listening y speaking con soporte de IA.";
    return course.headline || course.description;
  };

  const getInitialAiInstruction = () => {
    if (course.id === "instagram-masterclass") return "Eres un experto en crecimiento de Instagram y automatización de embudos de ventas. Solo respondes preguntas sobre el video actual y estrategias de redes sociales. No respondas sobre otros temas.";
    if (course.id === "facebook-ads-2025") return "Eres un experto en Performance Marketing and Media Buying. Tu especialidad es Facebook Ads 2025. Responde dudas técnicas sobre Píxel de Meta, API de Conversiones, estructuras CBO/ABO y métricas de ROAS basándote en el video. Si el alumno pregunta algo fuera de publicidad paga, redirígelo amablemente al tema del curso.";
    if (course.id === "virtual-dj-basics") return "Eres un Pro DJ experto con años de experiencia en clubes. Tu misión es enseñar a usar Virtual DJ basándote en este video. Responde dudas sobre BPM, Sync, ganancia, ecualización y cómo leer la onda de sonido (waveform). Mantén un lenguaje 'cool', motivador y muy técnico.";
    if (course.id === "mecanica-motos") return "Eres un Mecánico de Motos Senior con años de experiencia en talleres de alta competencia. Tu objetivo es guiar al alumno en base a los dos videos del curso. Responde dudas técnicas sobre motores de 2 y 4 tiempos, reglaje de válvulas, sistemas eléctricos, carburación e inyección electrónica. Usa un tono práctico, claro e instructivo.";
    if (course.id === "frances-desde-cero") return "Eres un tutor de francés nativo y paciente. Tu misión es ayudar al alumno con el contenido de los 3 videos del curso. Responde dudas sobre pronunciación, conjugación de verbos (être, avoir, etc.), vocabulario y cultura francesa. Responde siempre de forma amable, proporcionando ejemplos bilingües (Francés/Español) y transcripciones fonéticas si es necesario.";
    if (course.id === "portugues-principiantes") return "Eres un tutor nativo de Brasil, alegre, paciente y experto en enseñanza para hispanohablantes. Tu misión es ayudar al alumno con el video de Portugués. Enfócate en corregir errores comunes de 'Portuñol', explicar la pronunciación de las vocales nasales y enseñar frases útiles para viajes o negocios. Responde de forma motivadora y usa expresiones brasileñas reales.";
    if (course.id === "ingles-desde-cero") return "Eres un tutor de inglés nativo, amable y dinámico. Tu misión es ayudar al alumno con el contenido de los dos videos del curso. Responde dudas sobre gramática, vocabulario, modismos y pronunciación. Proporciona ejemplos claros y, cuando el alumno escriba en inglés, corrígelo de forma constructiva. Fomenta que el alumno intente escribir sus dudas en inglés si se siente capaz.";
    return `Eres un tutor de Inteligencia Artificial experto del curso "${course.title}". Guía y asiste al estudiante.`;
  };

  const [videoUrl] = useState<string>(getInitialVideoUrl());
  const [briefInfo] = useState<string>(getInitialBrief());
  const [aiInstruction] = useState<string>(getInitialAiInstruction());
  const [playlistVideos] = useState<any[]>(getInitialVideos());
  const [selectedVideoId, setSelectedVideoId] = useState<string>(getInitialVideos()[0]?.id || "clase-1");
  const [mobileTab, setMobileTab] = useState<"temario" | "tutor" | "recursos" | "info">("temario");

  const finalBriefInfo = briefInfo || course.headline || course.description;
  const activePlaylistVideo = playlistVideos.length > 0 ? playlistVideos.find(v => v.id === selectedVideoId) : null;
  const currentVideoUrl = activePlaylistVideo ? activePlaylistVideo.url : videoUrl;

  // Clean drive link for iframe display
  const originalVidUrl = currentVideoUrl || (course.syllabus?.[0]?.lessons?.[0]?.video_drive_url) || "";
  let embedVideoUrl = originalVidUrl;
  if (embedVideoUrl.includes("/view")) {
    embedVideoUrl = embedVideoUrl.split("/view")[0] + "/preview";
  } else if (embedVideoUrl.includes("drive.google.com/file/d/")) {
    const parts = embedVideoUrl.split("/file/d/");
    if (parts[1]) {
      const fileId = parts[1].split("/")[0];
      embedVideoUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    }
  }

  // Related PDF URL download fallback
  const pdfDownloadUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Style customization matching the course brand
  let accentColor = "text-green-400";
  let accentBg = "bg-green-500/10";
  let borderGlow = "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]";
  let activeBorder = "border-green-500 bg-green-500/10 text-white";
  let iconBg = "bg-green-500/10 border-green-500/30 text-green-400";
  let badgeTheme = "badge-standard";
  let topBarText = "SISTEMA INTEGRAL DE APRENDIZAJE";

  if (isMotos) {
    accentColor = "text-orange-400";
    accentBg = "bg-orange-500/10";
    borderGlow = "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]";
    activeBorder = "border-orange-500 bg-orange-500/10 text-white";
    iconBg = "bg-orange-500/10 border-orange-500/20 text-orange-400";
    badgeTheme = "badge-motos";
    topBarText = "ACADEMIA MECÁNICA MOTOR SPORT";
  } else if (isPortugues) {
    accentColor = "text-emerald-400";
    accentBg = "bg-emerald-500/10";
    borderGlow = "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]";
    activeBorder = "border-emerald-500 bg-emerald-500/10 text-white";
    iconBg = "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
    badgeTheme = "badge-portugues";
    topBarText = "PORTUGUÉS EXPRESS MASTERCLASS";
  } else if (isIngles) {
    accentColor = "text-sky-450";
    accentBg = "bg-sky-500/10";
    borderGlow = "hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]";
    activeBorder = "border-sky-500 bg-sky-500/10 text-white";
    iconBg = "bg-sky-500/10 border-sky-500/20 text-sky-400";
    badgeTheme = "badge-ingles";
    topBarText = "INGLÉS GLOBAL DESDE CERO";
  } else if (isFrances) {
    accentColor = "text-amber-400";
    accentBg = "bg-amber-500/10";
    borderGlow = "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]";
    activeBorder = "border-amber-500 bg-amber-500/10 text-white";
    iconBg = "bg-amber-500/10 border-amber-500/20 text-amber-400";
    badgeTheme = "badge-frances";
    topBarText = "ACADEMIA ACADÉMICA FRANCESA";
  } else if (course.id === "corte-confeccion-n2") {
    accentColor = "text-teal-400";
    accentBg = "bg-teal-500/10";
    borderGlow = "hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]";
    activeBorder = "border-teal-500 bg-teal-500/10 text-white";
    iconBg = "bg-teal-500/10 border-teal-500/20 text-teal-400";
    badgeTheme = "badge-corte2";
    topBarText = "CORTE Y CONFECCIÓN · INTERMEDIO";
  } else if (course.id === "corte-confeccion-n3") {
    accentColor = "text-fuchsia-400";
    accentBg = "bg-fuchsia-500/10";
    borderGlow = "hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]";
    activeBorder = "border-fuchsia-500 bg-fuchsia-500/10 text-white";
    iconBg = "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400";
    badgeTheme = "badge-corte3";
    topBarText = "ALTA COSTURA · NIVEL AVANZADO";
  }

  // Customize tutor instructions
  const activeInstruction = isMotos
    ? `${aiInstruction} El alumno está estudiando actualmente la sesión: "${activePlaylistVideo ? activePlaylistVideo.title : "Parte 1: El Corazón Mecánico"}"`
    : isIngles
    ? `${aiInstruction} El alumno está estudiando la sesión: "${activePlaylistVideo ? activePlaylistVideo.title : "Parte 1"}"`
    : aiInstruction;

  return (
    <div 
      className="space-y-6 text-slate-100 transition-all duration-300 relative" 
      id={`course-detail-view-${course.id}`}
    >
      {/* Top Banner Navigation Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#090f1e]/85 backdrop-blur-md p-4 rounded-2xl border border-slate-800/60 shadow-lg">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors self-start cursor-pointer"
        >
          <ChevronLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
          <span>Volver al Catálogo Académico</span>
        </button>

        <div className="flex items-center gap-2 self-start font-mono text-[10px] uppercase font-bold text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
          <Cpu className={`h-3 w-3 ${accentColor} animate-pulse`} />
          <span className="text-slate-300">{topBarText}</span>
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Cinema Player, Info & Resources */}
        <div className="lg:col-span-2 space-y-6 text-left">
          
          {/* Header Description Title Grid */}
          <div className="space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-md border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest ${accentBg} ${accentColor} border-current/25`}>
                {course.category}
              </span>
              <span className="font-mono text-[10px] flex items-center gap-1 text-slate-400 bg-[#0d1527]/50 px-2 py-0.5 rounded border border-slate-850">
                <Clock className={`h-3 w-3 ${accentColor}`} /> {course.total_lessons} Clases Premium
              </span>
              <span className="font-mono text-[10px] flex items-center gap-1 text-slate-400 bg-[#0d1527]/50 px-2 py-0.5 rounded border border-slate-850">
                <span>Dificultad:</span>
                <span className={`font-bold ${accentColor}`}>{course.difficulty}</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-3.5xl font-extrabold tracking-tight leading-tight text-white mb-1">
              {course.title}
            </h1>
            
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mt-1">
              <div className="h-6 w-6 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center">
                <User className="h-3.5 w-3.5 text-slate-300" />
              </div>
              <span className="text-slate-300">Instructor Principal: <strong className="text-white font-semibold">{course.instructor}</strong></span>
            </div>

            {/* Immersive Course summary card */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#0d1527] p-5 shadow-inner">
              <p className={`text-[10px] font-mono uppercase tracking-widest font-black ${accentColor}`}>
                Sinopsis del Aprendizaje
              </p>
              <p className="text-xs md:text-[13px] mt-1.5 leading-relaxed text-slate-300 font-sans">
                {finalBriefInfo}
              </p>
            </div>
          </div>

          {!isOwned ? (
            /* Locked Cinematic Cover Screen */
            <div className="relative aspect-video w-full rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-6 overflow-hidden border border-dashed border-slate-800 bg-[#0d1527]/90 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.04),transparent)] pointer-events-none" />
              <div className="h-14 w-14 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 flex items-center justify-center animate-pulse shadow-lg">
                <Lock className="h-6 w-6" />
              </div>
              <div className="max-w-md space-y-2">
                <h3 className="text-lg font-bold text-white">Línea de Transmisión Bloqueada</h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Aún no cuentas con este programa en tu catálogo activo de estudio. Registra tu matrícula gratuita de forma vitalicia para reproducir las lecciones de {course.instructor} y contar con soporte de Tutoría IA personalizada.
                </p>
              </div>
              <button
                onClick={() => onBuy(course.id)}
                className="rounded-xl hover:scale-[1.02] active:scale-95 px-6 py-3.5 text-xs font-black bg-green-500 hover:bg-green-600 text-slate-950 transition-all flex items-center gap-2 shadow-lg shadow-green-500/20 cursor-pointer"
              >
                <Play className="h-4 w-4 fill-current" /> Matricularse Gratis y Activar
              </button>
            </div>
          ) : (
            /* Cinematic Live Video Stage */
            <div className="space-y-4">
              <div className="space-y-3">
                <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-black border transition-all duration-300 shadow-2xl ${borderGlow}`}>
                  {/* Subtle Top Glare */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />
                  
                  {embedVideoUrl ? (
                    <iframe
                      src={embedVideoUrl}
                      title={activePlaylistVideo ? activePlaylistVideo.title : course.title}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0 absolute inset-0 rounded-2xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500 text-xs p-6">
                      No se detectó URL de transmisión activa. El instructor proveerá el video de inmediato.
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-slate-800 bg-[#0d1527]/50 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className={`h-4.5 w-4.5 ${accentColor}`} />
                    <span>Estás viendo: <strong className="text-white font-medium">{activePlaylistVideo ? activePlaylistVideo.title : "Sesión Inicial"}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800 text-green-400">
                    <Volume2 className="h-3.5 w-3.5" /> Transmisión Segura Activa
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Course Material Resources Grid */}
          <div className="rounded-2xl border border-slate-800 bg-[#0d1527]/40 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Layers className={`h-5 w-5 ${accentColor}`} />
                <h3 className="text-base font-bold text-white">Soporte y Recursos de Estudio</h3>
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase border px-2 py-0.5 rounded-lg ${accentBg} ${accentColor} border-current/20`}>
                PDFs Y DESPIECES
              </span>
            </div>

            {/* Resources list */}
            <div className="grid grid-cols-1 gap-3">
              {(isMotos ? [
                {
                  id: "moto-res-1",
                  title: "Manual Completo de Despiece de Motores 2T y 4T (PDF)",
                  description: "Diagramas técnicos detallados, torque de espárragos, calibración de válvulas de admisión y escape, y tolerancias de fabricante.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Manual_Despiece_Torques_Motores.pdf",
                  type: "pdf"
                },
                {
                  id: "moto-res-2",
                  title: "Diagrama Eléctrico de Motocicletas (PDF)",
                  description: "Guía a todo color del circuito del alternador, regulador de voltaje, módulo CDI, sistema de encendido y cableado de alternador.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Diagrama_Electrico_Motos_CDI.pdf",
                  type: "pdf"
                }
              ] : isFrances ? [
                {
                  id: "fr-res-1",
                  title: "Guía de Pronunciación Francesa (PDF)",
                  description: "Domina las vocales nasales, consonantes mudas y la liaison para hablar con acento nativo y fluidez.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Guia_Pronunciacion_Francesa.pdf",
                  type: "pdf"
                },
                {
                  id: "fr-res-2",
                  title: "Lista de los 100 verbos más usados (PDF)",
                  description: "Compendio con las conjugaciones de être, avoir, aller, faire y los verbos más comunes en presente, pasado y futuro.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Lista_100_Verbos_Mas_Usados_Frances.pdf",
                  type: "pdf"
                }
              ] : isIngles ? [
                {
                  id: "en-res-1",
                  title: "Guía de Supervivencia: Inglés para Viajeros (PDF)",
                  description: "Vocabulario de supervivencia fundamental, expresiones clave para aeropuertos, hoteles, restaurantes y direcciones urbanas.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Guia_Supervivencia_Ingles_Viajeros.pdf",
                  type: "pdf"
                },
                {
                  id: "en-res-2",
                  title: "Tablas de Tiempos Verbales Esenciales (PDF)",
                  description: "Infografía estructurada comparando el presente simple, pasado simple, presente perfecto y futuro de manera práctica y visual.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Tablas_Tiempos_Verbales_Esenciales.pdf",
                  type: "pdf"
                }
              ] : isPortugues ? [
                {
                  id: "pt-res-1",
                  title: "Guía de Supervivencia: 50 frases para Brasil (PDF)",
                  description: "El manual imprescindible con saludos, expresiones cotidianas, vocabulario de viaje y frases para interactuar sanamente.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Guia_Supervivencia_Brasil_50_Frases.pdf",
                  type: "pdf"
                },
                {
                  id: "pt-res-2",
                  title: "Diccionario de Falsos Amigos Portugués-Español (PDF)",
                  description: "Evita enredos. Identifica las palabras que suenan igual pero tienen un significado completamente opuesto.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Diccionario_Falsos_Amigos_Portugues.pdf",
                  type: "pdf"
                }
              ] : course.id === "virtual-dj-basics" ? [
                {
                  id: "vdj-res-1",
                  title: "Guía rápida de Shortcuts de Teclado (PDF)",
                  description: "Optimiza tus tiempos de respuesta con accesos directos clave para disparar efectos, loops directos y hot cues sin usar el mouse.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Guia_Shortcuts_Teclado_VirtualDJ.pdf",
                  type: "pdf"
                },
                {
                  id: "vdj-res-2",
                  title: "Pack de Samplers para Mezclas (ZIP)",
                  description: "Colección curada de efectos de sonido acapellas, bocinas (horns) y transiciones cortas de batería listos para cargar.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Pack_Samplers_VirtualDJ_Basicos.zip",
                  type: "zip"
                }
              ] : course.id === "facebook-ads-2025" ? [
                {
                  id: "fb-res-1",
                  title: "Checklist de Lanzamiento de Campaña 2025 (PDF)",
                  description: "Guía operativa paso a paso para verificar la configuración de tu píxel, audiencias, copys y creativos antes de encender tus anuncios.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Checklist_Lanzamiento_Campaña_2025.pdf",
                  type: "pdf"
                },
                {
                  id: "fb-res-2",
                  title: "Plantilla de Cálculo de Retorno de Inversión (Excel)",
                  description: "Calculadora financiera para definir presupuestos de pauta, CPA ideal y ROAS mínimo viable por producto.",
                  download_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                  file_name: "Plantilla_Calculo_Retorno_Inversion_2025.xlsx",
                  type: "excel"
                }
              ] : [
                {
                  id: "gen-res-1",
                  title: `Guía Teórica Oficial: ${course.title} (PDF)`,
                  description: "Compendio teórico explicativo, planos estructurales de diseño paso a paso, glosarios y guías suplementarias en formato digital de alta resolución.",
                  download_url: pdfDownloadUrl,
                  file_name: `${course.title.replace(/\s+/g, "_")}_Guia_Doc.pdf`,
                  type: "pdf"
                }
              ]).map((resource) => (
                <div 
                  key={resource.id} 
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-[#0c1221] transition-all hover:border-slate-700/80 gap-4"
                >
                  <div className="flex items-start gap-3.5 text-left">
                    <div className={`p-3 rounded-lg border ${iconBg} shrink-0`}>
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {resource.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={resource.download_url}
                    download={resource.file_name}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold bg-[#0d1527] hover:bg-[#131f3a] border border-slate-800/80 text-slate-200 transition-colors w-full sm:w-auto justify-center cursor-pointer"
                  >
                    <Download className="h-4 w-4 text-slate-400" />
                    Descargar
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Playlists & AI Tutor Chat Bot */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Integrated Playlist Component */}
          {isOwned && playlistVideos.length > 0 && (
            <div className="rounded-2xl border border-slate-800/80 bg-[#0d1527] p-5 space-y-4 text-left">
              <div className="border-b border-slate-800/80 pb-3">
                <p className={`text-[10px] font-mono font-black uppercase tracking-widest ${accentColor}`}>
                  Ejes de Aprendizaje ({playlistVideos.length} Unidades)
                </p>
                <h4 className="text-xs font-bold text-slate-300 mt-1">Syllabus & Orden Cronológico</h4>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[290px] pr-1.5 scrollbar-thin">
                {playlistVideos.map((vid, index) => {
                  const isSelected = vid.id === selectedVideoId;
                  const title = vid.title || "";
                  
                  // Regex match to simplify naming inside the clean index
                  const match = title.match(/^(Parte \d+|Clase \d+|Módulo \d+|Parte \d+[:]?|Clase \d+[:]?)\s*:\s*(.*)$/i);
                  let partText = `Parte ${index + 1}`;
                  let restText = title;
                  
                  if (match) {
                    partText = match[1];
                    restText = match[2];
                  }

                  return (
                    <button
                      key={vid.id}
                      onClick={() => setSelectedVideoId(vid.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 text-xs cursor-pointer ${
                        isSelected
                          ? activeBorder + " shadow-md font-extrabold"
                          : "bg-[#090f1e]/60 border-slate-850 text-slate-400 hover:text-white hover:bg-[#0c1221] hover:border-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-mono font-bold shrink-0 ${
                          isSelected
                            ? "bg-white text-slate-950"
                            : "bg-slate-900 border border-slate-800 text-slate-450"
                        }`}>
                          {index + 1}
                        </div>
                        <div className="truncate text-left leading-tight">
                          <p className={`text-[9px] font-mono uppercase tracking-wider ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                            {partText}
                          </p>
                          <span className={`truncate block mt-0.5 ${isSelected ? 'text-white font-black' : 'text-slate-350'}`}>
                            {restText}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center justify-center">
                        <ShieldCheck className={`h-4.5 w-4.5 ${
                          isSelected ? "text-white" : "text-slate-700"
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-850 text-[10px] text-slate-400 leading-relaxed font-sans">
                💡 Haz clic en cualquier parte de este temario dinámico para conmutar las clases e hilos teóricos de forma instantánea.
              </div>
            </div>
          )}

          {/* Connected Gemini Chat Area */}
          <div className="h-[480px] lg:h-[540px] flex-shrink-0">
            <GeminiChat
              courseId={course.id}
              courseTitle={course.title}
              aiInstruction={activeInstruction}
              currentLessonTitle={activePlaylistVideo ? activePlaylistVideo.title : (course.syllabus?.[0]?.lessons?.[0]?.title || "Introducción")}
              isAcademicTheme={false} // Clean dark theme assistant interface for consistency
            />
          </div>

        </div>

      </div>

      {/* MOBILE-ONLY PREMIUM VIEW (lg:hidden) */}
      <div className="lg:hidden flex flex-col space-y-4 text-left">
        {/* Compact course category & Title */}
        <div className="space-y-1 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`rounded-md border px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest ${accentBg} ${accentColor} border-current/25`}>
              {course.category}
            </span>
            <span className="font-mono text-[8px] flex items-center gap-1 text-slate-400 bg-[#0d1527]/50 px-2 py-0.5 rounded border border-slate-850">
              <Clock className="h-2.5 w-2.5" /> {course.total_lessons} Clases Premium
            </span>
            <span className="font-mono text-[8px] flex items-center gap-1 text-slate-400 bg-[#0d1527]/50 px-2 py-0.5 rounded border border-slate-850">
              <span className={`font-bold ${accentColor}`}>{course.difficulty}</span>
            </span>
          </div>
          <h1 className="text-base font-black text-white leading-snug">
            {course.title}
          </h1>
          <p className="text-[10px] text-slate-400">
            Instructor: <strong className="text-white font-semibold">{course.instructor}</strong>
          </p>
        </div>

        {/* Cinematic Live Video Stage or Lock screen */}
        {!isOwned ? (
          <div className="relative aspect-video w-full rounded-xl flex flex-col items-center justify-center p-4 text-center space-y-3 overflow-hidden border border-dashed border-slate-800 bg-[#0d1527] shadow-xl">
            <div className="h-10 w-10 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 flex items-center justify-center animate-pulse">
              <Lock className="h-5 w-5" />
            </div>
            <div className="space-y-1 max-w-sm">
              <h3 className="text-xs font-bold text-white">Línea Bloqueada</h3>
              <p className="text-[9px] leading-relaxed text-slate-400">
                Registra tu matrícula gratuita de forma vitalicia para ver las lecciones de {course.instructor}.
              </p>
            </div>
            <button
              onClick={() => onBuy(course.id)}
              className="rounded-lg px-4 py-2 text-[10px] font-black bg-green-500 text-slate-950 transition-all flex items-center gap-1.5 shadow-md shadow-green-500/15 cursor-pointer"
            >
              <Play className="h-3 w-3 fill-current" /> Matricularse Gratis
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className={`relative aspect-video w-full overflow-hidden rounded-xl bg-black border border-slate-800 shadow-lg ${borderGlow}`}>
              {embedVideoUrl ? (
                <iframe
                  src={embedVideoUrl}
                  title={activePlaylistVideo ? activePlaylistVideo.title : course.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0 absolute inset-0 rounded-xl"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 text-[10px] p-4 text-center">
                  Cargando transmisión...
                </div>
              )}
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg border border-slate-800/60 bg-[#0d1527]/40 text-[10px] gap-2">
              <span className="text-slate-300 truncate">
                Viendo: <strong className="text-white font-medium">{activePlaylistVideo ? activePlaylistVideo.title : "Clase Inicial"}</strong>
              </span>
              <span className="text-[8px] font-mono uppercase bg-slate-950 px-1.5 py-0.5 rounded border border-slate-850 text-green-405 shrink-0">
                Vivo 🟢
              </span>
            </div>
          </div>
        )}

        {/* Sticky/Interactive Tab Switcher */}
        {isOwned && (
          <div className="flex bg-[#090f1e] p-1 rounded-xl border border-slate-800/80 gap-1 overflow-x-auto scrollbar-none shadow-md">
            <button
              onClick={() => setMobileTab("temario")}
              className={`flex-1 py-2 px-1 text-center rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mobileTab === "temario"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📖 Clases
            </button>
            <button
              onClick={() => setMobileTab("tutor")}
              className={`flex-1 py-2 px-1 text-center rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mobileTab === "tutor"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🦙 Tutor IA
            </button>
            <button
              onClick={() => setMobileTab("recursos")}
              className={`flex-1 py-2 px-1 text-center rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mobileTab === "recursos"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              📂 Archivos
            </button>
            <button
              onClick={() => setMobileTab("info")}
              className={`flex-1 py-2 px-1 text-center rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mobileTab === "info"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ℹ️ Info
            </button>
          </div>
        )}

        {/* Interactive Tab contents */}
        {isOwned && (
          <div className="space-y-4 animate-fade-in">
            {mobileTab === "temario" && (
              <div className="rounded-xl border border-slate-800 bg-[#0d1527] p-4 space-y-3 text-left">
                <p className={`text-[9px] font-mono font-black uppercase tracking-widest ${accentColor}`}>
                  Ejes de Aprendizaje ({playlistVideos.length} Clases)
                </p>
                <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
                  {playlistVideos.map((vid, idx) => {
                    const isSelected = vid.id === selectedVideoId;
                    const matches = vid.title.match(/^(Parte \d+|Clase \d+|Módulo \d+|Parte \d+[:]?|Clase \d+[:]?)\s*:\s*(.*)$/i);
                    let partT = `Parte ${idx + 1}`;
                    let restT = vid.title;
                    if (matches) {
                      partT = matches[1];
                      restT = matches[2];
                    }

                    return (
                      <button
                        key={vid.id}
                        onClick={() => setSelectedVideoId(vid.id)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all duration-150 flex items-center justify-between gap-2 text-[10px] cursor-pointer ${
                          isSelected
                            ? activeBorder + " shadow-sm font-bold"
                            : "bg-[#090f1e]/60 border-slate-850 text-slate-400 hover:text-slate-205"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-mono font-bold shrink-0 ${
                            isSelected ? "bg-white text-slate-950" : "bg-slate-900 text-slate-400"
                          }`}>
                            {idx + 1}
                          </div>
                          <div className="truncate min-w-0">
                            <span className="block text-[9px] leading-tight truncate text-slate-300 font-semibold">{restT}</span>
                          </div>
                        </div>
                        <ShieldCheck className={`h-4 w-4 shrink-0 ${isSelected ? "text-white" : "text-slate-755"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {mobileTab === "tutor" && (
              <div className="h-[430px] flex-shrink-0 border border-slate-800 rounded-xl overflow-hidden bg-[#0d1527] shadow-xl">
                <GeminiChat
                  courseId={course.id}
                  courseTitle={course.title}
                  aiInstruction={activeInstruction}
                  currentLessonTitle={activePlaylistVideo ? activePlaylistVideo.title : (course.syllabus?.[0]?.lessons?.[0]?.title || "Introducción")}
                  isAcademicTheme={false}
                />
              </div>
            )}

            {mobileTab === "recursos" && (
              <div className="space-y-2">
                <div className="rounded-xl border border-slate-800 bg-[#0d1527]/40 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="text-[10px] font-bold text-white uppercase tracking-wider">Materiales Suplementarios</h3>
                  </div>
                  <div className="space-y-2 text-left">
                    {(isMotos ? [
                      {
                        id: "moto-res-1",
                        title: "Manual de Despiece (PDF)",
                        description: "Diagramas técnicos avanzados de cilindrada.",
                        download_url: pdfDownloadUrl
                      },
                      {
                        id: "moto-res-2",
                        title: "Diagrama Eléctrico (PDF)",
                        description: "Cableado CDI a color.",
                        download_url: pdfDownloadUrl
                      }
                    ] : isFrances ? [
                      {
                        id: "fr-res-1",
                        title: "Guía de Pronunciación (PDF)",
                        description: "Domina las vocales nasales.",
                        download_url: pdfDownloadUrl
                      },
                      {
                        id: "fr-res-2",
                        title: "Verbos Comunes (PDF)",
                        description: "Verbos auxiliares conjugados.",
                        download_url: pdfDownloadUrl
                      }
                    ] : isIngles ? [
                      {
                        id: "en-res-1",
                        title: "Inglés para Viajeros (PDF)",
                        description: "Vocabulario de supervivencia.",
                        download_url: pdfDownloadUrl
                      },
                      {
                        id: "en-res-2",
                        title: "Tabla de Tiempos (PDF)",
                        description: "Estructuras rápidas y sencillas.",
                        download_url: pdfDownloadUrl
                      }
                    ] : isPortugues ? [
                      {
                        id: "pt-res-1",
                        title: "50 Frases en Portugués (PDF)",
                        description: "Manual de pronunciación alegre.",
                        download_url: pdfDownloadUrl
                      }
                    ] : [
                      {
                        id: "gen-res-1",
                        title: `Guía Oficial de Apoyo (PDF)`,
                        description: "Compendio explicativo del curso.",
                        download_url: pdfDownloadUrl
                      }
                    ]).map((res) => (
                      <div key={res.id} className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1 text-left">
                          <h4 className="text-[10px] font-bold text-white truncate">{res.title}</h4>
                          <p className="text-[8px] text-slate-400 truncate mt-0.5">{res.description}</p>
                        </div>
                        <a
                          href={res.download_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 shrink-0 rounded-lg bg-green-500/10 border border-green-500/20 px-2.5 py-1.5 text-[8px] font-bold text-green-400 hover:bg-green-500/20 cursor-pointer"
                        >
                          <Download className="h-3 w-3" /> Descargar
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {mobileTab === "info" && (
              <div className="rounded-xl border border-slate-800 bg-[#0d1527] p-4 space-y-2 text-left">
                <p className={`text-[9px] font-mono uppercase tracking-widest font-black ${accentColor}`}>
                  Sinopsis de Aprendizaje
                </p>
                <p className="text-[10px] leading-relaxed text-slate-300 font-normal">
                  {finalBriefInfo}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};
