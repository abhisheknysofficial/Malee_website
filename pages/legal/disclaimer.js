import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const headingStyle = {
  color: "var(--text-heading)",
  fontSize: "20px",
  fontWeight: 700,
  marginTop: "10px",
};

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Malee Hospitality</title>
        <meta
          name="description"
          content="Read the disclaimer covering the accuracy of information, third-party services, and travel disruptions for Malee Hospitality."
        />
      </Head>

      <Header />

      <main
        className="main-wrapper"
        style={{ paddingTop: "60px", paddingBottom: "60px", maxWidth: "800px" }}
      >
        <h1 className="main-title" style={{ fontSize: "36px", marginBottom: "20px" }}>
          Disclaimer
        </h1>
        <p className="center-subtitle" style={{ textAlign: "left", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            The information provided by Malee Hospitality Co. (&ldquo;Malee Hospitality&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) on www.maleehospitality.com
            and through our representatives is for general informational purposes only. While we
            strive to keep itineraries, pricing, and destination information accurate and current,
            all information is provided in good faith and without any express or implied warranty
            of completeness, accuracy, reliability, or suitability.
          </p>

          <h3 style={headingStyle}>Accuracy of Information</h3>
          <p>
            Package inclusions, hotel categories, images, flight schedules, and pricing displayed on
            our website or shared in itineraries are indicative and subject to change based on
            availability, seasonality, and updates from our hotel, airline, and ground-handling
            partners. Under no circumstances shall Malee Hospitality be liable for any loss or
            damage arising from reliance on information found on our website or provided by our
            representatives, prior to written confirmation of a booking.
          </p>

          <h3 style={headingStyle}>Third-Party Links &amp; Services</h3>
          <p>
            Our website and communications may contain links to third-party websites, hotels,
            airlines, payment gateways, or service providers that are not owned or controlled by
            Malee Hospitality. We have no control over, and assume no responsibility for, the
            content, privacy policies, or practices of any third-party websites or services. Your
            use of any third-party service is entirely at your own discretion and risk, and subject
            to that provider&apos;s own terms and conditions.
          </p>

          <h3 style={headingStyle}>Travel Disruptions</h3>
          <p>
            Malee Hospitality acts as a coordinating agent for hotels, airlines, transport
            operators, and other independent suppliers. We are not liable for flight delays or
            cancellations, hotel overbooking, lost baggage, natural disasters, civil unrest, illness,
            accidents, strikes, government restrictions, or any other event beyond our reasonable
            control that may disrupt, delay, or curtail travel. Travelers are strongly encouraged to
            secure adequate travel insurance covering trip cancellation, medical emergencies, and
            baggage loss before departure.
          </p>

          <h3 style={headingStyle}>Pricing</h3>
          <p>
            All prices quoted are subject to change without prior notice due to currency
            fluctuations, fuel surcharges, taxes, or revisions by hotels, airlines, and other
            suppliers, until a booking is confirmed in writing with full or partial payment
            received as applicable.
          </p>

          <h3 style={headingStyle}>Professional Advice</h3>
          <p>
            Nothing on our website constitutes legal, medical, financial, or immigration advice.
            Visa, health, and entry requirements vary by nationality and are subject to change;
            travelers should independently verify such requirements with the relevant embassy or
            consulate before booking or traveling.
          </p>

          <h3 style={headingStyle}>Contact Us</h3>
          <p>
            If you have any questions about this Disclaimer, please contact us at{" "}
            <a href="mailto:Ops@maleehospitality.asia">Ops@maleehospitality.asia</a>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
