import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Heart, ChevronRight } from "lucide-react";
import { LanguageProvider, useLang } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ThanksContent = () => {
  const { lang } = useLang();

  const t = {
    ru: {
      home: "Главная",
      thanks: "Благодарим",
      title: "Спасибо, что оставили отзыв!",
      subtitle: "Мы делаем всё, чтобы улучшить нашу работу.",
      description: "Ваш отзыв отправлен на модерацию. Мы ценим каждое мнение — оно помогает нам становиться лучше.",
      cta: "Вернуться на главную",
    },
    ua: {
      home: "Головна",
      thanks: "Вдячність",
      title: "Дякуємо за відгук!",
      subtitle: "Ми робимо все, щоб покращити нашу роботу.",
      description: "Ваш відгук відправлено на модерацію. Ми цінуємо кожну думку — вона допомагає нам ставати кращими.",
      cta: "Повернутися на головну",
    },
  }[lang];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero section with subtle gradient */}
        <section className="relative overflow-hidden bg-hero-gradient-subtle">
          <div className="container mx-auto px-4 pt-8 pb-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-3.5 h-3.5" />
                {t.home}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">{t.thanks}</span>
            </nav>
          </div>
        </section>

        {/* Main content */}
        <section className="flex-1 flex items-center justify-center py-16 md:py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg w-full"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border text-center">
              {/* Animated icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-hero-gradient flex items-center justify-center"
              >
                <Heart className="w-9 h-9 text-primary-foreground" />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3"
              >
                {t.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="text-lg text-accent font-medium mb-4"
              >
                {t.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {t.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Home className="w-4 h-4" />
                  {t.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

const Thanks = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <ThanksContent />
      </div>
    </LanguageProvider>
  );
};

export default Thanks;
