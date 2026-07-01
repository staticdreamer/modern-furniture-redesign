import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "./LanguageContext";
import catYacht from "@/assets/cat-yacht.jpg";
import catBeforeAfter from "@/assets/cat-before-after.jpg";
import catCabinet from "@/assets/cat-cabinet.jpg";
import catSofa from "@/assets/cat-sofa.jpg";
import catBench from "@/assets/cat-bench.jpg";
import catArmchair from "@/assets/cat-armchair.jpg";
import catCornerSofa from "@/assets/cat-corner-sofa.jpg";
import catPouf from "@/assets/cat-pouf.jpg";
import catBed from "@/assets/cat-bed.jpg";
import catHeadboard from "@/assets/cat-headboard.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catCarSeat from "@/assets/cat-car-seat.jpg";

const categories = [
  { img: catYacht, ru: "Перетяжка яхт", ua: "Перетяжка яхт" },
  { img: catBeforeAfter, ru: "До и после", ua: "До та після" },
  { img: catCabinet, ru: "Корпусная мебель", ua: "Корпусні меблі" },
  { img: catSofa, ru: "Диваны", ua: "Дивани" },
  { img: catBench, ru: "Банкетки", ua: "Банкетки" },
  { img: catArmchair, ru: "Кресла", ua: "Крісла" },
  { img: catCornerSofa, ru: "Угловые диваны", ua: "Кутові дивани" },
  { img: catPouf, ru: "Пуфики", ua: "Пуфи" },
  { img: catBed, ru: "Кровати", ua: "Кровати" },
  { img: catHeadboard, ru: "Изголовья", ua: "Узголів'я" },
  { img: catOutdoor, ru: "Уличная мебель", ua: "Вулична мебля" },
  { img: catCarSeat, ru: "Автокресла", ua: "Автокрісла" },
];

const GalleryPage = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 bg-[hsl(290,20%,98%)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-bold">
          <Link to="/" className="hover:text-primary transition-colors">
            {lang === "ru" ? "Главная" : "Головна"}
          </Link>
          <span className="block w-1 h-1 rounded-full bg-accent" />
          <span className="text-primary">
            {lang === "ru" ? "Галерея" : "Галерея"}
          </span>
        </nav>

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display italic text-foreground mb-3">
            {lang === "ru" ? "Галерея" : "Галерея"}
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm tracking-wide font-light italic">
            {lang === "ru"
              ? "Изысканность в каждой детали нашего производства"
              : "Вишуканість у кожній деталі нашого виробництва"}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/5] bg-card overflow-hidden ring-1 ring-border transition-all duration-500 group-hover:ring-primary group-hover:shadow-elevated">
                <img
                  src={cat.img}
                  alt={lang === "ru" ? cat.ru : cat.ua}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="mt-5 flex justify-between items-start">
                <h3 className="text-xl font-display text-foreground leading-tight">
                  {lang === "ru" ? cat.ru : cat.ua}
                </h3>
                <span className="text-[10px] font-bold text-accent opacity-40 group-hover:opacity-100 transition-opacity">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
