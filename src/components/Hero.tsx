import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 py-20 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4 font-body font-medium"
        >
          {lang === "ru" ? "Мы обеспечиваем" : "Ми забезпечуємо"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-primary-foreground"
        >
          {lang === "ru"
            ? "КАПИТАЛЬНЫЙ ПОДХОД"
            : "КАПІТАЛЬНИЙ ПІДХІД"}
          <br />
          <span className="text-primary-foreground/90">
            {lang === "ru" ? "К ВАШЕМУ КОМФОРТУ" : "ДО ВАШОГО КОМФОРТУ"}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8"
        >
          {lang === "ru"
            ? "Ремонт, перетяжка и изготовление мебели в Киеве с 2000 года"
            : "Ремонт, перетяжка та виготовлення меблів у Києві з 2000 року"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+380674000812"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-hero-gradient text-primary-foreground font-semibold text-base shadow-elevated hover:opacity-90 transition-opacity"
          >
            {lang === "ru" ? "Позвонить нам" : "Зателефонувати нам"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
