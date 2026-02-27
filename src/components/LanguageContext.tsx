import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "ru" | "ua";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "ua", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ua");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

// Helper: pass ru and ua text, returns current
export const T = ({ ru, ua }: { ru: string; ua: string }) => {
  const { lang } = useLang();
  return <>{lang === "ru" ? ru : ua}</>;
};
