import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const headingStyle = {
  color: "var(--text-heading)",
  fontSize: "20px",
  fontWeight: 700,
  marginTop: "10px",
};

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Malee Hospitality</title>
        <meta
          name="description"
          content="Read the Terms & Conditions governing bookings, payments, and travel services provided by Malee Hospitality."
        />
      </Head>

      <Header />

      <main
        className="main-wrapper"
        style={{ paddingTop: "60px", paddingBottom: "60px", maxWidth: "800px" }}
      >
        <h1 className="main-title" style={{ fontSize: "36px", marginBottom: "20px" }}>
          Terms &amp; Conditions
        </h1>
        <p className="center-subtitle" style={{ textAlign: "left", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the services
            offered by Malee Hospitality Co. (&ldquo;Malee Hospitality&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), including all tour packages, hotel bookings,
            transfers, sightseeing, destination weddings, visa assistance, and related travel
            services booked through our website, representatives, or partner agents. By making a
            booking or enquiry with us, you agree to be bound by these Terms.
          </p>

          <h3 style={headingStyle}>Bookings &amp; Confirmation</h3>
          <p>
            A booking is confirmed only upon receipt of the applicable advance payment and written
            confirmation from Malee Hospitality. Package prices, hotel availability, and
            itineraries are subject to change until a booking is confirmed. It is the
            responsibility of the traveler to ensure that all names, passport details, and travel
            dates provided at the time of booking are accurate, as errors may result in additional
            charges or denial of travel.
          </p>

          <h3 style={headingStyle}>Payments</h3>
          <p>
            A non-refundable advance/deposit is required to confirm most bookings, with the
            balance payable prior to the commencement of travel as specified in your invoice or
            itinerary. We accept payments via bank transfer and other methods communicated by our
            team. Prices for hotels, flights, and third-party services are subject to change
            without prior notice due to currency fluctuation, fuel surcharges, or supplier revision
            until full payment is received.
          </p>

          <h3 style={headingStyle}>Cancellations &amp; Refunds</h3>
          <p>
            Cancellations must be requested in writing. Cancellation charges are levied as per our{" "}
            <a href="/legal/cancellation-refund">Cancellation &amp; Refund Policy</a>, which forms
            part of these Terms. Refunds, where applicable, are processed after deducting charges
            levied by hotels, airlines, and other third-party suppliers, and may take up to 15–30
            business days to reflect depending on the original mode of payment.
          </p>

          <h3 style={headingStyle}>Travel Documents &amp; Visas</h3>
          <p>
            Travelers are responsible for holding a valid passport (with the minimum validity
            required by the destination country), visas, and any other travel documentation
            required for their journey. While we offer visa documentation guidance and support, the
            grant of a visa remains solely at the discretion of the respective embassy or
            immigration authority, and Malee Hospitality is not liable for delays, denials, or
            additional costs arising from visa rejection.
          </p>

          <h3 style={headingStyle}>Changes to Itinerary</h3>
          <p>
            While every effort is made to operate tours as per the confirmed itinerary, Malee
            Hospitality reserves the right to modify routes, accommodations, or the sequence of
            activities due to weather, local conditions, safety concerns, or circumstances beyond
            our control. We will endeavor to provide comparable alternatives wherever such changes
            are necessary.
          </p>

          <h3 style={headingStyle}>Liability</h3>
          <p>
            Malee Hospitality acts as an agent in coordinating hotels, transport, airlines, and
            other independent service providers, and is not liable for any injury, loss, damage,
            accident, delay, or irregularity that may occur due to the acts or omissions of such
            third parties, or due to force majeure events including natural disasters, strikes,
            political unrest, or government action. Our liability, where established, is limited to
            the value of the services directly booked with us.
          </p>

          <h3 style={headingStyle}>Traveler Conduct</h3>
          <p>
            Travelers are expected to comply with local laws and the guidance of tour leaders and
            partner hotels. Malee Hospitality reserves the right to remove any traveler from a tour,
            without refund, whose conduct is deemed to endanger the health, safety, or enjoyment of
            other travelers.
          </p>

          <h3 style={headingStyle}>Governing Law</h3>
          <p>
            These Terms are governed by the laws of India, without prejudice to the local laws
            applicable at each destination. Any disputes arising out of or in connection with these
            Terms shall be subject to the exclusive jurisdiction of the competent courts.
          </p>

          <h3 style={headingStyle}>Contact Us</h3>
          <p>
            For any questions regarding these Terms &amp; Conditions, please reach out to us at{" "}
            <a href="mailto:Ops@maleehospitality.asia">Ops@maleehospitality.asia</a>.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
