import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav, business } from "@/data/siteData";

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const closeOnOutsideClick = () => setDropdownOpen(false);
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [dropdownOpen]);

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="brand-identity">
            <Link href="/" className="logo-link">
              <img src={business.logo} alt={`${business.name} Corporate Logo`} className="brand-logo-img" />
            </Link>
          </div>

          <nav className="navigation-menu" aria-label="Main Navigation">
            {nav.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className={`nav-item dropdown${dropdownOpen ? " open" : ""}`}
                >
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle${isActive(item.href) ? " active" : ""}`}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setDropdownOpen((open) => !open);
                    }}
                  >
                    {item.label} <span className="arrow-indicator" aria-hidden="true">▼</span>
                  </a>
                  <div className="dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="nav-item" key={item.label}>
                  <Link
                    href={item.href}
                    className={`nav-link${item.isButton ? " contact-button" : ""}${isActive(item.href) ? " active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </nav>

          <button
            className={`menu-toggle${mobileOpen ? " is-active" : ""}`}
            aria-label="Open Navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${mobileOpen ? " is-open" : ""}`}>
        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={item.isButton ? "contact-btn" : isActive(item.href) ? "active" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`body-backdrop${mobileOpen ? " is-visible" : ""}`}
        onClick={() => setMobileOpen(false)}
      ></div>
    </>
  );
}
