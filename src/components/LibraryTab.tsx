import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Book } from "../types";
import { initialBooks } from "../data";
import { BookGrid, useFavoritesState, useSavedLaterState } from "./BookGrid";
import { BookOpen, Search, Sparkles, FileText, Share2, Compass, AlertCircle, ExternalLink, Heart, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const removeAccents = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

/* -------------------------------------------------------------------------- */
/*                       MAIN FILE CONTAINER (PARENT)                         */
/* -------------------------------------------------------------------------- */
export const LibraryTab: React.FC = () => {
  const [books] = useState<Book[]>(() => {
    return initialBooks.filter(
      (b) =>
        b.category === "Brian Tracy" ||
        b.category === "Colección Éxito: Brian Tracy" ||
        b.category === "Ventas y Negocios" ||
        b.category === "Disney" ||
        b.category === "50 Sombras" ||
        b.category === "Harry Potter" ||
        b.category === "Bridgerton" ||
        b.category === "Terror" ||
        b.category === "Crepúsculo" ||
        b.category === "Juego de Tronos" ||
        b.category === "Narnia" ||
        b.category === "Kiss Me"
    );
  });
  const [loading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPill, setSelectedPill] = useState<string>("all");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Favorites and Saved for Later persistent lists
  const [favorites, toggleFavorite] = useFavoritesState();
  const [savedLater, toggleSavedLater] = useSavedLaterState();

  // Listen to hash change to support direct link opening from WhatsApp shares
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#book=")) {
        const targetId = hash.replace("#book=", "");
        const matched = books.find((b) => b.id === targetId) || initialBooks.find((b) => b.id === targetId);
        if (matched) {
          setSelectedBook(matched);
        }
      }
    };

    if (books.length > 0) {
      handleHashCheck();
    }
    window.addEventListener("hashchange", handleHashCheck);
    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, [books]);

  // Handle book sharing
  const handleShareBook = useCallback((book: Book) => {
    const shareUrl = `${window.location.origin}/#book=${book.id}`;
    
    let text = "";
    if (book.author === "Brian Tracy" || book.category === "Brian Tracy") {
      text = `¡Mirá este libro gratis de Brian Tracy ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    } else if (book.category === "Disney") {
      text = `¡Mirá este libro gratis de Disney ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    } else if (book.category === "50 Sombras") {
      text = `¡Mirá este libro gratis de E. L. James ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    } else if (book.category === "Kiss Me") {
      text = `¡Mirá este libro gratis de Elle Kennedy ('${book.title}') de la saga Kiss Me que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    } else if (book.category === "Harry Potter") {
      text = `¡Mirá este libro gratis de J. K. Rowling ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    } else {
      text = `¡Mirá este libro gratis de ${book.author} ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${shareUrl}`;
    }
    
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(book.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  }, []);

  // MEMOIZED CATEGORY ARRAYS TO PREVENT UNNECESSARY ITERATIONS ON RENDER
  const brianTracyBooks = useMemo(() => {
    return books.filter((b) => b.category === "Brian Tracy" || b.category === "Colección Éxito: Brian Tracy");
  }, [books]);

  const ventasNegociosBooks = useMemo(() => {
    return books.filter((b) => b.category === "Ventas y Negocios");
  }, [books]);

  const disneyBooks = useMemo(() => {
    return books.filter((b) => b.category === "Disney");
  }, [books]);

  const greyBooks = useMemo(() => {
    return books.filter((b) => b.category === "50 Sombras");
  }, [books]);

  const kissMeBooks = useMemo(() => {
    return books.filter((b) => b.category === "Kiss Me");
  }, [books]);

  const bridgertonBooks = useMemo(() => {
    return books.filter((b) => b.category === "Bridgerton");
  }, [books]);

  const harryPotterBooks = useMemo(() => {
    return books.filter((b) => b.category === "Harry Potter");
  }, [books]);

  const terrorBooks = useMemo(() => {
    return books.filter((b) => b.category === "Terror");
  }, [books]);

  const crepusculoBooks = useMemo(() => {
    return books.filter((b) => b.category === "Crepúsculo");
  }, [books]);

  const juegoDeTronosBooks = useMemo(() => {
    return books.filter((b) => b.category === "Juego de Tronos");
  }, [books]);

  const narniaBooks = useMemo(() => {
    return books.filter((b) => b.category === "Narnia");
  }, [books]);

  const favoriteBooks = useMemo(() => {
    return books.filter((b) => favorites.includes(b.id));
  }, [books, favorites]);

  const savedLaterBooks = useMemo(() => {
    return books.filter((b) => savedLater.includes(b.id));
  }, [books, savedLater]);

  const categories = useMemo(() => ["All", "Ventas y Negocios", "Brian Tracy", "Disney", "Sagas de Éxito Mundial", "Terror"], []);

  // MEMOIZED FILTER MATCHES
  const filteredBooks = useMemo(() => {
    const cleanSearch = removeAccents(searchTerm);
    return books.filter((book) => {
      const cleanTitle = removeAccents(book.title || "");
      const cleanAuthor = removeAccents(book.author || "");
      const cleanDescription = removeAccents(book.description || "");
      const cleanCategory = removeAccents(book.category || "");
      
      const cleanKeywords = book.keywords && Array.isArray(book.keywords)
        ? book.keywords.map(kw => removeAccents(kw))
        : [];

      // Whole phrase matching
      const matchesWholePattern = 
        cleanTitle.includes(cleanSearch) ||
        cleanAuthor.includes(cleanSearch) ||
        cleanDescription.includes(cleanSearch) ||
        cleanCategory.includes(cleanSearch) ||
        cleanKeywords.some(kw => kw.includes(cleanSearch));

      // Word-by-word matching
      const searchWords = cleanSearch.split(/\s+/).filter(Boolean);
      const matchesAllWords = searchWords.length > 0 && searchWords.every(word => 
        cleanTitle.includes(word) ||
        cleanAuthor.includes(word) ||
        cleanDescription.includes(word) ||
        cleanCategory.includes(word) ||
        cleanKeywords.some(kw => kw.includes(word))
      );

      const matchesSearch = searchTerm === "" || matchesWholePattern || matchesAllWords;
      
      const matchesCategory =
        selectedCategory === "All" ||
        (selectedCategory === "Sagas de Éxito Mundial" &&
          ["50 Sombras", "Bridgerton", "Harry Potter", "Crepúsculo", "Juego de Tronos", "Narnia", "Kiss Me"].includes(book.category)) ||
        book.category === selectedCategory ||
        (selectedCategory === "Brian Tracy" && book.category === "Colección Éxito: Brian Tracy");
      
      let matchesPill = true;
      if (selectedPill === "exito") {
        matchesPill = book.category === "Brian Tracy" || book.category === "Colección Éxito: Brian Tracy" || book.category === "Ventas y Negocios";
      } else if (selectedPill === "magia") {
        matchesPill = book.category === "Disney" || book.category === "Harry Potter" || book.category === "Narnia";
      } else if (selectedPill === "interes") {
        matchesPill = book.category === "50 Sombras" || book.category === "Bridgerton" || book.category === "Crepúsculo" || book.category === "Terror" || book.category === "Juego de Tronos" || book.category === "Kiss Me";
      } else if (selectedPill === "favorites") {
        matchesPill = favorites.includes(book.id);
      } else if (selectedPill === "saved-later") {
        matchesPill = savedLater.includes(book.id);
      }
        
      return matchesSearch && matchesCategory && matchesPill;
    });
  }, [books, searchTerm, selectedCategory, selectedPill, favorites, savedLater]);

  const handleSelectBookInternal = useCallback((b: Book) => {
    setSelectedBook(b);
  }, []);

  return (
    <div className="relative space-y-6 md:space-y-12">
      {/* Immersive Page Background - Vintage Academic Library with pristine contrast preservation */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none bg-cover bg-center transition-all duration-500 bg-fixed"
        style={{ 
          backgroundImage: "url('https://i.postimg.cc/Hstp3sth/peter-herrmann-O-DUcg4c-Dlc-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Deep, luxurious vignette mask / overlay protecting text readability while maintaining fine details */}
        <div className="absolute inset-0 bg-[#f8fafc]/95 dark:bg-black/80 dark:backdrop-blur-[2px] transition-colors duration-300" />
        <div 
          className="absolute inset-0 transition-opacity duration-300 opacity-0 dark:opacity-100"
          style={{
            background: "linear-gradient(to bottom, #000000 0%, transparent 20%, transparent 80%, #000000 100%), radial-gradient(circle at center, transparent 35%, #000000 95%)"
          }}
        />
      </div>

      {/* Visual Header Banner */}
      <div 
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-250 dark:border-slate-800 shadow-xl text-white p-4 md:p-12 text-left transition-all duration-300 bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 100%), url('https://i.postimg.cc/R0yq6j21/trnava-university-sd8u-Jsf4XM4-unsplash.jpg')" 
        }}
        id="pampalearn-library-banner"
      >
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl animate-pulse" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 items-center">
          {/* Columna Izquierda: Título y Párrafo */}
          <div className="space-y-1 md:space-y-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 md:px-3.5 md:py-1 text-[10px] md:text-xs font-bold text-emerald-400 border border-emerald-550 dark:border-emerald-500/20 uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="h-3 w-3 animate-pulse" /> Biblioteca Técnica Virtual
            </span>
            <h2 className="text-lg md:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
              <span className="md:hidden">Biblioteca Abierta</span>
              <span className="hidden md:inline">Librería Abierta de <span className="text-emerald-400 font-bold">PampaLearn AI</span></span>
            </h2>
            <p className="hidden sm:block text-xs md:text-base text-slate-200 leading-relaxed font-normal">
              Potencia tu formación técnica y crecimiento personal con nuestra colección de manuales de oficios, guías prácticas y Best-Sellers seleccionados para impulsar tu autonomía y éxito profesional.
            </p>
          </div>

          {/* Columna Derecha: Barra de búsqueda estilizada de estética premium */}
          <div className="w-full relative max-w-md md:max-w-none">
            <div className="relative group">
              <Search className="absolute top-2.5 md:top-4 left-3 md:left-4 h-3.5 w-3.5 md:h-5 md:w-5 text-emerald-400 group-focus-within:animate-pulse transition-all" />
              <input
                type="text"
                placeholder="Buscar por título, autor o palabra clave... (ej: hábitos)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg md:rounded-2xl bg-[#0f172a]/60 border border-slate-800 focus:border-emerald-500 pl-8.5 md:pl-12 pr-3 md:pr-4 py-2 md:py-4 text-[11px] md:text-sm text-white placeholder-slate-450 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 md:bottom-auto md:top-1/2 md:translate-y-6 right-2 text-[9px] md:text-[10px] text-slate-400 font-mono">
              Búsqueda en tiempo real
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE FILTROS POR CATEGORÍA (Pills Selector) */}
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-4 scrollbar-none transition-all">
        <button
          onClick={() => setSelectedPill("all")}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "all"
               ? "bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "all" ? "scale-110 rotate-3" : "group-hover:rotate-6"}`}>🌐</span> 
          <span>Todos</span>
        </button>
        <button
          onClick={() => setSelectedPill("exito")}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "exito"
               ? "bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "exito" ? "scale-110" : ""}`}>🧠</span> 
          <span>Éxito Personal</span>
        </button>
        <button
          onClick={() => setSelectedPill("magia")}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "magia"
               ? "bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "magia" ? "scale-110" : ""}`}>🏰</span> 
          <span>Magia Infantil</span>
        </button>
        <button
          onClick={() => setSelectedPill("interes")}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "interes"
               ? "bg-gradient-to-r from-[#22C55E] to-[#4ADE80] text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "interes" ? "scale-110" : ""}`}>📰</span> 
          <span>Interés General</span>
        </button>

        <button
          onClick={() => {
            setSelectedPill("favorites");
            setSelectedCategory("All");
          }}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "favorites"
               ? "bg-gradient-to-r from-rose-500 to-rose-400 text-white border-transparent shadow-[0_0_20px_rgba(244,63,94,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "favorites" ? "scale-110 rotate-3" : ""}`}>❤️</span> 
          <span>Favoritos ({favoriteBooks.length})</span>
        </button>

        <button
          onClick={() => {
            setSelectedPill("saved-later");
            setSelectedCategory("All");
          }}
          className={`rounded-lg md:rounded-full px-3.5 md:px-6 py-2 md:py-3 text-[11px] md:text-xs font-bold uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 md:gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 select-none ${
            selectedPill === "saved-later"
               ? "bg-gradient-to-r from-amber-500 to-amber-400 text-white border-transparent shadow-[0_0_20px_rgba(245,158,11,0.45)] font-extrabold"
               : "bg-slate-100/40 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-white/10 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-slate-100 shadow-sm"
          }`}
        >
          <span className={`text-xs md:text-base transition-transform duration-300 ${selectedPill === "saved-later" ? "scale-110" : ""}`}>💾</span> 
          <span>Para Después ({savedLaterBooks.length})</span>
        </button>
      </div>

      {/* TUS FAVORITOS - HIGH-FIDELITY ROW */}
      {searchTerm === "" && selectedCategory === "All" && selectedPill === "all" && favoriteBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-950/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-150 dark:border-rose-500/20 text-[8px] md:text-[9px] font-extrabold text-rose-600 dark:text-rose-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Tu Selección
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-rose-600 dark:text-rose-400 uppercase tracking-tight flex items-center gap-1">
                  ❤️ Tus Manuales Favoritos
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Tu colección privada y personalizada de manuales y novelas predilectas.
              </p>
            </div>
          </div>

          <BookGrid
            books={favoriteBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* GUARDADOS PARA DESPUÉS - HIGH-FIDELITY ROW */}
      {searchTerm === "" && selectedCategory === "All" && selectedPill === "all" && savedLaterBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-amber-200/60 dark:border-amber-950/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-150 dark:border-amber-500/20 text-[8px] md:text-[9px] font-extrabold text-amber-600 dark:text-amber-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Lectura Pendiente
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-tight flex items-center gap-1">
                  💾 Guardados para Después
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Lecturas y guías guardadas para repasar y asimilar en tu próximo tiempo de formación.
              </p>
            </div>
          </div>

          <BookGrid
            books={savedLaterBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* HARRY POTTER COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "magia") && harryPotterBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-155 dark:border-amber-500/20 text-[8px] md:text-[9px] font-extrabold text-amber-600 dark:text-amber-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Magia
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Colección Legendaria: Harry Potter
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Uuniverso fantástico de J. K. Rowling. Lee al instante los tomos emblemáticos de la saga mágica más querida.
              </p>
            </div>
          </div>

          <BookGrid
            books={harryPotterBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* NARNIA COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "magia") && narniaBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-[#ecfdf5] dark:bg-emerald-500/10 border border-emerald-150 dark:border-emerald-500/20 text-[8px] md:text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Fantasía Clásica
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Saga de Éxito mundial: Las Crónicas de Narnia
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                El mágico universo de C. S. Lewis, Aslan y los hermanos Pevensie en sus inmortales aventuras.
              </p>
            </div>
          </div>

          <BookGrid
            books={narniaBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* JUEGO DE TRONOS COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && juegoDeTronosBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-155 dark:border-amber-500/20 text-[8px] md:text-[9px] font-extrabold text-amber-600 dark:text-amber-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Fantasía Épica
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Saga de Éxito mundial: Juego de Tronos
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Épica de fantasía medieval y batallas dinásticas de George R. R. Martin en el orden oficial.
              </p>
            </div>
          </div>

          <BookGrid
            books={juegoDeTronosBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* CREPUSCULO COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && crepusculoBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-red-50 dark:bg-red-500/10 border border-red-155 dark:border-red-500/20 text-[8px] md:text-[9px] font-extrabold text-red-600 dark:text-red-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Fantasía Romántica
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Saga de Éxito Mundial: Crepúsculo
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Sigue la legendaria saga romántica de Stephenie Meyer de forma libre en el orden recomendado.
              </p>
            </div>
          </div>

          <BookGrid
            books={crepusculoBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* BRIDGERTON COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && bridgertonBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-155 dark:border-rose-500/20 text-[8px] md:text-[9px] font-extrabold text-rose-600 dark:text-rose-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Histórico
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Saga de Éxito Mundial: Los Bridgerton
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Sigue la aclamada saga de Julia Quinn. Las 8 entregas correspondientes a cada uno de los hermanos de la familia.
              </p>
            </div>
          </div>

          <BookGrid
            books={bridgertonBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* 50 SOMBRAS DE GREY COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && greyBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-155 dark:border-rose-500/20 text-[8px] md:text-[9px] font-extrabold text-rose-600 dark:text-rose-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Saga Romántica
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Saga de Éxito Mundial: 50 Sombras
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Explora la exitosa e intensa trilogía escrita por E. L. James.
              </p>
            </div>
          </div>

          <BookGrid
            books={greyBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* KISS ME SAGA - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && kissMeBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-950/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-150 dark:border-rose-500/20 text-[8px] md:text-[9px] font-extrabold text-rose-600 dark:text-rose-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Saga de Romance
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-755 dark:text-gray-300 uppercase tracking-tight flex items-center gap-1">
                  ❤️ Saga de Éxito Mundial: Kiss Me (Elle Kennedy)
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal font-sans">
                La adictiva serie de romance universitario y hockey sobre hielo de Elle Kennedy que conquistó corazones en todo el mundo.
              </p>
            </div>
          </div>

          <BookGrid
            books={kissMeBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* BRIAN TRACY - HIGHLIGHTED ROW ON TOP (MEMOIZED GATES) */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "exito") && brianTracyBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-150 dark:border-emerald-500/20 text-[8px] md:text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Colección Especial
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Colección Éxito: Brian Tracy
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Las 5 obras esenciales sobre mentalidad de alto impacto, organización de metas y técnicas excepcionales de venta.
              </p>
            </div>
          </div>

          <BookGrid
            books={brianTracyBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* VENTAS Y NEGOCIOS COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "exito") && ventasNegociosBooks.length > 0 && (
        <div className="space-y-3 text-left" id="ventas-negocios-collection">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-150 dark:border-emerald-500/20 text-[8px] md:text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Negocios
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Colección: Ventas y Negocios
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Estrategias de alto rendimiento empresarial, neuromarketing, persuasión ética y desarrollo comercial.
              </p>
            </div>
          </div>

          <BookGrid
            books={ventasNegociosBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* DISNEY COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "magia") && disneyBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-violet-50 dark:bg-violet-500/10 border border-violet-150 dark:border-violet-500/20 text-[8px] md:text-[9px] font-extrabold text-violet-600 dark:text-violet-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Creatividad
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Colección Creativa: Disney
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Guías y manuales formativos sobre narración mágica, creatividad Imagineering y principios de animación clásica.
              </p>
            </div>
          </div>

          <BookGrid
            books={disneyBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* TERROR COLLECTION - HIGH-FIDELITY FEATURED ROW ON TOP */}
      {searchTerm === "" && selectedCategory === "All" && (selectedPill === "all" || selectedPill === "interes") && terrorBooks.length > 0 && (
        <div className="space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-900/60 pb-1.5 transition-colors duration-300">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-155 dark:border-rose-500/20 text-[8px] md:text-[9px] font-extrabold text-rose-600 dark:text-rose-400 px-1.5 py-0.5 uppercase tracking-wider">
                  Misterio & Suspenso
                </span>
                <h3 className="text-xs md:text-[14px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                  Colección de Suspenso: Terror
                </h3>
              </div>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors duration-300 font-normal">
                Historias escalofriantes, leyendas ancestrales, monstruos inolvidables y pesadillas extraordinarias.
              </p>
            </div>
          </div>

          <BookGrid
            books={terrorBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        </div>
      )}

      {/* Main Browse Section */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 text-left border-b border-slate-200 dark:border-slate-900 pb-5 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              Explorar Catálogo General
            </h3>
          </div>
          
          {/* Filters & Search bar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute top-3 left-3 h-4 w-4 text-slate-400 dark:text-gray-650" />
              <input
                type="text"
                placeholder="Buscar por título, autor o palabra clave... (ej: hábitos, Disney, Tracy)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl bg-white dark:bg-[#06080e] border border-slate-200 dark:border-slate-900 pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-605 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300"
              />
            </div>

            {/* Category Select Filters */}
            <div className="flex md:flex-wrap items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none whitespace-nowrap max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-white dark:text-black font-extrabold shadow-lg shadow-emerald-500/10"
                      : "bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-gray-900 text-slate-800 dark:text-gray-400 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {cat === "All" ? "Todos" : cat.replace("Colección Éxito: ", "")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Grid Results */}
        {loading ? (
          <BookGrid
            books={[]}
            onSelectBook={handleSelectBookInternal}
            isLoading={true}
          />
        ) : filteredBooks.length === 0 ? (
          selectedPill === "favorites" ? (
            <div className="text-center py-20 px-6 rounded-2xl bg-white dark:bg-[#090b11] border border-slate-200 dark:border-gray-900 transition-colors duration-300">
              <Heart className="mx-auto h-12 w-12 text-rose-400 dark:text-rose-800 mb-4 animate-pulse" />
              <p className="text-slate-800 dark:text-white font-extrabold text-base">Aún no tienes favoritos guardados</p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
                Toca el ícono de corazón (❤️) en la esquina superior de cualquier manual de la librería para agregarlo a esta colección personalizada de consulta frecuente.
              </p>
              <button
                onClick={() => {
                  setSelectedPill("all");
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 rounded-lg bg-emerald-500 text-white dark:text-black px-5 py-2.5 text-xs font-extrabold shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition-all active:scale-95 cursor-pointer"
              >
                Explorar Catálogo General
              </button>
            </div>
          ) : selectedPill === "saved-later" ? (
            <div className="text-center py-20 px-6 rounded-2xl bg-white dark:bg-[#090b11] border border-slate-200 dark:border-gray-900 transition-colors duration-300">
              <Bookmark className="mx-auto h-12 w-12 text-amber-500 dark:text-amber-700/60 mb-4" />
              <p className="text-slate-800 dark:text-white font-extrabold text-base">Tu lista de lectura pendiente está vacía</p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
                Haz clic en el ícono de marcador (💾) en la portada de cualquier manual de estudio para guardarlo aquí y reanudar cómodamente tu aprendizaje en otro momento.
              </p>
              <button
                onClick={() => {
                  setSelectedPill("all");
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 rounded-lg bg-emerald-500 text-white dark:text-black px-5 py-2.5 text-xs font-extrabold shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition-all active:scale-95 cursor-pointer"
              >
                Explorar Catálogo General
              </button>
            </div>
          ) : (
            <div className="text-center py-24 rounded-2xl bg-white dark:bg-[#090b11] border border-slate-200 dark:border-gray-900 transition-colors duration-300">
              <BookOpen className="mx-auto h-12 w-12 text-slate-300 dark:text-gray-800 mb-4" />
              <p className="text-slate-650 dark:text-gray-450 font-bold">No se encontraron manuales para tu filtro/búsqueda.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-55 dark:bg-emerald-500/5 px-4 py-2 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-black transition-all cursor-pointer"
              >
                Mostrar todos
              </button>
            </div>
          )
        ) : (
          <BookGrid
            books={filteredBooks}
            onSelectBook={handleSelectBookInternal}
            isLoading={false}
          />
        )}
      </div>

      {/* Visor de Lectura Online Modal (SINGLE GLOBAL PORTAL CONTROLLING OVERHEAD RENDERING STATE) */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 dark:bg-black/95 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-2xl border border-slate-200 dark:border-gray-900 bg-white dark:bg-[#06080e] p-4 sm:p-6 shadow-2xl flex flex-col max-h-[92vh] text-left transition-colors duration-300"
            >
              {/* Modal and reading controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-gray-950 pb-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                    <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{selectedBook.title}</h3>
                    <p className="text-xs text-slate-750 dark:text-gray-400 font-medium">
                      Autor: {selectedBook.author} · {selectedBook.pages} páginas · Licenciamiento Libre de Estudio
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => toggleFavorite(selectedBook.id)}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                    favorites.includes(selectedBook.id)
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20"
                      : "bg-slate-50 dark:bg-[#0c101b] border-slate-100/50 dark:border-gray-805 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-900"
                  }`}
                  title={favorites.includes(selectedBook.id) ? "Quitar de Favoritos" : "Marcar como Favorito"}
                >
                  <Heart className={`h-3.5 w-3.5 ${favorites.includes(selectedBook.id) ? "fill-rose-500 text-rose-500 animate-pulse" : "text-rose-400"}`} />
                  <span>{favorites.includes(selectedBook.id) ? "Favorito" : "Favorito"}</span>
                </button>

                <button
                  onClick={() => toggleSavedLater(selectedBook.id)}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                    savedLater.includes(selectedBook.id)
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
                      : "bg-slate-50 dark:bg-[#0c101b] border-slate-100/50 dark:border-gray-805 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-900"
                  }`}
                  title={savedLater.includes(selectedBook.id) ? "Quitar de Guardados" : "Guardar para después"}
                >
                  <Bookmark className={`h-3.5 w-3.5 ${savedLater.includes(selectedBook.id) ? "fill-amber-500 text-amber-500" : "text-amber-450"}`} />
                  <span>{savedLater.includes(selectedBook.id) ? "Guardado" : "Guardar después"}</span>
                </button>

                <button
                  onClick={() => handleShareBook(selectedBook)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-100/50 dark:border-gray-850 bg-slate-50 dark:bg-[#0c101b] hover:bg-slate-100 dark:hover:bg-gray-900 px-3.5 py-1.5 text-xs font-bold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-pointer"
                  title="Compartir enlace permanente"
                >
                  <Share2 className="h-3.5 w-3.5 text-emerald-500" /> permanente
                </button>
                <button
                  onClick={() => {
                    setSelectedBook(null);
                    window.location.hash = "";
                  }}
                  className="rounded-lg bg-emerald-500 hover:bg-emerald-400 px-4 py-1.5 text-xs font-extrabold text-white dark:text-black transition-all active:scale-95 cursor-pointer"
                >
                  Salir del Visor
                </button>
              </div>
                </div>

              {/* PDF Preview warning & external link box to avoid any iframe sandbox blocks on mobile */}
              <div className="mt-4 bg-emerald-50/50 dark:bg-[#0a1510] border border-emerald-100 dark:border-emerald-500/10 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-700 dark:text-emerald-400">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span>Si el visor integrado tarda en cargar, puedes abrir el manual directamente en Google Drive en una nueva pestaña.</span>
                </div>
                <a
                  href={`https://drive.google.com/file/d/${selectedBook.driveId}/view?usp=drivesdk`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-emerald-500 text-white dark:text-black px-3 py-1 rounded font-bold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-all flex-shrink-0"
                >
                  <ExternalLink className="h-3 w-3" /> Abrir en Drive
                </a>
              </div>

              {/* Real dynamic PDF reader iframe */}
              <div className="mt-4 flex-1 rounded-xl bg-gray-50 dark:bg-gray-950 overflow-hidden relative border border-slate-205 dark:border-gray-900 min-h-[450px] sm:min-h-[520px]">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedBook.driveId}/preview`}
                  className="absolute inset-0 w-full h-full rounded-xl bg-[#04060b]"
                  title={selectedBook.title}
                  allow="autoplay"
                />
              </div>

              <div className="mt-4 text-center text-[10px] text-slate-750 dark:text-gray-650 font-mono flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-slate-200 dark:border-gray-950 pt-3">
                <span>PampaLearn AI © 2026. Material alojado de manera segura en servidores de prueba de Google Drive.</span>
                <span>Visor interactivo con controles de escala integrados</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
