import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.jpg";
import gal6 from "@/assets/gal6.jpg";

const galleryItems = [
  { img: gal4, ru: "Перетяжка мебели", ua: "Перетяжка меблів" },
  { img: gal5, ru: "Обивка кресла", ua: "Оббивка крісла" },
  { img: gal6, ru: "Ремонт дивана", ua: "Ремонт дивану" },
];

const Gallery = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 bg-secondary/50" id="gallery">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        >
          {lang === "ru" ? "Галерея" : "Галерея"}
        </motion.h2>

        {/* Category labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {galleryItems.map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center font-display font-semibold text-primary text-lg underline underline-offset-4 decoration-primary/40"
            >
              {lang === "ru" ? item.ru : item.ua}
            </motion.p>
          ))}
        </div>

        {/* Gallery images — full visible, no crop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={item.img}
                alt={lang === "ru" ? item.ru : item.ua}
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* "Далі" button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://mebel-remont.in.ua/galereia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            {lang === "ru" ? "Далее" : "Далі"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
