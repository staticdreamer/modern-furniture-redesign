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
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {lang === "ru" ? "Галерея" : "Галерея"}
        </motion.h2>

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
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={lang === "ru" ? item.ru : item.ua}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-display font-semibold text-lg">
                  {lang === "ru" ? item.ru : item.ua}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
