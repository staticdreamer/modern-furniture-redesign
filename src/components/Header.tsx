import { useLang } from "./LanguageContext";
import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const Header = () => {
  const { lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b">
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

        <div className="flex items-center gap-4">
          <a
            href="tel:+380445001050"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            (044) 500-10-50
          </a>
          <a
            href="tel:+380674000812"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            (067) 400-08-12
          </a>

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
        </div>
      </div>
    </header>
  );
};

export default Header;
