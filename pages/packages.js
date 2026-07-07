import Head from "next/head";
import { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  packageDestinationTabs,
  packageFlyers,
  whatsappLink,
} from "@/data/packagesData";

const INITIAL_VISIBLE_COUNT = 6;
const ITEMS_PER_BATCH = 3;

function DestinationPanel({ target, flyers, isActive, onPreview }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const showLoadMore = visibleCount < flyers.length;

  return (
    <div
      className={`destination-panel${isActive ? " active" : ""}`}
      id={target}
    >
      <div className="flyers-display-grid">
        {flyers.slice(0, visibleCount).map((f, i) => (
          <div className="flyer-card-container" key={f.image + i}>
            <img src={f.image} alt="Package" className="b2b-flyer-img" />
            <div className="flyer-action-overlay">
              <div className={`flyer-badge ${f.badgeClass}`}>{f.badge}</div>
              <div className="flyer-buttons-group">
                <a
                  href={f.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-flyer preview-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onPreview(f.image);
                  }}
                >
                  🔍 View Full Image
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-flyer whatsapp-btn"
                >
                  💬 Book Package
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showLoadMore && (
        <div className="package-action-wrapper">
          <button
            className="btn-load-package"
            onClick={() => setVisibleCount((c) => c + ITEMS_PER_BATCH)}
          >
            Load More Experiences
          </button>
        </div>
      )}
    </div>
  );
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState("all-packages");
  const [previewImage, setPreviewImage] = useState(null);

  const closePreview = () => setPreviewImage(null);

  return (
    <>
      <Head>
        <title>Tour Packages | Malee Hospitality</title>
        <meta
          name="description"
          content="Select a destination tab below to filter our instant ready-to-book itineraries across Thailand, Singapore, Malaysia and combo packages."
        />
      </Head>

      <Header />

      <main className="main-wrapper">
        <section className="about-hero-banner smooth-reveal visible is-visible is-loaded">
          <div className="banner-content">
            <h1 className="banner-heading">Tour Packages</h1>
            <p className="banner-subheading">
              Select a destination tab below to filter our instant ready-to-book
              itineraries.
            </p>
          </div>
        </section>

        <section className="packages-page-container">
          <div className="destination-tabs-wrapper">
            <div className="destination-tabs-container">
              {packageDestinationTabs.map((tab) => (
                <button
                  key={tab.target}
                  type="button"
                  className={`dest-tab${activeTab === tab.target ? " active" : ""}`}
                  data-target={tab.target}
                  onClick={() => setActiveTab(tab.target)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="panels-grid-wrapper">
            {packageDestinationTabs.map((tab) => (
              <DestinationPanel
                key={tab.target}
                target={tab.target}
                flyers={packageFlyers[tab.target] || []}
                isActive={activeTab === tab.target}
                onPreview={setPreviewImage}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {previewImage && (
        <div
          className="gallery-lightbox active"
          aria-hidden="false"
          role="dialog"
          onClick={(e) => {
            if (e.target === e.currentTarget) closePreview();
          }}
        >
          <button
            className="lightbox-close"
            aria-label="Close Lightbox Modal"
            onClick={closePreview}
          >
            &times;
          </button>
          <div className="lightbox-content-frame">
            <img src={previewImage} alt="Full package flyer preview" />
          </div>
        </div>
      )}
    </>
  );
}
