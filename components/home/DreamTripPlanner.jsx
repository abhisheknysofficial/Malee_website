import { useState } from "react";

export default function DreamTripPlanner() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const close = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 3000);
  };

  return (
    <>
      <button
        id="floating-dream-btn"
        className="floating-dream-btn"
        style={{ visibility: open ? "hidden" : "visible" }}
        onClick={() => setOpen(true)}
      >
        <span className="btn-text">Plan Your Dream Trip</span>
      </button>

      <div className="popup-main">
        <div
          id="dream-trip-popup-overlay"
          className={`dream-modal-overlay${open ? " is-active" : ""}`}
          onClick={(e) => {
            if (e.target.id === "dream-trip-popup-overlay") close();
          }}
        >
          <div className="dream-modal-card">
            <button id="close-dream-modal" className="dream-modal-close-x" aria-label="Close modal" onClick={close}>
              &times;
            </button>

            <div className="dream-modal-wrapper">
              <div className="dream-modal-image-side">
                <img src="https://ik.imagekit.io/abiiiio/Popup%20Image%202.png" alt="Plan Your Dream Trip Destination" />
              </div>

              <div className="dream-modal-form-side">
                {submitted ? (
                  <div style={{ textAlign: "center", margin: "auto", padding: "60px 0" }}>
                    <div style={{ fontSize: "64px", color: "#e45d16", marginBottom: "20px" }}>✓</div>
                    <h2 style={{ color: "#0b1a4a", marginBottom: "12px", fontFamily: "Arial, sans-serif" }}>
                      Plan Registered!
                    </h2>
                    <p style={{ color: "#475569", fontSize: "14px", fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
                      Thank you for sharing your destination outline.
                      <br />
                      Our holiday specialists will contact you with options shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2>Plan Your Dream Trip</h2>

                    <form className="dream-form-grid" onSubmit={handleSubmit}>
                      <div className="dream-form-row">
                        <input type="text" placeholder="Full Name*" required />
                        <input type="email" placeholder="Email Address*" required />
                      </div>

                      <div className="dream-form-row">
                        <input type="text" placeholder="Enter Country *" required />
                        <div className="mock-phone-input-group">
                          <span className="mock-flag">🇮🇳</span>
                          <span className="mock-prefix">+91</span>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            style={{ border: "none", padding: 0, marginLeft: "8px", width: "100%" }}
                          />
                        </div>
                      </div>

                      <div className="dream-form-row">
                        <input type="text" placeholder="City or State*" />
                        <input type="text" placeholder="Budget per Person (e.g. 12,000)" />
                      </div>

                      <div className="dream-form-row">
                        <input type="number" placeholder="No. of Travellers*" min="1" required />
                        <input type="text" placeholder="Preferred Travel Month & Year * Example: Jul 2026" required />
                      </div>

                      <div className="dream-form-row">
                        <input type="text" placeholder="Arrival City*" />
                        <input type="text" placeholder="Departure City*" />
                      </div>

                      <div className="dream-form-full">
                        <textarea placeholder="Describe your travel requirement*" rows="3" required></textarea>
                      </div>

                      <div className="dream-recaptcha-mock">
                        <div className="recaptcha-left">
                          <input type="checkbox" id="mock-captcha-checkbox" required />
                          <label htmlFor="mock-captcha-checkbox">I&rsquo;m not a robot</label>
                        </div>
                        <div className="recaptcha-right">
                          <div className="captcha-icon">&#8635;</div>
                          <span>reCAPTCHA</span>
                        </div>
                      </div>

                      <button type="submit" className="dream-submit-btn">
                        <span>Submit</span>
                        <span className="arrow-symbol">&rarr;</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
