import { LanguageProvider, useLang } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GalleryDetail from "@/components/GalleryDetail";

const BASE = "https://mebel-remont.in.ua/img/gallery/vcladyshi-dlia-komodov";
const IDS = [
  99979, 99981, 99982, 99983, 99984, 99985, 99986, 99987, 99988, 99989,
  99991, 99992, 99993, 99994, 99995, 99996, 99997, 99998, 99999,
];
const images = IDS.map((id) => ({
  full: `${BASE}/${id}.jpg`,
  thumb: `${BASE}/thumbs/${id}.jpg`,
}));

const Intro = () => {
  const { lang } = useLang();
  if (lang === "ru") {
    return (
      <>
        <p>
          Мы занимаемся перетяжкой мягкой мебели для частных лиц, ресторанов,
          баров, кафе, отелей и т.д. Также мы ремонтируем и перетягиваем
          стоматологические и парикмахерские кресла.
        </p>
        <p>Мы охотно приедем к вам на вызов и заберём вашу мебель в ателье на ремонт.</p>
      </>
    );
  }
  return (
    <>
      <p>
        Ми займаємося перетяжкою м'яких меблів для приватних осіб, ресторанів,
        барів, кафе, готелів і т.д. Також ми ремонтуємо та перетягуємо
        стоматологічні та перукарські крісла.
      </p>
      <p>Ми охоче приїдемо до вас на виклик і заберемо ваші меблі в ательє на ремонт.</p>
    </>
  );
};

const VcladyshiDliaKomodov = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <GalleryDetail
          titleRu="Вкладыши для камодов"
          titleUa="Вкладиші для комодів"
          images={images}
        >
          <Intro />
        </GalleryDetail>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  </LanguageProvider>
);

export default VcladyshiDliaKomodov;
