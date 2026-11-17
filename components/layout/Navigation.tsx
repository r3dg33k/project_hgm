
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Beginning", id: "beginning" },
  { label: "Faith & Strength", id: "faith-and-strength" },
  { label: "Our Dreams", id: "anticipation" },
  { label: "The Miracle", id: "birth" },
  { label: "Motherhood", id: "motherhood" }
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beginning");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    navigationItems.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
      block: "start"
    });

    setMenuOpen(false);
  };

  return (
    <header className="story-navigation">
      <nav
        className="navigation-inner"
        aria-label="Story chapters"
      >
        <button
          type="button"
          className="navigation-brand"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            setMenuOpen(false);
          }}
        >
          <span className="navigation-brand-icon">♡</span>
          <span>Our Little Story</span>
        </button>

        <div className="navigation-links">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.id)}
              className={
                activeSection === item.id
                  ? "navigation-link active"
                  : "navigation-link"
              }
              aria-current={
                activeSection === item.id
                  ? "location"
                  : undefined
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="navigation-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="mobile-navigation"
          id="mobile-navigation"
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.id)}
              className={
                activeSection === item.id
                  ? "mobile-navigation-link active"
                  : "mobile-navigation-link"
              }
            >
              {item.label}
              <span aria-hidden="true">♡</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
