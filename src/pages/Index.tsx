import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesList from "@/components/ServicesList";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import AboutText from "@/components/AboutText";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <ServicesList />
          <Advantages />
          <Gallery />
          <AboutText />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
