import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

const Hero = () => {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-hero-gradient-subtle py-20 md:py-32">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-body font-medium"
        >
          {lang === "ru" ? "Мы обеспечиваем" : "Ми забезпечуємо"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
        >
          <span className="text-gradient">
            {lang === "ru"
              ? "КАПИТАЛЬНЫЙ ПОДХОД"
              : "КАПІТАЛЬНИЙ ПІДХІД"}
          </span>
          <br />
          <span className="text-foreground">
            {lang === "ru" ? "К ВАШЕМУ КОМФОРТУ" : "ДО ВАШОГО КОМФОРТУ"}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-8"
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
