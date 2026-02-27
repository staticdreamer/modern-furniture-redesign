import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import {
  CreditCard,
  Clock,
  Palette,
  Factory,
  FileCheck,
  Zap,
  Percent,
  Shield,
  Users,
} from "lucide-react";

const advantages = [
  {
    icon: CreditCard,
    ru: "Наши клиенты могут оплачивать заказ как наличными так и безналичным расcчетом.",
    ua: "Наші клієнти можуть оплачувати замовлення як готівкою, так і безготівковим розрахунком.",
  },
  {
    icon: Clock,
    ru: "Огромный опыт работы – с 2000 года на рынке.",
    ua: "Величезний досвід роботи — з 2000 року на ринку.",
  },
  {
    icon: Palette,
    ru: "Оригинальный дизайн, современные натуральные материалы.",
    ua: "Оригінальний дизайн, сучасні матеріали.",
  },
  {
    icon: Factory,
    ru: "Собственное производство с самым современным оборудованием.",
    ua: "Власне виробництво із найсучаснішим обладненням.",
  },
  {
    icon: FileCheck,
    ru: "При заключении договора оценка работ производится бесплатно.",
    ua: "Під час укладання договору оцінка робіт проводиться безкоштовно.",
  },
  {
    icon: Zap,
    ru: "Кратчайшие сроки работы – 3-5 дней.",
    ua: "Найкоротші терміни роботи – 3-5 днів.",
  },
  {
    icon: Percent,
    ru: "Наша компания предоставляет гибкую систему скидок для клиентов.",
    ua: "Наша компанія надає гнучку систему знижок клієнтам.",
  },
  {
    icon: Shield,
    ru: "Мы предоставляем гарантию 12 месяцев на наши услуги.",
    ua: "Ми надаємо гарантію 12 місяців на наші послуги.",
  },
  {
    icon: Users,
    ru: "Мы работаем как с организациями так и с частными лицами.",
    ua: "Ми працюємо як з організаціями, так і з приватними особами.",
  },
];

const Advantages = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 bg-background" id="advantages">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          {lang === "ru" ? "Наши преимущества" : "Наші переваги"}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-sm text-card-foreground leading-relaxed">
                  {lang === "ru" ? a.ru : a.ua}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
