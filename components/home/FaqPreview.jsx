import Link from "next/link";
import Accordion from "@/components/shared/Accordion";
import { faqs } from "@/data/siteData";

export default function FaqPreview() {
  return (
    <main className="main-wrapper pt">
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <Link href="/faqs" className="btn-view-all">
            View All FAQs
          </Link>
        </div>
        <Accordion items={faqs} />
      </section>
    </main>
  );
}
