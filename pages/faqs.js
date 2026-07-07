import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Accordion from "@/components/shared/Accordion";
import { business } from "@/data/siteData";
import { faqsFull } from "@/data/faqsFullData";

export default function Faqs() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Malee Hospitality</title>
        <meta
          name="description"
          content="Find answers to common questions regarding customized travel packages, visa documentation assistance, booking changes, and holiday support with Malee Hospitality."
        />
      </Head>

      <div className="top-infobar">
        <div className="infobar-wrapper">
          <a href={`tel:+${business.whatsapp}`} className="infobar-link">
            <span>📞</span> {business.phones.india}
          </a>
          <a href={`mailto:${business.emails[0]}`} className="infobar-link">
            <span>✉</span> {business.emails[0]}
          </a>
        </div>
      </div>

      <Header />

      <div className="faq-page-wrapper">
        <main className="main-wrapper faq-dedicated-container">
          <header className="faq-standalone-header">
            <h1>Frequently Asked Questions</h1>
            <p>
              Everything you need to know about our customized tour packages, regional visa
              procedures, and on-trip support flexibility.
            </p>
          </header>

          <Accordion items={faqsFull} defaultOpenIndex={6} />

          <div className="faq-action-return">
            <Link href="/" className="faq-btn-back">
              ← Back to Homepage
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
