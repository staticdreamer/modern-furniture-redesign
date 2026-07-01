import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GalleryPage from "@/components/GalleryPage";

const Galereia = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <GalleryPage />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Galereia;
