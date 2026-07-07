const cards = [
  {
    icon: "fa-plane-departure",
    title: "Customized Holiday Packages",
    text: "Tailor-made itineraries designed to match your budget, interests, and travel style.",
  },
  {
    icon: "fa-globe",
    title: "Destination Experts",
    text: "Local expertise across Thailand, Singapore, Malaysia, and other top Asian destinations.",
  },
  {
    icon: "fa-handshake-angle",
    title: "Trusted Travel Support",
    text: "From visa guidance to airport transfers, our team supports you throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="color-wrapper" id="bg-white">
      <main className="main-wrapper">
        <section className="why-section">
          <h2 className="center-title">Travel Made Easy, Affordable &amp; Memorable</h2>
          <p className="center-subtitle">Why global travelers trust our services</p>

          <div className="why-grid">
            {cards.map((card) => (
              <div className="why-card" key={card.title}>
                <div className="why-icon" aria-hidden="true">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
