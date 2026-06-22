import React from "react";
import { AppUser } from "../types";
import { LogOut, Sparkles, LogIn, BookOpen, GraduationCap, Sun, Moon } from "lucide-react";
import { PampaLogo } from "./PampaLogo";
import { motion } from "motion/react";

interface HeaderProps {
  user?: AppUser | null;
  activeTab: "library" | "courses";
  setActiveTab: (tab: "library" | "courses") => void;
  onLogin?: () => void;
  onLoginDemo?: () => void;
  onLogout?: () => void;
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
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-pampa-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-pampa-dark-border/40 py-2.5 sm:py-3.5 shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* LEFT: Branding/Logo zone with high visual presence */}
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto sm:flex-1 select-none">
            {/* Desktop Brand Logo */}
            <div className="hidden sm:inline-flex hover:opacity-95 transition-opacity">
              <PampaLogo size="sm" />
            </div>
            {/* Mobile Brand Logo */}
            <div className="sm:hidden inline-flex">
              <PampaLogo size="xs" />
            </div>
            
            {/* Mobile-only Theme Switcher Toggle (placed next to logo inside flex) */}
            <div className="flex sm:hidden items-center">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 cursor-pointer shadow-sm active:scale-95 transition-all"
                  aria-label="Alternar modo visual"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-amber-500 animate-[spin_30s_linear_infinite]" />
                  ) : (
                    <Moon className="h-4 w-4 text-emerald-700" />
                  )}
                </button>
              )}
            </div>
          </div>
  
          {/* CENTER: Premium SaaS/Dashboard Floating Tabs */}
          <div className="flex items-center justify-center w-full sm:w-auto sm:flex-none md:flex-1">
            <div className="relative flex items-center bg-slate-100/90 dark:bg-slate-950/40 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/40 p-1 rounded-full shadow-inner">
              <button
                onClick={() => setActiveTab("library")}
                className="relative flex items-center gap-1.5 md:gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-305 cursor-pointer overflow-hidden group"
              >
                {activeTab === "library" && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-slate-800/80 shadow dark:shadow-none border border-slate-200/40 dark:border-slate-700/60 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 transition-all duration-300 ${activeTab === "library" ? "text-emerald-700 dark:text-emerald-400 font-bold scale-[1.02]" : "text-slate-600 dark:text-slate-450 hover:text-slate-900 dark:hover:text-slate-200"}`}>
                  <BookOpen className={`h-[15px] w-[15px] transition-transform duration-300 ${activeTab === "library" ? "scale-110" : "group-hover:scale-110 text-slate-400 dark:text-slate-500"}`} />
                  <span>Librería Gratis</span>
                </span>
              </button>
  
              <button
                onClick={() => setActiveTab("courses")}
                className="relative flex items-center gap-1.5 md:gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-305 cursor-pointer overflow-hidden group"
              >
                {activeTab === "courses" && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-slate-800/80 shadow dark:shadow-none border border-slate-200/40 dark:border-slate-700/60 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 transition-all duration-300 ${activeTab === "courses" ? "text-emerald-700 dark:text-emerald-400 font-bold scale-[1.02]" : "text-slate-600 dark:text-slate-450 hover:text-slate-900 dark:hover:text-slate-200"}`}>
                  <GraduationCap className={`h-[16px] w-[16px] transition-transform duration-300 ${activeTab === "courses" ? "scale-110" : "group-hover:scale-110 text-slate-400 dark:text-slate-500"}`} />
                  <span>Cursos Libres</span>
                </span>
              </button>
            </div>
          </div>
  
          {/* RIGHT: Sophisticated micro-interactive controllers */}
          <div className="hidden sm:flex items-center justify-end sm:flex-1">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-pampa-dark-border bg-slate-50 dark:bg-slate-900/60 p-2.5 px-4 text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#122822] hover:scale-[1.02] shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-xs font-semibold select-none"
                aria-label="Alternar modo visual"
                title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 text-amber-500 animate-[spin_20s_linear_infinite]" />
                    <span>Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-[#033c32]" />
                    <span>Modo Oscuro</span>
                  </>
                )}
              </button>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
};
