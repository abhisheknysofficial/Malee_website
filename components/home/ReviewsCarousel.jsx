import { useEffect, useRef, useState } from "react";
import { reviews } from "@/data/siteData";
import { business } from "@/data/siteData";

const SLIDE_DURATION = 2200;

function getCardsInView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const getMaxIndex = () => reviews.length - getCardsInView();

  const updatePosition = (nextIndex) => {
    const cards = trackRef.current?.querySelectorAll(".mh-review-card");
    if (!cards || !cards.length) return;
    const maxIndex = getMaxIndex();
    let clamped = nextIndex;
    if (clamped > maxIndex) clamped = maxIndex;
    if (clamped < 0) clamped = 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    setOffset(clamped * (cardWidth + gap));
    setIndex(clamped);
  };

  const slideNext = () => {
    const maxIndex = getMaxIndex();
    setIndex((current) => {
      const next = current < maxIndex ? current + 1 : 0;
      updatePosition(next);
      return next;
    });
  };

  const slidePrev = () => {
    setIndex((current) => {
      const maxIndex = getMaxIndex();
      const prev = current > 0 ? current - 1 : maxIndex;
      updatePosition(prev);
      return prev;
    });
  };

  const startAutoPlay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, SLIDE_DURATION);
  };

  const stopAutoPlay = () => clearInterval(timerRef.current);

  useEffect(() => {
    startAutoPlay();
    const onResize = () => updatePosition(index);
    window.addEventListener("resize", onResize);
    return () => {
      stopAutoPlay();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="color-wrapper" id="bg-white">
      <section
        id="google-reviews-section"
        className="mh-reviews-section scroll-reveal visible is-visible is-loaded"
        ref={sectionRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="mh-reviews-header">
          <div className="mh-rating-badge">
            <div className="mh-google-logo-text">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-solid-green">l</span>
              <span className="g-red">e</span>
              <span className="reviews-txt">Reviews</span>
            </div>
            <div className="mh-rating-stars-row">
              <span className="rating-num">4.7</span>
              <div className="stars-gold">★★★★★</div>
              <span className="rating-count">(130)</span>
            </div>
          </div>

          <h2 className="mh-section-title">What Travellers Say About Us?</h2>

          <div className="mh-header-controls-wrapper">
            <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="mh-google-btn">
              Review us on Google
            </a>

            <div className="mh-arrow-container">
              <button
                className="mh-slider-arrow prev-arrow"
                aria-label="Previous review"
                onClick={() => {
                  stopAutoPlay();
                  slidePrev();
                  startAutoPlay();
                }}
              >
                ‹
              </button>
              <button
                className="mh-slider-arrow next-arrow"
                aria-label="Next review"
                onClick={() => {
                  stopAutoPlay();
                  slideNext();
                  startAutoPlay();
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mh-slider-viewport">
          <div
            id="reviews-track"
            className="mh-reviews-track"
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {reviews.map((review) => (
              <div className="mh-review-card" key={review.name}>
                <div className="mh-card-header">
                  <div className={`mh-user-avatar ${review.avatarClass}`}>
                    {review.initial}
                    <div className="mini-g-badge">G</div>
                  </div>
                  <div className="mh-user-info">
                    <h4>
                      {review.name}
                      <span className="verified-check">✔</span>
                    </h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="card-stars">★★★★★</div>
                <p className="review-text">{review.text}</p>
                <button className="read-more-btn" onClick={() => window.open(review.link, "_blank")}>
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
