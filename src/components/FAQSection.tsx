import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "¿Los cursos son realmente gratuitos?",
      answer: "Sí, el acceso a las videoclases, cuestionarios y contenido en línea es de libre acceso. Nuestro compromiso es democratizar la formación técnica y de oficios prácticos."
    },
    {
      question: "¿Necesito comenzar con conocimientos técnicos previos?",
      answer: "No, para nada. El plan de estudios de cada curso está diseñado pedagógicamente desde cero. Instructores expertos te guiarán paso a paso con vocabulario sumamente comprensible."
    },
    {
      question: "¿Cuál es la duración promedio de cada capacitación?",
      answer: "Tú manejas tus propios tiempos. Al ser clases pregrabadas con soporte interactivo, puedes realizarlas a tu ritmo. La mayoría de los alumnos finalizan un curso en un lapso de 2 a 4 semanas."
    },
    {
      question: "¿Qué tipo de soporte interactivo ofrecen?",
      answer: "Contamos con un tutor de Inteligencia Artificial que te asiste en tiempo real mientras ves las clases, respondiendo al instante tus dudas específicas sobre mecánica, oficios o idiomas."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-12 md:mt-20 border-t border-slate-200/50 dark:border-slate-800/60 pt-12 md:pt-16 font-sans">
      <div className="mx-auto max-w-3xl">
        {/* Header containing badge, title & description */}
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
            <HelpCircle className="h-3 w-3" /> Soporte Pedagógico
          </span>
          <h2 className="text-xl md:text-3xl font-black text-slate-850 dark:text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Resolvemos tus dudas principales para que puedas empezar tu proceso de aprendizaje hoy mismo sin obstáculos.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-3 px-1 md:px-0">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-slate-100/70 border-emerald-500/30 dark:bg-slate-900/40 dark:border-emerald-500/20 shadow-md"
                    : "bg-slate-50/50 border-slate-200/60 dark:bg-[#0c1221]/30 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80"
                }`}
              >
                {/* Trigger button */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 transition-colors cursor-pointer select-none"
                >
                  <span className={`text-xs md:text-sm font-bold tracking-tight transition-colors ${
                    isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-200"
                  }`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 dark:text-slate-550 shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer Wrap */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 md:px-5 md:pb-5 text-[11px] md:text-xs leading-relaxed text-slate-550 dark:text-slate-400 border-t border-slate-200/30 dark:border-slate-800/40 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
