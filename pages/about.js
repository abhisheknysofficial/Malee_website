import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StatCounter from "@/components/shared/StatCounter";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Malee Hospitality</title>
        <meta
          name="description"
          content="Learn more about Malee Hospitality, your trusted travel partner in Asia."
        />
      </Head>

      <Header />

      <main className="main-wrapper">
        {/* HERO SECTION */}
        <section className="about-hero-banner">
          <div className="banner-content">
            <h1 className="banner-heading">Unveiling the Story About Us</h1>
            <p className="banner-subheading">
              Let us guide you through the pages of your own travel story, as we uncover hidden
              wonders, and create memories that will forever be etched in the tapestry of your
              life.
            </p>
          </div>
        </section>

        {/* INTRODUCTION SECTION */}
        <section className="section-container">
          <div className="about-grid">
            <div className="about-img-holder">
              <img
                src="/images/Langkawi Website images  - 1920X1080.png"
                alt="Malee Hospitality"
              />
            </div>
            <div className="about-content">
              <h4 className="section-kicker">Know About Us</h4>
              <h2>United By Excellence.</h2>
              <p>
                We are pleased to introduce Malee Hospitality Co. (TAT-11/10263 &amp; STB-03121),
                a leading Destination Management Company specializing in Thailand, Singapore, and
                Malaysia. With registered offices in India, Thailand, Singapore, and Malaysia, we
                are committed to delivering exceptional travel solutions and the best value to our
                partners and clients. Our expertise lies in creating customized tour packages,
                ensuring seamless travel experiences tailored to every requirement.
              </p>
              <p>
                Hotel bookings, packages, transfers, tickets, sightseeing, destination weddings,
                visas, and insurance are all part of our services. Malee Hospitality Co. is your
                one-stop travel partner, offering comprehensive travel solutions backed by expert
                knowledge, efficient planning, and seamless execution to ensure a hassle-free
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="section-container">
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver unparalleled travel experiences by combining localized expertise with
                global standards of service, ensuring every journey is seamless, enriching, and
                flawlessly executed.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and innovative Destination Management Company in Asia,
                setting new benchmarks for corporate and leisure travel through sustainability,
                technology, and deep human empathy.
              </p>
            </div>
          </div>
        </section>

        {/* OUR DIVISIONS SECTION */}
        <section className="section-container bg-muted">
          <div className="section-header center-align">
            <h2>Our Divisions</h2>
            <p className="center-subtitle">Specialized departments for tailored travel experiences</p>
          </div>
          <div className="why-grid divisions-grid">
            <div className="why-card minimal-card">
              <div className="why-icon">🌏</div>
              <h3>Tours &amp; Leisure</h3>
              <p>
                Customized international holiday packages, sightseeing experiences, and guided
                destination tours.
              </p>
            </div>
            <div className="why-card minimal-card">
              <div className="why-icon">💼</div>
              <h3>Corporate &amp; MICE</h3>
              <p>
                End-to-end management for corporate groups, incentive trips, meetings, and global
                exhibitions.
              </p>
            </div>
            <div className="why-card minimal-card">
              <div className="why-icon">✨</div>
              <h3>Destination Weddings</h3>
              <p>
                Complete logistical support, hotel takeovers, and ground handling for seamless
                destination weddings.
              </p>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="section-container">
          <div className="about-grid reverse-layout">
            <div className="about-content">
              <h4 className="section-kicker">OUR ETHOS</h4>
              <h2>Company Philosophy</h2>
              <p>
                Our philosophy is rooted in a deep commitment to service excellence and
                transparency. We believe that modern travel management requires a perfect blend of
                local expertise, digital innovation, and human empathy.
              </p>
              <p>
                We do not just sell itineraries; we craft holistic travel environments. From the
                moment you begin planning to your safe return, our standard is nothing short of
                perfection.
              </p>
            </div>
            <div className="about-img-holder">
              <img
                src="https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Travel Experience"
              />
            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="section-container bg-muted">
          <div className="section-header center-align">
            <h2>Our Core Values</h2>
            <p className="center-subtitle">The principles that guide every itinerary we craft</p>
          </div>
          <div className="values-grid">
            <div className="value-box">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>
                Transparency in pricing and absolute honesty in all our partner and client
                relationships.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>
                Going beyond the expected to deliver premium, uncompromising quality in every
                service.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">📍</div>
              <h4>Local Expertise</h4>
              <p>
                Deep-rooted local knowledge ensuring authentic and immersive destination
                experiences.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">🛡️</div>
              <h4>Reliability</h4>
              <p>
                24/7 on-ground support and bulletproof logistics so you can travel with total
                peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* STATS BANNER WITH COUNTERS */}
        <section id="stats-section" className="stats-banner-section">
          <div className="stats-container">
            <h2>Celebrating Unforgettable Experiences Since 2020!</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">
                  <StatCounter target={10} />+
                </span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <StatCounter target={300} />+
                </span>
                <span className="stat-label">Corporate Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <StatCounter target={10} />K+
                </span>
                <span className="stat-label">Happy Travelers</span>
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION, CLIENTS & PARTNERS */}
        <section className="section-container">
          <div className="network-container">
            <div className="section-header center-align">
              <h2>Recognition and Network</h2>
              <p className="center-subtitle">
                Trusted by leading enterprises and hospitality brands
              </p>
            </div>

            <div className="clients-partners-wrapper">
              <div className="network-column">
                <h3 className="network-title">Some of Our Clients</h3>
                <ul className="minimal-list-grid">
                  <li>Tata Motors</li>
                  <li>HDFC Bank</li>
                  <li>L&amp;T Finance</li>
                  <li>Reliance</li>
                  <li>Aditya Birla Group</li>
                  <li>SBI Life</li>
                  <li>Mahindra</li>
                  <li>Kotak</li>
                </ul>
              </div>
              <div className="network-column">
                <h3 className="network-title">Preferred Partners</h3>
                <ul className="minimal-list-grid">
                  <li>Marriott International</li>
                  <li>Centara Hotels &amp; Resorts</li>
                  <li>Sofitel Hotels &amp; Resorts</li>
                  <li>Dusit Thani Hotels &amp; Resorts</li>
                  <li>Amari Hotels &amp; Resorts</li>
                  <li>Accor Hotels</li>
                  <li>Crowne Plaza Kuala Lumpur</li>
                  <li>Resorts World Genting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MESSAGE FROM LEADERSHIP */}
        <section className="section-container">
          <div className="founder-grid">
            <div className="founder-img">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                alt="Leadership Note"
              />
            </div>
            <div className="founder-content">
              <h4 className="section-kicker">A NOTE FROM LEADERSHIP</h4>
              <blockquote className="founder-quote">
                &ldquo;When we started Malee Hospitality, our goal wasn&apos;t just to book
                flights and hotels. We wanted to engineer joy. Today, whether we are moving a
                500-person corporate delegation across Malaysia or curating a private honeymoon in
                Singapore, that core mission remains unchanged: to handle the complex logistics so
                our clients can focus entirely on creating memories.&rdquo;
              </blockquote>
              <div className="founder-signature">
                <h5>The Executive Board</h5>
                <p>Malee Hospitality DMC</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
