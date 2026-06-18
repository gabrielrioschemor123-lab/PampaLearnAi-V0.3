import React from "react";
import { AppUser } from "../types";
import { LogOut, Sparkles, LogIn, BookOpen, GraduationCap, Sun, Moon } from "lucide-react";
import { PampaLogo } from "./PampaLogo";
import { motion } from "motion/react";

interface HeaderProps {
  user: AppUser | null;
  activeTab: "library" | "courses";
  setActiveTab: (tab: "library" | "courses") => void;
  onLogin: () => void;
  onLoginDemo: () => void;
  onLogout: () => void;
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  setActiveTab,
  onLogin,
  onLoginDemo,
  onLogout,
  theme = "dark",
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-pampa-dark/75 backdrop-blur-md border-b border-slate-200/60 dark:border-pampa-dark-border/60 pt-2.5 pb-1 sm:py-3.5 shadow-lg transition-all duration-300">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-1 md:gap-4 px-4 md:px-6">
        
        {/* Row 1 on Mobile: Logo & Controls */}
        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2">
          {/* Brand Logo with Book & AI concept */}
          <div className="md:hidden">
            <PampaLogo size="xs" />
          </div>
          <div className="hidden md:inline-flex">
            <PampaLogo size="md" />
          </div>
          
          {/* Mobile-only Auth & Theme Controls on the right side of Row 1 */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Theme Switcher */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="rounded-lg border border-slate-200 dark:border-pampa-dark-border bg-slate-50 dark:bg-[#0c1a17] p-1 text-slate-600 dark:text-slate-400 cursor-pointer"
                aria-label="Alternar modo visual"
              >
                {theme === "dark" ? (
                  <Sun className="h-3 w-3 text-pampa-gold" />
                ) : (
                  <Moon className="h-3 w-3 text-pampa-deep" />
                )}
              </button>
            )}

            {/* Compact Login/Logout or Profile for Mobile */}
            {user ? (
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-pampa-dark-border bg-white/90 dark:bg-pampa-dark-card/90 p-0.5 pr-1">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-pampa-deep text-pampa-bright font-black uppercase text-[9px]">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </div>
                <button
                  onClick={onLogout}
                  title="Cerrar Sesión"
                  className="p-0.5 text-slate-500 hover:text-rose-600 transition-all cursor-pointer"
                >
                  <LogOut className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  onClick={onLoginDemo}
                  className="rounded-lg border border-dashed border-slate-300 dark:border-pampa-dark-border px-1.5 py-0.5 text-[9px] font-bold text-slate-700 dark:text-pampa-bright cursor-pointer"
                >
                  Demo
                </button>
                <button
                  onClick={onLogin}
                  className="rounded-lg bg-[#22C55E] text-white px-2 py-0.5 text-[9px] font-bold cursor-pointer"
                >
                  Iniciar
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tab Selection: Notion & Stripe Inspired Premium Animated Buttons */}
        <div className="flex items-center rounded-xl md:rounded-2xl bg-slate-100/90 dark:bg-pampa-dark/95 p-1 border border-slate-200/80 dark:border-pampa-dark-border/80 transition-all duration-300 shadow-inner relative">
          <button
            onClick={() => setActiveTab("library")}
            className="relative flex items-center gap-1.5 md:gap-2.5 rounded-lg md:rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-350 cursor-pointer overflow-hidden"
          >
            {activeTab === "library" && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 shadow-[0_0_20px_rgba(34,197,94,0.45)] border border-green-400/30"
                transition={{ type: "spring", stiffness: 350, damping: 26 }}
              />
            )}
            <span className={`relative z-10 flex items-center gap-1.5 md:gap-2 transition-all duration-300 ${activeTab === "library" ? "text-white scale-[1.06] font-black" : "text-slate-600 dark:text-slate-400 hover:text-slate-905 dark:hover:text-slate-200"}`}>
              <BookOpen className={`h-3.5 w-3.5 md:h-4.5 md:w-4.5 transition-all ${activeTab === "library" ? "animate-pulse stroke-[2.5]" : ""}`} />
              Librería Gratis
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className="relative flex items-center gap-1.5 md:gap-2.5 rounded-lg md:rounded-xl px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-350 cursor-pointer overflow-hidden"
          >
            {activeTab === "courses" && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-gradient-to-r from-pampa-deep via-[#114536] to-[#0A3629] shadow-[0_0_20px_rgba(15,61,46,0.45)] border border-pampa-bright/30"
                transition={{ type: "spring", stiffness: 350, damping: 26 }}
              />
            )}
            <span className={`relative z-10 flex items-center gap-1.5 md:gap-2 transition-all duration-300 ${activeTab === "courses" ? "text-pampa-bright font-black scale-[1.06]" : "text-slate-600 dark:text-slate-400 hover:text-slate-905 dark:hover:text-slate-200"}`}>
              <GraduationCap className={`h-4 w-4 md:h-5 md:w-5 transition-all ${activeTab === "courses" ? "animate-bounce stroke-[2.5]" : ""}`} style={{ animationDuration: '2s' }} />
              Cursos Libres
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pampa-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pampa-gold"></span>
              </span>
            </span>
          </button>
        </div>

        {/* Desktop-only Auth & Theme Toggling Controls */}
        <div className="hidden sm:flex items-center gap-1.5 md:gap-3">
          {/* Theme Switcher with smooth hover */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="rounded-lg md:rounded-xl border border-slate-200 dark:border-pampa-dark-border bg-slate-50 dark:bg-[#0c1a17] p-1.5 md:p-2.5 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#122822] hover:scale-105 transition-all duration-200 cursor-pointer"
              aria-label="Alternar modo visual"
              title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 md:h-4 md:w-4 text-pampa-gold animate-pulse" />
              ) : (
                <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 text-pampa-deep" />
              )}
            </button>
          )}

          {user ? (
            /* User profile card: Clean layout with badging */
            <div className="flex items-center gap-2 md:gap-3 rounded-lg md:rounded-2xl border border-slate-200 dark:border-pampa-dark-border bg-white/90 dark:bg-pampa-dark-card/90 p-1 pr-2 md:p-1.5 md:pr-4 shadow-sm hover:shadow-md dark:shadow-black/40 transition-all duration-350">
              <div className="relative">
                {/* Visual Avatar Ring represent student classification */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3 md:h-3.5 md:w-3.5 items-center justify-center rounded-full bg-pampa-bright text-[7px] md:text-[8px] font-black text-black ring-1 md:ring-2 ring-white dark:ring-pampa-dark">
                  ★
                </span>
                <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-lg md:rounded-xl bg-pampa-deep text-pampa-bright border border-pampa-bright/30 font-black uppercase text-xs md:text-sm">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </div>
              </div>
              <div className="flex flex-col text-left max-w-[100px] md:max-w-[150px]">
                <span className="truncate text-[10px] md:text-xs font-extrabold text-slate-800 dark:text-slate-100">
                  {user.displayName || "Estudiante"}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="inline-flex items-center rounded bg-pampa-bright/10 px-1 py-0.5 text-[7px] md:text-[8px] font-bold text-pampa-bright uppercase tracking-widest">
                    Estudiante
                  </span>
                  <span className="inline-flex items-center rounded bg-[#22C55E]/10 px-1 py-0.5 text-[7px] md:text-[8px] font-bold text-[#22C55E] uppercase tracking-widest">
                    Libre
                  </span>
                </div>
              </div>
              <button
                onClick={onLogout}
                title="Cerrar Sesión"
                className="ml-1 md:ml-2 rounded-lg md:rounded-xl p-1.5 md:p-2 text-slate-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={onLoginDemo}
                className="flex items-center gap-1 rounded-lg md:rounded-xl border border-dashed border-slate-300 dark:border-pampa-dark-border bg-transparent dark:bg-pampa-bright/5 px-2 md:px-3.5 py-1.5 md:py-2 text-[10px] md:text-xs font-bold text-slate-700 dark:text-pampa-bright hover:bg-slate-100 dark:hover:bg-pampa-bright/10 hover:scale-102 transition-all duration-200 cursor-pointer"
                title="Acceso instantáneo para pruebas rápidas"
              >
                <LogIn className="h-3 w-3 md:h-3.5 md:w-3.5" />
                <span className="hidden md:inline">Demo Express</span>
                <span className="md:hidden">Demo</span>
              </button>
              <button
                onClick={onLogin}
                className="flex items-center gap-1 rounded-lg md:rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white px-2.5 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-bold shadow-md shadow-pampa-bright/15 hover:shadow-pampa-bright/25 hover:scale-102 transition-all duration-200 cursor-pointer"
              >
                <span className="hidden md:inline">Iniciar Sesión</span>
                <span className="md:hidden">Iniciar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
