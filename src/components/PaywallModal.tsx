import React, { useState } from "react";
import { Course } from "../types";
import { Sparkles, Heart, Copy, Check, Coffee, Gift, Users, Mail } from "lucide-react";
import { motion } from "motion/react";

interface PaywallModalProps {
  course?: Course | null;
  isTotalAccess?: boolean;
  onClose: () => void;
  onSimulatePurchase: (id: string) => Promise<void>;
  isProcessing: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  course,
  isTotalAccess = false,
  onClose,
}) => {
  const [copiedAlias, setCopiedAlias] = useState(false);
  const [copiedCbu, setCopiedCbu] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);

  const handleCopy = (text: string, type: "alias" | "cbu" | "crypto") => {
    navigator.clipboard.writeText(text);
    if (type === "alias") {
      setCopiedAlias(true);
      setTimeout(() => setCopiedAlias(false), 2000);
    } else if (type === "cbu") {
      setCopiedCbu(true);
      setTimeout(() => setCopiedCbu(false), 2000);
    } else if (type === "crypto") {
      setCopiedCrypto(true);
      setTimeout(() => setCopiedCrypto(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-pampa-dark-border bg-pampa-dark-card shadow-2xl ring-1 ring-pampa-bright/10 text-left"
      >
        {/* Decorative Brand Accent Row */}
        <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-pampa-bright to-pampa-gold" />

        {/* Hero Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 md:h-48">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
            alt="Donación y Colaboración Comunitaria"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pampa-dark-card via-pampa-dark-card/50 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 px-2.5 py-1 text-[10px] font-bold uppercase text-rose-400 tracking-wider">
              ❤️ Sostén el Portal Libre y Gratuito
            </span>
            <h3 className="mt-2 text-2xl font-black text-white leading-tight">
              Colabora con PampaLearn AI
            </h3>
            <p className="text-xs text-slate-300 font-medium">Nacimos para democratizar las especializaciones técnicas tradicionales y el interés cultural.</p>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Mission statement */}
          <div className="space-y-2">
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
              Hemos retirado la monetización comercial: **PampaLearn AI es ahora 100% gratuito**. 
              Nuestras video-lecciones, libros y tutorías integradas están abiertas a toda la comunidad de forma libre. 
              Si este material te ha servido en el trabajo, estudio o vida personal, considera apoyarnos para mantener el servidor web y seguir sumando material académico.
            </p>
          </div>

          {/* Payment & Donation Channels */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pampa-gold flex items-center gap-1">
              <Gift className="h-4 w-4" /> Formas de Apoyar
            </h4>

            <div className="grid gap-4 sm:grid-cols-1">
              {/* Opción 1: Mercado Pago / Transferencia (Argentina) */}
              <div className="rounded-2xl border border-pampa-dark-border bg-pampa-dark/60 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pampa-bright/10 text-pampa-bright">
                      ☕
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-white">Transferencia / Mercado Pago (Argentina)</h5>
                      <p className="text-[10px] text-slate-400">Apóyanos simulando un café o aporte libre</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 text-xs">
                  {/* Alias Row */}
                  <div className="flex items-center justify-between rounded-xl bg-[#091512] border border-pampa-bright/10 p-2.5">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">ALIAS MERCADOPAGO</p>
                      <p className="font-mono font-bold text-white mt-0.5">pampalearn.mp</p>
                    </div>
                    <button
                      onClick={() => handleCopy("pampalearn.mp", "alias")}
                      className="rounded-lg p-1.5 hover:bg-slate-800 text-pampa-bright hover:text-white transition-all cursor-pointer"
                      title="Copiar Alias"
                    >
                      {copiedAlias ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* CBU Row */}
                  <div className="flex items-center justify-between rounded-xl bg-[#091512] border border-pampa-bright/10 p-2.5">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">CBU TRANSFERENCIA</p>
                      <p className="font-mono font-bold text-white mt-0.5">0000003100028392019283</p>
                    </div>
                    <button
                      onClick={() => handleCopy("0000003100028392019283", "cbu")}
                      className="rounded-lg p-1.5 hover:bg-slate-800 text-pampa-bright hover:text-white transition-all cursor-pointer"
                      title="Copiar CBU"
                    >
                      {copiedCbu ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Opción 2: Criptomonedas (Internacional) */}
              <div className="rounded-2xl border border-pampa-dark-border bg-pampa-dark/60 p-4 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pampa-gold/10 text-pampa-gold font-bold">
                    ₿
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-white">Criptomonedas (USDT / BTC / ETH)</h5>
                    <p className="text-[10px] text-slate-400">Dirección Multired (BSC Binance Smart Chain / TRC20)</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#0e171b] border border-pampa-gold/10 p-2.5 text-xs">
                  <div className="truncate mr-2">
                    <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">DIRECCIÓN DE DEPÓSITO</p>
                    <p className="font-mono text-white mt-0.5 truncate select-all">0x7a83B3dB6beF6BC1f3A2199b5E22B0beA8C3B880</p>
                  </div>
                  <button
                    onClick={() => handleCopy("0x7a83B3dB6beF6BC1f3A2199b5E22B0beA8C3B880", "crypto")}
                    className="shrink-0 rounded-lg p-1.5 hover:bg-slate-800 text-pampa-gold hover:text-white transition-all cursor-pointer"
                    title="Copiar Dirección"
                  >
                    {copiedCrypto ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Opción 3: Colaboraciones Académicas */}
              <div className="rounded-2xl border border-pampa-dark-border bg-pampa-dark/60 p-4 flex gap-3 items-start">
                <Mail className="h-5 w-5 shrink-0 text-indigo-400 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white flex items-center gap-1">
                    ¿Te gustaría aportar Material de Estudio?
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Si eres creador, profesor o tienes guías, novelas o material técnico que te gustaría añadir al portal de forma libre y gratuita para todos, escríbenos a: <strong className="text-indigo-300 font-mono">colaboraciones@pampalearn.ai</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slogans value propositions */}
          <div className="grid gap-3 sm:grid-cols-3 text-center">
            <div className="rounded-xl bg-[#091114] border border-pampa-dark-border/40 p-3">
              <Users className="h-4 w-4 mx-auto text-rose-400" />
              <h6 className="text-[10px] font-bold text-slate-200 mt-1 uppercase">100% Comunitario</h6>
              <p className="text-[9px] text-slate-400 mt-0.5">Crece y se expande gracias al apoyo voluntario de hispanohablantes.</p>
            </div>
            <div className="rounded-xl bg-[#091114] border border-pampa-dark-border/40 p-3">
              <Sparkles className="h-4 w-4 mx-auto text-pampa-gold" />
              <h6 className="text-[10px] font-bold text-slate-200 mt-1 uppercase">Tutor Inteligente</h6>
              <p className="text-[9px] text-slate-400 mt-0.5">Tutoría con I.A. Gemini integrada gratis para consultas académicas.</p>
            </div>
            <div className="rounded-xl bg-[#091114] border border-pampa-dark-border/40 p-3">
              <Heart className="h-4 w-4 mx-auto text-pampa-bright animate-pulse" />
              <h6 className="text-[10px] font-bold text-slate-200 mt-1 uppercase">Tu Ayuda Importa</h6>
              <p className="text-[9px] text-slate-400 mt-0.5">Cada colaboración mantiene activa la plataforma para miles de personas.</p>
            </div>
          </div>

          {/* Footer details & Action */}
          <div className="flex items-center justify-between border-t border-pampa-dark-border/60 pt-5">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">PampaLearn AI · Proyecto Comunitario</span>
            <button
              onClick={onClose}
              className="rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white px-5 py-2.5 text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
            >
              Cerrar y Estudiar Gratis
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
