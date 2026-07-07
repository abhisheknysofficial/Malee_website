import { useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Cards ported verbatim (image + title) from the original destination.html
// grid. The first 12 are always visible; the last 4 are revealed by the
// "View More" toggle (mirrors the .hidden-card / #viewMoreBtn logic in the
// original js/app.js, lines ~854-881).
const visibleCards = [
  {
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=400",
    alt: "Gardens By The Bay, Singapore",
    title: "Singapore",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400",
    alt: "Phi Phi Islands, Thailand",
    title: "Phi Phi Islands, Thailand",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Kuala%20Lumpur.png",
    alt: "Petronas Twin Towers, Malaysia",
    title: "Kuala Lumpur, Malaysia",
  },
  {
    image:
      "https://ik.imagekit.io/abiiiio/Hua%20Hin%20Thailand.png?updatedAt=1780999100889",
    alt: "Thailand",
    title: "Hua hin, Thailand",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Genting%20Highlland.png",
    alt: "Malaysia",
    title: "Genting Highland, Malaysia",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Sentosa%20Island.png",
    alt: "Sentosa Island, Singapore",
    title: "Sentosa Island, Singapore",
  },
  {
    image:
      "https://ik.imagekit.io/abiiiio/Phuket.png?updatedAt=1781088916708",
    alt: "Phuket, Thailand",
    title: "Phuket, Thailand",
  },
  {
    image:
      "https://ik.imagekit.io/abiiiio/Langkawi%20Website%20images%20%20-%201920X1080.png?updatedAt=1780999098387",
    alt: "Langkawi, Malaysia",
    title: "Langkawi, Malaysia",
  },
];

const hiddenCardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=400",
    alt: "Krabi, Thailand",
    title: "Krabi, Thailand",
  },
  {
    image:
      "https://ik.imagekit.io/abiiiio/Untitled%20-%20June%2005,%202026%20at%2011.24.53-1%20(7).png",
    alt: "Mount Kinabalu, Malaysia",
    title: "Mount Kinabalu, Malaysia",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Bangkok.png",
    alt: "Thailand",
    title: "Bangkok, Thailand",
  },
  {
    image:
      "https://ik.imagekit.io/abiiiio/Chiang%20Mai.png?updatedAt=1781075698072",
    alt: "Chiang Mai, Thailand",
    title: "Chiang Mai, Thailand",
  },
];

function DestinationCard({ card, hidden }) {
  return (
    <div className={`destination-card${hidden ? " hidden-card" : ""}`}>
      <img src={card.image} alt={card.alt} />
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Head>
        <title>Explore Our Destinations | Malee Hospitality</title>
        <meta
          name="description"
          content="Browse every destination Malee Hospitality serves across Thailand, Singapore, and Malaysia, from island getaways to cultural capitals."
        />
      </Head>

      <Header />

      <section className="destinations-section">
        <div className="destinations-container">
          <div className="destinations-grid" id="destinationsGrid">
            {visibleCards.map((card) => (
              <DestinationCard card={card} key={card.title} />
            ))}
            {hiddenCardsData.map((card) => (
              <DestinationCard card={card} hidden={!isExpanded} key={card.title} />
            ))}
          </div>

          <div className="view-more-container">
            <button
              id="viewMoreBtn"
              className="view-more-btn"
              type="button"
              onClick={() => setIsExpanded((expanded) => !expanded)}
            >
              <span>{isExpanded ? "View less" : "View more"}</span>
              <svg
                id="viewMoreIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.3s ease",
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
