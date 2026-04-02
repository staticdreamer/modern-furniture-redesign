import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./LanguageContext";
import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";

const Header = () => {
  const { lang, setLang } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", labelRu: "Услуги", labelUa: "Послуги" },
    { href: "#advantages", labelRu: "Преимущества", labelUa: "Переваги" },
    { href: "#gallery", labelRu: "Галерея", labelUa: "Галерея" },
    { href: "#about", labelRu: "О компании", labelUa: "Про компанію" },
    { href: "/otzyvy", labelRu: "Отзывы", labelUa: "Відгуки" },
    { href: "#contacts", labelRu: "Контакты", labelUa: "Контакти" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar with contacts and socials */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+380674000812" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-3 h-3" />
              (067) 400-08-12
            </a>
            <a href="tel:+380445001050" className="hidden sm:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-3 h-3" />
              (044) 500-10-50
            </a>
            <a href="mailto:masterdivankiev@gmail.com" className="hidden md:flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-3 h-3" />
              masterdivankiev@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 opacity-70">
              <Clock className="w-3 h-3" />
              {lang === "ru" ? "Пн-Сб: 9:00-18:00" : "Пн-Сб: 9:00-18:00"}
            </span>
            {/* Social buttons */}
            <div className="flex items-center gap-2 ml-2">
              <a href="viber://chat?number=%2B380674000812" aria-label="Viber" className="w-7 h-7 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.541 6.769.453 9.975.369 13.18.218 19.233 5.7 20.7l.036.012v2.574s-.036.996.636 1.2c.756.252 1.2-.48 1.92-1.26l1.38-1.554c3.78.324 6.66-.408 6.984-.516s2.16-.336 2.46-2.748c.3-2.484.18-6.06-.06-7.896v-.012c-.216-1.236-.96-4.44-4.404-5.304 0 0-1.404-.48-3.276-.396zm.24 1.86c1.5-.048 2.724.336 2.724.336 2.604.648 3.18 3.156 3.348 4.104.228 1.608.336 4.86.072 7.044-.216 1.74-1.476 2.016-1.86 2.136-.264.084-2.748.696-5.94.456 0 0-2.352 2.856-3.084 3.6-.12.132-.264.18-.36.156-.132-.036-.168-.192-.168-.42l.024-3.876C4.44 14.34 4.536 9.468 4.596 7.14c.06-2.556.66-4.596 2.088-5.988 1.32-1.296 4.08-1.272 4.956-1.296zm-.12 1.692v.012c-1.008.012-2.016.252-2.964.756a.568.568 0 00-.216.768.576.576 0 00.78.228c1.56-.816 3.384-.84 4.92-.06a.576.576 0 00.78-.216.564.564 0 00-.204-.78 6.55 6.55 0 00-3.096-.708zm-.048 1.62a4.84 4.84 0 00-2.244.624.444.444 0 00.408.792c1.152-.588 2.496-.6 3.648-.024a.444.444 0 00.408-.792 4.91 4.91 0 00-2.22-.6zm.048 1.62c-.552 0-1.092.156-1.56.444a.336.336 0 00.324.588c.744-.456 1.716-.468 2.472-.024a.336.336 0 10.336-.588 3.22 3.22 0 00-1.572-.42zm-1.62 1.5c-.276 0-.504.24-.504.528v.012c0 .708-.012 1.2.18 1.56l.012.012c.348.756.984 1.392 1.764 1.764h.012c.36.192.852.18 1.56.18h.012c.288 0 .528-.228.528-.504a.517.517 0 00-.528-.516c-.648 0-.924.012-1.14-.096-.564-.264-1.02-.708-1.272-1.26-.108-.216-.096-.48-.096-1.14a.52.52 0 00-.528-.54z"/></svg>
              </a>
              <a href="https://wa.me/380674000812" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-7 h-7 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://t.me/+380674000812" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-7 h-7 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card/95 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Вікторія" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold font-display text-foreground tracking-wide">
                {lang === "ru" ? "МЕБЕЛЬНАЯ МАСТЕРСКАЯ" : "МЕБЛЕВА МАЙСТЕРНЯ"}
              </p>
              <p className="text-xs text-muted-foreground">
                {lang === "ru" ? '"ВИКТОРИЯ"' : '"ВІКТОРІЯ"'}
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "ru" ? link.labelRu : link.labelUa}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "ru" ? link.labelRu : link.labelUa}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex bg-secondary rounded-full p-0.5 text-sm">
              <button
                onClick={() => setLang("ua")}
                className={`px-3 py-1 rounded-full transition-all font-medium ${
                  lang === "ua"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-3 py-1 rounded-full transition-all font-medium ${
                  lang === "ru"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                RU
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t bg-card px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {lang === "ru" ? link.labelRu : link.labelUa}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
