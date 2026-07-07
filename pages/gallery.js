import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const galleryFilterPills = [
  { label: "All Photos", tag: "all" },
  { label: "Thailand", tag: "thailand" },
  { label: "Singapore", tag: "singapore" },
  { label: "Malaysia", tag: "malaysia" },
  { label: "Other", tag: "other" },
];

const galleryItems = [
  {
    location: "thailand",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Wat-Pho-1.webp",
    alt: "Wat Pho Temple Thailand",
    caption: "Wat Pho Temple Tour 🌟",
  },
  {
    location: "thailand",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Grand-Palace-Visit.webp",
    alt: "Grand Palace Bangkok Thailand",
    caption: "The Grand Palace Experience 🏰",
  },
  {
    location: "thailand",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Bangkok-Temple-Visit-2.webp",
    alt: "Bangkok Temple Visit",
    caption: "Cultural Temple Journey 🙏",
  },
  {
    location: "thailand",
    image: "https://maleehospitality.asia/wp-content/uploads/2025/11/bangkok.webp",
    alt: "Bangkok City Landscape",
    caption: "Vibrant Bangkok Cityscape 🏙️",
  },
  {
    location: "singapore",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Night-Safari.webp",
    alt: "Singapore Night Safari",
    caption: "Singapore Night Safari Adventure 🌙",
  },
  {
    location: "singapore",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Singapore-Tour.webp",
    alt: "Singapore City Highlights Tour",
    caption: "Discover Singapore Highlights 🦁",
  },
  {
    location: "malaysia",
    image: "https://maleehospitality.asia/wp-content/uploads/2025/11/Batu-Caves.webp",
    alt: "Batu Caves Malaysia",
    caption: "Majestic Batu Caves 🪔",
  },
  {
    location: "malaysia",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/KL-Twin-towers-Tour.webp",
    alt: "Kuala Lumpur Twin Towers Tour",
    caption: "Petronas Twin Towers Tour 🏢",
  },
  {
    location: "malaysia",
    image: "https://maleehospitality.asia/wp-content/uploads/2025/11/KL-City-Tour.webp",
    alt: "KL City Tour",
    caption: "Kuala Lumpur City Excursion 🚗",
  },
  {
    location: "malaysia",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Malaysia-Tour.webp",
    alt: "Malaysia Travel Experience",
    caption: "Wonderful Malaysia Journey ✨",
  },
  {
    location: "malaysia",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/12/Kuala-Lumpur-Malaysia.png",
    alt: "Kuala Lumpur Skyline",
    caption: "Kuala Lumpur Horizons 🌅",
  },
  {
    location: "other",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    alt: "Exotic Tropical Resort Gateway",
    caption: "Hidden Island Getaways 🏝️",
  },
  {
    location: "other",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    alt: "Beautiful South East Asia Temple Landscape",
    caption: "Regional Heritage Tours ⛩️",
  },
  {
    location: "thailand",
    image:
      "https://maleehospitality.asia/wp-content/uploads/2025/11/Grand-Palace-Visit.webp",
    alt: "Grand Palace Visit Bangkok",
    caption: "Grand Palace Exploration 🏰",
  },
];

const INITIAL_VISIBLE_COUNT = 12;
const ITEMS_PER_BATCH = 4;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(
    () =>
      activeFilter === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.location === activeFilter),
    [activeFilter],
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleFilterClick = (tag) => {
    setActiveFilter(tag);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction) => {
    setLightboxIndex((current) => {
      if (current === null || visibleItems.length === 0) return current;
      let next = current + direction;
      if (next >= visibleItems.length) next = 0;
      if (next < 0) next = visibleItems.length - 1;
      return next;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeydown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };

    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const activeItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <>
      <Head>
        <title>Media Gallery | Malee Hospitality</title>
        <meta
          name="description"
          content="A visual glimpse into curated experiences across top Asian destinations."
        />
      </Head>

      <Header />

      <main className="main-wrapper">
        <section className="about-hero-banner smooth-reveal visible is-visible is-loaded">
          <div className="banner-content">
            <h1 className="banner-heading">Travel Stories</h1>
            <p className="banner-subheading">
              A visual glimpse into curated experiences across top Asian
              destinations.
            </p>
          </div>
        </section>

        <div className="gallery-page-wrapper">
          <section className="main-wrapper">
            <div className="gallery-filter-container">
              {galleryFilterPills.map((pill) => (
                <button
                  key={pill.tag}
                  className={`gallery-filter-btn${activeFilter === pill.tag ? " active" : ""}`}
                  data-tag={pill.tag}
                  onClick={() => handleFilterClick(pill.tag)}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <div
              id="galleryGrid"
              className="gallery-masonry-grid"
              style={{ marginTop: "30px" }}
            >
              {visibleItems.map((item, index) => (
                <div
                  className="gallery-item"
                  data-location={item.location}
                  key={item.image + index}
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.image} alt={item.alt} />
                  <div className="item-overlay">
                    <span>{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="gallery-action-wrapper">
                <button
                  className="btn-load-gallery"
                  onClick={() => setVisibleCount((c) => c + ITEMS_PER_BATCH)}
                >
                  Load More Experiences
                </button>
              </div>
            )}
          </section>
        </div>

        <div
          className={`gallery-lightbox${activeItem ? " active" : ""}`}
          aria-hidden={activeItem ? "false" : "true"}
          role="dialog"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <button
            className="lightbox-close"
            aria-label="Close Lightbox Modal"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            className="lightbox-arrow arrow-left"
            aria-label="Previous Image"
            onClick={() => navigateLightbox(-1)}
          >
            &#10094;
          </button>

          <div className="lightbox-content-frame">
            <img
              src={activeItem ? activeItem.image : ""}
              alt="Active Lightbox Target Image"
            />
            <div className="lightbox-caption">{activeItem ? activeItem.caption : ""}</div>
          </div>

          <button
            className="lightbox-arrow arrow-right"
            aria-label="Next Image"
            onClick={() => navigateLightbox(1)}
          >
            &#10095;
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
