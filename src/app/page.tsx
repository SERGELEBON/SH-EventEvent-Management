import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Presentation } from "@/components/site/presentation";
import { Services } from "@/components/site/services";
import { FeaturedProducts } from "@/components/site/featured-products";
import { RealizationsCarousel } from "@/components/site/realizations-carousel";
import {
  ConversionBanner,
  PhotoBanner,
  InterventionZone,
} from "@/components/site/banners";
import {
  EquipmentDetail,
  ComfortDetail,
  PhotographyDetail,
} from "@/components/site/service-details";
import { InspirationGrid } from "@/components/site/inspiration-grid";
import { Testimonials } from "@/components/site/testimonials";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { AboutUs } from "@/components/site/about-us";
import { DevisForm } from "@/components/site/devis-form";
import { ContactSection } from "@/components/site/contact-section";
import { Footer } from "@/components/site/footer";
import { WhatsAppWidget } from "@/components/site/whatsapp-widget";
import { SearchModal } from "@/components/site/search-modal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Presentation />
        <Services />
        <FeaturedProducts />
        <RealizationsCarousel />
        <ConversionBanner />
        <PhotoBanner />
        <EquipmentDetail />
        <ComfortDetail />
        <PhotographyDetail />
        <InterventionZone />
        <InspirationGrid />
        <Testimonials />
        <WhyChooseUs />
        <AboutUs />
        <DevisForm />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <SearchModal />
    </div>
  );
}
