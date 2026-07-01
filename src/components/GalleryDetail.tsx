import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn, Home } from "lucide-react";
import { useLang } from "./LanguageContext";

interface GalleryDetailProps {
  titleRu: string;
  titleUa: string;
  images: { full: string; thumb: string }[];
  children?: React.ReactNode; // SEO text block
}

const GalleryDetail = ({ titleRu, titleUa, images, children }: GalleryDetailProps) => {
  const { lang } = useLang();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  const title = lang === "ru" ? titleRu : titleUa;

  return (
    <section className="py-14 md:py-20 bg-[hsl(290,20%,98%)]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-10 font-semibold">
          <Link to="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Home className="w-3 h-3" />
            {lang === "ru" ? "Главная" : "Головна"}
          </Link>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <Link to="/galereia" className="hover:text-primary transition-colors">
            {lang === "ru" ? "Галерея" : "Галерея"}
          </Link>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span className="text-primary truncate">{title}</span>
        </nav>

        {/* Title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-accent font-bold">
              {lang === "ru" ? "Портфолио" : "Портфоліо"}
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display italic text-foreground leading-tight">
            {title}
          </h1>
        </div>

        {/* SEO intro */}
        {children && (
          <div className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground text-base md:text-lg leading-relaxed space-y-3">
            {children}
          </div>
        )}

        {/* Masonry gallery */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.4 }}
              className="mb-4 w-full block break-inside-avoid group relative overflow-hidden rounded-xl bg-card ring-1 ring-border hover:ring-primary transition-all duration-300 hover:shadow-elevated"
            >
              <img
                src={img.thumb}
                alt={`${title} — ${i + 1}`}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-primary-foreground font-display text-sm italic">
                  {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
                <span className="w-9 h-9 rounded-full bg-primary-foreground/95 text-primary flex items-center justify-center backdrop-blur">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground flex items-center justify-center transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground flex items-center justify-center transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground flex items-center justify-center transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={active}
              src={images[active].full}
              alt={`${title} — ${active + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[86vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-xs tracking-[0.3em] uppercase font-semibold">
              {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryDetail;
