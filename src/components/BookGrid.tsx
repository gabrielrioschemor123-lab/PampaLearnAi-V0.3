import React, { useState, useEffect, useCallback } from "react";
import { Book } from "../types";
import { BookOpen, Share2, Check, Heart, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

// Synchronized State Listeners for Multi-Row Instant Updates
const favoritesListeners = new Set<() => void>();
export const notifyFavoritesChanged = () => {
  favoritesListeners.forEach(l => l());
};
export const subscribeFavorites = (listener: () => void) => {
  favoritesListeners.add(listener);
  return () => {
    favoritesListeners.delete(listener);
  };
};

export const useFavoritesState = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("pampalearn-favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    return subscribeFavorites(() => {
      try {
        const saved = localStorage.getItem("pampalearn-favorites");
        setFavorites(saved ? JSON.parse(saved) : []);
      } catch {}
    });
  }, []);

  const toggleFavorite = useCallback((bookId: string) => {
    try {
      const saved = localStorage.getItem("pampalearn-favorites");
      const current = saved ? JSON.parse(saved) : [];
      let next;
      if (current.includes(bookId)) {
        next = current.filter((id: string) => id !== bookId);
      } else {
        next = [...current, bookId];
      }
      localStorage.setItem("pampalearn-favorites", JSON.stringify(next));
      setFavorites(next);
      notifyFavoritesChanged();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return [favorites, toggleFavorite] as const;
};

const savedLaterListeners = new Set<() => void>();
export const notifySavedLaterChanged = () => {
  savedLaterListeners.forEach(l => l());
};
export const subscribeSavedLater = (listener: () => void) => {
  savedLaterListeners.add(listener);
  return () => {
    savedLaterListeners.delete(listener);
  };
};

export const useSavedLaterState = () => {
  const [savedLater, setSavedLater] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("pampalearn-saved-later");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    return subscribeSavedLater(() => {
      try {
        const saved = localStorage.getItem("pampalearn-saved-later");
        setSavedLater(saved ? JSON.parse(saved) : []);
      } catch {}
    });
  }, []);

  const toggleSavedLater = useCallback((bookId: string) => {
    try {
      const saved = localStorage.getItem("pampalearn-saved-later");
      const current = saved ? JSON.parse(saved) : [];
      let next;
      if (current.includes(bookId)) {
        next = current.filter((id: string) => id !== bookId);
      } else {
        next = [...current, bookId];
      }
      localStorage.setItem("pampalearn-saved-later", JSON.stringify(next));
      setSavedLater(next);
      notifySavedLaterChanged();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return [savedLater, toggleSavedLater] as const;
};

interface BookGridProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  isLoading: boolean;
  layout?: "grid" | "carousel";
}

export const BookGrid: React.FC<BookGridProps> = ({ books, onSelectBook, isLoading, layout = "carousel" }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, toggleFavorite] = useFavoritesState();
  const [savedLater, toggleSavedLater] = useSavedLaterState();

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      // Run once immediately
      checkScroll();
      // Handle component re-renders and resizing
      const timer = setTimeout(checkScroll, 100);

      const observer = new ResizeObserver(() => checkScroll());
      observer.observe(el);

      return () => {
        el.removeEventListener("scroll", checkScroll);
        clearTimeout(timer);
        observer.disconnect();
      };
    }
  }, [books, checkScroll, isLoading]);

  const scrollHorizontally = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -containerWidth * 0.75 : containerWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  const handleShareWhatsApp = useCallback((e: React.MouseEvent, book: Book) => {
    e.stopPropagation();
    const appUrl = `${window.location.origin}/#book=${book.id}`;
    
    let text = "";
    if (book.author === "Brian Tracy" || book.category === "Brian Tracy") {
      text = `¡Mirá este libro gratis de Brian Tracy ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${appUrl}`;
    } else if (book.category === "Disney") {
      text = `¡Mirá este libro gratis de Disney ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${appUrl}`;
    } else {
      text = `¡Mirá este libro gratis de ${book.author} ('${book.title}') que encontré en PampaLearn AI! Accedé acá: ${appUrl}`;
    }
    
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Copy exact requested message to Clipboard as well for multi-purpose sharing
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(book.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  }, []);

  const handleCardSelect = useCallback((book: Book) => {
    onSelectBook(book);
  }, [onSelectBook]);

  if (isLoading) {
    return (
      <div className="flex overflow-x-auto pb-4 gap-3 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`shimmer-${i}`} className="w-[155px] xs:w-[165px] sm:w-[145px] md:w-[205px] shrink-0 snap-start flex flex-col gap-2.5 md:gap-4 rounded-2xl bg-white border border-slate-205/60 shadow-sm dark:bg-[#090b11] dark:border-gray-900 animate-pulse p-2.5 md:p-4">
            <div className="aspect-[3/4] w-full rounded-r-xl rounded-l-md bg-slate-100 dark:bg-gray-800/80" />
            <div className="h-4 w-2/3 bg-slate-200 dark:bg-gray-800 rounded" />
            <div className="h-3 w-1/2 bg-slate-200 dark:bg-gray-800 rounded" />
            <div className="h-8 w-full bg-slate-200 dark:bg-gray-800 rounded-lg mt-2" />
          </div>
        ))}
      </div>
    );
  }

  const isCarousel = layout === "carousel";

  if (isCarousel) {
    return (
      <div className="group/carousel relative w-full overflow-visible">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scrollHorizontally("left")}
            className="absolute left-[-16px] md:left-[-24px] top-[140px] md:top-[160px] -translate-y-1/2 z-30 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 dark:border-white/10 dark:bg-slate-900/90 text-slate-700 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400 shadow-xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md transition-all duration-200 md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden pb-4 pt-1 gap-3 px-4 -mx-4 md:mx-0 md:px-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth w-full"
        >
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelect={handleCardSelect}
              onShare={handleShareWhatsApp}
              copied={copiedId === book.id}
              isFavorite={favorites.includes(book.id)}
              isSavedLater={savedLater.includes(book.id)}
              onToggleFavorite={toggleFavorite}
              onToggleSavedLater={toggleSavedLater}
              isCarousel={true}
            />
          ))}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scrollHorizontally("right")}
            className="absolute right-[-16px] md:right-[-24px] top-[140px] md:top-[160px] -translate-y-1/2 z-30 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 dark:border-white/10 dark:bg-slate-900/90 text-slate-700 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400 shadow-xl hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md transition-all duration-200 md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        )}
      </div>
    );
  }

  // Grid fallback layout (used in searches)
  return (
    <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSelect={handleCardSelect}
          onShare={handleShareWhatsApp}
          copied={copiedId === book.id}
          isFavorite={favorites.includes(book.id)}
          isSavedLater={savedLater.includes(book.id)}
          onToggleFavorite={toggleFavorite}
          onToggleSavedLater={toggleSavedLater}
          isCarousel={false}
        />
      ))}
    </div>
  );
};

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  onShare: (e: React.MouseEvent, book: Book) => void;
  copied: boolean;
  isFavorite: boolean;
  isSavedLater: boolean;
  onToggleFavorite: (bookId: string) => void;
  onToggleSavedLater: (bookId: string) => void;
  isCarousel?: boolean;
}

