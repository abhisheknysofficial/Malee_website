import Head from "next/head";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import AboutIntro from "@/components/home/AboutIntro";
import PackagesGrid from "@/components/home/PackagesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LegacyStats from "@/components/home/LegacyStats";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import FaqPreview from "@/components/home/FaqPreview";
import TravelPopup from "@/components/home/TravelPopup";
import DreamTripPlanner from "@/components/home/DreamTripPlanner";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <Head>
        <title>Malee Hospitality</title>
        <meta
          name="description"
          content="Explore affordable international holiday packages with Malee Hospitality. Discover Thailand, Singapore, Malaysia & more with customized tours, group trips, honeymoon packages, and seamless travel experiences."
        />
      </Head>

      <Header />

      <main className="main-wrapper">
        <HeroSlider activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </main>

      <AboutIntro />

      <div>
        <main className="main-wrapper">
          <PackagesGrid activeFilter={activeFilter} />
        </main>
      </div>

      <WhyChooseUs />
      <LegacyStats />
      <ReviewsCarousel />
      <FaqPreview />
      <Footer />

      <TravelPopup />
      <DreamTripPlanner />
    </>
  );
}
