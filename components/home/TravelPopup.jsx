import { useEffect, useState } from "react";

export default function TravelPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 2800);
  };

  return (
    <div
      id="travel-popup-overlay"
      className={`travel-popup-overlay${visible ? " is-visible" : ""}`}
      onClick={(e) => {
        if (e.target.id === "travel-popup-overlay") close();
      }}
    >
      <div className="travel-popup-card">
        <button id="close-travel-popup" className="travel-popup-close-btn" aria-label="Close popup" onClick={close}>
          &times;
        </button>

        <div className="travel-popup-container">
          <div className="travel-popup-banner">
            <img
              src="https://ik.imagekit.io/abiiiio/Popup%20Image%201.png"
              alt="Malee Hospitality Malaysia Tour Package Banner"
            />
          </div>

          <div className="travel-popup-form-side">
            {submitted ? (
              <div style={{ textAlign: "center", margin: "auto", padding: "40px 0" }}>
                <div style={{ fontSize: "60px", color: "#e45d16", marginBottom: "15px" }}>✓</div>
                <h2 style={{ color: "#222", marginBottom: "10px", fontFamily: "Arial, sans-serif" }}>
                  Enquiry Received!
                </h2>
                <p style={{ color: "#555", fontSize: "14px", fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>
                  Thank you for reaching out to Malee Hospitality.
                  <br />
                  Our destination expert will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <header className="travel-popup-header">
                  <h3>Explore with Malee Hospitality</h3>
                  <h2>Book Your Dream Escape!</h2>
                  <p>Drop your details below and our travel experts will design your perfect itinerary.</p>
                </header>

                <form className="travel-popup-fields" onSubmit={handleSubmit}>
                  <div className="form-row full-width">
                    <div className="floating-input-group">
                      <input type="text" id="popup-firstname" required placeholder=" " />
                      <label htmlFor="popup-firstname">First Name *</label>
                    </div>
                  </div>

                  <div className="form-row split-width">
                    <div className="floating-input-group">
                      <input type="tel" id="popup-phone" required placeholder=" " />
                      <label htmlFor="popup-phone">Phone Number *</label>
                    </div>
                    <div className="floating-input-group">
                      <input type="text" id="popup-city" required placeholder=" " />
                      <label htmlFor="popup-city">City*</label>
                    </div>
                  </div>

                  <div className="form-row full-width">
                    <div className="floating-input-group">
                      <input type="email" id="popup-email" required placeholder=" " />
                      <label htmlFor="popup-email">Email *</label>
                    </div>
                  </div>

                  <button type="submit" className="travel-popup-submit-btn">
                    Submit Enquiry
                  </button>
                </form>

                <footer className="travel-popup-badges">
                  <span>Expert Curation</span>
                  <span className="divider">|</span>
                  <span>Best Price Guaranteed</span>
                  <span className="divider">|</span>
                  <span>24/7 On-Tour Support</span>
                </footer>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