const BookCard = React.memo<BookCardProps>(({ book, onSelect, onShare, copied, isFavorite, isSavedLater, onToggleFavorite, onToggleSavedLater, isCarousel = false }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const coverUrl = book.coverUrl || book.cover_url;

  const handleSelectClick = () => {
    onSelect(book);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    onShare(e, book);
  };

  const showCover = coverUrl && !hasError;

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleSelectClick}
      className={`group relative flex flex-col justify-between cursor-pointer rounded-2xl bg-white border border-slate-205/60 shadow-sm hover:shadow-md hover:bg-slate-50 dark:bg-slate-950/60 dark:backdrop-blur-md dark:border-slate-900 transition-all duration-300 p-2.5 md:p-4 ${
        isCarousel
          ? "w-[155px] xs:w-[165px] sm:w-[145px] md:w-[205px] shrink-0 snap-start"
          : "w-full"
      }`}
    >
      <div>
        {/* Book Spine 3:4 Shadow Cover Container with physical book aesthetics */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-r-xl rounded-l-sm bg-slate-100 dark:bg-[#05070c] shadow-[4px_4px_8px_rgba(0,0,0,0.15)] md:shadow-[8px_8px_16px_rgba(0,0,0,0.15)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.7)] md:dark:shadow-[8px_8px_16px_rgba(0,0,0,0.7)] group-hover:shadow-[10px_10px_20px_rgba(34,197,94,0.15)] transition-all duration-300">
          
          {showCover ? (
            <>
              {/* Skeleton placeholder shown during load state */}
              {imgLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-slate-200 to-gray-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 animate-pulse flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-6 w-6 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                    <span className="text-[10px] font-mono text-slate-650 dark:text-gray-400">Cargando Tapa...</span>
                  </div>
                </div>
              )}

              <img
                src={coverUrl}
                alt={book.title}
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoading(false)}
                onError={() => {
                  setImgLoading(false);
                  setHasError(true);
                }}
                decoding="async"
                className={`h-full w-full object-fill transition-opacity duration-300 group-hover:scale-[1.03] ${
                  imgLoading ? "opacity-0" : "opacity-100"
                }`}
                loading="lazy"
              />
            </>
          ) : (
            /* Elegant Physical Book Spine & Cover Simulator for Development phase (when coverUrl is undefined or error occurs) */
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-slate-100 to-slate-200 dark:from-[#0c0f16] dark:via-[#121622] dark:to-[#07090e] flex flex-col justify-between p-3 md:p-5 text-left border-r border-[#e2e8f0]/40 dark:border-black/40">
              {/* Subtle visual canvas noise gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Top area */}
              <div className="border-b border-slate-200 dark:border-emerald-500/10 pb-1.5 md:pb-2.5">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.18em] font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                  {book.author}
                </span>
              </div>

              {/* Middle Title Display (Stylized serif emulating a physically printed cover) */}
              <div className="my-auto py-1 md:py-3 text-center">
                <h3 className="font-serif text-xs md:text-base leading-tight font-black text-slate-800 dark:text-slate-100 tracking-tight uppercase border-y border-slate-200 dark:border-emerald-500/10 py-2.5 md:py-5 bg-black/5 dark:bg-black/25">
                  {book.title}
                </h3>
              </div>

              {/* Bottom publisher info */}
              <div className="border-t border-slate-200 dark:border-emerald-500/10 pt-1.5 md:pt-2.5 flex items-center justify-between">
                <span className="text-[7px] md:text-[8px] tracking-[0.2em] font-mono text-slate-650 dark:text-gray-500 uppercase font-bold">
                  VIP
                </span>
                <span className="rounded bg-emerald-50 dark:bg-emerald-500/10 text-[6px] md:text-[7px] text-emerald-600 dark:text-emerald-400 border border-emerald-250 dark:border-emerald-500/20 px-0.5 md:px-1 py-0.5 font-bold uppercase font-mono">
                  PAMPA
                </span>
              </div>
            </div>
          )}

          {/* Floating Save/Favorite overlay buttons */}
          <div className="absolute top-2 left-2 flex gap-1.5 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(book.id);
              }}
              className={`p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-75 cursor-pointer ${
                isFavorite
                  ? "bg-rose-500 border-rose-400 text-white shadow-md shadow-rose-500/25"
                  : "bg-black/60 hover:bg-black/85 border-white/20 text-white hover:text-rose-400"
              }`}
              title={isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
            >
              <Heart className={`h-3 w-3 md:h-3.5 md:w-3.5 ${isFavorite ? "fill-white" : ""}`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSavedLater(book.id);
              }}
              className={`p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 active:scale-75 cursor-pointer ${
                isSavedLater
                  ? "bg-amber-500 border-amber-400 text-white shadow-md shadow-amber-500/25"
                  : "bg-black/60 hover:bg-black/85 border-white/20 text-white hover:text-amber-400"
              }`}
              title={isSavedLater ? "Quitar de Guardados" : "Guardar para después"}
            >
              <Bookmark className={`h-3 w-3 md:h-3.5 md:w-3.5 ${isSavedLater ? "fill-white" : ""}`} />
            </button>
          </div>

          {/* Sutil Degradado del Borde Izquierdo - Efecto de Lomo Físico */}
          <div className="absolute inset-y-0 left-0 w-2 md:w-3.5 bg-gradient-to-r from-black/90 via-black/30 to-transparent border-r border-white/5 pointer-events-none" />
          
          {/* Sutil brillo / textura */}
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />

          {/* Category Badge - Elegantly hidden by default, visible on hover only, extremely minimal */}
          <div className="absolute top-1 right-1 md:top-1.5 md:right-1.5 rounded bg-black/60 backdrop-blur-[2px] px-1 py-0.5 text-[5.5px] md:text-[7px] font-bold tracking-wider text-white/90 border border-white/10 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            {book.category.replace("Colección Éxito: ", "")}
          </div>
        </div>

        {/* Text information */}
        <div className="mt-2.5 md:mt-4 text-left">
          <div className="flex items-center justify-between gap-1 flex-wrap min-h-[16px]">
            <span className="text-[9px] md:text-[10px] font-mono tracking-wide text-slate-750 dark:text-gray-500 font-medium uppercase truncate max-w-[65%]">
              {book.author}
            </span>
            {book.focusTag && (
               <span className={`text-[6.5px] md:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border shrink-0 ${
                book.focusTag === "Matemática"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/15"
                  : book.focusTag === "Física y Química"
                  ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/15"
                  : book.focusTag === "Ingeniería Técnica"
                  ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/15"
                  : book.focusTag === "Estoicismo y Vida"
                  ? "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/15"
                  : book.focusTag === "Filosofía Ilustrada / Manga"
                  ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/15"
                  : book.focusTag === "Romance Juvenil y Drama"
                  ? "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/15"
                  : book.focusTag === "Fantasía Erótica y Deseo"
                  ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/15"
                  : book.focusTag === "Romance Universitario"
                  ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/15"
                  : book.focusTag === "Romance de Época"
                  ? "bg-yellow-600/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/15"
                  : book.focusTag === "Romance Vampírico / Fantasía"
                  ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/15"
                  : book.focusTag === "Nutrición y Dietas Deportivas"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/15"
                  : book.focusTag === "Recetas y Cocina"
                  ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/15"
                  : book.focusTag === "Rutinas Iniciales"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/15"
                  : book.focusTag === "Anatomía y Biomecánica"
                  ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/15"
                  : book.focusTag === "Sistemas de Entrenamiento"
                  ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/15"
                  : book.focusTag === "Salud y Recuperación"
                  ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/15"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/15"
              }`}>
                {book.focusTag}
              </span>
            )}
          </div>
          <h3 className="mt-0.5 md:mt-1 line-clamp-1 text-xs md:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {book.title}
          </h3>
          <p className="mt-1 md:mt-2 text-[11px] md:text-xs text-slate-800 dark:text-slate-400 line-clamp-1 md:line-clamp-3 leading-relaxed transition-colors duration-300">
            {book.description}
          </p>
        </div>
      </div>

      {/* Action Buttons inside footer box */}
      <div className="mt-3.5 md:mt-5 space-y-1.5 md:space-y-2.5 border-t border-slate-200 dark:border-gray-900 pt-2 md:pt-3">
        <div className="flex items-center justify-between text-[9px] md:text-[10px] text-slate-750 dark:text-gray-500 font-mono">
          <span>Págs: {book.pages}</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">PDF Completo</span>
        </div>

        <div className="grid grid-cols-5 gap-1 md:gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelectClick();
            }}
            className="col-span-4 flex items-center justify-center gap-1 md:gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 text-[10px] md:text-xs font-bold text-emerald-600 dark:text-emerald-400 py-1.5 md:py-2 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-black hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-95 cursor-pointer"
          >
            <BookOpen className="h-3 w-3 md:h-3.5 md:w-3.5" /> Estudiar
          </button>

          <button
            onClick={handleShareClick}
            title="Compartir en WhatsApp"
            className={`col-span-1 flex items-center justify-center rounded-lg border transition-all active:scale-90 cursor-pointer ${
              copied
                ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                : "bg-white dark:bg-[#0b0f19] border-slate-205 dark:border-gray-800 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-350 dark:hover:border-gray-750"
            }`}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 md:h-4 md:w-4 animate-bounce" />
            ) : (
              <Share2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
});

BookCard.displayName = "BookCard";
