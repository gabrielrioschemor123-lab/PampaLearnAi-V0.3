import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "../types";
import { Send, Sparkles, RefreshCw, AlertCircle, CircleDashed, Copy, Check, MessageSquareIcon } from "lucide-react";

interface GeminiChatProps {
  courseId: string;
  courseTitle: string;
  aiInstruction?: string;
  currentLessonTitle?: string;
  isAcademicTheme?: boolean;
}

interface PampitoConfig {
  name: string;
  avatar: string;
  subtitle: string;
  welcome: string;
  bubbleBg: string;
  pampitoBg: string;
  accentText: string;
  accentBorder: string;
}

export const GeminiChat: React.FC<GeminiChatProps> = ({
  courseId,
  courseTitle,
  aiInstruction,
  currentLessonTitle = "Introducción",
  isAcademicTheme = false,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const bottomChatRef = useRef<HTMLDivElement | null>(null);

  // Get dynamic custom Pampito face and character based on the current course
  const getPampitoConfig = (): PampitoConfig => {
    switch (courseId) {
      case "mecanica-motos":
        return {
          name: "Pampito Motoquero",
          avatar: "🦙🔧🏍️",
          subtitle: "Mecánico Senior de Planta",
          welcome: `¡Buenas, colega! Soy **Pampito Motoquero** 🦙🔧 listo con mi overol y caja de herramientas. Vamos a engrasar la cadena del conocimiento en esta sesión de *"${currentLessonTitle}"*. ¿Querés consultarme sobre calibración de válvulas, bujías o el sistema eléctrico? ¡Preguntame y lo resolvemos!`,
          bubbleBg: "bg-orange-50/90 dark:bg-orange-950/20 text-slate-800 dark:text-orange-100",
          pampitoBg: "bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-300 border-orange-200 dark:border-orange-900/30",
          accentText: "text-orange-500 font-extrabold",
          accentBorder: "border-orange-200 dark:border-orange-900/40",
        };
      case "frances-desde-cero":
        return {
          name: "Monsieur Pampito",
          avatar: "🦙🥖🇫🇷",
          subtitle: "Professeur de Français",
          welcome: `¡Bonjour, mon ami! Soy **Monsieur Pampito** 🦙🥖. Traigo mi boira parisina para guiarte en tu dicción y gramática. Estamos listos para conquistar la pronunciación en la clase de *"${currentLessonTitle}"*. ¿Tienes dudas sobre verbos o saludos? ¡Pregúntame sin miedo!`,
          bubbleBg: "bg-amber-50/90 dark:bg-amber-950/20 text-slate-800 dark:text-amber-100",
          pampitoBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-900/30",
          accentText: "text-amber-500 font-extrabold",
          accentBorder: "border-amber-200 dark:border-amber-900/40",
        };
      case "portugues-principiantes":
        return {
          name: "Pampito Sambista",
          avatar: "🦙🥥🇧🇷",
          subtitle: "Tutor Nativo do Brasil",
          welcome: `¡Oi, tudo bem, cara! Sou o **Pampito Sambista** 🦙🌴 traiendo la alegría de Río de Janeiro. Vamos a hablar un portugués perfecto y evitar el portuñol en esta sesión de *"${currentLessonTitle}"*. ¿Qué dudas tienes sobre frases cotidianas? ¡Pregúntame!`,
          bubbleBg: "bg-emerald-50/90 dark:bg-emerald-950/20 text-slate-800 dark:text-emerald-100",
          pampitoBg: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-350 border-emerald-200 dark:border-emerald-900/30",
          accentText: "text-[#009739] font-extrabold",
          accentBorder: "border-emerald-200 dark:border-emerald-900/40",
        };
      case "ingles-desde-cero":
        return {
          name: "Sir Pampito",
          avatar: "🦙🎩🇬🇧",
          subtitle: "Cambridge Certified Tutor",
          welcome: `Hello, old chap! I'm **Sir Pampito** 🦙🎩. Enjoying a hot cup of tea while we master English grammar together. Let's make grand progress on the lesson *"${currentLessonTitle}"*. Ask me anything you want to clarify about pronunciation or syntax!`,
          bubbleBg: "bg-sky-50/90 dark:bg-sky-950/20 text-slate-800 dark:text-sky-100",
          pampitoBg: "bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border-sky-200 dark:border-sky-900/30",
          accentText: "text-sky-500 font-extrabold",
          accentBorder: "border-sky-200 dark:border-sky-900/40",
        };
      case "virtual-dj-basics":
        return {
          name: "DJ Pampito",
          avatar: "🦙🎧💿",
          subtitle: "Club Resident & Remixer",
          welcome: `¡Esa energía! 🦙🎧 Soy **DJ Pampito** con los audífonos puestos y los decks cargados a tope. Vamos a definir la ecualización y cuadrar los BPM perfectos para la sesión de *"${currentLessonTitle}"*. ¿Tienes dudas de efectos o transiciones? ¡Tirame tu consulta!`,
          bubbleBg: "bg-teal-50/90 dark:bg-teal-950/20 text-slate-800 dark:text-teal-100",
          pampitoBg: "bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-900/30",
          accentText: "text-teal-500 font-extrabold",
          accentBorder: "border-teal-200 dark:border-teal-900/40",
        };
      case "facebook-ads-2025":
        return {
          name: "Pampito Master Broker",
          avatar: "🦙🕶️📈",
          subtitle: "Socio de Crecimiento & Media Buyer",
          welcome: `¡Hola! Soy **Pampito Master Broker** 🦙🕶️. Let's talk business. Vamos a analizar audiencias, escalar presupuestos en CBO o afilar los copies para la clase de *"${currentLessonTitle}"*. ¿Cuál es tu duda técnica sobre el píxel o la segmentación? ¡Metamos mano!`,
          bubbleBg: "bg-indigo-50/90 dark:bg-indigo-950/20 text-slate-800 dark:text-indigo-100",
          pampitoBg: "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/30",
          accentText: "text-indigo-500 font-extrabold",
          accentBorder: "border-indigo-200 dark:border-indigo-900/40",
        };
      case "instagram-masterclass":
        return {
          name: "Pampito Magnético",
          avatar: "🦙📱🔥",
          subtitle: "Growth Specialist & Automation",
          welcome: `¡Atención equipo! Soy **Pampito Magnético** 🦙📱. Listo para automatizar tus DMs, estructurar reels que enganchen en 3 segundos y hackear el algoritmo de Instagram para *"${currentLessonTitle}"*. ¿Cómo querés disparar tus estadísticas hoy? ¡Te leo!`,
          bubbleBg: "bg-purple-50/90 dark:bg-purple-950/20 text-slate-800 dark:text-purple-100",
          pampitoBg: "bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-900/30",
          accentText: "text-purple-500 font-extrabold",
          accentBorder: "border-purple-200 dark:border-purple-900/40",
        };
      default:
        return {
          name: "Profesor Pampito",
          avatar: "🦙🎓✨",
          subtitle: "Tutor Académico Especializado",
          welcome: `¡Hola! Soy el **Profesor Pampito** 🦙🎓, guardián de tus progresos. Estoy emocionado por ayudarte a profundizar en el curso de *"${courseTitle}"*, clase *"${currentLessonTitle}"*. ¿Qué concepto te gustaría repasar juntos hoy?`,
          bubbleBg: "bg-slate-50 dark:bg-[#181f30] text-slate-800 dark:text-slate-100",
          pampitoBg: "bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border-rose-200 dark:border-rose-900/30",
          accentText: "text-rose-500 font-extrabold",
          accentBorder: "border-slate-200 dark:border-gray-800/80",
        };
    }
  };

  const pampito = getPampitoConfig();

  // Initialize helper welcome chat and check API Key status proactively
  useEffect(() => {
    setMessages([
      {
        role: "model",
        content: pampito.welcome,
        timestamp: new Date(),
      }
    ]);
    setErrorText(null);

    fetch("/api/gemini/status")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Failed to contact status endpoint");
      })
      .then((data) => {
        if (data && !data.configured) {
          setErrorText("Falta configurar la clave GEMINI_API_KEY.");
        }
      })
      .catch((err) => {
        console.warn("Could not check Gemini API key status proactively:", err);
      });
  }, [courseId, courseTitle, currentLessonTitle]);

  // Scroll to bottom
  useEffect(() => {
    bottomChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSending]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);
    setErrorText(null);

    const historyPayload = messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history: historyPayload,
          contextCourse: courseTitle,
          contextLesson: currentLessonTitle,
          customInstruction: aiInstruction || `Eres ${pampito.name} (${pampito.subtitle}). Tu personalidad es experta pero muy empática, divertida y usas metáforas de tu avatar alpaca o llama de vez en cuando de manera graciosa. Brinda explicaciones precisas pero entretenidas.`,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en servidor de chat.");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: data.reply,
          timestamp: new Date(),
        }
      ]);
    } catch (err: any) {
      console.error("Gemini Assistant Failure:", err);
      
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: `⚠️ **[Conexión de Emergencia]** No pude conectarme con el servidor. 
          
Asegúrate de configurar la clave \`GEMINI_API_KEY\` para liberarme. Mientras tanto, sigamos reforzando:
- Estudia bien los pasos técnicos de *"${currentLessonTitle}"*.
- Pon a prueba cada tip en la práctica para fijar el conocimiento.`,
          timestamp: new Date(),
        }
      ]);
      setErrorText("Conexión limitada. Recuerda configurar tu GEMINI_API_KEY.");
    } finally {
      setIsSending(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "model",
        content: `¡Entendido! Reseteamos la consola. ¿Qué nuevo tema de *"${courseTitle}"* vamos a dominar hoy, campeón? 🚀`,
        timestamp: new Date(),
      }
    ]);
    setErrorText(null);
  };

  const handleCopyText = (text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }).catch(err => {
      console.error("No se pudo copiar el texto:", err);
    });
  };

  return (
    <div 
      className={`flex flex-col h-full border rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-slate-900/60 backdrop-blur-md ${pampito.accentBorder}`}
      id={`gemini-sidebar-${courseId}`}
    >
      {/* Dynamic Pampito Header Card */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border shadow-inner transition-transform duration-300 hover:scale-110 ${pampito.pampitoBg}`}>
              {pampito.avatar}
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-xs md:text-sm font-black tracking-wide text-white flex items-center gap-1.5">
              {pampito.name}
              <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
            </h4>
            <p className="text-[10px] text-slate-400 font-medium">
              {pampito.subtitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={resetChat}
          className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Reiniciar conversación"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* API warning banner if any */}
      {errorText && (
        <div className="px-4 py-3 bg-rose-500/10 border-b border-rose-500/25 flex flex-col gap-2.5 text-left">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-400 animate-pulse" />
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-rose-300">
                ¡Falta Configurar la API Key de Gemini! 🦙🔌
              </p>
              <p className="text-[10px] leading-relaxed font-medium text-slate-300">
                Para que Pampito responda en tiempo real, necesitamos activar su cerebro con tu clave de Google AI Studio. ¡Es muy sencillo y totalmente gratis!
              </p>
            </div>
          </div>
          
          {/* Quick Step-by-Step Guide inside Chat */}
          <div className="rounded-xl bg-slate-950/65 border border-slate-800/80 p-3 space-y-2 text-[10px] text-slate-300">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 border-b border-slate-800 pb-1.5 uppercase tracking-wider">
              <span>🛠️ Guía Rápida de Activación</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-200">1</span>
                <div>
                  <strong className="text-white">Consigue tu Clave:</strong> Entra a <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">Google AI Studio</a> y genera una API Key gratis en segundos.
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-200">2</span>
                <div>
                  <strong className="text-white">Abre Configuración:</strong> En el menú superior o lateral de esta plataforma, haz clic en el icono de <strong className="text-white">Ajustes (⚙️)</strong> o la sección <strong className="text-white">Secrets</strong>.
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-200">3</span>
                <div>
                  <strong className="text-white">Agrega la Clave:</strong> Añade un Secreto nuevo con el nombre <code className="bg-slate-900 border border-slate-700 px-1 py-0.5 rounded text-rose-300 font-mono text-[9px] font-bold">GEMINI_API_KEY</code> y pega tu valor.
                </div>
              </div>

              <div className="flex gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-200">4</span>
                <div>
                  <strong className="text-white">¡Listo para Despegar!</strong> Una vez guardado, haz clic en el botón de <strong className="text-teal-400">Reiniciar conversación 🔄</strong> arriba de este panel para iniciar el chat interactivo.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages list with beautiful custom Alpaca branding */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left/90 scrollbar-thin">
        {messages.map((m, index) => {
          const isUser = m.role === "user";
          return (
            <div
              key={index}
              className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start animate-fade-in"}`}
            >
              {/* Left side avatar circle for Model */}
              {!isUser && (
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-base border ${pampito.pampitoBg}`}>
                  🦙
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed border transition-all duration-200 shadow-md ${
                  isUser
                    ? "bg-slate-800/90 border-slate-700/80 text-white rounded-br-none"
                    : `${pampito.bubbleBg} ${pampito.accentBorder} rounded-bl-none`
                }`}
              >
                {/* Header tag */}
                <div className="mb-1 flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-mono font-black text-slate-400">
                  <span>{isUser ? "Tú" : pampito.name}</span>
                  {!isUser && <span className={`text-[8px] rounded px-1 py-0.2 ${pampito.pampitoBg}`}>TUTOR IA</span>}
                </div>

                <div className="space-y-2 whitespace-pre-wrap font-sans">
                  {m.content.split("\n\n").map((para, paraIdx) => {
                    let formatted = para;
                    
                    // Highlight custom parameters
                    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    // Styled inline code block
                    const codeClass = "bg-slate-950/80 text-rose-300 px-1 py-0.5 rounded font-mono text-[10px] border border-slate-800";
                    formatted = formatted.replace(/`(.*?)`/g, `<code class="${codeClass}">$1</code>`);
                    
                    if (para.trim().startsWith("- ") || para.trim().startsWith("1. ")) {
                      const listItems = para.split("\n");
                      return (
                        <ul key={paraIdx} className="list-disc pl-4 space-y-1 my-1 text-slate-250 dark:text-slate-300">
                          {listItems.map((item, liIdx) => {
                            let cleanItem = item.replace(/^(-\s*|\d+\.\s*)/, "");
                            cleanItem = cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                            cleanItem = cleanItem.replace(/`(.*?)`/g, `<code class="${codeClass}">$1</code>`);
                            return <li key={liIdx} dangerouslySetInnerHTML={{ __html: cleanItem }} />;
                          })}
                        </ul>
                      );
                    }

                    return (
                      <p 
                        key={paraIdx} 
                        className="text-slate-200 dark:text-slate-100" 
                        dangerouslySetInnerHTML={{ __html: formatted }} 
                      />
                    );
                  })}
                </div>

                {/* Lower helper: copy tool + formatted time */}
                <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleCopyText(m.content, index)}
                    className="text-[9px] font-bold flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedIdx === index ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400 font-extrabold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copiar respuesta</span>
                      </>
                    )}
                  </button>

                  <div className="text-[8px] uppercase font-mono font-bold tracking-wider text-slate-500">
                    {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Dynamic loading dots indicator inside Chat */}
        {isSending && (
          <div className="flex justify-start gap-2.5 animate-pulse">
            <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-base border shadow-inner ${pampito.pampitoBg}`}>
              🦙
            </div>
            <div className={`border p-3 rounded-2xl rounded-bl-none flex items-center gap-2 ${pampito.bubbleBg} ${pampito.accentBorder}`}>
              <CircleDashed className="h-4 w-4 animate-spin text-slate-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                {pampito.name} redactando respuesta...
              </span>
            </div>
          </div>
        )}
        
        <div ref={bottomChatRef} />
      </div>

      {/* Input conversation form */}
      <form 
        onSubmit={handleSend} 
        className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSending}
          placeholder={`Pregúntale a ${pampito.name}...`}
          className="flex-1 rounded-xl px-4 py-3 text-xs focus:outline-none transition-all disabled:opacity-50 bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-slate-600 focus:ring-1 focus:ring-slate-700"
        />
        <button
          type="submit"
          disabled={!input.trim() || isSending}
          className="rounded-xl p-3 hover:scale-[1.03] active:scale-[0.98] transition-all disabled:opacity-20 flex items-center justify-center shrink-0 bg-gradient-to-r from-teal-500 to-emerald-600 text-white disabled:from-slate-800 disabled:to-slate-800"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
