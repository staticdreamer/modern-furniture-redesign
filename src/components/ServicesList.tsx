import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import { ChevronRight } from "lucide-react";

const items = [
  { ru: "Обивка мебели", ua: "Оббивка меблів" },
  { ru: "Ремонт мягкой мебели", ua: "Ремонт м'яких меблів" },
  { ru: "Реставрационные работы", ua: "Реставраційні роботи" },
  { ru: "Замена механизмов", ua: "Заміна механізмів" },
  { ru: "Замена раскладушек", ua: "Заміна розкладачок" },
  { ru: "Замена пружинных блоков", ua: "Заміна пружинних блоків" },
  { ru: "Изготовление изголовий для кроватей", ua: "Виготовлення узголів'я для ліжок" },
  { ru: "Ремонт кожаной мебели", ua: "Ремонт шкіряних меблів" },
  { ru: "Перетяжка кожаной мебели", ua: "Перетяжка шкіряних меблів" },
  { ru: "Замена фурнитуры", ua: "Заміна фурнітури" },
  { ru: "Пошив чехлов на мягкую мебель", ua: "Пошиття чохлів на м'які меблі" },
  { ru: "Частичная перетяжка", ua: "Часткова перетяжка" },
  { ru: "Изготовление мягкой мебели", ua: "Виготовлення м'яких меблів" },
  { ru: "Пошив штор", ua: "Пошиття штор" },
  { ru: "Изготовление корпусной мебели", ua: "Виготовлення корпусних меблів" },
];

const ServicesList = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-display font-bold text-center mb-10"
        >
          {lang === "ru" ? "Все услуги" : "Усі послуги"}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card shadow-sm hover:shadow-card transition-shadow"
            >
              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-card-foreground">
                {lang === "ru" ? item.ru : item.ua}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
