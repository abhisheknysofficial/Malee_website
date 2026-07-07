import Link from "next/link";
import { homePackages } from "@/data/packagesData";

export default function PackagesGrid({ activeFilter }) {
  return (
    <section id="packages" className="section-container">
      <div className="section-header">
        <h2>Explore Asia&rsquo;s Most Loved Destinations</h2>
        <Link href="/packages" className="btn-view-all">
          View All
        </Link>
      </div>

      <div className="packages-grid">
        {homePackages.map((pkg) => {
          const visible = activeFilter === "all" || pkg.category === activeFilter;
          return (
            <div
              className={`package-card${visible ? "" : " hidden force-hide-element"}`}
              data-category={pkg.category}
              key={pkg.title}
              style={{ opacity: visible ? 1 : 0 }}
            >
              <div className="card-img-holder">
                <img src={pkg.image} alt={pkg.alt} />
              </div>
              <div className="card-body">
                <div className="meta-row">
                  <span className="badge-category">{pkg.badgeCategory}</span>
                </div>
                <h3>{pkg.title}</h3>
                <p className="itinerary-snippet">{pkg.description}</p>
                <div className="badge green-badge">{pkg.badge}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
