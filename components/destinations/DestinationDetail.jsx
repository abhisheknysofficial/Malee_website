import { useState } from "react";

// NOTE: the 3 destination detail pages (Thailand/Singapore/Malaysia) use an
// editorial Lora/Open Sans font pairing in the original static site
// (loaded via a Google Fonts <link>), distinct from the Inter font used
// across the rest of the site. The existing globals.css already hardcodes
// font-family: "Lora" / "Open Sans" on the relevant selectors (.hero p,
// .tab-btn), so each page (thailand.js / singapore.js / malaysia.js) loads
// the actual Lora + Open Sans webfont via a next/head <link>, matching the
// original <link href="https://fonts.googleapis.com/css2?family=Lora...">.

export default function DestinationDetail({ destination }) {
  const [activeTab, setActiveTab] = useState(destination.tabs[0]?.id);

  return (
    <div className="destination-detail-page">
      {/* Hero Section */}
      <section className={`hero ${destination.heroClass}`}>
        <h1>{destination.heroHeading}</h1>
        <p>&ldquo;{destination.heroQuote}&rdquo;</p>
        <a href="#about" className="scroll-down">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </section>

      <main className="main-wrapper">
        {/* About Section */}
        <section id="about" className="container">
          <div className="section-header">
            <h2>{destination.aboutHeading}</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              {destination.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="about-image">
              <img src={destination.aboutImage.src} alt={destination.aboutImage.alt} />
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="why-section">
          <div className="container">
            <div className="section-header">
              <h2>{destination.whyHeading}</h2>
              <div className="divider"></div>
            </div>
            <div className="features-grid">
              {destination.whyVisit.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <i className={feature.icon}></i>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What To Do Section (Interactive Tabs) */}
        <section className="container">
          <div className="section-header">
            <h2>{destination.whatToDoHeading}</h2>
            <div className="divider"></div>
          </div>

          <div className="tabs-container">
            {destination.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-btn gallery-filter-btn${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {destination.tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`tab-content${activeTab === tab.id ? " active" : ""}`}
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              <div className="activity-grid">
                {tab.activities.map((activity) => (
                  <div className="activity-card" key={activity.title}>
                    <img src={activity.image} alt={activity.title} />
                    <div className="activity-info">
                      <h4>{activity.title}</h4>
                      <p>{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
