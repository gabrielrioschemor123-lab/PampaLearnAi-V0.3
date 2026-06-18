import React, { useState } from "react";
import { Course } from "../types";
import { Sparkles, Heart, Copy, Check, Gift, Mail, Smartphone } from "lucide-react";
import { motion } from "motion/react";

interface PaywallModalProps {
  course?: Course | null;
  isTotalAccess?: boolean;
  onClose: () => void;
  onSimulatePurchase: (id: string) => Promise<void>;
  isProcessing: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  onClose,
}) => {
  const [copiedAlias, setCopiedAlias] = useState(false);
  const [copiedCvu, setCopiedCvu] = useState(false);

  const handleCopy = (text: string, type: "alias" | "cvu") => {
    navigator.clipboard.writeText(text);
    if (type === "alias") {
      setCopiedAlias(true);
      setTimeout(() => setCopiedAlias(false), 2000);
    } else if (type === "cvu") {
      setCopiedCvu(true);
      setTimeout(() => setCopiedCvu(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-pampa-dark-border bg-pampa-dark-card shadow-2xl ring-1 ring-pampa-bright/10 text-left"
      >
        {/* Decorative thin accent line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-pampa-bright to-pampa-gold" />

        <div className="p-4 md:p-5 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[9px] font-bold uppercase text-rose-400 tracking-wider">
                ❤️ Proyecto Comunitario
              </span>
              <h3 className="text-lg font-extrabold text-white leading-tight">
                Colabora con PampaLearn AI
              </h3>
              <p className="text-[11px] text-slate-400 leading-normal">
                PampaLearn es 100% gratuito. Cada aporte ayuda a mantener el servidor web activo.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white text-xl font-bold p-1 cursor-pointer leading-none"
            >
              ×
            </button>
          </div>

          {/* Payment & Donation Channels */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-pampa-gold flex items-center gap-1">
              <Gift className="h-3 w-3" /> Formas de Apoyar
            </h4>

            {/* Mercado Pago Block */}
            <div className="rounded-xl border border-pampa-dark-border bg-pampa-dark/40 p-3 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Smartphone className="h-3.5 w-3.5 text-pampa-bright" />
                <div>
                  <h5 className="text-[11px] font-bold text-white leading-none">Mercado Pago / Cuenta Digital (Argentina)</h5>
                  <p className="text-[9px] text-slate-400 mt-0.5">Aporte voluntario via transferencia</p>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px]">
                {/* Alias */}
                <div className="flex items-center justify-between rounded-lg bg-black/30 border border-pampa-bright/5 p-2">
                  <div>
                    <span className="text-[8px] text-slate-500 uppercase font-mono tracking-wider block">ALIAS MERCADOPAGO</span>
                    <span className="font-mono font-bold text-slate-200">gabrielrios18mp</span>
                  </div>
                  <button
                    onClick={() => handleCopy("gabrielrios18mp", "alias")}
                    className="rounded p-1 hover:bg-slate-800 text-pampa-bright hover:text-white transition-all cursor-pointer"
                    title="Copiar Alias"
                  >
                    {copiedAlias ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* CVU */}
                <div className="flex items-center justify-between rounded-lg bg-black/30 border border-pampa-bright/5 p-2">
                  <div>
                    <span className="text-[8px] text-slate-500 uppercase font-mono tracking-wider block">CVU MERCADOPAGO</span>
                    <span className="font-mono font-bold text-slate-200 break-all select-all">0000003100050627633684</span>
                  </div>
                  <button
                    onClick={() => handleCopy("0000003100050627633684", "cvu")}
                    className="rounded p-1 hover:bg-slate-800 text-pampa-bright hover:text-white transition-all cursor-pointer"
                    title="Copiar CVU"
                  >
                    {copiedCvu ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Direct Mercado Pago Link Button */}
                <div className="pt-1">
                  <a
                    href="https://link.mercadopago.com.ar/pampalearn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-pampa-bright hover:bg-pampa-bright/90 text-white font-bold py-2.5 px-3 text-xs text-center transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-md shadow-pampa-bright/10"
                  >
                    <Smartphone className="h-4 w-4 shrink-0" />
                    <span>Abrir link de Mercado Pago ⚡</span>
                  </a>
                  <p className="text-[9px] text-slate-400 mt-1 leading-normal text-center font-normal">
                    Puedes transferir directamente tocando este botón, o ingresando el <strong className="text-slate-300 font-bold">Alias</strong> o <strong className="text-slate-300 font-bold">CVU</strong> detallado arriba en tu app bancaria.
                  </p>
                </div>
              </div>
            </div>

            {/* Contribuciones Material */}
            <div className="rounded-xl border border-pampa-dark-border bg-pampa-dark/30 p-2.5 flex gap-2 items-start text-[10px]">
              <Mail className="h-4 w-4 shrink-0 text-indigo-400 mt-0.5" />
              <div>
                <h5 className="font-bold text-white leading-none">¿Quieres donar material académico?</h5>
                <p className="text-slate-400 mt-1 leading-normal">
                  Escríbenos con guías o novelas gratis a: <strong className="text-indigo-300 font-mono select-all">colaboraciones@pampalearn.ai</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
            <div className="rounded-lg bg-black/20 border border-pampa-dark-border/45 p-2">
              <Sparkles className="h-3 w-3 mx-auto text-pampa-gold mb-0.5" />
              <p className="text-slate-400">Tutor I.A. Inteligente Libre</p>
            </div>
            <div className="rounded-lg bg-black/20 border border-pampa-dark-border/45 p-2">
              <Heart className="h-3 w-3 mx-auto text-rose-400 mb-0.5 animate-pulse" />
              <p className="text-slate-400">100% Sostenido por Alumnos</p>
            </div>
          </div>

          {/* Footer & Action Button */}
          <div className="flex items-center justify-between border-t border-pampa-dark-border/40 pt-3">
            <span className="text-[8px] text-slate-500 font-mono uppercase tracking-wider block">PampaLearn AI · 2026</span>
            <button
              onClick={onClose}
              className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-[11px] font-bold transition-all hover:scale-[1.02] cursor-pointer"
            >
              Cerrar y Estudiar Gratis
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
