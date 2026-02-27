import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";
import service01 from "@/assets/service-01.jpg";
import service02 from "@/assets/service-02.jpg";
import service03 from "@/assets/service-03.jpg";
import service04 from "@/assets/service-04.jpg";

const servicesData = [
  {
    img: service01,
    titleRu: "Обивка мягкой мебели",
    titleUa: "Оббивка м'яких меблів",
    descRu:
      "С нашей помощью ваша мебель преобразится до неузнаваемости, став еще более роскошной, чем была изначально!",
    descUa:
      "З нашою допомогою ваші меблі перетворяться до невпізнанності, ставши ще більш розкішними, ніж були спочатку!",
  },
  {
    img: service02,
    titleRu: "Ремонт мягкой мебели",
    titleUa: "Ремонт м'яких меблів",
    descRu:
      "Наши мастера умеют всё, начиная от перетяжки кожаных покрытий и заканчивая ремонтом каркасных конструкций.",
    descUa:
      "Наші майстри вміють все, починаючи від перетяжки шкіряних покриттів та закінчуючи ремонтом каркасних конструкцій.",
  },
  {
    img: service03,
    titleRu: "Реставрационные работы",
    titleUa: "Реставраційні роботи",
    descRu:
      "Наши мастера смогут восстановить качество любого покрытия, будь то дерево, кожа или ткань.",
    descUa:
      "Наші майстри зможуть відновити якість будь-якого покриття, будь то дерево, шкіра чи тканина.",
  },
  {
    img: service04,
    titleRu: "Изготовление мебели на заказ",
    titleUa: "Виготовлення меблів на замовлення",
    descRu:
      "Руками наших мастеров изготавливается корпусная мебель самых разнообразных конструкций.",
    descUa:
      "Руками наших майстрів виготовляються корпусні меблі найрізноманітніших конструкцій.",
  },
];

const Services = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        >
          {lang === "ru" ? "Услуги" : "Послуги"}
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          {lang === "ru"
            ? "Полный спектр услуг по ремонту и изготовлению мебели"
            : "Повний спектр послуг з ремонту та виготовлення меблів"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={lang === "ru" ? s.titleRu : s.titleUa}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 text-card-foreground">
                  {lang === "ru" ? s.titleRu : s.titleUa}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lang === "ru" ? s.descRu : s.descUa}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
