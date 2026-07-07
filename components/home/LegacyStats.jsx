import StatCounter from "@/components/shared/StatCounter";
import { legacyStats } from "@/data/siteData";

const icons = {
  guests: (
    <path d="M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-7 6v-1a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </>
  ),
  briefcase: (
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  ),
  pin: (
    <>
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <line x1="4" y1="22" x2="4" y2="15"></line>
    </>
  ),
};

export default function LegacyStats() {
  return (
    <main className="main-wrapper">
      <section id="legacy-adventure-section" className="mh-main-section scroll-reveal">
        <div className="mh-legacy-header">
          <h2>Our Legacy of Unforgettable Journeys</h2>
          <p className="mh-subtitle">Trusted by thousands, crafting memories for a lifetime.</p>

          <div className="mh-stats-grid">
            {legacyStats.map((stat) => (
              <div className="mh-stat-item" key={stat.label}>
                <div className="mh-stat-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none">
                    {icons[stat.icon]}
                  </svg>
                </div>
                <StatCounter target={stat.target} formatted />
                <span className="mh-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
