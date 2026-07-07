import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DestinationDetail from "@/components/destinations/DestinationDetail";
import { destinationsData } from "@/data/destinationsData";

export default function ThailandPage() {
  const destination = destinationsData.thailand;

  return (
    <>
      <Head>
        <title>{destination.metaTitle}</title>
        <meta name="description" content={destination.metaDescription} />
        {/* Editorial font pairing used only on destination detail pages */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <DestinationDetail destination={destination} />
      <Footer />
    </>
  );
}
