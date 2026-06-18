import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, X, Heart, Coffee, Star, ThumbsUp, HelpCircle } from "lucide-react";

interface VirtualMascotProps {
  onOpenTotalAccess: () => void;
}

export const VirtualMascot: React.FC<VirtualMascotProps> = ({ onOpenTotalAccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bubbleText, setBubbleText] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<"greeting" | "feedback" | "support_ask" | "thanks" | "closed" | "tip">("closed");
  const [hasNewNotification, setHasNewNotification] = useState(false);

  // List of casual, cute random thoughts Pampita can have
  const tips = [
    "¡Pssst! Recuerda que tienes tutoría por Inteligencia Artificial integrada en cada curso para sacarte cualquier duda en tiempo real. 🧠✨",
    "¿Sabías que puedes descargar manuales de diagramas técnicos en PDF completamente gratis dentro de cada plan? 📂🛠️",
    "¡Tómate un respiro! Estudiar 25 minutos y descansar 5 (método Pomodoro) es ideal para fijar conceptos. 🍅⏱️",
    "La constancia vence al talento. ¡Cada clase completada te forma como un profesional! 🔥"
  ];

  // Auto-trigger a gentle greeting bubble after a brief loading period
  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbleText("¡Hola! Soy Pampito, tu compañero virtual de estudio. 🦙✨ ¿Te está gustando la plataforma?");
      setCurrentStep("feedback");
      setIsOpen(true);
      setHasNewNotification(true);
    }, 60000); // Trigger after 60 seconds of browsing to avoid being immediate/intrusive

    return () => clearTimeout(timer);
  }, []);

  const handleMascotClick = () => {
    setHasNewNotification(false);
    if (!isOpen) {
      if (currentStep === "closed") {
        setBubbleText("¡Hola de nuevo! Es un placer verte estudiar hoy. 📚 ¿Qué te parece nuestro contenido?");
        setCurrentStep("feedback");
      }
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleFeedback = (rating: "love" | "good" | "custom") => {
    if (rating === "love") {
      setBubbleText("¡Aww, qué alegría! 😍 Lo construimos con mucho esfuerzo y amor. Como no tenemos anuncios molestos, nos sostenemos gracias a corazones solidarios. ¿Te gustaría colaborar con un cafecito? ☕");
      setCurrentStep("support_ask");
    } else if (rating === "good") {
      setBubbleText("¡Genial! 🚀 Tu feedback nos hace muy felices. ¿Sabías que con la ayuda de la comunidad podemos agregar un curso nuevo cada mes? ¿Te gustaría conocer cómo colaborar? ☕✨");
      setCurrentStep("support_ask");
    } else {
      // Pick a random tip
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      setBubbleText(randomTip);
      setCurrentStep("tip");
    }
    setHasNewNotification(true);
  };

  const handleDonationClick = () => {
    onOpenTotalAccess();
    setBubbleText("¡Eres increíble! ✨ Tu apoyo ayuda a que este conocimiento siga siendo libre y de calidad para miles de personas.");
    setCurrentStep("thanks");
  };

  const closeBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setCurrentStep("closed");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none" id="virtual-mascot-container">
      
      {/* Speech Bubble / Dialog Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-72 sm:w-80 bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-5 shadow-2xl pointer-events-auto relative hover:border-green-500/30 transition-all duration-300"
          >
            {/* Soft decorative ambient aura inside bubble */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none rounded-3xl" />

            <button 
              onClick={closeBubble}
              className="absolute top-3.5 right-3.5 text-slate-500 hover:text-white transition-colors cursor-pointer"
              title="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Mascot Title Header */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-[10px] font-mono uppercase tracking-widest font-black text-green-400 flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Pampito Alerta
              </p>
            </div>

            {/* Bubble Content Text */}
            <p className="text-xs leading-relaxed text-slate-200 mb-4 font-sans select-none">
              {bubbleText || "¡Hola! Si tienes preguntas, consúltame aquí."}
            </p>

            {/* Step-Specific Action Elements */}
            <div className="space-y-2">
              {currentStep === "feedback" && (
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleFeedback("love")}
                    className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-[10px] font-extrabold text-white rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Heart className="h-4 w-4 text-green-400 fill-current" />
                    <span>¡Me encanta!</span>
                  </button>
                  <button
                    onClick={() => handleFeedback("good")}
                    className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-[10px] font-extrabold text-white rounded-xl bg-slate-850 border border-slate-800 hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
                  >
                    <ThumbsUp className="h-4 w-4 text-slate-300" />
                    <span>Está buena</span>
                  </button>
                  <button
                    onClick={() => handleFeedback("custom")}
                    className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-[10px] font-medium text-slate-300 rounded-xl bg-slate-950/40 border border-slate-900 hover:bg-slate-900/60 active:scale-95 transition-all cursor-pointer"
                  >
                    <HelpCircle className="h-4 w-4 text-slate-500" />
                    <span>Un Tip</span>
                  </button>
                </div>
              )}

              {currentStep === "support_ask" && (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleDonationClick}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-black text-slate-950 bg-green-400 hover:bg-green-500 rounded-xl shadow-lg shadow-green-400/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <Coffee className="h-4 w-4 fill-current" />
                    <span>Invitar Cafecito ☕</span>
                  </button>
                  <button
                    onClick={() => {
                      const randomTip = tips[Math.floor(Math.random() * tips.length)];
                      setBubbleText(randomTip);
                      setCurrentStep("tip");
                    }}
                    className="w-full py-2 text-[10px] font-bold text-slate-400 hover:text-white text-center transition-colors cursor-pointer"
                  >
                    Quizás luego / Sigue enseñando
                  </button>
                </div>
              )}

              {currentStep === "tip" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const randomTip = tips[Math.floor(Math.random() * tips.length)];
                      setBubbleText(randomTip);
                    }}
                    className="flex-1 py-2 text-center text-[10px] font-bold text-slate-300 bg-slate-850 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all active:scale-95 cursor-pointer"
                  >
                    Otro tip 💡
                  </button>
                  <button
                    onClick={() => {
                      setBubbleText("¡Perfecto! Sigue con el gran trabajo. Aquí estaré para lo que necesites.");
                      setCurrentStep("thanks");
                    }}
                    className="flex-1 py-2 text-center text-[10px] font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Entendido, gracias
                  </button>
                </div>
              )}

              {currentStep === "thanks" && (
                <button
                  onClick={closeBubble}
                  className="w-full py-2 text-center text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 rounded-xl transition-all cursor-pointer"
                >
                  ¡De nada! A estudiar 🚀
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive Mascot Character Trigger */}
      <motion.button
        onClick={handleMascotClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="pointer-events-auto flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-green-500 via-[#447413] to-slate-900 border border-green-500/40 text-white shadow-[0_4px_24px_rgba(34,197,94,0.35)] relative group cursor-pointer"
        title="Pampito, Asistente Amigo"
      >
        {/* Glow pulsing ring around mascot */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full border border-green-400/40 animate-ping opacity-40 group-hover:scale-110 pointer-events-none" />

        {/* Mascot Face Icon / Indicator */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative text-2xl font-bold font-mono tracking-tight"
        >
          🦙
        </motion.div>

        {/* Small subtle visual crown / spark */}
        <div className="absolute -top-1 -right-1 bg-green-400 text-slate-950 p-0.5 rounded-full border border-slate-900 shadow animate-pulse">
          <Sparkles className="h-3 w-3 text-slate-950 fill-current" />
        </div>

        {/* Notification indicator dot */}
        {hasNewNotification && !isOpen && (
          <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border border-slate-950 flex items-center justify-center text-[7px] font-black text-white">1</span>
          </span>
        )}

        {/* Floating Tooltip Label */}
        <span className="absolute -left-32 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-950 border border-slate-800 text-slate-100 text-[10px] font-bold px-2.5 py-1.5 rounded-lg select-none whitespace-nowrap shadow-xl">
          ¿Te gusta Pampalearn? Ask me! 💬
        </span>
      </motion.button>

    </div>
  );
};
