import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const headingStyle = {
  color: "var(--text-heading)",
  fontSize: "20px",
  fontWeight: 700,
  marginTop: "10px",
};

export default function CancellationRefund() {
  return (
    <>
      <Head>
        <title>Cancellation & Refund Policy | Malee Hospitality</title>
        <meta
          name="description"
          content="Learn about Malee Hospitality's cancellation windows, refund eligibility, and force majeure policy for tour and travel bookings."
        />
      </Head>

      <Header />

      <main
        className="main-wrapper"
        style={{ paddingTop: "60px", paddingBottom: "60px", maxWidth: "800px" }}
      >
        <h1 className="main-title" style={{ fontSize: "36px", marginBottom: "20px" }}>
          Cancellation &amp; Refund Policy
        </h1>
        <p className="center-subtitle" style={{ textAlign: "left", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            We understand that travel plans can change. This Cancellation &amp; Refund Policy
            explains how cancellation requests are handled and how refunds, where applicable, are
            calculated for tour packages, hotel bookings, transfers, and other services booked
            through Malee Hospitality.
          </p>

          <h3 style={headingStyle}>How to Request a Cancellation</h3>
          <p>
            All cancellation requests must be submitted in writing via email to{" "}
            <a href="mailto:Ops@maleehospitality.asia">Ops@maleehospitality.asia</a> or{" "}
            <a href="mailto:Delops2@maleehospitality.asia">Delops2@maleehospitality.asia</a>, quoting
            your booking reference. The cancellation date is deemed to be the date on which we
            receive your written request, not the date of any verbal notice.
          </p>

          <h3 style={headingStyle}>Cancellation Charges</h3>
          <p>The following standard slabs apply to most package bookings, calculated on the total package cost:</p>
          <ul style={{ paddingLeft: "20px", lineHeight: 1.8 }}>
            <li>30 days or more before departure: 25% cancellation charge</li>
            <li>15–29 days before departure: 50% cancellation charge</li>
            <li>7–14 days before departure: 75% cancellation charge</li>
            <li>Less than 7 days before departure / no-show: 100% cancellation charge (non-refundable)</li>
          </ul>
          <p>
            Please note that hotels, airlines, cruise lines, and other third-party suppliers may
            apply their own, often stricter, cancellation terms — particularly for peak season,
            promotional, or non-refundable rates. Where such supplier charges exceed the slabs
            above, the higher supplier charge will apply. Visa fees, insurance premiums, and any
            payment gateway or transaction charges already incurred are non-refundable under all
            circumstances.
          </p>

          <h3 style={headingStyle}>Refund Eligibility</h3>
          <p>
            Refunds, where due, are processed only after deducting applicable cancellation charges,
            supplier penalties, and any non-refundable costs already paid on your behalf. Approved
            refunds are credited back to the original mode of payment within 15–30 business days
            from the date of written cancellation confirmation. Malee Hospitality is not responsible
            for delays caused by banks, payment gateways, or card issuers once a refund has been
            initiated on our end.
          </p>

          <h3 style={headingStyle}>Amendments &amp; Rescheduling</h3>
          <p>
            Requests to amend travel dates, change the number of travelers, or modify an itinerary
            are treated as amendments rather than cancellations, subject to availability and any
            rate difference or supplier amendment fee. Repeated rescheduling of the same booking may
            be treated as a fresh cancellation and rebooking, attracting applicable cancellation
            charges.
          </p>

          <h3 style={headingStyle}>Force Majeure</h3>
          <p>
            In the event a tour cannot be undertaken or completed due to circumstances beyond our
            reasonable control — including natural disasters, extreme weather, pandemics, government
            travel advisories, border closures, strikes, or political unrest — Malee Hospitality will
            work with hotels, airlines, and other suppliers to secure the best possible outcome,
            which may include rescheduling, a travel credit, or a partial refund net of costs already
            incurred or non-recoverable from suppliers. Cancellation charges under such
            circumstances may vary from the standard slabs above at our discretion.
          </p>

          <h3 style={headingStyle}>Company-Initiated Cancellations</h3>
          <p>
            If Malee Hospitality cancels a confirmed tour due to insufficient group size, safety
            concerns, or operational reasons, you will be offered either a full refund of amounts
            paid to us or an alternative package/date of equivalent value, at your choice.
          </p>

          <h3 style={headingStyle}>Contact Us</h3>
          <p>
            For any cancellation or refund related queries, please contact our team at{" "}
            <a href="mailto:Ops@maleehospitality.asia">Ops@maleehospitality.asia</a> or call
            Thailand: +66 63 836 0210 / India: +91 80776 05404.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
