import { useEffect, useRef, useState } from "react";
import { heroSlides, filterPills } from "@/data/packagesData";

const INTERVAL_MS = 6500;

export default function HeroSlider({ activeFilter, onFilterChange }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetInterval = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
    }, INTERVAL_MS);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    resetInterval();
  };

  const next = () => goTo(current === heroSlides.length - 1 ? 0 : current + 1);
  const prev = () => goTo(current === 0 ? heroSlides.length - 1 : current - 1);

  return (
    <section className="hero-slider-section">
      <div className="slider-container">
        {heroSlides.map((slide, index) => (
          <div className={`slide${index === current ? " active" : ""}`} key={slide.title}>
            <div className="slide-image-wrapper">
              <img src={slide.image} alt={slide.alt} />
            </div>
            <div className="hero-content-wrapper">
              <div className="hero-tagline">{slide.tagline}</div>
              <h1 className="main-title">{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <a href="#packages" className="btn-minimal">
                  Explore Packages
                </a>
              </div>
            </div>
          </div>
        ))}

        <button className="slider-arrow prev-arrow" aria-label="Previous Slide" onClick={prev}>
          ‹
        </button>
        <button className="slider-arrow next-arrow" aria-label="Next Slide" onClick={next}>
          ›
        </button>

        <div className="slider-dots-container">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              className={`dot${index === current ? " active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="filter-pills-wrapper">
        <div className="filter-pills-container">
          {filterPills.map((pill) => (
            <button
              key={pill.filter}
              className={`pill${activeFilter === pill.filter ? " active" : ""}`}
              data-filter={pill.filter}
              onClick={() => {
                onFilterChange(pill.filter);
                document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
