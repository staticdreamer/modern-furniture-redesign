import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useLang, T } from "./LanguageContext";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { lang } = useLang();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) {
      toast({
        title: lang === "ua" ? "Помилка" : "Ошибка",
        description: lang === "ua" ? "Введіть номер телефону" : "Введите номер телефона",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: lang === "ua" ? "Дякуємо!" : "Спасибо!",
        description: lang === "ua"
          ? "Ми зв'яжемося з Вами найближчим часом!"
          : "Мы свяжемся с Вами в ближайшее время!",
      });
      setForm({ name: "", phone: "", message: "" });
    }, 800);
  };

  return (
    <section className="relative py-20 bg-hero-gradient overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <T ua="Залишіть заявку!" ru="Оставьте заявку!" />
          </h2>
          <p className="text-white/80 text-lg mb-10">
            <T
              ua="і ми зв'яжемося з Вами найближчим часом!"
              ru="и мы свяжемся с Вами в ближайшее время!"
            />
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={lang === "ua" ? "Ваше ім'я" : "Ваше имя"}
              maxLength={100}
              className="w-full px-5 py-4 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white/50 transition-shadow text-base"
            />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder={lang === "ua" ? "Телефон*" : "Телефон*"}
              maxLength={20}
              required
              className="w-full px-5 py-4 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white/50 transition-shadow text-base"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={lang === "ua" ? "Ваше повідомлення" : "Ваше сообщение"}
              maxLength={1000}
              rows={4}
              className="w-full px-5 py-4 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white/50 transition-shadow text-base resize-none"
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white text-primary font-semibold text-lg tracking-wide hover:bg-white/90 transition-colors disabled:opacity-60 uppercase"
            >
              <Send className="w-5 h-5" />
              <T ua="Замовити консультацію" ru="Заказать консультацию" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
