import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Malee Hospitality</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Malee Hospitality to understand how we collect, use, and protect your information."
        />
      </Head>

      <Header />

      <main
        className="main-wrapper"
        style={{ paddingTop: "60px", paddingBottom: "60px", maxWidth: "800px" }}
      >
        <h1 className="main-title" style={{ fontSize: "36px", marginBottom: "20px" }}>
          Privacy Policy
        </h1>
        <p className="center-subtitle" style={{ textAlign: "left", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>
            At Malee Hospitality, accessible from www.maleehospitality.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy document contains
            types of information that is collected and recorded by Malee Hospitality and how we
            use it.
          </p>

          <h3 style={{ color: "var(--text-heading)", fontSize: "20px", fontWeight: 700, marginTop: "10px" }}>
            Information We Collect
          </h3>
          <p>
            If you reach out to us directly through our Enquiry Forms, we may receive additional
            information about you such as your name, email address, phone number, the contents of
            the message and/or attachments you may send us, and any other travel specifications
            you choose to provide.
          </p>

          <h3 style={{ color: "var(--text-heading)", fontSize: "20px", fontWeight: 700, marginTop: "10px" }}>
            How We Use Your Information
          </h3>
          <p>
            We use the information we collect in various ways, including to provide, operate, and
            maintain our itineraries, improve and personalize your travel coordination paths, and
            communicate with you for customer support and visa guidance processing updates.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
