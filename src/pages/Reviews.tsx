import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ReviewsList from "@/components/ReviewsList";

const Reviews = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ReviewsList />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Reviews;
