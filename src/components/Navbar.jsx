import React, { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Let's talk", id: "letstalk" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.4;
      let current = links[0].id;

      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        if (section.getBoundingClientRect().top <= marker) {
          current = link.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    setActiveSection(id);

    const target = document.getElementById(id);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
        >
          Portfolio
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.id);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
