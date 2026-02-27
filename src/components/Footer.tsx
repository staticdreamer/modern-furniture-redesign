import { useLang } from "./LanguageContext";
import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Вікторія" className="h-12 mb-4 brightness-200" />
            <p className="text-sm opacity-70 leading-relaxed">
              {lang === "ru"
                ? "Мебельная мастерская «Виктория» — ремонт, перетяжка и изготовление мебели в Киеве с 2000 года."
                : "Меблева майстерня «Вікторія» — ремонт, перетяжка та виготовлення меблів у Києві з 2000 року."}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg mb-4">
              {lang === "ru" ? "Контакты" : "Контакти"}
            </h3>
            <a
              href="tel:+380445001050"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              (044) 500-10-50
            </a>
            <a
              href="tel:+380674000812"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              (067) 400-08-12
            </a>
            <a
              href="tel:+380504000812"
              className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              (050) 400-08-12
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg mb-4">
              {lang === "ru" ? "Адрес" : "Адреса"}
            </h3>
            <div className="flex items-start gap-3 text-sm opacity-80">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                {lang === "ru"
                  ? "г. Киев, ул. Бориспольская 9, корпус 27"
                  : "м. Київ, вул. Бориспільська 9, корпус 27"}
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm opacity-80">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                {lang === "ru" ? "Пн-Сб: 9:00 - 18:00" : "Пн-Сб: 9:00 - 18:00"}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()}{" "}
          {lang === "ru" ? 'Мебельная мастерская "Виктория"' : 'Меблева майстерня "Вікторія"'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
