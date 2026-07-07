import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { business } from "@/data/siteData";

const EMAILJS_SERVICE_ID = "service_lfn3pid";
const EMAILJS_TEMPLATE_ID = "template_dvo7dzp";
const EMAILJS_PUBLIC_KEY = "dv48oFXMnICc_HhMk";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  passengers: "",
  destination: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = true;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      nextErrors.email = true;
    }
    if (!formData.phone.trim()) nextErrors.phone = true;
    if (!formData.passengers.trim()) nextErrors.passengers = true;
    if (!formData.destination.trim()) nextErrors.destination = true;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      alert("Please fill out all highlighted fields correctly.");
      return;
    }

    if (typeof window === "undefined" || typeof window.emailjs === "undefined") {
      alert("Email transmission engine unavailable.");
      return;
    }

    setIsSending(true);
    window.emailjs.init(EMAILJS_PUBLIC_KEY);

    window.emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target)
      .then(() => {
        alert("Enquiry sent successfully!");
        setFormData(initialFormState);
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send enquiry.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const borderStyle = (field) =>
    errors[field] ? { borderColor: "#E53E3E" } : undefined;

  return (
    <>
      <Head>
        <title>Contact & Enquiries | Malee Hospitality</title>
        <meta
          name="description"
          content="Get in touch with Malee Hospitality for customized Asia holiday packages, visa documentation assistance, hotel bookings, and travel solutions."
        />
      </Head>

      <Header />

      <div className="contact-page-wrapper">
        <section className="contact-hero-banner">
          <div className="banner-content">
            <h1 className="banner-heading">Get in Touch</h1>
            <p className="banner-subheading">
              Let&apos;s build your perfect Asian getaway itinerary together with our destination
              management experts.
            </p>
          </div>
        </section>

        <section className="main-wrapper" style={{ marginBottom: "60px" }}>
          <div className="info-cards-grid">
            <div className="info-card-block">
              <div className="why-icon">📍</div>
              <h3>Our Headquarters</h3>
              <p>{business.officeAddress}</p>
            </div>

            <div className="info-card-block">
              <div className="why-icon">📞</div>
              <h3>Call Us</h3>
              <p style={{ marginBottom: "4px" }}>Thailand: {business.phones.thailand}</p>
              <p>India: {business.phones.india}</p>
            </div>

            <div className="info-card-block">
              <div className="why-icon">✉</div>
              <h3>Email Us</h3>
              <p style={{ marginBottom: "4px" }}>{business.emails[0]}</p>
              <p>{business.emails[1]}</p>
            </div>
          </div>

          <div className="form-split-layout-grid">
            <div className="form-container-panel">
              <h2>
                Plan Your <span className="accent-text">Dream Trip</span>
              </h2>
              <p style={{ marginBottom: "24px" }}>
                Fill out the specifications below and our team will coordinate your custom tour
                layout.
              </p>

              <form id="enquiryForm" onSubmit={handleSubmit}>
                <div className="form-row-block">
                  <div className="input-block">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={borderStyle("name")}
                    />
                  </div>
                  <div className="input-block">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={borderStyle("email")}
                    />
                  </div>
                </div>
                <div className="form-row-block">
                  <div className="input-block">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 80776 05404"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      style={borderStyle("phone")}
                    />
                  </div>
                  <div className="input-block">
                    <label>No. of Passengers</label>
                    <input
                      type="number"
                      name="passengers"
                      placeholder="e.g. 2"
                      required
                      value={formData.passengers}
                      onChange={handleChange}
                      style={borderStyle("passengers")}
                    />
                  </div>
                </div>
                <div className="input-block" style={{ marginBottom: "24px" }}>
                  <label>Destination</label>
                  <select
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    style={borderStyle("destination")}
                  >
                    <option value="">Select Destination</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Bali">Bali</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Vietnam">Vietnam</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit-enquiry" disabled={isSending}>
                  {isSending ? "Sending..." : <>Send Enquiry <span>🚀</span></>}
                </button>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    color: "var(--text-light)",
                    marginTop: "15px",
                  }}
                >
                  🔒 Your information is absolutely secure with us.
                </p>
              </form>
            </div>

            <div className="map-embed-panel">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5246757132924!2d100.5668383!3d13.7532394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8be0617303%3A0x89ee1c07f45c26b6!2sChamnan%20Phenjati%20Business%20Center!5e0!3m2!1sen!2sth!4v1716120000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
